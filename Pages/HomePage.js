exports.HomePage = class HomePage {
  constructor(page) {
    this.page = page;
    this.productList = page.locator("#tbodyid");
    this.addToCartbtn = page.getByRole("link", { name: "Add to cart" });
    this.cart = page.locator("#cartur");
  }

  async addProductToCart(productName) {
    const productList = this.productList.filter({ hasText: productName });

    await productList.click();

    await this.page.once("dialog", async (dialog) => {
      await dialog.accept();
    });
    await this.addToCartbtn.click();
  }
  async gotoCart() {
    await this.cart.click();
  }
};
