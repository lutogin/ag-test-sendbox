import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[boldWithParams]',
})
export class BoldWithParamsDirective implements OnInit {
  @Input()
  selectedSize = '18px';

  @Input()
  defaultSize = '16px';

  private fontSize: string;
  private fontWeight = 'normal';

  ngOnInit(): void {
    this.fontSize = this.defaultSize;
  }

  @HostBinding('style.fontSize')
  get getFontSize(): string {
    return this.fontSize;
  }

  @HostBinding('style.fontWeight')
  get getFontWeight(): string {
    return this.fontWeight;
  }

  @HostBinding('style.cursor')
  get getCursor(): string {
    return 'pointer';
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.fontWeight = 'bold';
    this.fontSize = this.selectedSize;
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.fontWeight = 'normal';
    this.fontSize = this.defaultSize;
  }
}
