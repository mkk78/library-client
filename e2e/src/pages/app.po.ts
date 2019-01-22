import { browser, element, by } from 'protractor';

export class AppPage {
    navigateTo() {
        return browser.get('/');
    }

    getTitleText() {
        return element(by.css('app-root h1')).getText();
    }

    getAllBooksCount() {
        return element.all(by.css('app-root h4')).count();
    }
}

