import { Page, Locator } from '@playwright/test';

export class BasicInformationPage {

    readonly page: Page;

    readonly pageHeading: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    readonly streetAddressInput: Locator;
    readonly cityInput: Locator;
    readonly zipCodeInput: Locator;

    readonly nextButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.pageHeading = page.locator(
            '[data-question-id-text="PiiLabel"]'
        );

        this.firstNameInput = page.locator(
            '[data-question-id-text="VoterFirstName"] input[type="text"]'
        );

        this.lastNameInput = page.locator(
            '[data-question-id-text="VoterLastName"] input[type="text"]'
        );

        this.emailInput = page.locator(
            '[data-question-id-text="VoterEmail"] input[type="text"]'
        );

        this.streetAddressInput = page.locator(
            '[data-question-id-text="VoterAddressLine1"] input[type="text"]'
        );

        this.cityInput = page.locator(
            '[data-question-id-text="VoterCity"] input[type="text"]'
        );

        this.zipCodeInput = page.locator(
            '[data-question-id-text="VoterPostalCode"] input[type="text"]'
        );

        this.nextButton = page.locator(
            '#SurveyControl_SurveySubmit'
        );
    }

    async verifyPageDisplayed() {

        await this.pageHeading.waitFor({
            state: 'visible'
           
        });
    }

    async fillBasicInformation(data: any) {

        await this.firstNameInput.fill(data.firstName);
        await this.lastNameInput.fill(data.lastName);
        await this.emailInput.fill(data.email);
        await this.streetAddressInput.fill(data.streetAddress);
        await this.cityInput.fill(data.city);
        await this.zipCodeInput.fill(data.zipCode);
    }

    async clickNext() {

        await this.nextButton.click();
    }
}