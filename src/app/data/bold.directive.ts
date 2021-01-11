import { Directive, ElementRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[bold]',
})
export class BoldDirective {
  constructor(
    private elementRef: ElementRef
  ) {
    this.elementRef.nativeElement.style.fontWeight = 'bold';
  }
}
