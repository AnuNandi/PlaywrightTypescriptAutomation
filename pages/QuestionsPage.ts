import { Page, Locator } from '@playwright/test';

export class QuestionsPage {

    readonly page: Page;

    readonly pageHeading: Locator;

    readonly snapQuestion: Locator;
    readonly tanfQuestion: Locator;
    readonly militaryQuestion: Locator;
    readonly disabilityQuestion: Locator;
        readonly unemploymentQuestion: Locator;

    readonly nextButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.pageHeading = page.getByText(
            'At this time, please answer Yes or No to the following questions:'
        );

        this.snapQuestion = page.locator(
            '[data-question-id-text="SnapCombinedRecent"]'
        );

        this.tanfQuestion = page.locator(
            '[data-question-id-text="TanfCombinedRecent"]'
        );

        this.militaryQuestion = page.locator(
            '[data-question-id-text="USArmedForces"]'
        );

        this.disabilityQuestion = page.locator(
            '[data-question-id-text="DisabledPerson"]'
        );

        
        this.unemploymentQuestion = page.locator(
            '[data-question-id-text="LongTermUnemployed"]'
        );

        this.nextButton = page.locator(
            '#SurveyControl_SurveySubmit'
        );
    }

    async verifyPageDisplayed() {

        await this.pageHeading.waitFor({
            state: 'visible',
            timeout: 30000
        });
    }

    async answerSnap(answer: 'Yes' | 'No') {

        await this.snapQuestion
            .getByText(answer, { exact: true })
            .click();
    }

    async answerTanf(answer: 'Yes' | 'No') {

        await this.tanfQuestion
            .getByText(answer, { exact: true })
            .click();
    }

    async answerMilitary(answer: 'Yes' | 'No') {

        await this.militaryQuestion
            .getByText(answer, { exact: true })
            .click();
    }

    async answerDisability(answer: 'Yes' | 'No') {

        await this.disabilityQuestion
            .getByText(answer, { exact: true })
            .click();
    }

        async answerUnemployment(answer: 'Yes' | 'No') {

        await this.unemploymentQuestion
            .getByText(answer, { exact: true })
            .click();
    }

    async clickNext() {

        await this.nextButton.click();
    }
}