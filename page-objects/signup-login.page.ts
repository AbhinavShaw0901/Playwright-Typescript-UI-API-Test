import { expect, type Locator, type Page } from '@playwright/test';

export class SignupLoginPage {
  readonly page: Page;
  readonly homeLink: Locator;
  readonly signupLoginLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homeLink = page.getByRole('link', { name: ' Home' });
    this.signupLoginLink = page.getByRole('link', { name: ' Signup / Login' });
  }

  async goto() {
    await this.page.goto('/');
  }

  async navigateToLoginPage() {
    await expect(this.signupLoginLink).toBeEnabled();
    await this.signupLoginLink.click();
    await expect()
  }

}