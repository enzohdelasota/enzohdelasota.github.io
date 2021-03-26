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
  skills: Skill[] = [];

  constructor() { }

  ngOnInit(): void {
    this.skills = SKILLS;
    console.log(this.skills);

  }

  counter(i: number) {
    return new Array(i);
  }

}
