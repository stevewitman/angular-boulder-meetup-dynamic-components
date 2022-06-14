import {
  Compiler,
  Component,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Observable } from 'rxjs';

import { Block } from '../block';
import { BlocksService } from '../blocks.service';

abstract class DynamicComponent {
  inputData: {} = {}; 
}

@Component({
  selector: 'app-block-renderer',
  templateUrl: './block-renderer.component.html',
  styleUrls: ['./block-renderer.component.scss'],
})
export class BlockRendererComponent implements OnInit {
  @ViewChild('blockContainer', { static: true, read: ViewContainerRef })
  blockContainer!: ViewContainerRef;
  blocksData$!: Observable<Block[]>;
  showJson = true;

  constructor(
    private blocksService: BlocksService,
    private compiler: Compiler
  ) {}

  ngOnInit() {}

  getBlocks() {
    this.blocksData$ = this.blocksService.getAllBlocks();
  }

  renderBlocks() {
    this.blocksData$.subscribe(async (blocks: any) => {
      for (const block of blocks) {
        // console.log(block.blockName, block.blockData);
        if (block.blockName && block.blockData) {
          await this.loadComponent(block);
        }
      }
    });
  }

  async loadComponent(block: Block) {
    switch (block.blockName) {
      case 'advertisement': {
        const lazyComponent = await import(
          `../components/advertisement/advertisement.component`
        );
        let componentRef: ComponentRef<DynamicComponent> =
          this.blockContainer.createComponent(
            lazyComponent.AdvertisementComponent
          );
        // pass input data into the component instance
        componentRef.instance.inputData = block.blockData;
        break;
      }
      case 'poll': { 
        const lazyComponent = await import(`../components/poll/poll.component`);
        await import('../components/poll/poll.module').then(({ PollModule }) => {
          // Compile the module
          this.compiler
            .compileModuleAsync(PollModule)
            .then(() => {
              let componentRef: ComponentRef<DynamicComponent> =
                this.blockContainer.createComponent(lazyComponent.PollComponent);
              // pass input data into the component instance
              componentRef.instance.inputData = block.blockData;;
            });
        })
        break;
      }

      case 'post': {
        const lazyComponent = await import(`../components/post/post.component`);
        let componentRef: ComponentRef<DynamicComponent> =
          this.blockContainer.createComponent(lazyComponent.PostComponent);
        // pass input data into the component instance
        componentRef.instance.inputData = block.blockData;
        break;
      }
      default: {
        const lazyComponent = await import(
          `../components/block-not-found/block-not-found.component`
        );
        let componentRef: ComponentRef<DynamicComponent> =
          this.blockContainer.createComponent(
            lazyComponent.BlockNotFoundComponent
          );
        // pass input data into the component instance
        const missingBlockData = { missingBlock: block.blockName };
        componentRef.instance.inputData = missingBlockData;
        break;
      }
    }
  }
}
