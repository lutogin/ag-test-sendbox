import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-test-route-param',
  templateUrl: './test-route-param.component.html',
  styleUrls: ['./test-route-param.component.css']
})
export class TestRouteParamComponent implements OnInit {
  id: string;
  product: string;
  price: number;

  private readonly routeSubscription: Subscription; // позволяет установить подписку на изменение параметра маршрута
  private readonly querySubscription: Subscription; // подписка на квейри запроса

  constructor(
    private readonly activeRoute: ActivatedRoute // содержит данные из запроса
  ) {
    this.routeSubscription = activeRoute.params.subscribe((params) => this.id = params.id);
    this.querySubscription = activeRoute.queryParams.subscribe((query: any) => {
      this.product = query.product;
      this.price = query.price;
    });
  }

  ngOnInit(): void {
    // второй вариант решения проблемы с неменяющимся параметром в компоненте
    // this.activeRoute.paramMap
    //   .pipe(switchMap(params => params.getAll('id')))
    //   .subscribe((data) => this.id = data);
  }

}
