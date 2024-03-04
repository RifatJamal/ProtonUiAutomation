import { ProtonForBusinessPage } from '../pages/business';
import { ProtonCalendarPage } from '../pages/calendar';
import { ProtonDrivePage } from '../pages/drive';
import { ProtonPassPage } from '../pages/pass';
import { test, expect } from '../playwright-proton'

test.beforeEach(async ({ proton }) => {
    await test.step('Load Proton home page', async () => {
        await proton.goto();
        await proton.isLoaded();
        await expect(proton.headerMenu.protonLogo).toBeVisible();
    });
});

test('TestCase2.1: Validate center menu naviagations', async ({ page, proton, protonMail }) => {
    await test.step('Select email link and validate the email page', async () => {
        await proton.centerMenu.emailLink.click();
        await protonMail.isLoaded();
        await expect(protonMail.secureEmailThatProtectsMessage).toBeVisible();
        await expect(protonMail.headerMenu.protonMailLogo).toBeVisible();
        await expect(protonMail.headerMenu.overview).toBeVisible();
        await expect(protonMail.headerMenu.security).toBeVisible();
        await expect(protonMail.headerMenu.pricing).toBeVisible();
        await expect(protonMail.headerMenu.bridge).toBeVisible();
        await expect(protonMail.headerMenu.download).toBeVisible();
        await expect(protonMail.headerMenu.support).toBeVisible();
    });

    await test.step('Click on Proton logo in the header', async () => {
        await protonMail.headerMenu.protonLogo.click();
        await proton.isLoaded();
    });

    await test.step('Select cloud storage link and validate the drive page', async () => {
        await proton.centerMenu.cloudStorageLink.click();
        const protonDrive = new ProtonDrivePage(page);
        await protonDrive.isLoaded();
        await expect(protonDrive.getStartedWith5GbFreeCloudMessage).toBeVisible();
        await expect(protonDrive.headerMenu.protonDriveLogo).toBeVisible();
        await expect(protonDrive.headerMenu.overview).toBeVisible();
        await expect(protonDrive.headerMenu.security).toBeVisible();
        await expect(protonDrive.headerMenu.sharing).toBeVisible();
        await expect(protonDrive.headerMenu.pricing).toBeVisible();
        await expect(protonDrive.headerMenu.download).toBeVisible();
        await expect(protonDrive.headerMenu.support).toBeVisible();
        await expect(protonDrive.enterYourEmailAddressTextBox).toBeVisible();
        await protonDrive.headerMenu.protonLogo.click();
        await proton.isLoaded();
    });

    await test.step('Select password manager link and validate the pass page', async () => {
        await proton.centerMenu.passwordManagerLink.click();
        const protonPass = new ProtonPassPage(page);
        await protonPass.isLoaded();
        await expect(protonPass.openSourceAndAncryptedMessage).toBeVisible();
        await expect(protonPass.headerMenu.protonPassLogo).toBeVisible();
        await expect(protonPass.headerMenu.overview).toBeVisible();
        await expect(protonPass.headerMenu.security).toBeVisible();
        await expect(protonPass.headerMenu.aliases).toBeVisible();
        await expect(protonPass.headerMenu.sharing).toBeVisible();
        await expect(protonPass.headerMenu.download).toBeVisible();
        await expect(protonPass.headerMenu.pricing).toBeVisible();
        await expect(protonPass.headerMenu.support).toBeVisible();
        await expect(protonPass.headerMenu.forBusiness).toBeVisible();
        await expect(protonPass.getProtonPassButton).toBeVisible();
        await protonPass.headerMenu.protonLogo.click();
        await proton.isLoaded();
    });

    await test.step('Select calendar link and validate the calendar page', async () => {
        await proton.centerMenu.calendarLink.click();
        const protonCalendar = new ProtonCalendarPage(page);
        await protonCalendar.isLoaded();
        await expect(protonCalendar.yourScheduleIsWorthMessage).toBeVisible();
        await expect(protonCalendar.headerMenu.protonCalendarLogo).toBeVisible();
        await expect(protonCalendar.headerMenu.overview).toBeVisible();
        await expect(protonCalendar.headerMenu.features).toBeVisible();
        await expect(protonCalendar.headerMenu.security).toBeVisible();
        await expect(protonCalendar.headerMenu.download).toBeVisible();
        await expect(protonCalendar.headerMenu.support).toBeVisible();
        await expect(protonCalendar.seeAllCalendarFeaturesLink).toBeVisible();
        await protonCalendar.headerMenu.protonLogo.click();
        await proton.isLoaded();
    });
});

test('TestCase2.2: Validate menu naviagations for "Products""', async ({ page, proton, protonMail }) => {
    await test.step('Select "Products" from the global menu, then select "Proton Mail""', async () => {
        await proton.headerMenu.productButton.click();
        await proton.productPanel.protonMail.click();
        await protonMail.isLoaded();
        await expect(protonMail.headerMenu.protonMailLogo).toBeVisible();
        await expect(protonMail.secureEmailThatProtectsMessage).toBeVisible();
        await expect(protonMail.createAFreeAccount).toBeVisible();
    });

    await test.step('Select "Products" from the global menu, then select "Proton Calendar"', async () => {
        await proton.headerMenu.productButton.click();
        await proton.productPanel.protonCalendar.click();
        const protonCalendar = new ProtonCalendarPage(page);
        await protonCalendar.isLoaded();
        await expect(protonCalendar.headerMenu.protonCalendarLogo).toBeVisible();
        await expect(protonCalendar.yourScheduleIsWorthMessage).toBeVisible();
    });

    await test.step('Select "Products" from the global menu, then select "Proton Drive"', async () => {
        await proton.headerMenu.productButton.click();
        await proton.productPanel.protonDrive.click();
        const protonDrive = new ProtonDrivePage(page);
        await protonDrive.isLoaded();
        await expect(protonDrive.headerMenu.protonDriveLogo).toBeVisible();
        await expect(protonDrive.getStartedWith5GbFreeCloudMessage).toBeVisible();
    });

    await test.step('Select "Products" from the global menu, then select "Proton Pass"', async () => {
        await proton.headerMenu.productButton.click();
        await proton.productPanel.protonPass.click();
        const protonPass = new ProtonPassPage(page);
        await protonPass.isLoaded();
        await expect(protonPass.headerMenu.protonPassLogo).toBeVisible();
        await expect(protonPass.openSourceAndAncryptedMessage).toBeVisible();
    });
});

test('TestCase2.3: Validate menu naviagations for "Who are we"', async ({ proton, protonMail }) => {

    await test.step('Select "Who are we" from the global menu, then select "About us"', async () => {
        await proton.headerMenu.whoWeAreButton.click();
        await proton.whoWeArePanel.aboutUs.click();
        await proton.verifyTextMessage("We believe a better world starts with privacy and digital freedom");
        await proton.verifyUrlEndPointText("about");
    });

    await test.step('Select "Who are we" from the global menu, then select "Team"', async () => {
        await proton.headerMenu.whoWeAreButton.click();
        await proton.whoWeArePanel.team.click();
        await proton.verifyTextMessage("Meet the Proton team");
        await proton.verifyUrlEndPointText("about/team");
    });

    await test.step('Select "Who are we" from the global menu, then select "Impact"', async () => {
        await proton.headerMenu.whoWeAreButton.click();
        await proton.whoWeArePanel.impact.click();
        await proton.verifyTextMessage("We advance society by advancing freedom");
        await proton.verifyUrlEndPointText("about/impact");
    });

    await test.step('Select "Who are we" from the global menu, then select "Careers" ', async () => {
        await proton.headerMenu.whoWeAreButton.click();
        await proton.whoWeArePanel.careers.click();
        await proton.verifyTextMessage("Working at Proton");
        await proton.verifyUrlEndPointText("careers");
    });

    await test.step('Select "Who are we" from the global menu, then select "Community"', async () => {
        await proton.headerMenu.whoWeAreButton.click();
        await proton.whoWeArePanel.community.click();
        await proton.verifyTextMessage("Advancing privacy, together");
        await proton.verifyUrlEndPointText("community");
    });

    await test.step('Select "Who are we" from the global menu, then select "Open Source" ', async () => {
        await proton.headerMenu.whoWeAreButton.click();
        await proton.whoWeArePanel.openSource.click();
        await proton.verifyTextMessage("We believe in the power of open source");
        await proton.verifyUrlEndPointText("community/open-source");
    });
});

test('TestCase2.4: Validate menu navigations for "Resources & Support"', async ({ proton }) => {
    await test.step('Select "Resources & Support" from the global menu, then select "Switch to Proton"', async () => {
        await proton.headerMenu.resourcesAndSupportButton.click();
        await proton.resourcesAndSupportPanel.switchToProton.click();
        await proton.verifyTextMessage("Proton Easy Switch");
        await proton.verifyUrlEndPointText("easyswitch");
    });

    await test.step('Select "Resources & Support" from the global menu, then select "Blog" ', async () => {
        await proton.headerMenu.resourcesAndSupportButton.click();
        await proton.resourcesAndSupportPanel.blog.click();
        await expect(proton.resourcesAndSupportPanel.blogLogo).toBeVisible();
        await proton.verifyUrlEndPointText("blog");
    });

    await test.step('Select "Resources & Support" from the global menu, then select "News" ', async () => {
        await proton.headerMenu.resourcesAndSupportButton.click();
        await proton.resourcesAndSupportPanel.news.click();
        await expect(proton.resourcesAndSupportPanel.protonNewHeading).toBeVisible();
        await proton.verifyUrlEndPointText("blog/news");
    });

    await test.step('Select "Resources & Support" from the global menu, then select "Help and support"', async () => {
        await proton.headerMenu.resourcesAndSupportButton.click();
        await proton.resourcesAndSupportPanel.helpAndSupport.click();
        await proton.verifyTextMessage("How can we help?");
        await proton.verifyUrlEndPointText("support");
    
    });

    await test.step('Select "Resources & Support" from the global menu, then select "Password generator" ', async () => {
        await proton.headerMenu.resourcesAndSupportButton.click();
        await proton.resourcesAndSupportPanel.passwordGenerator.click();
        await proton.verifyTextMessage("How can I create a strong");
        await proton.verifyUrlEndPointText("pass/password-generator");
        await proton.resourcesAndSupportPanel.protonPassLogo.click();
    });

    await test.step('Select "Proton Pass" logo, then "Resources & Support" from the global menu, then select "Proton Mail" ', async () => {
        await proton.headerMenu.resourcesAndSupportButton.click();
        await proton.resourcesAndSupportPanel.protonMail.click();
        await proton.verifyTextMessage("Get started with Proton Mail");
        await proton.verifyUrlEndPointText("mail/download");
    });

    await test.step('Select "Resources & Support" from the global menu, then select "Proton Calender"', async () => {
        await proton.headerMenu.resourcesAndSupportButton.click();
        await proton.resourcesAndSupportPanel.protonCalendar.click();
        await proton.verifyTextMessage("Your calendar is a record of your life and all its events. Keep it secure and");
        await proton.verifyUrlEndPointText("calendar/download");
    });

    await test.step('Select "Resources & Support" from the global menu, then select "Proton Drive" ', async () => {
        await proton.headerMenu.resourcesAndSupportButton.click();
        await proton.resourcesAndSupportPanel.protonDrive.click();
        await proton.verifyTextMessage("Download Proton Drive");
        await proton.verifyUrlEndPointText("drive/download");
    });

    await test.step('Select "Resources & Support" from the global menu, then select "Proton Pass"', async () => {
        await proton.headerMenu.resourcesAndSupportButton.click();
        await proton.resourcesAndSupportPanel.protonPass.click();
        await proton.verifyTextMessage("Store your passwords and");
        await proton.verifyUrlEndPointText("pass/download");
    });
});

test('TestCase2.5: Validate menu naviagations for "For Business"', async ({ page, proton }) => {
    const protonForBusiness = new ProtonForBusinessPage(page);

    await test.step('Select "Proton" logo, then select "For Business"', async () => {
        await proton.headerMenu.forBusinessLink.click();
        await expect(protonForBusiness.headerMenu.protonForBusinessLogo).toBeVisible();
        await proton.verifyUrlEndPointText("business");
        await expect(protonForBusiness.getProtonForBusinessLink).toBeVisible();
        await expect(protonForBusiness.contactUsLink).toBeVisible();
        await expect(protonForBusiness.headerMenu.overview).toBeVisible();
        await expect(protonForBusiness.headerMenu.features).toBeVisible();
        await expect(protonForBusiness.headerMenu.pricing).toBeVisible();
        await expect(protonForBusiness.headerMenu.resourcesAndSupport).toBeVisible();
        await expect(protonForBusiness.headerMenu.individuals).toBeVisible();
    });

    await test.step('Select "Get Proton for Business"', async () => {
        await protonForBusiness.getProtonForBusinessLink.click();
        await proton.verifyUrlEndPointText("business/plans");
        await expect(protonForBusiness.pricing.protectYourBusinessWithProtonsEncryptionMesage).toBeVisible();
        await expect(protonForBusiness.pricing.mailEssentials).toBeVisible();
        await expect(protonForBusiness.pricing.business).toBeVisible();
        await expect(protonForBusiness.pricing.enterprise).toBeVisible();
    });

    await test.step('Select "Resources & Support" from the global menu', async () => {
        await protonForBusiness.headerMenu.resourcesAndSupport.click();
        await expect(protonForBusiness.headerMenu.resourcesAndSupportPanel.frequentlyAskedQuestion).toBeVisible();
        await expect(protonForBusiness.headerMenu.resourcesAndSupportPanel.businessSupport).toBeVisible();
        await expect(protonForBusiness.headerMenu.resourcesAndSupportPanel.protonGuideToItSecurity).toBeVisible();
        await expect(protonForBusiness.headerMenu.resourcesAndSupportPanel.protonInsights).toBeVisible();
        await expect(protonForBusiness.headerMenu.resourcesAndSupportPanel.gdprCompliance).toBeVisible();
        await expect(protonForBusiness.headerMenu.resourcesAndSupportPanel.healthcareProviders).toBeVisible();
    });

    await test.step('Select "Individuals" from the header', async () => {
        await protonForBusiness.headerMenu.individuals.click();
        await proton.isLoaded();
        await expect(proton.headerMenu.protonLogo).toBeVisible();
        await expect(proton.headerMenu.signInLink).toBeVisible();
        await expect(proton.headerMenu.createAFreeAccountLink).toBeVisible();
    });
});