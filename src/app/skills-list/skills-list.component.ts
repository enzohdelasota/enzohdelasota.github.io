import { Component, OnInit } from '@angular/core';
import { SKILLS } from '../mock-skills';
import { Skill } from '../Skill';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss']
})
export class SkillsListComponent implements OnInit {
  title = 'Skills';
  skills1: Skill[] = [];
  skills2: Skill[] = [];

  constructor() { }

  ngOnInit(): void {
    let skills = SKILLS.sort((a, b) =>
      (a.level < b.level) ? 1 : (a.level === b.level) ? ((a.name > b.name) ? 1 : -1) : -1);
    this.skills1 = SKILLS.slice(0, Math.trunc(skills.length/2) + skills.length % 2);
    this.skills2 = SKILLS.slice(Math.trunc(skills.length/2) + skills.length % 2, skills.length);
  }

  counter(i: number) {
    return new Array(i);
  }

}
