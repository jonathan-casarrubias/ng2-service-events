import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Logged } from '../definitions';

@Injectable()
export class LoggedService {

  private logged: Logged;
  private subject: Subject<Logged> = new Subject<Logged>();

  setLogged(logged: Logged): void {
    this.logged = logged;
    this.subject.next(logged);
  }
  
  getLogged(): Observable<Logged> {
    return this.subject.asObservable();
  }
}
