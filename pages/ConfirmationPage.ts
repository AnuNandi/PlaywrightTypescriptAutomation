import { Page, Locator } from '@playwright/test';

export class ConfirmationPage {

    readonly page: Page;

    readonly additionalInformation: Locator;
    readonly nameConfirmationInput: Locator;
    readonly submitFormButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.additionalInformation = page.locator('#jurat');

        this.nameConfirmationInput = page.locator(
            '[data-question-id-text="NameConfirmation"] input[type="text"]'
        );

        this.submitFormButton = page.locator(
            'input[type="submit"][value="Submit form"]'
        );
    }

    async verifyPageDisplayed() {

        await this.additionalInformation.waitFor({
            state: 'visible',
            timeout: 30000
        });
    }

    async getConfirmationName(): Promise<string> {

        return await this.nameConfirmationInput.inputValue();
    }

    async submitForm() {

        await this.submitFormButton.click();
    }
}