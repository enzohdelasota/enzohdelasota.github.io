import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name = "Enzo H. De la Sota"
  span = "CV Interactivo"

  constructor() { }

  ngOnInit(): void {
  }

}
