import { Directive, ElementRef, HostListener, HostBinding, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighligth]'
})
export class BetterHighligthDirective implements OnInit {

  constructor(private elementRef: ElementRef<HTMLInputElement>, private renderer: Renderer2) { }
  ngOnInit(): void {
  }

  @HostListener("mouseenter") mouseenter(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'Aquamarine')
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent')
  }
  @HostListener('click') click(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'border', '1px solid LightGrey')
  }
}
