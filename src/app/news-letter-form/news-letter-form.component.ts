import { Component, OnInit } from '@angular/core';
import { NewsLetter } from '../news-letter';

@Component({
  selector: 'app-news-letter-form',
  templateUrl: './news-letter-form.component.html',
  styleUrls: ['./news-letter-form.component.scss']
})
export class NewsLetterFormComponent implements OnInit {

  model = new NewsLetter(1, 'Kashif', 'Ullah', 'kashif.ullah@mobilelive.ca');

  constructor() { }

  ngOnInit() {
  }

}
