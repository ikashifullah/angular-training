import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { AddBookComponent } from './add-book/add-book.component';


const routes: Routes = [
  { path: 'listings', component: BlogsComponent },
  { path: 'add-new', component: AddBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
