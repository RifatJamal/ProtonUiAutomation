import { Locator, Page, expect } from "@playwright/test";
import { PROTON_ACCOUNT_URL } from "../resources/constants";

export class ProtonSignInPage {
    readonly page: Page;
    readonly signInHeader: Locator;
    readonly protonLogo: Locator;
    readonly emailOrUserNameTextBox: Locator;
    readonly passwordTextBox: Locator;
    readonly signInButton: Locator;
    readonly createAccountLink: Locator;
    readonly eyeIcon: Locator;
    readonly troubleSigningIn: Locator;
    readonly resetPassword: Locator;
    readonly forgorUserName: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signInHeader = this.page.getByRole('heading', { name: 'Sign in' });
        this.protonLogo = this.page.getByRole('link', { name: 'Proton' });
        this.emailOrUserNameTextBox = this.page.getByLabel('Email or username');
        this.passwordTextBox = this.page.getByLabel('Password');
        this.signInButton = this.page.getByRole('button', { name: 'Sign in' });
        this.createAccountLink = this.page.getByRole('link', { name: 'Create account' });
        this.eyeIcon = this.page.getByRole('button', { name: 'Reveal password' });
        this.troubleSigningIn = this.page.getByRole('button', { name: 'Trouble signing in?' });
        this.resetPassword = this.page.getByRole('link', { name: 'Reset password' });
        this.forgorUserName = this.page.getByRole('link', { name: 'Forgot username?' });
    }

    async isLoaded() {
        await expect(this.signInHeader).toBeVisible();
        await expect(this.page).toHaveURL(PROTON_ACCOUNT_URL + "login");
    }
}