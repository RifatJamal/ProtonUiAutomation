import { Locator, Page, expect } from "@playwright/test";

export class ProtonPassPage {
    readonly page: Page;
    readonly openSourceAndAncryptedMessage: Locator;
    readonly getProtonPassButton: Locator;
    readonly headerMenu: HeaderMenu;


    constructor(page: Page) {
        this.page = page;
        this.openSourceAndAncryptedMessage = this.page.getByTestId('hero-content').getByText('Open-source and encrypted');
        this.getProtonPassButton = this.page.getByTestId('hero-cta');
        this.headerMenu = new HeaderMenu(page);
    }

    
    async isLoaded() {
        await expect(this.page).toHaveURL(/pass/);
    }

}

class HeaderMenu {
    readonly page: Page;
    readonly self: Locator;
    readonly protonLogo: Locator;
    readonly protonPassLogo: Locator;
    readonly overview: Locator;
    readonly security: Locator;
    readonly aliases: Locator;
    readonly sharing: Locator;
    readonly download: Locator;
    readonly pricing: Locator;
    readonly support: Locator;
    readonly forBusiness: Locator;

    constructor(page: Page) {
        this.page = page;
        this.self = page.getByTestId('product-header-id');
        this.protonLogo = this.self.getByRole('link', { name: 'Proton' });
        this.protonPassLogo = this.self.getByRole('link', { name: 'Pass' })
        this.overview = this.self.getByRole('link', { name: 'Overview' });
        this.security = this.self.getByRole('link', { name: 'Security' });
        this.aliases = this.self.getByRole('link', { name: 'Aliases' });
        this.sharing = this.self.getByRole('link', { name: 'Sharing' });
        this.download = this.self.getByRole('link', { name: 'Download' });
        this.pricing = this.self.getByRole('link', { name: 'Pricing' });
        this.support = this.self.getByRole('link', { name: 'Support' });
        this.forBusiness = this.self.getByRole('link', { name: 'For Business' });
    }
}