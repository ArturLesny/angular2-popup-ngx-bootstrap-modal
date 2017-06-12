import { Angular2NgxBootstrapModalPage } from './app.po';

describe('angular2-ngx-bootstrap-modal App', () => {
  let page: Angular2NgxBootstrapModalPage;

  beforeEach(() => {
    page = new Angular2NgxBootstrapModalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
