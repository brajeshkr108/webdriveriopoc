class DemoWebshopLoginpage {

    get loginlink() {
        return $("//a[text()='Log in']")
    }

    get email() {
        return $("//input[@id='Email']")
    }

    get password() {
        return $("//input[@id='Password']")
    }

    get loginBtn() {
        return $(".buttons .button-1.login-button")
    }

    openBrowser() {
        browser.url("http://demowebshop.tricentis.com/");
        browser.maximizeWindow();

    }

    loginWebshop() {
        this.loginlink.click();
        this.email.setValue("testwebdriverio@gmail.com");
        this.password.setValue("Espn@2020");
        this.loginBtn.click();
    }
}
export default new DemoWebshopLoginpage();


