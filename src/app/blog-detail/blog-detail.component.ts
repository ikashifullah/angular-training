import { Component, OnInit, Input } from '@angular/core';
import { Blog } from '../blog';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {

  @Input() blog: Blog;

  constructor() { }

  ngOnInit() {
  }

}
