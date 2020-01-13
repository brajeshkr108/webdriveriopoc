
const { Given, When, Then } = require('cucumber')
require('chai').should();
import loginPage from '../../main/pageobjects/logindemowebshop'
import homePage from '../../main/pageobjects/homepage'

Given(/^I am on the login page of Demo Webshop$/, function () {
    loginPage.openBrowser()
});

When(/^I log in with a valid user$/, function () {
    loginPage.loginWebshop();
});

Then(/^I shall be on the Demo Webshop home page$/, function () {
    const actualType = $("//a[text()='Log out']");
    var type = actualType.getText();
    const expType = "Log out";
    type.should.equal(expType)
});

When(/^User clicks on the Books in the homepage$/, function () {
    homePage.clickBooks();
    browser.pause(3000)
});

When(/^User clicks on the first item$/, function () {
    homePage.clickItem()
});

When(/^User clicks on the Add to cart$/, function () {
    homePage.clickaddToCart()
});

When(/^User clicks on Shopping Cart$/, function () {
    homePage.clickshoppingCart()
});

Then(/^items should added to the shopping cart$/, function () {
    const addedItem = $("(//a[contains(text(),'Computing and Internet')])[2]");
    var item = addedItem.getText();
    const expType = "Computing and Internet";
    item.should.equal(expType)
});