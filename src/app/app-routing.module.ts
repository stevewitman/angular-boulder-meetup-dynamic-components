import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomPreloadService } from './core/services/custom-preload.service';
import { HomeComponent } from './modules/home/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'feed',
    data: { preload: true },
    loadChildren: () =>
      import('./modules/news/feed.module').then((m) => m.FeedModule),
  },
  {
    path: 'news2',
    data: { preload: false },
    loadChildren: () =>
      import('./modules/news2/news2.module').then((m) => m.News2Module),
  },
  {
    path: 'simple',
    data: { preload: false },
    loadChildren: () =>
      import('./modules/simple-lazy-comp/simple-lazy-comp.module').then((m) => m.SimpleLazyCompModule),
  },
  {
    path: 'contact',
    data: { preload: false },
    loadChildren: () =>
      import('./modules/contact/contact.module').then((m) => m.ContactModule),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // redirect to `first-component`
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: CustomPreloadService,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
