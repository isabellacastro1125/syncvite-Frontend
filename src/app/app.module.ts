import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; // Adjust the path as needed
import { AppRoutingModule } from './app-routing.module'; // Import your routing module


// Ng-Zorro modules
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule, // Include the routing module
    NzCarouselModule, // Import the carousel module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
