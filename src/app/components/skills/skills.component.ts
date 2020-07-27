import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    trigger('cards', [
      state('true', style({
        opacity: 0.001
      })),
      state('false', style({
        opacity: 0.9
      })),
      transition('true <=> false', animate(1000))
    ])
  ]
})
export class SkillsComponent implements OnInit {

  public state: String = 'true';
  public state2: String = 'false'
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.state = this.state == 'true' ? 'false' : 'true';
      this.state2 = this.state2 == 'true' ? 'false' : 'true';
      this.ngOnInit()
    }, 10000);
  }



}
