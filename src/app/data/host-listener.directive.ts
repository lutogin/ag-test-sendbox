import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[HostListenerDirective]'
})
export class HostListenerDirective {
  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) {
    this.renderer.setStyle(this.element.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.setFontWeight('bold');
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.setFontWeight('normal');
  }

  private setFontWeight(val: string): void {
    this.renderer.setStyle(this.element.nativeElement, 'font-weight', val);
  }
}
