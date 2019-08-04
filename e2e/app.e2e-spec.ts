import { MySamplePage } from './app.po';

describe('my-sample App', function() {
  let page: MySamplePage;

  beforeEach(() => {
    page = new MySamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
