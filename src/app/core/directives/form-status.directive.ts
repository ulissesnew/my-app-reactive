import { Directive, ElementRef, HostBinding, OnInit, Renderer2, Self } from '@angular/core';
import {  NgControl } from '@angular/forms';

@Directive({
  selector: '[appFormStatus]'
})
export class FormStatusDirective implements OnInit{
  constructor(private ngControl: NgControl,private elementRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
  }
  @HostBinding('style.border') border: string | undefined;

  @HostBinding('ngControl') get invalid() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'border-radius', '20px')
    if(this.ngControl.status === 'INVALID' && this.ngControl.touched) {
      this.border = '2px solid  red'
      return this.ngControl.invalid
    } else {
      this.border = '2px solid  blue'
      return this.ngControl.valid
    }
  }

 
}

