import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display the title -> Movie Listing App', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Movie Listing App');
  });

  it('should display a menu item -> Now Playing', () => {
    page.navigateTo();
    expect(page.getMenuItem()).toEqual('Now Playing');
  });

  it('should display a footer -> Movie Listing UI | The Movie Database | Built with Angular', () => {
    page.navigateTo();
    expect(page.getFooterText()).toEqual('Movie Listing UI | The Movie Database | Built with Angular');
  });

  it('should display poster images', () => {
    page.navigateTo();
    browser.sleep(2000);
    expect(page.getImages()).toBeGreaterThan(0);
  });

  it('should display movie titles', () => {
    page.navigateTo();
    browser.sleep(2000);
    expect(page.getMovieTitles()).toBeGreaterThan(0);
  });

  it('should display movie genres', () => {
    page.navigateTo();
    browser.sleep(2000);
    expect(page.getMovieGenres()).toBeGreaterThan(0);
  });

  it('should display movie ratings', () => {
    page.navigateTo();
    browser.sleep(2000);
    expect(page.getMovieRatings()).toBeGreaterThan(0);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
