import { Locator, Page } from '@playwright/test';
import { HeaderFragment } from './header.fragment';

export class AccountPage {
  page: Page;
  pageTitle: Locator;
  header: HeaderFragment;

  favoritesLink: Locator;
  profileLink: Locator;
  invoicesLink: Locator;
  messagesLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.getByTestId('page-title');
    this.header = new HeaderFragment(page);
    this.favoritesLink = page.getByTestId('nav-favorites');
    this.profileLink = page.getByTestId('nav-profile');
    this.invoicesLink = page.getByTestId('nav-invoices');
    this.messagesLink = page.getByTestId('nav-messages');
  }

  async openAccountPage() {
    await this.page.goto('/account');
  }
}
