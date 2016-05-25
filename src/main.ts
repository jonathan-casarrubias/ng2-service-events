import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ServiceEventsAppComponent, environment } from './app/';
import { LoggedService } from './app/shared'

if (environment.production) {
  enableProdMode();
}

bootstrap(ServiceEventsAppComponent, [
  LoggedService
]);

