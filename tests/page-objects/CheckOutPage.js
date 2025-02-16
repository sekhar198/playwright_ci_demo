import { expect } from '@playwright/test';

exports.CheckOutPage= class CheckOutPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.firstNameInput = this.page.locator('[data-test="firstName"]');
    this.lastNameInput = this.page.locator('[data-test="lastName"]');
    this.postalCodeInput = this.page.locator('[data-test="postalCode"]');
    this.continueButton = this.page.locator('[data-test="continue"]');
    this.finishButton = this.page.locator('[data-test="finish"]');
    this.backToProductsButton = this.page.locator('[data-test="back-to-products"]');
  }

  async fillShippingDetails(firstName, lastName, postalCode) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
    await this.continueButton.click();
  }

  async finishCheckout() {
    await this.finishButton.click();
  }

  async goBackToProducts() {
    await this.backToProductsButton.click();
  }
}
