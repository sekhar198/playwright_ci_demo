const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./page-objects/LoginPage.js');
const { InventoryPage } = require ('./page-objects/InventoryPage') ;
const { CartPage } = require('./page-objects/CartPage');
const { CheckOutPage } = require ('./page-objects/CheckOutPage');

test('test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckOutPage(page);

  await loginPage.login('standard_user', 'secret_sauce');
  await inventoryPage.addItemToCart();
  await inventoryPage.goToCart();
  await cartPage.checkout();
  await checkoutPage.fillShippingDetails('sekhar', 'sekhar', '02864');
  await checkoutPage.finishCheckout();
  await checkoutPage.goBackToProducts();
});
