const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./page-objects/LoginPage.js');
const { InventoryPage } = require('./page-objects/InventoryPage');
const { CartPage } = require('./page-objects/CartPage');
const { CheckOutPage } = require('./page-objects/CheckOutPage');

var testdata = require('../testdata.json');


test('test case with data', async ({ page }) => {

  console.log(testdata.login.username + ' ' + testdata.login.password);
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckOutPage(page);

  const { username, password } = testdata.login;
  const { firstName, lastName, zipCode } = testdata.shippingDetails;

  await loginPage.login(username, password);
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await inventoryPage.addItemToCart();
  await inventoryPage.goToCart();
  await cartPage.checkout();
  await checkoutPage.fillShippingDetails(firstName, lastName, zipCode);
  await checkoutPage.finishCheckout();
  await checkoutPage.goBackToProducts();
});

