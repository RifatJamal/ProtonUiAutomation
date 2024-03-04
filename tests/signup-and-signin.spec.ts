import { ProtonSignInPage } from '../pages/account-login';
import { ProtonSignUpPage } from '../pages/account-registration';
import { ProtonMailPricingPage } from '../pages/mail-pricing';
import { test, expect } from '../playwright-proton'

test.beforeEach(async ({ proton }) => {
    await test.step('Load Proton home page', async () => {
        await proton.goto();
        await expect(proton.headerMenu.protonLogo).toBeVisible();
    });
});
test('TestCase3.1: Validate sign in and sign up flow', async ({ page, proton }) => {
    const protonSignInPage = new ProtonSignInPage(page);
    const protonSignUpPage = new ProtonSignUpPage(page);

    await test.step('Select "Sign in" option from the header and login page is displayed', async () => {
        await proton.headerMenu.signInLink.click();
        await protonSignInPage.isLoaded();
        await expect(protonSignInPage.emailOrUserNameTextBox).toBeVisible();
        await expect(protonSignInPage.passwordTextBox).toBeVisible();
        await expect(protonSignInPage.eyeIcon).toBeVisible();
    });

    await test.step('Select "Trouble signing in?" link', async () => {
        await protonSignInPage.troubleSigningIn.click();
        await expect(protonSignInPage.resetPassword).toBeVisible();
        await expect(protonSignInPage.forgorUserName).toBeVisible();
    });

    await test.step('Select "Create account" link', async () => {
        await protonSignInPage.createAccountLink.click();
        protonSignUpPage.isLoaded();
        await expect(protonSignUpPage.userNameTextBox).toBeVisible();
        await expect(protonSignUpPage.passwordTextBox).toBeVisible();
        await expect(protonSignUpPage.repeatPasswordTextBox).toBeVisible();
        await expect(protonSignUpPage.createAccountButton).toBeVisible();
    });

    await test.step('Select "Sign in" link', async () => {
        await protonSignUpPage.signInLink.click();
        await protonSignInPage.isLoaded();
    });
});

test('TestCase3.2: Validate "Create a free acount" flow', async ({ page, proton }) => {
    await test.step('Select "Create a free account" from the header', async () => {
        const protonMailPricingPage = new ProtonMailPricingPage(page);
        proton.headerMenu.createAFreeAccountLink.click();
        protonMailPricingPage.isLoaded();
        await expect(protonMailPricingPage.headerMenu.pricingTab.protonFree).toBeVisible();
        await expect(protonMailPricingPage.headerMenu.pricingTab.mailPlus).toBeVisible();
        await expect(protonMailPricingPage.headerMenu.pricingTab.protonUnlimited).toBeVisible();
    });

    await test.step('Select "Businesses" tab', async () => {
        // ...
    });

    await test.step('Select "Families" tab', async () => {
        // ...
    });
});