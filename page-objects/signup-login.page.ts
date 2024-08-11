import { expect, type Locator, type Page } from "@playwright/test";

export class SignupLoginPage {
  readonly page: Page;
  readonly homeLink: Locator;
  readonly signupLoginLink: Locator;
  readonly loginEmail: Locator;
  readonly loginPassword: Locator;
  readonly loginButton: Locator;
  readonly registerUserName: Locator;
  readonly registerUserEmail: Locator;
  readonly signUpButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homeLink = page.getByRole("link", { name: " Home" });
    this.signupLoginLink = page.getByRole("link", { name: " Signup / Login" });
    this.loginEmail = page.locator("//input[@data-qa='login-email']");
    this.loginPassword = page.locator("//input[@data-qa='login-password']");
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.registerUserName = page.locator("//input[@data-qa='signup-name']");
    this.registerUserEmail = page.locator("//input[@data-qa='signup-email']");
    this.signUpButton = this.loginButton = page.getByRole("button", {
      name: "Signup",
    });
  }

  async navigateToLoginPage() {
    await expect(this.signupLoginLink).toBeEnabled();
    await this.signupLoginLink.click();
  }

  async registerNerUser(name: string, email: string) {
    await expect(this.registerUserName).toBeEnabled();
    await expect(this.registerUserEmail).toBeEnabled();
    await expect(this.signUpButton).toBeEnabled();
    await this.registerUserName.fill(name);
    await this.registerUserEmail.fill(email);
    await this.signUpButton.click();
  }

  async loginWithValidUser(email: string, password: string) {
    await expect(this.loginEmail).toBeEnabled();
    await expect(this.loginPassword).toBeEnabled();
    await this.loginEmail.fill(email);
    await this.loginPassword.fill(password);
    await this.loginButton.click();
  }

  async validatedLoggedInUsed(page: Page, user: string) {
    const loggedInAsText: Locator = page.getByText(`Logged in as ${user}`);
    await expect(loggedInAsText).toBeVisible();
  }
}
