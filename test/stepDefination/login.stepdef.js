
const { Given, When, And, But, Then } = require('cucumber')
require('chai').should();
import loginPage from '../../main/pageobjects/loginpage'

Given(/^I am on the login page$/, function () {
    loginPage.openBrowser()
});

When(/^I log in with a dafault user$/, function () {
    loginPage.login();
});

Then(/^I shall be on the Flight Finder page$/, function () {
    var url = browser.getUrl();
    const actualType = $("//b[contains(text(),'Type:')]");
    var type = actualType.getText();
    const expType = "Type:";
    type.should.equal(expType)
});