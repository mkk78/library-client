import { browser, element, by } from 'protractor';

export class AppPage {
    navigateTo() {
        return browser.get('/');
    }

    getTitleText() {
        return element(by.css('app-root h1')).getText();
    }

    getAllBooksCount() {
        return element.all(by.css('app-book h4')).count();
    }

    getAllShelvesCount() {
        return element.all(by.css('app-shelves h4')).count();
    }

    getButton(button) {
        return element(by.linkText(button));
    }

    getShelvesTitleText() {
        return element(by.css('app-shelves h1')).getText();
    }
}

