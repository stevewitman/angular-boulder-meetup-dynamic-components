import {
  Component,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-simple-lazy-comp',
  templateUrl: './simple-lazy-comp.component.html',
  styleUrls: ['./simple-lazy-comp.component.scss'],
})
export class SimpleLazyCompComponent implements OnInit {
  @ViewChild('blockContainer', { static: true, read: ViewContainerRef })
  blockContainer!: ViewContainerRef;

  constructor() {}

  ngOnInit(): void {}

  async getComponent() {
    const lazyComponent = await import('../lazy/lazy.component');
    let componentRef: ComponentRef<any> =
      this.blockContainer.createComponent(lazyComponent.LazyComponent);
  }
}
