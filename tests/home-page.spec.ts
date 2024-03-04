import { test, expect } from '../playwright-proton'

test.beforeEach(async ({ proton }) => {
    await test.step('Load Proton home page', async () => {
        await proton.goto();
        await expect(proton.headerMenu.protonLogo).toBeVisible();
    });
});

test('TestCase1.1: Validate Proton homepage', async ({ proton }) => {
    await test.step('Validate header menu', async () => {
        await expect(proton.headerMenu.productButton).toBeVisible();
        await expect(proton.headerMenu.whoWeAreButton).toBeVisible();
        await expect(proton.headerMenu.resourcesAndSupportButton).toBeVisible();
        await expect(proton.headerMenu.forBusinessLink).toBeVisible();
        await expect(proton.headerMenu.signInLink).toBeVisible();
        await expect(proton.headerMenu.createAFreeAccountLink).toBeVisible();
    });

    await test.step('Validate center menu', async () => {
        await expect(proton.centerMenu.emailLink).toBeVisible();
        await expect(proton.centerMenu.vpnLink).toBeVisible();
        await expect(proton.centerMenu.cloudStorageLink).toBeVisible();
        await expect(proton.centerMenu.passwordManagerLink).toBeVisible();
        await expect(proton.centerMenu.calendarLink).toBeVisible();
    });

    await test.step('Validate center header message', async () => {
        await proton.verifyTextMessage("A better internet starts with privacy and freedom");
        proton.verifyTextMessage("Take control of your data with end-to-end encryption");
    });

    await test.step('Verify the Proton key features are highlighted and displayed', async () => {
        proton.verifyTextMessage("End-to-end encryption");
        proton.verifyTextMessage("Swiss privacy");
        proton.verifyTextMessage("Security made easy");
        proton.verifyTextMessage("Open source and audited");
        proton.verifyTextMessage("One account, any device");
        proton.verifyTextMessage("Free forever");
    });

    await test.step('Verify important flag logos are displayed in the footer', async () => {
        await expect(proton.footerMenu.swissConfederationFlagLogo).toBeVisible();
        await expect(proton.footerMenu.europeanFlagLogo).toBeVisible();
    });

});

test('TestCase1.2: Validate global sub-menus', async ({ proton }) => {
    await test.step('Click on "Products" and validate the panel', async () => {
        await proton.headerMenu.productButton.click();
        await expect(proton.productPanel.protonMail).toBeVisible({ timeout: 3000 });
        await expect(proton.productPanel.protonCalendar).toBeVisible();
        await expect(proton.productPanel.protonDrive).toBeVisible();
        await expect(proton.productPanel.protonVpn).toBeVisible();
        await expect(proton.productPanel.protonPass).toBeVisible();
    });

    await test.step('Click on "Who we are" and validate the panel', async () => {
        await proton.headerMenu.whoWeAreButton.click();
        await expect(proton.whoWeArePanel.aboutUs).toBeVisible({ timeout: 3000 });
        await expect(proton.whoWeArePanel.team).toBeVisible();
        await expect(proton.whoWeArePanel.impact).toBeVisible();
        await expect(proton.whoWeArePanel.careers).toBeVisible();
        await expect(proton.whoWeArePanel.community).toBeVisible();
        await expect(proton.whoWeArePanel.openSOurce).toBeVisible();
    });

    await test.step('Click on "Resources & Support" and validate the panel', async () => {
        await proton.headerMenu.resourcesAndSupportButton.click();
        await expect(proton.resourcesAndSupportPanel.getStarted).toBeVisible();
        await expect(proton.resourcesAndSupportPanel.switchToProton).toBeVisible();
        await expect(proton.resourcesAndSupportPanel.resources).toBeVisible();
        await expect(proton.resourcesAndSupportPanel.blog).toBeVisible();
        await expect(proton.resourcesAndSupportPanel.news).toBeVisible();
        await expect(proton.resourcesAndSupportPanel.helpAndSupport).toBeVisible();
        await expect(proton.resourcesAndSupportPanel.passwordGenerator).toBeVisible();
        await expect(proton.resourcesAndSupportPanel.downloadTheApps).toBeVisible();
        await expect(proton.resourcesAndSupportPanel.protonMail).toBeVisible();
        await expect(proton.resourcesAndSupportPanel.protonCalendar).toBeVisible();
        await expect(proton.resourcesAndSupportPanel.protonDrive).toBeVisible();
        await expect(proton.resourcesAndSupportPanel.protonVpn).toBeVisible();
        await expect(proton.resourcesAndSupportPanel.protonPass).toBeVisible();
    });

    await test.step('Click on "For Business" and validate the panel', async () => {
        await expect(proton.footerMenu.swissConfederationFlagLogo).toBeVisible();
        await expect(proton.footerMenu.europeanFlagLogo).toBeVisible();
    });
});