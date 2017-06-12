import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  template: `
    <h1>ngx-bootstrap-modal</h1>
    <p>simplify the work with bootstrap modal dialogs</p>
    <app-demo></app-demo>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app works!';
}
