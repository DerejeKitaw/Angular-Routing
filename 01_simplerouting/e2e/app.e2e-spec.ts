import { SimpleroutingPage } from './app.po';

describe('simplerouting App', () => {
  let page: SimpleroutingPage;

  beforeEach(() => {
    page = new SimpleroutingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
