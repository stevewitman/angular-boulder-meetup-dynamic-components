import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { News2RoutingModule } from './news2-routing.module';
import { News2Component } from './news2/news2.component';
import { Advertisement2Component } from './blocks/components/advertisement/advertisement.component';
import { Poll2Component } from './blocks/components/poll/poll.component';
import { Post2Component } from './blocks/components/post/post.component';
import { BlockNotFound2Component } from './blocks/components/block-not-found/block-not-found.component';

@NgModule({
  declarations: [
    News2Component,
    Advertisement2Component,
    Poll2Component,
    Post2Component,
    BlockNotFound2Component,
  ],
  imports: [CommonModule, News2RoutingModule],
})
export class News2Module {}
