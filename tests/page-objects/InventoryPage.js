import { expect } from '@playwright/test';

exports.InventoryPage= class InventoryPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.addToCartButton = this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.shoppingCartLink = this.page.locator('[data-test="shopping-cart-link"]');
  }

  async addItemToCart() {
    await this.addToCartButton.click();
  }

  async goToCart() {
    await this.shoppingCartLink.click();
  }
}

