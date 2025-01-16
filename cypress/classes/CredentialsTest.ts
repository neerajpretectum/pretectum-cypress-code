import CypressTestIds from  "./CypressTestIDs";
import { TestBase } from "./TestBase";






export class CredentialsTest extends TestBase
{
        //Timestamp const
        strAppName1: string = this.TimeStamp('AN1x', 'x');
        strAppAccessTokenValidity2Hours: string = '2 Hours';
        strAppAccessTokenValidity1Hours: string = '1 Hours';

        //Open Credentials
        OpenCredentialsFirstTime()
        {

            //cy.viewport(1920, 1080);
            
            //open portal
            this.OpenURL();

            //login into portal with valid creadentials         
            this.Login();
            
            //cy.get('[data-testid="header-menu-configuration"]', {timeout:20_000}).click();
            //cy.get(CypressTestIds.HEADER_MENU_CONFIGURATION, {timeout:20_000}).click();

            //Open Config
            cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20000})
            .should(this.assertBeVisible)
            .click();

            //Open Credentials
            cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_CREDENTIALS))
            .should(this.assertBeVisible)
            .click();
        }

        //Open Credentials
        OpenCredentials()
        {

            //cy.viewport(1920, 1080);
            
            //open portal
            this.OpenURL();

            //login into portal with valid creadentials         
            this.Login();
            
            //Open Config
            cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20000})
            .should(this.assertBeVisible)
            .click();

            //Open Credentials
            cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_CREDENTIALS))
            .should(this.assertBeVisible)
            .click();
        }
        
        //Add Credentials Button is visible
        CredentialsButtonIsVisible()
        {
            cy.get(this.TestIDLocator(CypressTestIds.APP_CLIENT_LIST_ADD_BUTTON))
            .should(this.assertBeVisible);
        }

        //Create Credentials
        CreateCredentials()
        {
            //Click on Add App Client Button
            cy.get(this.TestIDLocator(CypressTestIds.APP_CLIENT_LIST_ADD_BUTTON), {timeout: 20_000})
            .click({});

            cy.get(this.TestIDLocator(CypressTestIds.APP_CLIENT_MANAGE_NAME_INPUT))
            .should(this.assertBeVisible)
            .type(this.strAppName1, {});

            //type Secret
            cy.get(this.TestIDLocator(CypressTestIds.APP_CLIENT_MANAGE_ACCESS_TOKEN_VALIDITY_INPUT))
            .type(this.strAppAccessTokenValidity2Hours, {});

            //save Credentials
            cy.get(this.TestIDLocator(CypressTestIds.APP_CLIENT_MANAGE_SAVE_BUTTON))
            .click({});

            //Success message shown
            cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
            .should(this.assertBeVisible)
        }

        ViewCredentials()
        {
            cy.contains(this.strAppName1, {timeout: 20_000})
            .parent(this.TD)
            .parent(this.TR)
            .find(this.TestIDLocator(CypressTestIds.APP_CLIENT_LIST_VIEW_BUTTON))
            .click({});
                
            //get the token validity
            cy.get(this.TestIDLocator(CypressTestIds.APP_CLIENT_MANAGE_NAME_INPUT))
            .should(this.assertBeVisible)
            .should(this.assertHaveValue, this.strAppName1)
        }

        DeactivateCredentials()
        {
            cy.contains(this.strAppName1, {timeout: 20_000})
            .parent(this.TD)
            .parent(this.TR)

            .find(this.TestIDLocator(CypressTestIds.APP_CLIENT_LIST_ACTIVE_SWITCH))
            .click();

            //Success message shown
            cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
            .should(this.assertBeVisible)
        }

        ActivateCredentials()
        {
            cy.contains(this.strAppName1, {timeout: 20_000})
            .parent(this.TD)
            .parent(this.TR)
            .find(this.TestIDLocator(CypressTestIds.APP_CLIENT_LIST_ACTIVE_SWITCH))
            .click();

            //Success message shown
            cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
            .should(this.assertBeVisible)
        }

        //Edit Credentials
        EditCredentials()
        {
            cy.contains(this.strAppName1, {timeout: 20_000})
            .parent(this.TD)
            .parent(this.TR)
            .find(this.TestIDLocator(CypressTestIds.APP_CLIENT_LIST_EDIT_BUTTON))
            .click({});
                
            cy.get(this.TestIDLocator(CypressTestIds.APP_CLIENT_MANAGE_ACCESS_TOKEN_VALIDITY_INPUT))
            .should(this.assertBeVisible)
            .clear({})
            .type(this.strAppAccessTokenValidity1Hours, {});

            //save Credentials
            cy.get(this.TestIDLocator(CypressTestIds.APP_CLIENT_MANAGE_SAVE_BUTTON))
            .click({});

            //Credentials list is visible
            cy.get(this.TestIDLocator(CypressTestIds.APP_CLIENT_LIST_TABLE))

        }
        
        DeleteCredentials()
        {
            cy.contains(this.strAppName1, {timeout: 20_000})
            .parent(this.TD)
            .parent(this.TR)
            .find(this.TestIDLocator(CypressTestIds.APP_CLIENT_LIST_DELETE_BUTTON))
            .click();
            
            // confirmation message
            cy.get(this.TestIDLocator(CypressTestIds.CONFIRMATION_BOX_OK_BUTTON), {timeout: 8_000})
            .should(this.assertBeVisible)
            .click()

            // confirmation message
            /*
            cy.get('.ant-modal-content')
            .find('.ant-modal-footer > .ant-btn-primary')
            .click();
*/

            //Success message shown
            cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
            .should(this.assertBeVisible)
        }

        CancelDeleteCredentials()
        {
            cy.contains(this.strAppName1, {timeout: 20_000})
            .parent(this.TD)
            .parent(this.TR)
            .find(this.TestIDLocator(CypressTestIds.APP_CLIENT_LIST_DELETE_BUTTON))
            .click();
            
            // confirmation message
            cy.get(this.TestIDLocator(CypressTestIds.CONFIRMATION_BOX_CANCEL_BUTTON), {timeout: 8_000})
            .should(this.assertBeVisible)
            .click()
            /*
            cy.get('.ant-modal-content')
            .find('.ant-modal-footer > .ant-btn-default')
            .click();
            */
        }      

/*
    cy.selectDropdown('select-test-id', 'Some Option Text');
    */
}
