import { Component, OnInit } from '@angular/core';
import { Experience } from '../Experience';
import { EXPERIENCES } from '../mock-experiences';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.scss']
})
export class ExperienceListComponent implements OnInit {
  title = 'Formación';
  experiences: Experience[] = [];

  constructor() { }

  ngOnInit(): void {
    this.experiences = EXPERIENCES;
  }

}
