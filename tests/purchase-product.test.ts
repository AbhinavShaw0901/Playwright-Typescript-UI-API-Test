import { test } from "@playwright/test";
import { HomePage } from "../page-objects/home.page";
import { SignupLoginPage } from "../page-objects/signup-login.page";
import { SearchProductPage } from "../page-objects/search-product.page";

import { productData } from "../test-data/products.json";
import { userData } from "../test-data/users.json";
import { CartPage } from "../page-objects/cart.page";
let productType: string = productData.productType;
let email: string = userData.email;
let password: string = userData.password;

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("domcontentloaded");
  const homePage = new HomePage(page);
  homePage.clickOnLink(page, " Signup / Login");
});

test.describe("Search, Add to Cart and Purchase a Product", () => {
  test("search a product and add to cart", async ({ page }) => {
    const signupLoginPage = new SignupLoginPage(page);
    const searchProductPage = new SearchProductPage(page);
    await signupLoginPage.loginWithValidUser(email, password);
    await searchProductPage.searchProduct(productType);
    await searchProductPage.clickOnAddToCart();
  });
  test("validate that the product is added to the cart successfully", async ({
    page,
  }) => {
    const signupLoginPage = new SignupLoginPage(page);
    const cartPage = new CartPage(page);
    await signupLoginPage.loginWithValidUser(email, password);
    await cartPage.clickOnCartLink();
    await cartPage.validateShoppingCartPage();
  });

  test("proceed to checkout and make the paymentscreen", async ({ page }) => {
    const signupLoginPage = new SignupLoginPage(page);
    const cartPage = new CartPage(page);
    await signupLoginPage.loginWithValidUser(email, password);
    await cartPage.clickOnCartLink();
    await cartPage.clickOnProceedToCheckoutLink();
    
  });
});
