import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Party } from '../models/party.model';
import { GoogleAuthService } from './google-auth.service';

@Injectable({
  providedIn: 'root',
})
export class PartyService {
  private baseUrl = 'http://localhost:8080/api/admin/parties';

  constructor(private http: HttpClient, private authService: GoogleAuthService) {}

  // Helper method to create headers with the Authorization token
  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    if (!token) {
      throw new Error('User is not authenticated'); // Handle missing token scenario
    }
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  getParty(id: number): Observable<Party> {
    const headers = this.getAuthHeaders();
    return this.http.get<Party>(`${this.baseUrl}/find/${id}`, { headers });
  }

  getParties(): Observable<Party[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<Party[]>(this.baseUrl, { headers });
  }

  createParty(party: any): Observable<Party> {
    const headers = this.getAuthHeaders();
    return this.http.post<Party>(`${this.baseUrl}/add`, party, { headers });
  }

  updateParty(party: Party): Observable<Party> {
    const headers = this.getAuthHeaders();
    return this.http.put<Party>(`${this.baseUrl}/edit/${party.id}`, party, { headers });
  }

  deleteParty(id: number): Observable<string> {
    const headers = this.getAuthHeaders();
    return this.http.delete<string>(`${this.baseUrl}/delete/${id}`, { headers });
  }
}
