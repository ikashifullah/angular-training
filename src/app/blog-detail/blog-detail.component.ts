import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {

  blog;

  constructor(
    private route: ActivatedRoute,
    private heroService: BlogService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getBlog();
  }

  getBlog(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getBlog(id)
      .subscribe({
        next: (blog) => {
          this.blog = blog;
        }
      });
  }

}
