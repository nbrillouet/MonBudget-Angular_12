import { Observable } from 'rxjs';

export class ResizeObservable extends Observable<ResizeObserverEntry[]> {
    constructor(elem: HTMLElement) {
      super((subscriber) => {
          const ro = new ResizeObserver((entries) => {
              subscriber.next(entries);
          });

          // Observe one or multiple elements
          ro.observe(elem);

          return (): any => {
              ro.unobserve(elem);
              ro.disconnect();
          };
      });
    }
  }
