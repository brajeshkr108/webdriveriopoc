class LoginPage {

    get userName() {
        return $("//input[@name='userName']")
    }

    get password() {
        return $("//input[@name='password']")
    }

    get loginBtn() {
        return $("//input[@name='login']")
    }

    openBrowser() {
        browser.url("http://www.newtours.demoaut.com/");
        browser.maximizeWindow();

    }

    login() {
        this.userName.setValue("mercury");
        this.password.setValue("mercury");
        this.loginBtn.click();
    }
}

export default new LoginPage();