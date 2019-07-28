import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div style="text-align:center">
  <h1>
    Welcome to {{ title }}!
  </h1>
  <div>
    <input type="text">
    <label>Marvellous Infosystems</label>
  </div>
</div>`,
  styles: ['label { color: blue; }']
})
export class AppComponent {
  title = 'assignment6';
}
