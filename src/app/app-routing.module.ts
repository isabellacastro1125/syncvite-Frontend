import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartyDetailComponent } from './components/party-detail/party-detail.component';
import { CreatePartyComponent } from './components/create-party/create-party.component';
import { EditPartyComponent } from './components/edit-party/edit-party.component';
import{ HomeComponent } from './home/home.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'party/:id', component: PartyDetailComponent },
  { path: 'create-party', component: CreatePartyComponent},
  { path: 'edit-party/:id', component: EditPartyComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}