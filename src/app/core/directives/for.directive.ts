import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

interface ForDirectiveContext<T> {
  $implicit: T;
  index: number;
  first: boolean;
  last: boolean;
  even: boolean;
  odd: boolean;
  count: number;
  order: T;
  keys: T;
  values: T
}

@Directive({
  selector: '[appFor]'
})

export class ForDirective<T> {
  private items: T[] = []

  static ngTemplateContextGuard<T>(
    dir: ForDirective<T>,
    ctx: unknown
  ): ctx is ForDirectiveContext<T> {
    return true;
  }

  constructor(
    private templateRef: TemplateRef<unknown>, 
    private vcRef: ViewContainerRef
  ) {}
 
  /**
   * @description 
   *  `appForOf`   o `appFor + Of` e adicionado como alias para evitar o erro abaixo:
   * 
   *  core.mjs:10639 NG0303: Can't bind to 'appForOf' since it isn't a known property of 'div' (used in the 'PageNotFoundComponent' component template).
   * 1. If 'div' is an Angular component and it has the 'appForOf' input, then verify that it is a part of an @NgModule where this component is declared.
   * 2. To allow any property add 'NO_ERRORS_SCHEMA' to the '@NgModule.schemas' of this component.
   * 
   */
  @Input('appForOf') set appForOf(items: T[] | any) {
    this.items = items;
    this.renderItems()
  }
  
  private renderItems(): void {
    this.vcRef.clear();
    this.items.map((item, index, arr) => {
      this.vcRef.createEmbeddedView(this.templateRef, {
        $implicit: item,
        index,
        first: index === 0,
        last: index === arr.length -1,
        even: (index & 1) === 0,
        odd: (index & 1),
        count: arr.length,
        order:  [...arr].reverse(),
        keys: Object.keys(arr),
        values: Object.values(arr),
      })
    })
  }

}
