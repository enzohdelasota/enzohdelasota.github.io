import { Component, OnInit } from '@angular/core';
import { Quote } from '../Quote';
import { QUOTES } from '../quotes';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnInit {
  title = 'Contacto';
  quote?: Quote;

  constructor() { }

  ngOnInit(): void {
    this.quote = QUOTES[3];
  }

}
