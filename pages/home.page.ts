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
    const responsePromise = this.page.waitForResponse('**/products');
    await this.page.goto('/');
    await responsePromise;
  }

  async clickProductByName(productName: string) {
    await this.page
      .locator('[data-test="product-name"]')
      .filter({ hasText: new RegExp(productName) })
      .click();
  }
}
