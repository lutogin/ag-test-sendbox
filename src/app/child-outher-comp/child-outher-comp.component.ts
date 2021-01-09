import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-outher-comp',
  templateUrl: './child-outher-comp.component.html',
  styleUrls: ['./child-outher-comp.component.css']
})
export class ChildOutherCompComponent implements OnInit {
  @Input() price: number;
  @Output() priceChange = new EventEmitter<number>();
  @Output() changedClicks = new EventEmitter<boolean>();

  changePriceChildren(newPrice: number): void {
    this.price = newPrice;
    this.priceChange.emit(newPrice);
  }

  clickToIncrease(increased: boolean): void {
    this.changedClicks.emit(increased);
  }

  ngOnInit(): void {
  }
}
