import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BetterHighligthDirective } from './better-highligth.directive';
import { FormStatusDirective } from './form-status.directive';
import { UnlessDirective } from './unless.directive';
import { ForDirective } from './for.directive';



@NgModule({
  declarations: [
    BetterHighligthDirective,
    FormStatusDirective,
    UnlessDirective,
    ForDirective
  ],
  imports: [
    CommonModule
  ], 
  exports: [BetterHighligthDirective, FormStatusDirective, UnlessDirective, ForDirective]
})
export class DirectivesModule { }
