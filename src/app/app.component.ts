import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-first-app';

  userName = 'Max';
  useAge = 29;

  clicks = 0;
  price = 1;

  changedClicksParent(increased: boolean): void {
    this.clicks = increased
      ? this.clicks + 1
      : this.clicks - 1;
  }

  changePrice(price): void {
    this.price = price;
  }
}
