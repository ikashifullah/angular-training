import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  new_book = new FormGroup({
    title: new FormControl('A book name'),
    body: new FormControl('some details')
  });

  constructor() { }

  ngOnInit() {
  }

}
