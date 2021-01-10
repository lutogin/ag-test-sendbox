import { Component, ViewChild } from '@angular/core';
import { ChildOutherCompComponent } from './child-outher-comp/child-outher-comp.component';

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
  price = 999;

  @ViewChild(ChildOutherCompComponent, { static: false })
  private counterComponent: ChildOutherCompComponent;

  changedClicksParent(increased: boolean): void {
    this.clicks = increased
      ? this.clicks + 1
      : this.clicks - 1;
  }

  increment(): void {
    this.counterComponent.counter += 1;
  }

  decrement(): void {
    this.counterComponent.counter -= 1;
  }
}
