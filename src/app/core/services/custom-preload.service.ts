import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CustomPreloadService implements PreloadingStrategy {

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route?.data?.['preload'] === true) {
      load();
      return of(true);
    } else {
      return of(false);
    }
  }
}


