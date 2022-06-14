import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleLazyCompRoutingModule } from './simple-lazy-comp-routing.module';
import { SimpleLazyCompComponent } from './simple-lazy-comp/simple-lazy-comp.component';


@NgModule({
  declarations: [
    SimpleLazyCompComponent,
  ],
  imports: [
    CommonModule,
    SimpleLazyCompRoutingModule
  ]
})
export class SimpleLazyCompModule { }
