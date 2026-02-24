import { test, expect } from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage";
import { HomePage } from "../Pages/HomePage";
import { CartPage } from "../Pages/CartPage";
import { PurchaseForm } from "../Pages/PurchaseForm";
import dataset from "../utils/PomtestTestData.json";

test("POM test", async ({ page }) => {
  // Login
  const login = new LoginPage(page);
  await login.gotoLoginPage();
  await login.login(dataset.username, dataset.password);

  // Home Page
  const home = new HomePage(page);
  await home.addProductToCart(dataset.productName);
  await home.gotoCart();

  // Cart Page
  const cart = new CartPage(page);
  // const status = await cart.checkProductInCart(dataset.productName);
  // expect(status).toBe(true);
  await cart.placeOrder();

  // Purchase Form
  const purchase = new PurchaseForm(page);
  await purchase.fillPurchaseForm(
    dataset.username,
    dataset.country,
    dataset.city,
    dataset.cardNumber,
    dataset.month,
    dataset.year,
  );
  await page.waitForTimeout(1000);
  await purchase.submitForm();
  await purchase.okClick();
});
