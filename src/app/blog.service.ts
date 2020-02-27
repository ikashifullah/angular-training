import { Injectable } from '@angular/core';
import { Blog } from './blog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private postUrl = 'https://jsonplaceholder.typicode.com/posts';  // URL to web api

  constructor(private http: HttpClient) { }

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.postUrl);
  }

  getBlog(id: number): Observable<Blog> {
    const blogDetailURL = `https://jsonplaceholder.typicode.com/posts/${id}`;  // URL to web api;
    // TODO: send the message _after_ fetching the hero
    return this.http.get<Blog>(blogDetailURL);
  }
}
