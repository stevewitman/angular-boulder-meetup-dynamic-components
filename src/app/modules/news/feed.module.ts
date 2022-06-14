import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { NewsFeedPageComponent } from './news-feed/news-feed-page.component';
import { BlockRendererComponent } from '../blocks/block-renderer/block-renderer.component';

@NgModule({
  declarations: [NewsFeedPageComponent, BlockRendererComponent],
  imports: [CommonModule, FeedRoutingModule],
})
export class FeedModule {}
