import { Locator, Page, chromium, expect } from "@playwright/test";
import { PROTON_URL } from "../resources/constants";

export class ProtonHomePage {
    readonly page: Page;
    readonly headerMenu: HeaderMenu;
    readonly centerMenu: CenterMenu;
    readonly footerMenu: FooterMenu;
    readonly productsPanel: ProductsPanel;
    readonly whoWeArePanel: WhoWeArePanel;
    readonly resourcesAndSupportPanel: ResourcesAndSupportPanel;

    constructor(page: Page) {
        this.page = page;
        this.headerMenu = new HeaderMenu(page);
        this.centerMenu = new CenterMenu(page);
        this.footerMenu = new FooterMenu(page);
        this.productsPanel = new ProductsPanel(page);
        this.whoWeArePanel = new WhoWeArePanel(page);
        this.resourcesAndSupportPanel = new ResourcesAndSupportPanel(page);
    }

    async goto() {
        await this.page.goto(PROTON_URL, { waitUntil: 'domcontentloaded' });
    }

    async isLoaded() {
        await this.verifyTextMessage("A better internet starts with privacy and freedom");
        await expect(this.page).toHaveURL(/me/);
    }

    async verifyTextMessage(textMessage: string) {
        let textMessageLocator = await this.page.getByText(textMessage).first();
        await expect.soft(textMessageLocator).toBeVisible();
    }

    async verifyUrlEndPointText(endPointName: string) {
        await expect(this.page).toHaveURL(PROTON_URL + endPointName);
    }

}

class HeaderMenu {
    readonly page: Page;
    readonly self: Locator;
    readonly protonLogo: Locator;
    readonly productsButton: Locator;
    readonly whoWeAreButton: Locator;
    readonly resourcesAndSupportButton: Locator;
    readonly forBusinessLink: Locator;
    readonly signInLink: Locator;
    readonly createAFreeAccountLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.self = page.getByTestId('header-id');
        this.protonLogo = this.self.getByRole('link', { name: 'Proton' });
        this.productsButton = this.page.getByRole('button', { name: 'Products' });
        this.whoWeAreButton = this.self.getByRole('button', { name: 'Who we are' });
        this.resourcesAndSupportButton = this.page.getByRole('button', { name: 'Resources & Support' });
        this.forBusinessLink = this.self.getByRole('link', { name: 'For Business' });
        this.signInLink = this.self.getByRole('link', { name: 'Sign in' });
        this.createAFreeAccountLink = this.self.getByRole('link', { name: 'Create a free account' });
    }
}

class CenterMenu {
    readonly page: Page;
    readonly self: Locator;
    readonly emailLink: Locator;
    readonly vpnLink: Locator;
    readonly cloudStorageLink: Locator;
    readonly passwordManagerLink: Locator;
    readonly calendarLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.self = page.locator('class', { hasText: 'items-center justify-center gap-1' });
        this.emailLink = this.page.getByRole('link', { name: 'Email', exact: true });
        this.vpnLink = this.page.getByRole('link', { name: 'VPN (new window)', exact: true });
        this.cloudStorageLink = this.page.getByRole('link', { name: 'Cloud storage' });
        this.passwordManagerLink = this.page.getByRole('link', { name: 'Password manager' });
        this.calendarLink = this.page.getByRole('link', { name: 'Calendar', exact: true });

    }
}

class FooterMenu {
    readonly page: Page;
    readonly swissConfederationFlagLogo: Locator;
    readonly europeanFlagLogo: Locator;

    constructor(page: Page) {
        this.page = page;
        this.swissConfederationFlagLogo = this.page.getByRole('img', { name: 'Swiss Confederation Flag' });
        this.europeanFlagLogo = this.page.getByRole('img', { name: 'European Flag' });
    }
}

class ProductsPanel {
    readonly page: Page;
    readonly self: Locator;
    readonly protonMail: Locator;
    readonly protonCalendar: Locator;
    readonly protonDrive: Locator;
    readonly protonVpn: Locator;
    readonly protonPass: Locator;

    constructor(page: Page) {
        this.page = page;
        this.protonMail = this.page.getByRole('link', { name: 'Proton Mail Encrypted email' });
        this.protonCalendar = this.page.getByRole('link', { name: 'Proton Calendar Your calendar' });
        this.protonDrive = this.page.getByRole('link', { name: 'Proton Drive Secure cloud' });
        this.protonVpn = this.page.getByRole('link', { name: 'Proton VPN Your gateway to' });
        this.protonPass = this.page.getByRole('link', { name: 'Proton Pass An encrypted' });
    }
}

class WhoWeArePanel {
    readonly page: Page;
    readonly self: Locator;
    readonly aboutUs: Locator;
    readonly team: Locator;
    readonly impact: Locator;
    readonly careers: Locator;
    readonly community: Locator;
    readonly openSource: Locator;

    constructor(page: Page) {
        this.page = page;
        this.aboutUs = this.page.getByRole('link', { name: 'About us Proton stands for' });
        this.team = this.page.getByRole('link', { name: 'Team Meet the people building' });
        this.impact = this.page.getByRole('link', { name: 'Impact Defending freedom' });
        this.careers = this.page.getByRole('link', { name: 'CareersWe\'re hiring Seeking' });
        this.community = this.page.getByRole('link', { name: 'Community Join the fight to' });
        this.openSource = this.page.getByRole('link', { name: 'Open source Everyone is' });
    }
}

class ResourcesAndSupportPanel {
    readonly page: Page;
    readonly getStarted: Locator;
    readonly switchToProton: Locator;
    readonly resources: Locator;
    readonly blog: Locator;
    readonly news: Locator;
    readonly helpAndSupport: Locator;
    readonly passwordGenerator: Locator;
    readonly downloadTheApps: Locator;
    readonly protonMail: Locator;
    readonly protonCalendar: Locator;
    readonly protonDrive: Locator;
    readonly protonVpn: Locator;
    readonly protonPass: Locator;
    readonly blogLogo: Locator;
    readonly protonPassLogo: Locator;
    readonly protonNewHeading: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getStarted = this.page.getByText('Get started');
        this.switchToProton = this.page.getByRole('link', { name: 'Switch to Proton Move to' });
        this.resources = this.page.getByText('Resources', { exact: true });
        this.blog = this.page.getByRole('link', { name: 'Blog Latest news on privacy' });
        this.news = this.page.getByRole('link', { name: 'News Proton announcements,' });
        this.helpAndSupport = this.page.getByRole('link', { name: 'Help and support Guides' });
        this.passwordGenerator = this.page.getByRole('link', { name: 'Password generator Create' });
        this.downloadTheApps = this.page.getByText('Download the apps');
        this.protonMail = this.page.getByTestId('header-id').getByRole('link', { name: 'Proton Mail' });
        this.protonCalendar = this.page.getByTestId('header-id').getByRole('link', { name: 'Proton Calendar' });
        this.protonDrive = this.page.getByTestId('header-id').getByRole('link', { name: 'Proton Drive' });
        this.protonVpn = this.page.getByTestId('header-id').getByRole('link', { name: 'Proton VPN (new window)' });
        this.protonPass = this.page.getByTestId('header-id').getByRole('link', { name: 'Proton Pass' });
        this.blogLogo = this.page.getByTestId('product-header-id').getByRole('link', { name: 'Blog (new window)' });
        this.protonPassLogo = this.page.getByRole('link', { name: 'Proton', exact: true });
        this.protonNewHeading = this.page.getByRole('heading', { name: 'Proton news' });
    }
}