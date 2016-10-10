import { browser, element, by } from 'protractor';

export class CrudularPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cru-root h1')).getText();
  }
}
