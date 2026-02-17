class DashboardPage {
  constructor(page) {
    this.products = page.locator(".card-body b");
    this.productsText = page.locator(".card-body b");
    this.cart = page.locator("[routerlink*='cart']");
  }
  async searchProductAddCart(productName) {
    const count = await this.products.count();

    for (let i = 0; i < count; ++i) {
      const text = await this.products.nth(i).textContent();

      if (text.trim() === productName) {
        await this.products
          .nth(i)
          .locator("xpath=ancestor::div[@class='card-body']")
          .locator("text=Add To Cart")
          .click();
        break;
      }
    }
  }

  async navigateTocart() {
    await this.cart.click();
  }
}
module.exports = { DashboardPage };
