const { expect } = require("allure-playwright");

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginlink = page.getByRole("link", { name: "Log in" });
    this.usernameInput = page.locator("input#loginusername");
    this.passwordInput = page.locator("input#loginpassword");
    this.loginButton = page.getByRole("button", { name: "Log in" });
    this.logoElement = page.locator("a[id='nava']");
    this.logoutButton = page.locator("#logout2");
  }

  async gotoLoginPage() {
    await this.page.goto("https://www.demoblaze.com/index.html");
  }

  async login(username, password) {
    await this.loginlink.click();
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
};
