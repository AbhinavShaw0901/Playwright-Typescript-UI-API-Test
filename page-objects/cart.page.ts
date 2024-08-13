import { expect, type Locator, type Page } from "@playwright/test";

export class CartPage {
  readonly page: Page;
  readonly cartLink: Locator;
  readonly shoppingCartPageTitle: Locator;
  readonly cartInfoTable: Locator;
  readonly proceedToCheckoutButton: Locator;
  readonly placeOrderButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartLink = page.getByRole("link", { name: " Cart" });
    this.shoppingCartPageTitle = page.getByText("Shopping Cart");
    this.cartInfoTable = page.locator("#cart_info");
    this.proceedToCheckoutButton = page.locator(
      "//a[normalize-space()='Proceed To Checkout']"
    );
    this.placeOrderButton = page.getByText("Place Order");
  }

  async clickOnCartLink(): Promise<void> {
    await expect(this.cartLink).toBeVisible();
    await this.cartLink.click();
  }

  async validateShoppingCartPage(): Promise<void> {
    await expect(this.shoppingCartPageTitle).toBeVisible();
    await expect(this.cartInfoTable).toBeVisible();
  }

  async clickOnProceedToCheckoutLink(): Promise<void> {
    await expect(this.proceedToCheckoutButton).toBeVisible();
    await this.proceedToCheckoutButton.click();
  }

  async validateReviewYourOrder(page: Page): Promise<void> {
    await expect(page.getByText("Review Your Order")).toBeVisible();
    await expect(this.cartInfoTable).toBeVisible();
  }

  async placeOrder(): Promise<void> {
    await expect(this.placeOrderButton).toBeVisible();
    await this.placeOrderButton.click();
  }
}
