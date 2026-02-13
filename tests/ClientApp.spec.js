const { test, expect } = require("@playwright/test");

test("client App login", async ({ page }) => {
  const productName = "Zara Coat 3";
  const products = page.locator(".card-body");
  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("#userEmail").fill("aditya101@gmail.com");
  await page.locator("#userPassword").fill("Aditya@963094");
  await page.locator("#login").click();
  await page.waitForLoadState("networkidle");
  await page.locator(".card-body b").first().waitFor();
  const titles = await page.locator(".card-body b").allTextContents();
  console.log(titles);
  const count = products.count();
  for (let i = 0; i < count; ++i) {
    if ((await products.nth(i).locator("b").textContent()) === productName) {
      // add to cart
      await products.nth(i).locator("text= Add To Cart").click();
      break;
    }
  }
  await page.pause();
});
