import { Locator, Page, expect } from "@playwright/test";
import { PROTON_URL } from "../resources/constants";

export class ProtonMailPricingPage {
    readonly page: Page;
    readonly createASecureEmailAccountMessage: Locator;

    readonly headerMenu: HeaderMenu;

    constructor(page: Page) {
        this.page = page;
        this.createASecureEmailAccountMessage = this.page.getByText('Create a secure email account');
        this.headerMenu = new HeaderMenu(page);
    }

    async isLoaded() {
        await expect(this.page).toHaveURL(PROTON_URL + "mail/pricing");
    }

}

class HeaderMenu {
    readonly page: Page;
    readonly self: Locator;
    readonly protonForBusinessLogo: Locator;
    readonly overview: Locator;
    readonly security: Locator;
    readonly pricing: Locator;
    readonly bridge: Locator;
    readonly download: Locator;
    readonly support: Locator;
    readonly pricingTab: PricingTab;

    constructor(page: Page) {
        this.page = page;
        this.self = page.getByTestId('product-header-id');
        this.protonForBusinessLogo = this.self.getByRole('link', { name: 'Proton For Business', exact: true });
        this.overview = this.page.getByRole('link', { name: 'Overview' });
        this.security = this.self.getByRole('link', { name: 'Security' });
        this.pricing = this.self.getByRole('link', { name: 'Pricing' });
        this.bridge = this.page.getByRole('link', { name: 'Bridge' });
        this.download = this.self.getByRole('link', { name: 'Download' })
        this.support = this.self.getByRole('link', { name: 'Support' });
        this.pricingTab = new PricingTab(page);
    }
}

class PricingTab {
    readonly page: Page;
    readonly rateCard: Locator;
    readonly protonFree: Locator;
    readonly mailPlus: Locator;
    readonly protonUnlimited: Locator;

    constructor(page: Page) {
        this.page = page;
        this.rateCard = this.page.getByTestId('detailed-pricing');
        this.protonFree = this.rateCard.getByText('Proton Free');
        this.mailPlus = this.rateCard.getByText('Mail Plus', { exact: true });
        this.protonUnlimited = this.rateCard.getByText('Proton Unlimited', { exact: true });
    }
}