import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductEntity } from './product.entity';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: ProductEntity = new ProductEntity();

  private readonly routeSubscription: Subscription;
  private readonly querySubscription: Subscription;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
  ) {
    this.routeSubscription = activatedRoute
      .params
      .subscribe((params) => this.product.id = params.id);

    this.querySubscription = activatedRoute.queryParams.subscribe((params) => {
      this.product.price = params.price;
      this.product.title = params.productTitle;
    });
  }

  ngOnInit(): void {
  }

}
