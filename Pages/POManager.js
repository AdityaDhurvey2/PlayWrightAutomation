const { LoginPage } = require("./LoginPage");
const { HomePage } = require("./HomePage");
const { CartPage } = require("./CartPage");
const { PurchaseForm } = require("./PurchaseForm");



class POManager {
  constructor(page) {
    this.page = page;

    this.loginPage = new LoginPage(this.page);
    this.homePage = new HomePage(this.page);
    this.cartPage = new CartPage(this.page);
    this.purchaseForm = new PurchaseForm(this.page);
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
};
module.exports = { POManager };
