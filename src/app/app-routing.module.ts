import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client/client.component';
import { ConseilsComponent } from './conseils/conseils.component';



// header.component.ts

const routes: Routes = [
  { path: '', redirectTo: '/home',pathMatch: 'full'},

  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: 'client', component: ClientComponent },
  { path: 'conseil', component: ConseilsComponent },


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
