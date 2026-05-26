import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { HomePage } from '../pages/home.page';
import { HeaderFragment } from '../pages/header.fragment';
import { ProductDetails } from '../pages/product.details.page';

test('Verify user can view product details', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const productDetails = new ProductDetails(page);
  const header = new HeaderFragment(page);

  await page.goto('/auth/login');
  await header.openSignIn();
  await loginPage.performLogin(
    'customer@practicesoftwaretesting.com',
    'welcome01',
  );

  await homePage.openHomePage();
  await homePage.clickProductByName('Combination Pliers');

  await expect(page).toHaveURL(
    'https://practicesoftwaretesting.com/product/01KSK4V4EZWSKHFTC1XJ5E8ME3',
  );
  await expect(productDetails.productName).toHaveText('Combination Pliers');
  await expect(productDetails.productPrice).toHaveText('14.15');
  await expect(productDetails.addToCartButton).toBeVisible();
  await expect(productDetails.addToFavoritesButton).toBeVisible();
});
