import { ServiceAppPage } from './app.po';

describe('service-app App', function() {
  let page: ServiceAppPage;

  beforeEach(() => {
    page = new ServiceAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
