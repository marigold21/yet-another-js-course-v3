import { Page } from '@playwright/test';
import { HeaderFragment } from './header.fragment';

export class HomePage {
  page: Page;
  header: HeaderFragment;

  constructor(page: Page) {
    this.page = page;
    this.header = new HeaderFragment(page);
  }

  async openHomePage() {
    await this.page.goto('/');
  }

async clickProductByName(productName: string) {
  const productLocator = this.page
    .getByTestId('product-name')
    .filter({ hasText: new RegExp(productName) });
  
  await productLocator.first().waitFor({ state: 'visible', timeout: 60000 });
  await productLocator.first().click();
}
}
