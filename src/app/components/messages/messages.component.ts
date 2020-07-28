import { Component, OnInit } from '@angular/core';
import { trigger, style, state, animate, transition } from '@angular/animations'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  animations: [
    trigger('btnn', [
      state('noVisible', style({
        visibility: 'visible',
        transform: 'translateX(-100%)'
      })),
      state('visible', style({
        visibility: 'visible',
        backgroundColor: '#10a7e3',
        transform: 'translateX(100%)'
      })),

      state('true', style({
        visibility: 'visible',
        backgroundColor: '#10a7e3',
        opacity: 0.9,
        transform: 'translateX(-100%)'
      })),
      state('false', style({
        visibility: 'visible',
        backgroundColor: '#10a7e3',
        opacity: 0.00001,
        transform: 'translateX(0)'
      })),

      transition('noVisible => visible', animate(2000, style({ 
        transform: 'translateX(100%) rotate(360deg)', 
        opacity: 0.9,
        backgroundColor: '#10a7e3',
      }))),
      transition('visible => noVisible', animate(2000, style({ 
        transform: 'translateX(-100%) rotate(-360deg)',
        opacity: 0.00001,
        backgroundColor: '#10a7e3',
      }))),

      transition('false => true', animate(2000, style({ 
        transform: 'translateX(-100%) rotate(-360deg)', 
        opacity: 0.9,
        backgroundColor: '#10a7e3',
      }))),
      transition('true => false', animate(2000, style({ 
        transform: 'translateX(100%) rotate(360deg)', 
        opacity: 0.00001,
        backgroundColor: '#10a7e3',
      })))
    ])
  ]
})

export class MessagesComponent implements OnInit {

  public aloha: String = 'noVisible'
  public aloha2: String = 'false'

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.aloha = this.aloha === 'noVisible' ? 'visible' : 'noVisible';      
      this.aloha2 = this.aloha2 === 'true' ? 'false' : 'true';      
      this.ngOnInit()
    }, 8000);
  }

  phrase() {
    this.aloha = this.aloha === 'noVisible' ? 'visible' : 'noVisible';      
  }

}
