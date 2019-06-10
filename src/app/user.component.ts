import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <p>Hello, {{name}}!</p>
    <p>I'm the user component</p>
    <app-user-detail></app-user-detail>
  `
})

export class UserComponent {
  @Input() name = 'Paulo';
  @Output() nameChanged = new EventEmitter<string>();

  onUserInput(event) {
    this.nameChanged.emit(event.target.value);
  }
}
