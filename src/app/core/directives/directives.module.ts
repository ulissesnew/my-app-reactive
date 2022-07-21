import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BetterHighligthDirective } from './better-highligth.directive';
import { FormStatusDirective } from './form-status.directive';



@NgModule({
  declarations: [
    BetterHighligthDirective,
    FormStatusDirective
  ],
  imports: [
    CommonModule
  ], 
  exports: [BetterHighligthDirective, FormStatusDirective]
})
export class DirectivesModule { }
