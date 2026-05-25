import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { HomePage } from '../pages/home.page';
import { ProductDetails } from '../pages/product.details.page';

test('Verify user can view product details', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const productDetails = new ProductDetails(page);

  await page.goto('/auth/login');
  await page.getByTestId('nav-sign-in').click();
  await loginPage.performLogin(
    'customer@practicesoftwaretesting.com',
    'welcome01',
  );

  await homePage.openHomePage();
  await homePage.clickProductByName('Combination Pliers');

  await expect(page).toHaveURL(
    'https://practicesoftwaretesting.com/product/01KSG84PZ87MTTKSKSK6D8YJTY',
  );
  await expect(productDetails.productName).toHaveText('Combination Pliers');
  await expect(productDetails.productPrice).toHaveText('14.15');
  await expect(productDetails.addToCartButton).toBeVisible();
  await expect(productDetails.addToFavoritesButton).toBeVisible();
});
