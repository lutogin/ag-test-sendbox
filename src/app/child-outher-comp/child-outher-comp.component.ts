import { Component, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-outher-comp',
  templateUrl: './child-outher-comp.component.html',
  styleUrls: ['./child-outher-comp.component.css']
})
export class ChildOutherCompComponent implements OnInit, OnChanges, OnDestroy {
  labelTemplate = 'QAZ';
  counter = 10;
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

  // increment(): void {
  //   this.counter += 1;
  // }
  //
  // decrement(): void {
  //   this.counter -= 1;
  // }

  // life cycle

  ngOnInit(): void {
    console.log('ngOnInit work');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // tslint:disable-next-line:forin
    for (const propName in changes) {
      const change = changes[propName];
      const cur  = JSON.stringify(change.currentValue);
      const prev = JSON.stringify(change.previousValue);
      console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy work');
  }
}
