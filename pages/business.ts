import { Locator, Page, expect } from "@playwright/test";

export class ProtonForBusinessPage {
    readonly page: Page;
    readonly privacyAndSecurityForYourBusinessMessage: Locator;
    readonly getProtonForBusinessLink: Locator;
    readonly contactUsLink: Locator;
    readonly headerMenu: HeaderMenu;
    readonly pricing: Pricing;

    constructor(page: Page) {
        this.page = page;
        this.privacyAndSecurityForYourBusinessMessage = this.page.getByTestId('hero-content').getByText('Privacy and security for your');
        this.getProtonForBusinessLink = this.page.getByTestId('hero-content').getByRole('link', { name: 'Get Proton for Business' });
        this.contactUsLink = this.page.getByTestId('hero-content').getByRole('link', { name: 'Contact us' });
        this.headerMenu = new HeaderMenu(page);
        this.pricing = new Pricing(page);
    }


    async isLoaded() {
        await expect(this.page).toHaveURL(/business/);
    }

}

class HeaderMenu {
    readonly page: Page;
    readonly self: Locator;
    readonly protonForBusinessLogo: Locator;
    readonly overview: Locator;
    readonly features: Locator;
    readonly pricing: Locator;
    readonly resourcesAndSupport: Locator;
    readonly individuals: Locator;
    readonly resourcesAndSupportPanel: ResourcesAndSupportPanel;

    constructor(page: Page) {
        this.page = page;
        this.self = page.getByTestId('business-header-id');
        this.protonForBusinessLogo = this.self.getByRole('link', { name: 'Proton For Business', exact: true });
        this.overview = this.self.getByRole('link', { name: 'Overview' });
        this.features = this.self.getByRole('link', { name: 'Features' });
        this.pricing = this.self.getByRole('link', { name: 'Pricing' });
        this.resourcesAndSupport = this.self.getByRole('button', { name: 'Resources & Support' });
        this.individuals = this.self.getByRole('link', { name: 'Individuals' });
        this.resourcesAndSupportPanel = new ResourcesAndSupportPanel(page);
    }
}

class Pricing {
    readonly page: Page;
    readonly: Locator;
    readonly protectYourBusinessWithProtonsEncryptionMesage: Locator;
    readonly rateCard: Locator;
    readonly mailEssentials: Locator;
    readonly business: Locator;
    readonly enterprise: Locator;

    constructor(page: Page) {
        this.page = page;
        this.protectYourBusinessWithProtonsEncryptionMesage = this.page.getByText('Protect your business with Proton’s encryption', { exact: true });
        this.rateCard = this.page.locator('[data-test="b2b-cards"] div');
        this.mailEssentials = this.rateCard.filter({ hasText: 'Mail EssentialsSecure email' }).first();
        this.business = this.rateCard.filter({ hasText: 'BusinessPopularPrivacy and' }).first();
        this.enterprise = this.rateCard.filter({ hasText: 'EnterpriseCustomizable' }).first();
    }
}


class ResourcesAndSupportPanel {
    readonly page: Page;
    readonly frequentlyAskedQuestion: Locator;
    readonly businessSupport: Locator;
    readonly protonGuideToItSecurity: Locator;
    readonly protonInsights: Locator;
    readonly gdprCompliance: Locator;
    readonly healthcareProviders: Locator;

    constructor(page: Page) {
        this.page = page;
        this.frequentlyAskedQuestion = this.page.getByRole('link', { name: 'Frequently asked questions' });
        this.protonGuideToItSecurity = this.page.getByRole('link', { name: 'Business support Guides and' });
        this.protonGuideToItSecurity = this.page.getByRole('link', { name: 'Proton guide to IT security' });
        this.protonInsights = this.page.getByRole('link', { name: 'Proton Insights Keep your' });
        this.gdprCompliance = this.page.getByRole('link', { name: 'GDPR compliance Keep your' });
        this.healthcareProviders = this.page.getByRole('link', { name: 'Healthcare providers HIPAA-' });
    }
}