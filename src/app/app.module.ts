import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { AddBookComponent } from './add-book/add-book.component';
import { NewsLetterFormComponent } from './news-letter-form/news-letter-form.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    BlogDetailComponent,
    AddBookComponent,
    NewsLetterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
