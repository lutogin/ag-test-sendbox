import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[while]',
})
export class WhileDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) {}

  @Input()
  set while(conditions: boolean) {
    if (conditions) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
