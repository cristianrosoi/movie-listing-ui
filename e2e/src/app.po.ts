import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('.app-title h1')).getText() as Promise<string>;
  }

  getMenuItem() {
    return element(by.css('.menu-items')).getText() as Promise<string>;
  }

  getFooterText() {
    return element(by.css('.footer-text')).getText() as Promise<string>;
  }

  getImages() {
    return element.all(by.css('.responsive-img')).count() as Promise<number>;
  }

  getMovieTitles() {
    return element.all(by.css('.movie-title')).count() as Promise<number>;
  }

  getMovieGenres() {
    return element.all(by.css('.genres')).count() as Promise<number>;
  }

  getMovieRatings() {
    return element.all(by.css('.rating')).count() as Promise<number>;
  }
}
