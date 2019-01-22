import { AppPage } from "../pages/app.po";
import { Before, Given, When, Then } from 'cucumber';
import { expect } from 'chai';

let page: AppPage;

Before(() => {
    page = new AppPage();
});

Given(/^I am on the home page$/, {timeout: 5 * 5000}, async () => {
    await page.navigateTo();
});

When(/^I do nothing$/, () => {});

Then(/^I should see the title$/, async () => {
    expect(await page.getTitleText()).to.equal('Book');
});

Then('I should see {int} books', async (booksNumber) => {
    expect(await page.getAllBooksCount()).to.equal(booksNumber);
});