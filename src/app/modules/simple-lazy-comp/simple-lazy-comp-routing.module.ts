import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleLazyCompComponent } from './simple-lazy-comp/simple-lazy-comp.component';

const routes: Routes = [
  {
    path: '',
    component: SimpleLazyCompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleLazyCompRoutingModule { }
