import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GoogleAuthService {
  private apiUrl = 'http://localhost:8080/api/auth/google'; // Backend URL
  private tokenKey = 'auth_token'; // LocalStorage key for JWT

  constructor(private http: HttpClient) {}

  // Send Google auth token to the backend
  authenticateGoogleToken(token: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { token });
  }

    // Store JWT token
  setToken(token: string): void {
      localStorage.setItem(this.tokenKey, token);
  }

 // Get JWT token
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Remove JWT token on logout
  clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  // Check if user is logged in
  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
