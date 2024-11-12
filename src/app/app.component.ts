import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // This is the root selector for your app
  templateUrl: './app.component.html', // Links to the HTML template
  styleUrls: ['./app.component.css'] // Links to the CSS file for styling
})
export class AppComponent {
  // You can add logic or data properties here for use in your template
  title = 'Syncvite'; // Example property for dynamic content

  // Example method (if needed for future interactivity)
  getCurrentYear(): number {
    return new Date().getFullYear();
  }
}
