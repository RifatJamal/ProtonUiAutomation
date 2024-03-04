import { Locator, Page, expect } from "@playwright/test";

export class ProtonMailPage {
    readonly page: Page;
    readonly secureEmailThatProtectsMessage: Locator;
    readonly headerMenu: HeaderMenu;
    readonly createAFreeAccount: Locator;

    constructor(page: Page) {
        this.page = page;
        this.secureEmailThatProtectsMessage = this.page.getByTestId('hero-content').getByText('Secure email that protects');
        this.headerMenu = new HeaderMenu(page);
        this.createAFreeAccount = this.page.getByTestId('hero-cta');
    }

    
    async isLoaded() {
        await expect(this.page).toHaveURL(/mail/);
    }

}

class HeaderMenu {
    readonly page: Page;
    readonly self: Locator;
    readonly protonLogo: Locator;
    readonly protonMailLogo: Locator;
    readonly overview: Locator;
    readonly security: Locator;
    readonly pricing: Locator;
    readonly bridge: Locator;
    readonly download: Locator;
    readonly support: Locator;

    constructor(page: Page) {
        this.page = page;
        this.self = page.getByTestId('product-header-id');
        this.protonLogo = this.self.getByRole('link', { name: 'Proton' });
        this.protonMailLogo = this.self.getByRole('link', { name: 'Mail' })
        this.overview = this.self.getByRole('link', { name: 'Overview' });
        this.security = this.self.getByRole('link', { name: 'Security' });
        this.pricing = this.self.getByRole('link', { name: 'Pricing' });
        this.bridge = this.self.getByRole('link', { name: 'Bridge' });
        this.download = this.self.getByRole('link', { name: 'Download' });
        this.support = this.self.getByRole('link', { name: 'Support' });
    }
}