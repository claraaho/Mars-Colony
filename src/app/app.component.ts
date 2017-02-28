import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <p>You've clicked the dang button {{ clickCount }} times</p>
    <p>New title: <input (keyup)="changeTitle($event)"></p>
    <button (click)="updateTitle()">Change that title</button>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
  newTitle = this.title;
  clickCount = 0;

  updateTitle() {
    this.clickCount++;
    this.title = this.newTitle;
  }

  changeTitle(event) {
    if(!event || event.target.value == '') {
      this.newTitle = this.title;
    } else {
      this.newTitle = event.target.value;
    }
  }
}