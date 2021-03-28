import { Component, OnInit } from '@angular/core';
import { Quote } from '../Quote';
import { QUOTES } from '../quotes';

@Component({
  selector: 'app-abilities-section',
  templateUrl: './abilities-section.component.html',
  styleUrls: ['./abilities-section.component.scss']
})
export class AbilitiesSectionComponent implements OnInit {
  title = 'Habilidades';
  quote?: Quote;

  constructor() { }

  ngOnInit(): void {
    this.quote = QUOTES[1];
  }

}
