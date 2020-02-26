import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';
import { SoliderCommunicationService } from '../solider-communication.service';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  blogs: Blog[];
  selectedBlog: Blog;

  constructor(private blogService: BlogService, private soliderCommService: SoliderCommunicationService) { }

  ngOnInit() {
    this.getBlogs();
    this.soliderCommService.establishCommunication();
    this.soliderCommService.notify();
  }

  onSelect(blog) {
    this.selectedBlog = blog;
  }

  getBlogs(): void {
    this.blogService.getBlogs().subscribe((response) => {
      this.blogs = response;
    });
  }

}
