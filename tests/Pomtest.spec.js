import { test, expect } from "@playwright/test";
const { POManager } = require("../Pages/POManager");

import dataset from "../utils/PomtestTestData.json";

for (const data of dataset) {
  test(`POM test for user ${data.username}`, async ({ page }) => {
    const poManager = new POManager(page);
    // Login
    const login = poManager.getLoginPage();
    await login.gotoLoginPage();

    await expect(page).toHaveURL("https://www.demoblaze.com/index.html");
    await expect(page).toHaveTitle("STORE");
    await expect(login.logoElement).toBeVisible();

    await expect(login.usernameInput).toBeEnabled();
    await expect(login.passwordInput).toBeEnabled();

    await login.login(data.username, data.password);
    await expect(login.logoutButton).toBeVisible();

    // Home Page
    const home = poManager.getHomePage();
    await expect(home.productList).toBeVisible();
    await home.addProductToCart(data.productName);
    await home.gotoCart();

    // Cart Page
    const cart = poManager.getCartPage();
    const status = await cart.checkProductInCart(data.productName);
    expect(status).toBe(true);
    await cart.placeOrder();

    // Purchase Form
    const purchase = poManager.getPurchaseForm();
    await purchase.fillPurchaseForm(
      data.username,
      data.country,
      data.city,
      data.cardNumber,
      data.month,
      data.year,
    );
    await page.waitForTimeout(1000);
    await purchase.submitForm();
    await purchase.okClick();

    // Logout
    const logout = poManager.getLogoutPage();
    await logout.logout();
    await expect(logout.loginButton).toBeVisible();
  });
}
