import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BetterHighligthDirective } from './better-highligth.directive';
import { FormStatusDirective } from './form-status.directive';
import { UnlessDirective } from './unless.directive';



@NgModule({
  declarations: [
    BetterHighligthDirective,
    FormStatusDirective,
    UnlessDirective
  ],
  imports: [
    CommonModule
  ], 
  exports: [BetterHighligthDirective, FormStatusDirective, UnlessDirective]
})
export class DirectivesModule { }
