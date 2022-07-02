import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroReativoComponent } from './filtro-reativo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiltroReativoRoutingModule } from './filtro-reativo-routing.module';


@NgModule({
  declarations: [FiltroReativoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FiltroReativoRoutingModule
  ]
})
export class FiltroReativoModule { }
