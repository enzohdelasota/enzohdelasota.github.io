import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abilities-section',
  templateUrl: './abilities-section.component.html',
  styleUrls: ['./abilities-section.component.scss']
})
export class AbilitiesSectionComponent implements OnInit {
  title = 'Habilidades';

  constructor() { }

  ngOnInit(): void {
  }

}
