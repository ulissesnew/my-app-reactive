import { Directive, ElementRef, HostBinding, Input, OnInit, Renderer2, Self } from '@angular/core';
import {  NgControl } from '@angular/forms';

@Directive({
  selector: '[appFormStatus]'
})
export class FormStatusDirective implements OnInit{
  constructor(private ngControl: NgControl, private elementRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
  }
  @Input() defaultBorder = '2px solid blue'
  @Input('appFormStatus') invalidBorder = '2px solid red'
  @HostBinding('style.border') border: string = this.defaultBorder;

  @HostBinding('ngControl') get invalid() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'border-radius', '20px')
    if(this.ngControl.status === 'INVALID' && this.ngControl.touched) {
      this.border = this.invalidBorder
      return this.ngControl.invalid
    } 
    this.border = this.defaultBorder;
    return this.ngControl.valid
  }

 
}

