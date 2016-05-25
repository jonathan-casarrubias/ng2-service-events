import { ServiceEventsPage } from './app.po';

describe('service-events App', function() {
  let page: ServiceEventsPage;

  beforeEach(() => {
    page = new ServiceEventsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('service-events works!');
  });
});
