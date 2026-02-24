exports.CartPage = class CartPage {
  constructor(page) {
    this.page = page;
    this.noOfProducts = page.locator("#tbodyid > tr > td:nth-child(2)");
  }
  async checkProductInCart(productName) {
    const productsInCart = this.noOfProducts;
    const count = await productsInCart.count();
    for (let i = 0; i < count; i++) {
      const productText = await productsInCart.nth(i).textContent();
      if (productText.trim() === productName) {
        return true;
      }
    }
    return false;
  }

  async placeOrder() {
    await this.page.getByRole("button", { type: "button" }).click();
   
  }
};
