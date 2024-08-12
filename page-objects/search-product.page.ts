import { expect, type Locator, type Page } from "@playwright/test";

export class SearchProductPage {
  readonly page: Page;
  readonly productsLink: Locator;
  readonly searchProductInput: Locator;
  readonly searchProductSubmitButton: Locator;
  readonly addToCartButton: Locator;
  readonly viewProductDetailsButton: Locator;
  readonly productAddedHeading: Locator;
  readonly productAddedToCartMsg: Locator;
  readonly continueShoppingButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productsLink = page.locator("//a[@href='/products']");
    this.searchProductInput = page.getByPlaceholder("Search Product");
    this.searchProductSubmitButton = page.locator(
      "//button[@id='submit_search']"
    );
    this.addToCartButton = page.locator(
      "div[class='productinfo text-center'] a[class='btn btn-default add-to-cart']"
    );
    this.viewProductDetailsButton = page.getByRole("link", {
      name: " View Product",
    });
    this.productAddedHeading = page.getByRole("heading", { name: "Added!" });
    this.productAddedToCartMsg = page.getByText("Your product has been added");
    this.continueShoppingButton = page.getByRole("button", {
      name: "Continue Shopping",
    });
  }

  async searchProduct(productName: string): Promise<void> {
    await expect(this.productsLink).toBeVisible();
    await this.productsLink.click();
    await expect(this.searchProductInput).toBeEditable();
    await expect(this.searchProductSubmitButton).toBeEnabled();
    await this.searchProductInput.fill(productName);
    await this.searchProductSubmitButton.click();
    await expect(this.addToCartButton).toBeVisible();
    await expect(this.viewProductDetailsButton).toBeVisible();
  }

  async clickOnAddToCart(): Promise<void> {
    await expect(this.addToCartButton).toBeVisible();
    await this.addToCartButton.click();
    await expect(this.productAddedHeading).toBeVisible();
    await expect(this.productAddedToCartMsg).toBeVisible();
    await expect(this.continueShoppingButton).toBeVisible();
  }
}
