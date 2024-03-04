import { ProtonHomePage } from "./pages/Home";
import { test as base } from "@playwright/test";
import { ProtonMailPage } from "./pages/Mail";

type ProtonFixtures = {
    proton: ProtonHomePage,
    protonMail: ProtonMailPage,
}

export const test = base.extend<ProtonFixtures>({
    proton: async ({ page }, use) => {
        const proton = new ProtonHomePage(page);
        await use(proton);
    },
    protonMail: async ({ page }, use) => {
        const protonMail = new ProtonMailPage(page)
        await use(protonMail);
    }
})

export * from '@playwright/test';