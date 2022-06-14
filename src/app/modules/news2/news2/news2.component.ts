import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Block } from '../blocks/block';
import { BlocksService } from '../blocks/blocks.service';

@Component({
  selector: 'app-news2',
  templateUrl: './news2.component.html',
  styleUrls: ['./news2.component.scss'],
})
export class News2Component implements OnInit {
  blocksData$!: Observable<Block[]>;

  constructor(private blocksService: BlocksService) {}

  ngOnInit(): void {}

  getBlocks() {
    this.blocksData$ = this.blocksService.getAllBlocks();
  }
}
