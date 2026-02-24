exports.PurchaseForm = class PurchaseForm {
  constructor(page) {
    this.page = page;
    this.nameInput = page.locator("#name");
    this.countryInput = page.getByLabel("Country:");
    this.cityInput = page.getByLabel("City:");
    this.creditCardInput = page.getByLabel("Credit card:");
    this.monthInput = page.getByLabel("Month:");
    this.yearInput = page.getByLabel("Year:");
    this.purchaseButton = page.getByRole("button", { name: "Purchase" });
    this.okButton = page.locator(".confirm");
    this.diolog = page.locator("//div[contains(@class,'sweet-alert')]");
  }

  async fillPurchaseForm(name, country, city, creditCard, month, year) {
    await this.nameInput.fill(name);
    await this.countryInput.fill(country);
    await this.cityInput.fill(city);
    await this.creditCardInput.fill(creditCard);
    await this.monthInput.fill(month);
    await this.yearInput.fill(year);
  }

  async submitForm() {
    await this.page.waitForTimeout(1000);
    await this.purchaseButton.click();
    await this.page.waitForTimeout(1000);
  }
  async okClick() {
    // await this.page.waitForTimeout(1000);
    await this.diolog.waitFor({ state: "visible" });
    await this.okButton.click();
    await this.page.waitForTimeout(1000);
  }
};
