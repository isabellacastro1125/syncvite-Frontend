import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AvatarModule } from 'primeng/avatar';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; // Adjust the path as needed
import { AppRoutingModule } from './app-routing.module'; // Import your routing module
import { PartyDetailComponent } from './components/party-detail/party-detail.component';
import { CreatePartyComponent } from './components/create-party/create-party.component';
import { EditPartyComponent } from './components/edit-party/edit-party.component';
/* Angular Material Modules */
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'; 




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PartyDetailComponent,
    CreatePartyComponent,
    EditPartyComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule, // Include the routing module
    AvatarModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatStepperModule, // Material Stepper
    MatButtonModule, // Buttons for stepper navigation
    MatInputModule, // Material inputs
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
