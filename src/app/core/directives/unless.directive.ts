import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

/**
 * @description 
 * Strutural diretiva customizada
 *  Faz o oposto da diretiva  *ngIf
 * 
 * @example 
 * *appUnless="condition"
 * @returns 
 * template visualizacao
 */

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if(!condition) {
      this.vcRef.createEmbeddedView(this.templateRef)
    } else {
      this.vcRef.clear()
    }
  }
  constructor(private templateRef: TemplateRef<any>,private vcRef: ViewContainerRef ) { }

}
