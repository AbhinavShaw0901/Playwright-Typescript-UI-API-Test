import { expect, type Locator, type Page } from "@playwright/test";

export class AccountInfo {
  readonly page: Page;
  readonly genderRadioButton: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly addressInput: Locator;
  readonly countryList: Locator;
  readonly stateInput: Locator;
  readonly cityInput: Locator;
  readonly zipcodeInput: Locator;
  readonly mobileNumberInput: Locator;
  readonly createAccButton: Locator;
  readonly accountCreatedMessage: Locator;
  readonly accCreationSuccessMsg: Locator;
  readonly continueButton: Locator;
  readonly loggedInAsUser: Locator;

  constructor(page: Page) {
    this.page = page;
    this.genderRadioButton = page.locator("(//input[@id='id_gender1'])[1]");
    this.nameInput = page.locator("//input[@id='name']");
    this.emailInput = page.locator("//input[@id='email']");
    this.passwordInput = page.locator("//input[@id='password']");
    this.firstNameInput = page.locator("//input[@id='first_name']");
    this.lastNameInput = page.locator("//input[@id='last_name']");
    this.addressInput = page.locator("(//input[@id='address1'])[1]");
    this.countryList = page.locator("//select[@id='country']");
    this.stateInput = page.locator("(//input[@id='state'])[1]");
    this.cityInput = page.locator("//input[@id='city']");
    this.zipcodeInput = page.locator("//input[@id='zipcode']");
    this.mobileNumberInput = page.locator("//input[@id='mobile_number']");
    this.createAccButton = page.locator(
      "//button[normalize-space()='Create Account']"
    );
    this.accountCreatedMessage = page.getByText("Account Created!");
    this.accCreationSuccessMsg = page.getByText(
      "Congratulations! Your new account has been successfully created!"
    );
    this.continueButton = page.locator("//a[normalize-space()='Continue']");
    this.loggedInAsUser = page.locator("//i[@class='fa fa-user']");
  }

  async enterAccInformation(pwd: string, firstName: string) {
    await expect(this.genderRadioButton).toBeVisible();
    await expect(this.nameInput).toBeVisible();
    await expect(this.emailInput).toBeVisible();
    await expect(this.passwordInput).toBeEditable();
    await expect(this.firstNameInput).toBeEnabled();
    await expect(this.addressInput).toBeEditable();
    await expect(this.countryList).toBeVisible();
    await expect(this.stateInput).toBeEditable();
    await expect(this.cityInput).toBeEditable();
    await expect(this.zipcodeInput).toBeEditable();
    await expect(this.mobileNumberInput).toBeEditable();
    await expect(this.createAccButton).toBeEditable();
    await this.passwordInput.fill(pwd);
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill("test");
    await this.addressInput.fill("India");
    await this.stateInput.fill("MH");
    await this.cityInput.fill("Mumbai");
    await this.zipcodeInput.fill("123456");
    await this.mobileNumberInput.fill("1234567890");
    await this.createAccButton.click();
    await expect(this.accountCreatedMessage).toBeVisible();
    await expect(this.accCreationSuccessMsg).toBeVisible();
    await expect(this.continueButton).toBeVisible();
    await this.continueButton.click();
    await expect(this.loggedInAsUser).toContainText(" Logged in as ");
  }
}
