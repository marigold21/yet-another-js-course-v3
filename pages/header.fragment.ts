import { Locator, Page } from '@playwright/test';

export class HeaderFragment {
    page: Page;
    signInButton: Locator;
    homeButton: Locator;
    categoriesDropdown: Locator;
    contactButton: Locator;
    userMenuDropdown: Locator;
    signOutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signInButton = page.getByTestId('nav-sign-in');
        this.homeButton = page.getByTestId('nav-home');
        this.categoriesDropdown = page.getByTestId('nav-categories');
        this.contactButton = page.getByTestId('nav-contact');
        this.userMenuDropdown = page.getByTestId('nav-menu');
        this.signOutButton = page.getByTestId('nav-sign-out');
    }

    async openSignIn() {
        await this.signInButton.click();
    }

    async openHome() {
        await this.homeButton.click();
    }

    async openUserMenuDropdown() {
        await this.userMenuDropdown.click();
    }

    async signOut() {
        await this.openUserMenuDropdown();
        await this.signOutButton.click();
    }
}