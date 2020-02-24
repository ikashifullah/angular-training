import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsLetterFormComponent } from './news-letter-form.component';

describe('NewsLetterFormComponent', () => {
  let component: NewsLetterFormComponent;
  let fixture: ComponentFixture<NewsLetterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsLetterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsLetterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
