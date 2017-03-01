import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a routerLink="/register">Register page</a>
    <a routerLink="/encounters">Encounters page</a>
    <a routerLink="/report">Report page</a>
    <a routerLink="/notfound">Not found page</a>
    <div class="page">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
}