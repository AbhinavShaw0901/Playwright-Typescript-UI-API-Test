import { expect, type Locator, type Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly websiteLogo: Locator;
  readonly homeLink: Locator;
  readonly signupLoginLink: Locator;
  readonly categoryHeaderText: Locator;
  readonly categorySectionDiv: Locator;
  readonly brandsHeaderText: Locator;
  readonly brandsSectionDiv: Locator;
  readonly featuresItemHeaderText: Locator;
  readonly featuresItemDiv: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homeLink = page.getByRole("link", { name: " Home" });
    this.signupLoginLink = page.getByRole("link", { name: " Signup / Login" });
    this.websiteLogo = page.getByRole("link", {
      name: "Website for automation",
    });
    this.categoryHeaderText = page.locator(
      "//h2[normalize-space()='Category']"
    );
    this.categorySectionDiv = page.locator("//div[@id='accordian']");
    this.brandsHeaderText = page.locator("//h2[normalize-space()='Brands']");
    this.brandsSectionDiv = page.locator("//div[@class='brands-name']");
    this.featuresItemHeaderText = page.locator(
      "//h2[normalize-space()='Features Items']"
    );
    this.featuresItemDiv = page.locator("//div[@class='features_items']");
  }

  async validateWebsiteLogo() {
    await expect(this.websiteLogo).toBeVisible();
    await expect(this.websiteLogo).toBeVisible();
  }

  async validateAllLinksInHomePage(page: Page, links: Array<string>) {
    links.forEach(async function (value) {
      await page.waitForLoadState("domcontentloaded");
      console.log(value);
      await expect(page.getByRole("link", { name: `${value}` })).toBeVisible();
    });
  }

  async validateCategorySection() {
    await expect(this.categoryHeaderText).toBeVisible();
    await expect(this.categorySectionDiv).toBeVisible();
  }

  async validateBrancSection() {
    await expect(this.brandsHeaderText).toBeVisible();
    await expect(this.brandsSectionDiv).toBeVisible();
  }

  async validateFeaturesItem() {
    await expect(this.featuresItemHeaderText).toBeVisible();
    await expect(this.featuresItemDiv).toBeVisible();
  }
}
