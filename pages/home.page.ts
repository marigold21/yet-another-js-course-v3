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
  await this.page.locator('a', { hasText: productName }).click();
}
}
