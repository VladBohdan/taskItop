import { Component } from '@angular/core';
import {AppCounterService} from '../services/app-counter.service';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss'],
  providers:  [ AppCounterService ],
})
export class StopwatchComponent  {

  constructor(public appCounterService: AppCounterService) {
  }

  start() {
    this.appCounterService.start();
  }
  stop() {
    this.appCounterService.stop();
  }
  wait() {
    this.appCounterService.wait();
  }
  reset() {
    this.appCounterService.reset();
  }
}
