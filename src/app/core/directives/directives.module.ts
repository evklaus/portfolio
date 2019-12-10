import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderScrollDirective } from './header.directive';



@NgModule({
  declarations: [HeaderScrollDirective],
  imports: [
    CommonModule
  ],
  exports: [HeaderScrollDirective]
})
export class DirectivesModule { }
