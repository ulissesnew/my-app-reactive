import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [ContainerComponent, ButtonComponent, CardComponent],
  imports: [CommonModule],
  exports: [ContainerComponent, ButtonComponent, CardComponent],
})
export class SharedModule {}
