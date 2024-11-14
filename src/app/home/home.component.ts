import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  googleOAuthUrl =
    'https://accounts.google.com/o/oauth2/v2/auth?' +
    'client_id=1064503684322-91bk41qv8p00bi5l3v0muci308dl7jd0.apps.googleusercontent.com&' +
    'redirect_uri=http://localhost:4200/&' +
    'response_type=code&' +
    'scope=openid email profile';

  carouselItems = [
    { image: 'assets/1.jpg', description: 'Plan your next party with ease.' },
    { image: 'assets/2.jpg', description: 'Invite friends and track RSVPs.' },
    { image: 'assets/3.jpg', description: 'Let everyone know what to bring!' },
  ];

  // Open Google OAuth pop-up
  triggerGoogleOAuth(): void {
    const width = 500;
    const height = 600;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;

    // Open the Google OAuth in a separate window
    window.open(
      this.googleOAuthUrl,
      'GoogleOAuth',
      `width=${width},height=${height},top=${top},left=${left},resizable=yes`
    );
  }
}
