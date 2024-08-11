import { test } from "@playwright/test";
import { HomePage } from "../page-objects/home.page";

let websiteLinks: string[] = [
  " Home",
  " Products",
  " Signup / Login",
  " Cart",
  " Test Cases",
  " API Testing",
  " Video Tutorials",
];

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("domcontentloaded");
});

test.describe("Home Page", () => {
  test("validate if all the top hyperlinks are displyed on home page", async ({
    page,
  }) => {
    const homePage = new HomePage(page);
    await test.step("Verify the homepage logo", async () => {
      await homePage.validateWebsiteLogo();
    });
    await test.step("verify all links are present in homepage", async () => {
      await homePage.validateAllLinksInHomePage(page, websiteLinks);
    });
  });
  test("validate if the brands , category and features item sections displayed on home page", async ({
    page,
  }) => {
    const homePage = new HomePage(page);
    await test.step("Verify that the Category section is displayed", async () => {
      await homePage.validateCategorySection();
    });
    await test.step("Verify that the Featured Items section is displayed", async () => {
      await homePage.validateBrancSection();
    });
    await test.step("Verify that the Brands section is displayed", async () => {
      await homePage.validateCategorySection();
    });
  });
});
