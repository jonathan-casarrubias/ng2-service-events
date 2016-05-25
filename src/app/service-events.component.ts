import { Component } from '@angular/core';
import { ComponentA } from './component-a';
import { ComponentB } from './component-b';

@Component({
  moduleId: module.id,
  selector: 'service-events-app',
  templateUrl: 'service-events.component.html',
  styleUrls: ['service-events.component.css'],
  directives: [ComponentA, ComponentB]
})
export class ServiceEventsAppComponent {
  title = 'service-events works!';
}
