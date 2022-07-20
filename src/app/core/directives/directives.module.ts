import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BetterHighligthDirective } from './better-highligth.directive';



@NgModule({
  declarations: [
    BetterHighligthDirective
  ],
  imports: [
    CommonModule
  ], 
  exports: [BetterHighligthDirective]
})
export class DirectivesModule { }
