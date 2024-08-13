import { test } from "@playwright/test";
import { HomePage } from "../../page-objects/home.page";
import { SignupLoginPage } from "../../page-objects/signup-login.page";
import { Random } from "../../utils/random";
import { AccountInfo } from "../../page-objects/account-info.page";
//declear global variables for this file
const random = new Random();
let name: string = random.getRandomName(5);
let email: string = random.getRandomEmail(5);
let password: string = random.getRandomName(5);

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("domcontentloaded");
  const homePage = new HomePage(page);
  homePage.clickOnLink(page, " Signup / Login");
});

test.describe("Register New User", () => {
  test("validate user registration", { tag: "@web" }, async ({ page }) => {
    const signupLoginPage = new SignupLoginPage(page);
    const accountInfoPage = new AccountInfo(page);
    console.log(`username: ${name} , email: ${email}`);
    await signupLoginPage.registerNerUser(name, email);
    await accountInfoPage.enterAccInformation(name, password);
  });
  test(
    "validate that newly registered user is able to login successfully",
    { tag: "@web" },
    async ({ page }) => {
      const signupLoginPage = new SignupLoginPage(page);
      await signupLoginPage.loginWithValidUser(email, password);
    }
  );
});
