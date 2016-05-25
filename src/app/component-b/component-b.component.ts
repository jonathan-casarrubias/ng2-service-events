import { Component } from '@angular/core';
import { LoggedService } from '../shared';
import { Logged } from '../definitions';

@Component({
  moduleId: module.id,
  selector: 'component-b',
  templateUrl: 'component-b.component.html',
  styleUrls: ['component-b.component.css']
})
export class ComponentB  {

  private logged: Logged;

  constructor(private ls: LoggedService) {
    this.ls.getLogged().subscribe(logged => {
      console.info('Receiving logged user Component B');
      this.logged = logged;
    });
  }
}
