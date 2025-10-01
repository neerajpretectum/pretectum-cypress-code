import CypressTestIds from  '../CypressTestIds';
import { TestBase } from "./TestBase";






export class CredentialsTest extends TestBase
{
        //Timestamp const
        strAppName1: string = this.TimeStamp('AN1x', 'x');
        strAppAccessTokenValidity2Hours: string = '2 Hours';
        strAppAccessTokenValidity1Hours: string = '1 Hours';

 //Open Credentials
        OpenCredentials()
        {
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
        

        //Create Credentials
        CreateCredentials(app_name: string ='',ATV:string='' )
        {
                        // helper for input fields
            const fillField = (selector: string, value: string) => {
            cy.get(selector, { timeout: 20000 }).then($el => {
                if (value === '') {
                // clear field if empty string provided
                cy.wrap($el).type('{selectall}{backspace}', { force: true })
                } else {
                cy.wrap($el).clear().type(value)
                }
            })
            }

         
            cy.get(this.TestIDLocator(CypressTestIds.APP_CLIENT_LIST_ADD_BUTTON), { timeout: 20000 })
            .click({})

            fillField(
            this.TestIDLocator(CypressTestIds.APP_CLIENT_MANAGE_NAME_INPUT),app_name)

            fillField(
            this.TestIDLocator(CypressTestIds.APP_CLIENT_MANAGE_ACCESS_TOKEN_VALIDITY_INPUT),ATV)

           
        }

}