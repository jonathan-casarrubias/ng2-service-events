export class ServiceEventsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('service-events-app h1')).getText();
  }
}
