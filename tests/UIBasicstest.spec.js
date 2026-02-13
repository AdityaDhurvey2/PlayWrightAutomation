const { test, expect } = require("@playwright/test");
const { log } = require("node:console");
const { promises } = require("node:dns");

test("Browser Context Playwright test", async ({ browser }) => {
  // playwright code-
  //First test
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const username = page.locator("#username");
  const signin = page.locator("#signInBtn");
  console.log(await page.title());

  await username.fill("aditya");
  // await page.pause();
  await page.locator("[type='password']").fill("Learning@830$3mK2");
  await signin.click();
  console.log(await page.locator("[style*='display: block']").textContent());
  await expect(page.locator("[style*='display: block']")).toContainText(
    "Incorrect",
  );

  await username.fill("");
  await username.fill("rahulshettyacademy");
  await signin.click();
  console.log(await page.locator(".card-body a").first().textContent());
  console.log(await page.locator(".card-body a").nth(1).textContent());
});

test("UI Controls", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

  const username = page.locator("#username");
  const signin = page.locator("#signInBtn");
  const documentlink = page.locator("[href*='documents-request']");

  await username.fill("rahulshettyacademy");
  await page.locator("[type='password']").fill("Learning@830$3mK2");
  await signin.click();

  const dropdown = page.locator(".form-control[data-style='btn-info']");
  await dropdown.selectOption("consult");
  await page.locator(".radiotextsty").last().click();
  await page.locator("#okayBtn").click();
  console.log(await page.locator(".radiotextsty").last().isChecked());
  await expect(page.locator(".radiotextsty").last()).toBeChecked();
  await page.locator("#terms").click();
  await expect(page.locator("#terms")).toBeChecked();
  // expect(await page.locator("#terms").isChecked()).toBeFalsy();
  await expect(documentlink).toHaveAttribute("class", "blinkingText");

  // await page.pause();
});

test.only("child windows Handling", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  const username = page.locator("#username");

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const documentlink = page.locator("[href*='documents-request']");

  const [newpage] = await Promise.all([
    context.waitForEvent("page"), //listen for any new page to open
    documentlink.click(),
  ]); // new page is opening

  const text = await newpage.locator(".red").textContent();
  const arrayText = text.split("@");
  const domain = arrayText[1].split(" ")[0];
  console.log(domain);
  await page.locator("#username").fill(domain);
  await page.pause();
  console.log(await page.locator("#username").textContent());
});
