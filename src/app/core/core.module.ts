import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CustomPreloadService } from './services/custom-preload.service';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [HeaderComponent, NavComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, NavComponent],
  providers: [CustomPreloadService],
})
export class CoreModule {}
