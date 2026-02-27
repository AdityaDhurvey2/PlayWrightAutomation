const { LoginPage } = require("./LoginPage");
const { HomePage } = require("./HomePage");
const { CartPage } = require("./CartPage");
const { PurchaseForm } = require("./PurchaseForm");
const { LogoutPage } = require("./LogoutPage");



class POManager {
  constructor(page) {
    this.page = page;

    this.loginPage = new LoginPage(this.page);
    this.homePage = new HomePage(this.page);
    this.cartPage = new CartPage(this.page);
    this.purchaseForm = new PurchaseForm(this.page);
    this.logoutPage = new LogoutPage(this.page);
  }

  getLoginPage() {
    return this.loginPage;
  }
  getHomePage() {
    return this.homePage;
  }
  getCartPage() {
    return this.cartPage;
  }
  getPurchaseForm() {
    return this.purchaseForm;
  }
  getLogoutPage() {
    return this.logoutPage;
  }
};
module.exports = { POManager };
