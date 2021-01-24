import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ChildOutherCompComponent } from './child-outher-comp/child-outher-comp.component';
import { ProductEntity } from './test-route-param/item.entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-first-app';

  userName = 'Max';
  useAge = 29;

  clicks = 0;
  price = 999;

  /**
   * For route to product
   */
  product: ProductEntity = new ProductEntity();

  constructor(
    private readonly router: Router,
  ) {}

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

  goHome(): void {
    this.router.navigate(['']); // переход в главное меню
  }

  goToItem(): void {
    console.log(' ---> ', this.product);
    this.router.navigate( // переход к item и генерация ссылки на основе формы
      ['product', this.product.id],
      {
        queryParams: {
          product: this.product.title,
          price: this.product.price,
        }
      }
    );
  }
}
