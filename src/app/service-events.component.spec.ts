import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ServiceEventsAppComponent } from '../app/service-events.component';

beforeEachProviders(() => [ServiceEventsAppComponent]);

describe('App: ServiceEvents', () => {
  it('should create the app',
      inject([ServiceEventsAppComponent], (app: ServiceEventsAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'service-events works!\'',
      inject([ServiceEventsAppComponent], (app: ServiceEventsAppComponent) => {
    expect(app.title).toEqual('service-events works!');
  }));
});
