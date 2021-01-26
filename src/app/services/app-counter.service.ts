import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable()
export class AppCounterService {

  get currentTimer(): Observable<string>{
    return of('00:00:15');
  }
  start(){
    console.log('start');
  }

  stop(){
    console.log('stop');
  }

  wait() {
    console.log('wait');
  }

  reset(){
    console.log('reset');
  }
}
