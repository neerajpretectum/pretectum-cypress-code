import { MailSlurp } from 'mailslurp-client';
import CypressTestIds from '../classes/CypressTestIDs';

describe('Forgot Password Flow', () => {
    it('Should send reset email and verify the reset link',{ defaultCommandTimeout: 120000 }, () => {
        cy.then(() => {
            cy.log("configuring mailslurp client");
            const mailslurp = new MailSlurp({ apiKey: Cypress.env('mailslurpApiKey') });
            cy.wrap(mailslurp).as('mailslurp')
        });

        cy.then(function () {
            cy.log('Create an inbox')
            return this.mailslurp.inboxController.createInboxWithDefaults()
        }).then(inbox => {
            cy.wrap(inbox.id).as('inboxId')
            cy.wrap(inbox.emailAddress).as('emailAddress')
        });
        
        cy.then(function () {
            cy.visit('https://www.pretectum.net/');
            cy.contains('New user').click();
            cy.get(`[data-testid=${CypressTestIds.USER_SIGNUP_EMAIL_INPUT}]`).type(this.emailAddress);
            cy.get(`[data-testid=${CypressTestIds.USER_SIGNUP_PASSWORD_INPUT}]`).type('Password123!');
            cy.get(`[data-testid=${CypressTestIds.USER_SIGNUP_FIRST_NAME_INPUT}]`).type('somthing');
            cy.get(`[data-testid=${CypressTestIds.USER_SIGNUP_LAST_NAME_INPUT}]`).type('singh');
            cy.get(`[data-testid=${CypressTestIds.USER_SIGUP_CHECKBOX}]`).click();
            cy.get(`[data-testid=${CypressTestIds.USER_SIGNUP_SUBMIT_BUTTON}]`).click();
        })

        cy.then(function () {
            cy.log('Wait for email')
            return this.mailslurp.waitForLatestEmail(this.inboxId, 120_000, true)
        }).then(email => {
            cy.log('body: ' + email.body)
            expect(email.body).to.contain('link')
            const verificationLink = email.body.match(/https?:\/\/[^\s]+/)[0];
            cy.wrap(verificationLink).as('verificationLink')
            cy.wrap(email.id).as('emailId')
        });
        
        cy.then(function () {
            cy.visit(this.verificationLink);
        });
    });
});