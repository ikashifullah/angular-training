import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';
import { SoliderCommunicationService } from '../solider-communication.service';
import { Observable, fromEvent } from 'rxjs';
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

    // Event Subscription
    const ESC_KEY = 27;
    const nameInput = document.getElementById('name') as HTMLInputElement;

    const subscription = fromEvent(nameInput, 'keydown')
      .subscribe((e: KeyboardEvent) => {
        console.log(e);
        if (e.keyCode === ESC_KEY) {
          nameInput.value = '';
        }
      });
  }

  onSelect(blog) {
    this.selectedBlog = blog;
  }

  getBlogs(): void {
    this.blogService.getBlogs().subscribe((response) => {
      this.blogs = response;
    });
  }

  fromEvent(target, eventName) {
    return new Observable((observer) => {
      const handler = (e) => observer.next(e);

      // Add the event handler to the target
      target.addEventListener(eventName, handler);

      return () => {
        // Detach the event handler from the target
        target.removeEventListener(eventName, handler);
      };
    });
  }

}
