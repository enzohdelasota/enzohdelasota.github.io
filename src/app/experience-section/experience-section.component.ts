import { Component, OnInit } from '@angular/core';
import { Quote } from '../Quote';
import { QUOTES } from '../quotes';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss']
})
export class ExperienceSectionComponent implements OnInit {
  title = 'Formación';
  quote?: Quote;

  constructor() { }

  ngOnInit(): void {
    this.quote = QUOTES[0];
  }

}
