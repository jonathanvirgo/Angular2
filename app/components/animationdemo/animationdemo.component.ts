import { Component, trigger, state, style, animate, transition } from '@angular/core';

@Component({
  selector: 'app-animationdemo',
  templateUrl: 'app/components/animationdemo/animationdemo.component.html',
  styleUrls: ['app/components/animationdemo/animationdemo.component.css'],
  animations: [
    trigger('changeDivSize', [
      state('initial', style({
        backgroundColor: 'green',
        width: '100px',
        height: '100px'
      })),
      state('final', style({
        backgroundColor: 'red',
        width: '200px',
        height: '200px'
      })),
      transition('initial=>final', animate('1500ms')),
      transition('final=>initial', animate('1000ms'))
    ])
  ]
})
export class AnimationdemoComponent {

  currentState = 'initial';
  list_order: number = 1;

  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }
}
