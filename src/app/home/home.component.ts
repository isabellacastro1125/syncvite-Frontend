import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  carouselItems = [
    { image: 'assets/1.jpg', description: 'Plan your next party with ease.' },
    { image: 'assets/2.jpg', description: 'Invite friends and track RSVPs.' },
    { image: 'assets/3.jpg', description: 'Let everyone know what to bring!' },

  ];
}
