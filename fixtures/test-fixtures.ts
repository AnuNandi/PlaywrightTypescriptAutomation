import { test as base, expect } from '@playwright/test';

import { BasicInformationPage } from '../pages/BasicInformationPage';
import { QuestionsPage } from '../pages/QuestionsPage';
import { ConfirmationPage } from '../pages/ConfirmationPage';

type TestFixtures = {
    basicInformationPage: BasicInformationPage;
    questionsPage: QuestionsPage;
    confirmationPage: ConfirmationPage;
};

export const test = base.extend<TestFixtures>({

    basicInformationPage: async ({ page }, use) => {
        const basicInformationPage =
            new BasicInformationPage(page);

        await use(basicInformationPage);
    },

    questionsPage: async ({ page }, use) => {
        const questionsPage =
            new QuestionsPage(page);

        await use(questionsPage);
    },

    confirmationPage: async ({ page }, use) => {
        const confirmationPage =
            new ConfirmationPage(page);

        await use(confirmationPage);
    }
});

export { expect };