import { TestiDeusPage } from './app.po';

describe('testi-deus App', () => {
  let page: TestiDeusPage;

  beforeEach(() => {
    page = new TestiDeusPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
