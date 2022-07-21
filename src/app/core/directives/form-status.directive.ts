import { Directive, ElementRef, HostBinding, OnInit, Renderer2, Self } from '@angular/core';
import {  NgControl } from '@angular/forms';

@Directive({
  selector: '[appFormStatus]'
})
export class FormStatusDirective implements OnInit{
  constructor(private ngControl: NgControl,private elementRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
  }
  @HostBinding('ngControl') get invalid() {
    if(this.ngControl.control?.status === 'INVALID' && this.ngControl.touched) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'border-radius', '20px')
      this.renderer.setStyle(this.elementRef.nativeElement, 'border', '2px solid  red')
    } 
    return this.ngControl.invalid
  }

  @HostBinding('ngControl') get valid() {
    if(this.ngControl.control?.status === 'VALID' && this.ngControl.touched) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'border-radius', '20px')
      this.renderer.setStyle(this.elementRef.nativeElement, 'border', '2px solid  blue')
    } 
    return this.ngControl.invalid
  }
}

