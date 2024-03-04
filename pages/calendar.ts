import { Locator, Page, expect } from "@playwright/test";

export class ProtonCalendarPage {
    readonly page: Page;
    readonly yourScheduleIsWorthMessage: Locator;
    readonly seeAllCalendarFeaturesLink: Locator;
    readonly headerMenu: HeaderMenu;


    constructor(page: Page) {
        this.page = page;
        this.yourScheduleIsWorthMessage = this.page.getByTestId('hero-content').getByText('Your schedule is worth');
        this.seeAllCalendarFeaturesLink = this.page.getByRole('link', { name: 'See all calendar features' });
        this.headerMenu = new HeaderMenu(page);
    }

    
    async isLoaded() {
        await expect(this.page).toHaveURL(/calendar/);
    }

}

class HeaderMenu {
    readonly page: Page;
    readonly self: Locator;
    readonly protonLogo: Locator;
    readonly protonCalendarLogo: Locator;
    readonly overview: Locator;
    readonly features: Locator;
    readonly security: Locator;
    readonly download: Locator;
    readonly support: Locator;

    constructor(page: Page) {
        this.page = page;
        this.self = page.getByTestId('product-header-id');
        this.protonLogo = this.self.getByRole('link', { name: 'Proton' });
        this.protonCalendarLogo = this.self.getByRole('link', { name: 'Calendar' })
        this.overview = this.self.getByRole('link', { name: 'Overview' });
        this.features = this.self.getByRole('link', { name: 'Features' });
        this.security = this.self.getByRole('link', { name: 'Security' });
        this.download = this.self.getByRole('link', { name: 'Download' });
        this.support = this.self.getByRole('link', { name: 'Support' });
    }
}