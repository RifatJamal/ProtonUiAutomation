import { Locator, Page, expect } from "@playwright/test";

export class ProtonDrivePage {
    readonly page: Page;
    readonly getStartedWith5GbFreeCloudMessage: Locator;
    readonly enterYourEmailAddressTextBox: Locator;
    readonly headerMenu: HeaderMenu;


    constructor(page: Page) {
        this.page = page;
        this.getStartedWith5GbFreeCloudMessage = this.page.getByText('Get started with 5 GB free cloud storage', { exact: true });
        this.enterYourEmailAddressTextBox = this.page.getByPlaceholder('Enter your email address');
        this.headerMenu = new HeaderMenu(page);
    }

    
    async isLoaded() {
        await expect(this.page).toHaveURL(/drive/);
    }

}

class HeaderMenu {
    readonly page: Page;
    readonly self: Locator;
    readonly protonLogo: Locator;
    readonly protonDriveLogo: Locator;
    readonly overview: Locator;
    readonly security: Locator;
    readonly sharing: Locator;
    readonly pricing: Locator;
    readonly download: Locator;
    readonly support: Locator;

    constructor(page: Page) {
        this.page = page;
        this.self = page.getByTestId('product-header-id');
        this.protonLogo = this.self.getByRole('link', { name: 'Proton' });
        this.protonDriveLogo = this.self.getByRole('link', { name: 'Drive' })
        this.overview = this.self.getByRole('link', { name: 'Overview' });
        this.security = this.self.getByRole('link', { name: 'Security' });
        this.sharing = this.self.getByRole('link', { name: 'Sharing' });
        this.pricing = this.self.getByRole('link', { name: 'Pricing' });
        this.download = this.self.getByRole('link', { name: 'Download' });
        this.support = this.self.getByRole('link', { name: 'Support' });
    }
}