import { Locator, Page, expect } from "@playwright/test";
import { PROTON_ACCOUNT_URL } from "../resources/constants";

export class ProtonSignUpPage {
    readonly page: Page;
    readonly createYourProtonAccountHeader: Locator;
    readonly protonLogo: Locator;
    readonly userNameTextBox: Locator;
    readonly passwordTextBox: Locator;
    readonly repeatPasswordTextBox: Locator;
    readonly createAccountButton: Locator;
    readonly signInLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.createYourProtonAccountHeader = this.page.getByRole('heading', { name: 'Create your Proton Account' });
        this.userNameTextBox = this.page.frameLocator('iframe[title="Username"]').getByTestId('input-input-element');
        this.passwordTextBox = this.page.getByLabel('Password', { exact: true });
        this.repeatPasswordTextBox = this.page.getByLabel('Repeat password');
        this.createAccountButton = this.page.getByRole('button', { name: 'Create account' });
        this.signInLink = this.page.getByRole('link', { name: 'Sign in' });
    }

    async isLoaded() {
        await this.page.waitForLoadState("domcontentloaded");
        await expect(this.page).toHaveURL(PROTON_ACCOUNT_URL + "signup");
    }
}