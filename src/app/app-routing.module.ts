import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { AddBookComponent } from './add-book/add-book.component';
import { NewsLetterFormComponent } from './news-letter-form/news-letter-form.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';


const routes: Routes = [
  { path: 'listings', component: BlogsComponent },
  { path: 'detail/:id', component: BlogDetailComponent },
  { path: 'add-new', component: AddBookComponent },
  { path: 'subscribe-us', component: NewsLetterFormComponent },
  { path: '', redirectTo: '/listings', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
