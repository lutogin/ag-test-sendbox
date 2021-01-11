import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[HostBindingDirective]',
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
  }
})
export class HostBindingDirective {
  constructor(private element: ElementRef, private renderer: Renderer2){
    this.renderer.setStyle(this.element.nativeElement, 'cursor', 'pointer');
  }

  onMouseEnter(): void {
    this.setFontWeight('bold');
  }

  onMouseLeave(): void {
    this.setFontWeight('normal');
  }

  private setFontWeight(val: string): void {
    this.renderer.setStyle(this.element.nativeElement, 'font-weight', val);
  }
}
