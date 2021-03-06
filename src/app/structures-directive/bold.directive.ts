import { Directive, ElementRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[bold2]'
})
export class BoldDirective2 {
  constructor(
    private elementRef: ElementRef
  ) {
    this.elementRef.nativeElement.style.fontWeight = 'bold';
  }
}
