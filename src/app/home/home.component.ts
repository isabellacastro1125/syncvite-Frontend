import { Component, OnInit } from '@angular/core';
import { GoogleAuthService } from '../services/google-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  googleOAuthUrl =
    'https://accounts.google.com/o/oauth2/v2/auth?' +
    'client_id=1064503684322-91bk41qv8p00bi5l3v0muci308dl7jd0.apps.googleusercontent.com&' +
    'redirect_uri=http://localhost:4200/assets/close.html&' + // Redirect to close.html
    'response_type=code&' +
    'scope=openid email profile';

  private authPopup: Window | null = null;
  isPopupOpen = false; // Track if the popup is open

  constructor(private googleAuthService: GoogleAuthService) {}

  ngOnInit(): void {
    // Listen for messages from the popup
    window.addEventListener('message', this.messageHandler.bind(this));
  }

  triggerGoogleOAuth(): void {
    const width = 500;
    const height = 600;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;

    // Open the Google OAuth popup
    this.authPopup = window.open(
      this.googleOAuthUrl,
      'GoogleOAuth',
      `width=${width},height=${height},top=${top},left=${left},resizable=yes`
    );

    // Set popup open state
    if (this.authPopup) {
      this.isPopupOpen = true;
    }
  }

  ngOnDestroy(): void {
    window.removeEventListener('message', this.messageHandler.bind(this));
  }
  
  private messageHandler(event: MessageEvent): void {
    if (event.origin === window.location.origin && event.data.code) {
      const code = event.data.code;

      // Send the code to the backend for authentication
      this.googleAuthService.authenticateGoogleToken(code).subscribe({
        next: (response) => {
          console.log('Authentication successful:', response);
          this.googleAuthService.setToken(response.jwt); // Store JWT
          this.isPopupOpen = false; // Reset popup state
        },
        error: (error) => {
          console.error('Authentication failed:', error);
          this.isPopupOpen = false; // Reset popup state
        },
      });
    }
  }
}
