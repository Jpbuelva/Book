
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListBookComponent } from './components/list-book/list-book.component';
import { FormsComponent } from './components/forms/forms.component';


const routes: Routes = [
  {  path:'',component: ListBookComponent },  
  {  path:'List',component: ListBookComponent },
  {  path:'Forms',component: FormsComponent },
  {  path:'edit/:id',component: FormsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'List'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
