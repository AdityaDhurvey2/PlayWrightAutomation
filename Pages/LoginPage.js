const { expect } = require("allure-playwright");

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginlink = page.getByRole("link", { name: "Log in" });
    expect(this.loginlink).toBeVisible();
    this.usernameInput = page.locator("input#loginusername");
    this.passwordInput = page.locator("input#loginpassword");
    this.loginButton = page.getByRole("button", { name: "Log in" });
  }

  async gotoLoginPage() {
    await this.page.goto("https://www.demoblaze.com/index.html");
    // await expect(page).toHaveURL("https://www.demoblaze.com/index.html");
    // await expect(page).toHaveTitle("STORE");
  }

  async login(username, password) {
    await this.loginlink.click();
    await this.page.locator("#logInModal").waitFor();
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
};
