import CypressTestIds from  "../classes/CypressTestIDs"
import { TestBase } from "./TestBase";



export class Systemkeystest extends TestBase{

    strSKName: string = this.TimeStamp('SKN1-'); 
    strSKGM: string = this.TimeStamp('SKGMN1-'); 

    openSystemKeys(){

    //open portal
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




    Add_key(API_KEY_TYPE: string = '',KEY: string = '' ){

    //add key button
    cy.get(this.TestIDLocator(CypressTestIds.SYSTEM_KEYS_LIST_ADD_BUTTON), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click()

     //Name
    cy.get(this.TestIDLocator(CypressTestIds.SYSTEM_KEYS_MANAGE_NAME_INPUT), {timeout: 20_000})
    .should(this.assertBeVisible)
    .type(this.strSKName)
    .click()

    //Description
    cy.get(this.TestIDLocator(CypressTestIds.SYSTEM_KEYS_MANAGE_DESCRIPTION_INPUT), {timeout: 20_000})
    .should(this.assertBeVisible)
    .type(this.strSKName + this.cntDes, {})
    .click()

    // API type
    cy.get(this.TestIDLocator(CypressTestIds.SYSTEM_KEYS_MANAGE_TYPE_SELECT),{timeout: 8_000})
    .first()
    .click();
    cy.contains(API_KEY_TYPE).click();


    //API key
   //cy.get(this.TestIDLocator(CypressTestIds.SYSTEM_KEYS_MANAGE_API_KEY_INPUT), {timeout: 20_000})
    //cy.get('.ant-input-affix-wrapper', {timeout: 8_000})
    cy.get('#manageKeys_key', {timeout: 8_000})
    .should(this.assertBeVisible)
    .type(KEY)
    .click()
    
    //Save button
   //cy.get(this.TestIDLocator(CypressTestIds.SYSTEM_KEYS_MANAGE_SAVE_BUTTON), {timeout: 20_000})
    cy.get(':nth-child(2) > [data-testid="system-keys-manage-save-button"]')
    .should(this.assertBeVisible)
    .click()

    
    }

    //view Key
    view_key(){

        cy.contains(this.strSKName,{timeout:20_000})
        .parent(this.TD)
        .parent(this.TR)  
        .find(this.TestIDLocator(CypressTestIds.SYSTEM_KEYS_LIST_VIEW_BUTTON), {timeout: 8_000})
        .scrollIntoView()
        .should(this.assertBeVisible)
        .click()
     
         cy.get(this.TestIDLocator(CypressTestIds.SYSTEM_KEYS_MANAGE_NAME_INPUT),{timeout: 8_000})
        .should(this.assertBeVisible)



    }

    edit_key(){

    cy.contains(this.strSKName,{timeout:20_000})
    .parent(this.TD)
    .parent(this.TR)
    .find(this.TestIDLocator(CypressTestIds.SYSTEM_KEYS_LIST_EDIT_BUTTON), {timeout: 8_000})
    .click()


    //edit description
    cy.get(this.TestIDLocator(CypressTestIds.SYSTEM_KEYS_MANAGE_DESCRIPTION_INPUT), {timeout: 20_000})
    .should(this.assertBeVisible)
    .clear()
    .type('Description')

    //Save
    cy.get(':nth-child(2) > [data-testid="system-keys-manage-save-button"]')
    .should(this.assertBeVisible)
    .click()

    //Success message
    cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
    .should(this.assertBeVisible)

    }

    view_key_history(){

    cy.contains(this.strSKName,{timeout:20_000})
    .parent(this.TD)
    .parent(this.TR)  
    .find(this.TestIDLocator(CypressTestIds.SYSTEM_KEYS_LIST_HISTORY_BUTTON), {timeout: 8_000})
    .scrollIntoView()
    .should(this.assertBeVisible)
    .click()
     
    cy.get('[title="Data Object"]',{timeout: 8_000})
    .should(this.assertBeVisible) 




    }

    delete_key(){

        cy.get(this.TestIDLocator(CypressTestIds.SYSTEM_KEYS_LIST_DELETE_BUTTON), {timeout: 20_000})
        cy.contains(this.strSKName,{timeout:20_000})
        .parent(this.TD)
        .parent(this.TR)   
        .find(this.TestIDLocator(CypressTestIds.SYSTEM_KEYS_LIST_DELETE_BUTTON), {timeout: 20_000})
        .should(this.assertBeVisible)
        .click()
    
        //confirmation message
         cy.get(this.TestIDLocator(CypressTestIds.CONFIRMATION_BOX_OK_BUTTON), {timeout: 20_000})
         .should(this.assertBeVisible)
         .click()
            
        //Success message
        cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
        .should(this.assertBeVisible)



    }



}
