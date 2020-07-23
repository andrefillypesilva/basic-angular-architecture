import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('custom-root .content span')).getText() as Promise<string>;
  }

  getTitleByXpath(fullXPath: string): Promise<string> {
    return element(by.xpath(fullXPath)).getText() as Promise<string>;
  }
}
