
//import {Given,When,Then} from cucumber;
const { Given, When, And, But, Then } = require('cucumber')
require('chai').should();
import loginPage from '../../main/pageobjects/loginpage'

Given(/^I am on the login page$/, function () {
    loginPage.openBrowser()
});

When(/^I log in with a dafault user$/, function () {
    // browser.elementSendKeys("//input[@name='userName']").s
    // browser.elementSendKeys("//input[@name='password']")
    // browser.elementClick("//input[@name='login']")
    // const user = $("//input[@name='userName']");
    // user.setValue('mercury');
    // //browser.setValue("//input[@name='userName']", 'mercury');
    // browser.pause(2000)

    // const pwd = $("//input[@name='password']");
    // pwd.setValue('mercury');
    // browser.pause(1000);

    // const loginBtn = $("//input[@name='login']");
    // loginBtn.click();
    // browser.pause(5000)

    loginPage.login();

    //console.log("Data is:" + tData.Username);

});

Then(/^I shall be on the Flight Finder page$/, function () {
    var url = browser.getUrl();
    const actualType = $("//b[contains(text(),'Type:')]");
    var type = actualType.getText();
    //const actualType = browser.getElementText("//b[contains(text(),'Type:')]");
    const expType = "Type:";
    type.should.equal(expType)
    console.log("Test is passed");
    console.log("URL is:" + url);

});