import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class AppCounterService {
  private timerId;
  private isPaused = false;
  private timeSubject = new BehaviorSubject<number>(0);

  get timeCurrent() {
    return this.timeSubject.asObservable();
  }

  start() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
    this.timerId = setInterval(
      () => this.timeSubject.next(this.timeSubject.value + +!this.isPaused),
      1000
    );
  }

  wait() {
    this.isPaused = true;
  }

  reset() {
    this.isPaused = false;
  }

  stop() {
    this.timeSubject.next(0);
    clearInterval(this.timerId);
  }
}
