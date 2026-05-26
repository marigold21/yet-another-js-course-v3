import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { AccountPage } from '../pages/account.page';

test.skip('Verify login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto('/auth/login');
  await page.getByTestId('nav-sign-in').click();
  await loginPage.performLogin(
    'customer@practicesoftwaretesting.com',
    'welcome01',
  );
  //await page.getByTestId('email').fill('customer@practicesoftwaretesting.com');
  //await page.getByTestId('password').fill('welcome01');
  //await page.getByTestId('login-submit').click();

  await expect(page).toHaveURL('https://practicesoftwaretesting.com/account');

  const accountPage = new AccountPage(page);
  await expect(accountPage.pageTitle).toHaveText('My Account', {
    ignoreCase: true,
  });
  await expect(accountPage.header.userMenuDropdown).toHaveText('Jane Doe');
});
