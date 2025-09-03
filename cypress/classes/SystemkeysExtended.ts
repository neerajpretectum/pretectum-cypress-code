import CypressTestIds from  '../CypressTestIds';
import { TestBase } from "./TestBase";



export class SystemkeyExtended extends TestBase{

    strSKName: string = this.TimeStamp('SKN1-'); 
    strSKGM: string = this.TimeStamp('SKGMN1-');



    openSystemKeys(){
       
    this.OpenURL();

    //login into portal with valid creadentials         
    this.Login();

    //open configuration
    cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();

    //open System Keys
    cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_SYSTEMKEYS), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click ()
     
    cy.get(this.TestIDLocator(CypressTestIds.SYSTEM_KEYS_LIST_TABLE), {timeout: 20_000})
    .should(this.assertBeVisible)


    }

    system_Keys_edge_case(SK_name: string ='', SK_desc: string ='', SK_API: string ='', SK_API_KEY: string=''){


        // helper function
    const fillField = (selector: string, value: string) => {
    cy.get(selector, { timeout: 8000 }).then($el => {
        if (value === '') {
        // empty case
        cy.wrap($el).type('{selectall}{backspace}', { force: true })
        } else {
        cy.wrap($el).clear().type(value)
        }
    })
    }

    // open form
    cy.get(this.TestIDLocator(CypressTestIds.SYSTEM_KEYS_LIST_ADD_BUTTON), { timeout: 20000 })
    .should(this.assertBeVisible)
    .click()

    // fill fields
    fillField(this.TestIDLocator(CypressTestIds.SYSTEM_KEYS_MANAGE_NAME_INPUT), SK_name)
    fillField(this.TestIDLocator(CypressTestIds.SYSTEM_KEYS_MANAGE_DESCRIPTION_INPUT), SK_desc)

    // select API type
    cy.get(this.TestIDLocator(CypressTestIds.SYSTEM_KEYS_MANAGE_TYPE_SELECT), { timeout: 8000 })
    .first()
    .click()
    cy.contains(SK_API).click()

    // fill API key
    fillField('#manageKeys_key', SK_API_KEY)

    // click save
    cy.get(':nth-child(2) > [data-testid="system-keys-manage-save-button"]', { timeout: 8000 })
    .should(this.assertBeVisible)
    .click()








    }

}