//Create a class for each page in javascript
// export class LoginPage{
//     constructor(page){

//         this.page = page
//     }         //This is method for constructor
    
    
//     visit = async() =>{             //This is a funtion
//         await this.page.goto("/")
//     }

//     await page.locator('[data-test="username"]').click();
// }

import { expect } from '@playwright/test';

exports.LoginPage= class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.usernameInput = this.page.locator('[data-test="username"]');
    this.passwordInput = this.page.locator('[data-test="password"]');
    this.loginButton = this.page.locator('[data-test="login-button"]');
  }

  async login(username, password) {
    await this.page.goto('/');
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}


