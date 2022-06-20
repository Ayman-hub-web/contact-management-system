import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ContactManagerComponent } from './components/contact-manager/contact-manager.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { ViewContactComponent } from './components/view-contact/view-contact.component';

const routes: Routes = [
  {path:'', component:ContactManagerComponent},
  {path: 'contacts/add', component: AddContactComponent},
  {path: 'contacts/view/:id', component: ViewContactComponent},
  {path: 'contacts/edit/:id', component: EditContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
