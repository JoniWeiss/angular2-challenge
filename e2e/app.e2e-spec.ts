import { PaypalPage } from './app.po';

describe('paypal App', function() {
  let page: PaypalPage;

  beforeEach(() => {
    page = new PaypalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
