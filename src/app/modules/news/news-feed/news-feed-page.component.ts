import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Block } from '../../blocks/block';
import { BlocksService } from '../../blocks/blocks.service';

@Component({
  selector: 'app-news-feed-page',
  templateUrl: './news-feed-page.component.html',
  styleUrls: ['./news-feed-page.component.scss'],
})
export class NewsFeedPageComponent implements OnInit {

  constructor(private blocksService: BlocksService) {}

  ngOnInit(): void {
  }

}
