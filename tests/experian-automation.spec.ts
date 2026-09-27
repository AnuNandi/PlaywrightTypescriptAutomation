import { test, expect } from '../fixtures/test-fixtures';

import { experianTestData } from '../test-data/experianTestData';

test.describe(
    'Experian Employer Services Automation Challenge',
    () => {

        test(
            'Complete the survey successfully',
            async ({
                page,
                basicInformationPage,
                questionsPage,
                confirmationPage
            }) => {

                
               await page.goto('https://uat-survey.taxcreditco.com/automation-challenge');

                await basicInformationPage.verifyPageDisplayed();


                // Fill basic information

                await basicInformationPage.fillBasicInformation(
                    experianTestData.basicInformation
                );


                // Verify First Name

                await expect(
                    basicInformationPage.firstNameInput
                ).toHaveValue(
                    experianTestData.basicInformation.firstName
                );


                // Verify Last Name

                await expect(
                    basicInformationPage.lastNameInput
                ).toHaveValue(
                    experianTestData.basicInformation.lastName
                );


                // Verify Email

                await expect(
                    basicInformationPage.emailInput
                ).toHaveValue(
                    experianTestData.basicInformation.email
                );


                // Verify Street Address

                await expect(
                    basicInformationPage.streetAddressInput
                ).toHaveValue(
                    experianTestData.basicInformation.streetAddress
                );


                // Verify City

                await expect(
                    basicInformationPage.cityInput
                ).toHaveValue(
                    experianTestData.basicInformation.city
                );


                // Verify Zip Code

                await expect(
                    basicInformationPage.zipCodeInput
                ).toHaveValue(
                    experianTestData.basicInformation.zipCode
                );


                // Click Next

                await basicInformationPage.clickNext();


                // -----------------------------------------
                // Questions Page
                // -----------------------------------------

                await questionsPage.verifyPageDisplayed();


                // Answer all questions

                await questionsPage.answerSnap(
                    experianTestData.questions.snap as 'Yes' | 'No'
                );

                await questionsPage.answerTanf(
                    experianTestData.questions.tanf as 'Yes' | 'No'
                );

                await questionsPage.answerMilitary(
                    experianTestData.questions.military as 'Yes' | 'No'
                );

                await questionsPage.answerDisability(
                    experianTestData.questions.disability as 'Yes' | 'No'
                );

                
                await questionsPage.answerUnemployment(
                    experianTestData.questions.unemployment as 'Yes' | 'No'
                );


                // -----------------------------------------
                // Verify selected answers
                // -----------------------------------------

                await expect(
                    questionsPage.snapQuestion
                        .getByRole('radio', {
                            name: experianTestData.questions.snap
                        })
                ).toBeChecked();


                await expect(
                    questionsPage.tanfQuestion
                        .getByRole('radio', {
                            name: experianTestData.questions.tanf
                        })
                ).toBeChecked();


                await expect(
                    questionsPage.militaryQuestion
                        .getByRole('radio', {
                            name: experianTestData.questions.military
                        })
                ).toBeChecked();


                await expect(
                    questionsPage.disabilityQuestion
                        .getByRole('radio', {
                            name: experianTestData.questions.disability
                        })
                ).toBeChecked();


                
                await expect(
                    questionsPage.unemploymentQuestion
                        .getByRole('radio', {
                            name: experianTestData.questions.unemployment
                        })
                ).toBeChecked();


                // Click Next

                await questionsPage.clickNext();


                // -----------------------------------------
                // Confirmation Page
                // -----------------------------------------

                await confirmationPage.verifyPageDisplayed();


                // Verify confirmation name

                await expect(
                    confirmationPage.nameConfirmationInput
                ).toHaveValue(
                    experianTestData.confirmation.fullName
                );


                // Submit form

                await confirmationPage.submitForm();


                // -----------------------------------------
                // Verify final URL
                // -----------------------------------------

                await expect(page).toHaveURL(
                    /^https:\/\/www\.experian\.com\/employer-services\/?$/
                );
            }
        );
    }
);