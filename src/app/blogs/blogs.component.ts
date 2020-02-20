import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  blog: Blog = {
    title: 'Angular is MVC framework',
    content: 'some details',
    author: 'John'
  };

  constructor() { }

  ngOnInit() {
  }

}
