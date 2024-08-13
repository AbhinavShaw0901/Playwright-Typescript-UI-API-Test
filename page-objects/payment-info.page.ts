import { expect, type Locator, type Page } from "@playwright/test";

export class PaymentInfoPage {
  readonly page: Page;
  readonly paymentInfoHeader: Locator;
  readonly cardHolderNameInput: Locator;
  readonly cardNumberInput: Locator;
  readonly cvcInput: Locator;
  readonly expiryMonthInput: Locator;
  readonly expiryYearInput: Locator;
  readonly submitOrderButton: Locator;
  readonly orderConfirmationMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.paymentInfoHeader = page.getByRole("heading", { name: "Payment" });
    this.cardHolderNameInput = page.locator("//input[@name='name_on_card']");
    this.cardNumberInput = page.locator("//input[@name='card_number']");
    this.cvcInput = page.locator("//input[@name='cvc']");
    this.expiryMonthInput = page.locator("//input[@name='expiry_month']");
    this.expiryYearInput = page.locator("//input[@name='expiry_year']");
    this.submitOrderButton = page.locator("//button[@id='submit']");
    this.orderConfirmationMessage = page.getByText(
      "Congratulations! Your order has been confirmed!"
    );
  }

  async paymentDetailAndPlaceOrder(): Promise<void> {
    await expect(this.paymentInfoHeader).toBeVisible();
    await expect(this.cardHolderNameInput).toBeEditable();
    await expect(this.cardNumberInput).toBeEditable();
    await expect(this.cvcInput).toBeEditable();
    await expect(this.expiryMonthInput).toBeEditable();
    await expect(this.expiryYearInput).toBeEditable();
    await expect(this.submitOrderButton).toBeEnabled();
    await this.cardHolderNameInput.fill("test");
    await this.cardNumberInput.fill("5555555555554444");
    await this.cvcInput.fill("123");
    await this.expiryMonthInput.fill("11");
    await this.expiryYearInput.fill("1111");
    await this.submitOrderButton.click();
    await expect(this.orderConfirmationMessage).toBeVisible();
  }
}
