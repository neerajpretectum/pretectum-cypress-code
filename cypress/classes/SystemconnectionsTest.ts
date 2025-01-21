import CypressTestIds from  "../classes/CypressTestIDs"
import { TestBase } from "./TestBase";

const accessKey = Cypress.env('AWS_ACCESS_KEY_ID');
const secretKey = Cypress.env('AWS_SECRET_ACCESS_KEY');
export class SystemConnection extends TestBase{ 

strSCName: string = this.TimeStamp('SCN1-'); 

openSystemConnection(){

    //open portal
    this.OpenURL();

    //login into portal with valid creadentials         
    this.Login();

    //open configuration
    cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();

    //open System Connection
    cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_SYSTEMCONNECTIONS), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click ()

    
    cy.get(this.TestIDLocator(CypressTestIds.SYSTEM_CONNECTION_LIST_TABLE), {timeout: 20_000})
    .should(this.assertBeVisible)
    



}


AddSystemConnection(){
    cy.get(this.TestIDLocator(CypressTestIds.SYSTEM_CONNECTION_LIST_ADD_BUTTON), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click()

    cy.get(':nth-child(1) > :nth-child(1) > .ant-btn', {timeout: 20_000})
    .click()

    //enter name 
    
   cy.get('#basic_name',{timeout:8000}) 
   .type(this.strSCName)

   cy.get('#basic_description',{timeout:8000})
   .type(this.strSCName+ ' Description', {})


   cy.get('#basic_accessKeyId',{timeout:8000})
   .type( accessKey)

   cy.get('#basic_secretAccessKey',{timeout:8000})
   .type(secretKey)

   cy.get('#basic_bucket',{timeout:8000})
   .type('ps3td')

   cy.get('.ant-space > :nth-child(2) > .ant-btn',{timeout:8000})
    .click()

    //Success message
   cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
   .should(this.assertBeVisible)

}

View_SC(){

    cy.contains(this.strSCName,{timeout:20_000})
    .parent(this.TD)
    .parent(this.TR)  
    .find(this.TestIDLocator(CypressTestIds.SYSTEM_CONNECTION_LIST_VIEW_BUTTON), {timeout: 8_000})
    .should(this.assertBeVisible)
     .click()
 
     cy.get('#basic_bucket',{timeout: 8_000})
    .should(this.assertBeVisible)


}

Edit_SC(){

    cy.contains(this.strSCName,{timeout:20_000})
    .parent(this.TD)
    .parent(this.TR)  
    .find(this.TestIDLocator(CypressTestIds.SYSTEM_CONNECTION_LIST_EDIT_BUTTON), {timeout: 8_000})
    .should(this.assertBeVisible)
     .click()
 
     cy.get('#basic_bucket',{timeout: 8_000})
    .should(this.assertBeVisible)
    .type('Storage log')


}

View_SC_history(){

    cy.contains(this.strSCName,{timeout:20_000})
    .parent(this.TD)
    .parent(this.TR)  
    .find(this.TestIDLocator(CypressTestIds.SYSTEM_CONNECTION_LIST_HISTORY_BUTTON), {timeout: 8_000})
    .should(this.assertBeVisible)
     .click()

     cy.get('[data-testid="common-objects-event-list-table"]', {timeout: 8_000})
     .should(this.assertBeVisible)

}

deactivate_SC(){
    cy.contains(this.strSCName,{timeout:20_000})
    .parent(this.TD)
    .parent(this.TR)  
    .find(this.TestIDLocator(CypressTestIds.SYSTEM_CONNECTION_LIST_ACTIVE_SWITCH), {timeout: 8_000})
    .should(this.assertBeVisible)
     .click()

// Verify that the toggle switch is now deactivated 
cy.contains(this.strSCName)
  .parent(this.TD)
  .parent(this.TR)
  .find(this.TestIDLocator(CypressTestIds.SYSTEM_CONNECTION_LIST_ACTIVE_SWITCH))
  .should('have.attr', 'aria-checked', 'false'); 
     


}

activate_SC(){
    cy.contains(this.strSCName,{timeout:20_000})
    .parent(this.TD)
    .parent(this.TR)  
    .find(this.TestIDLocator(CypressTestIds.SYSTEM_CONNECTION_LIST_ACTIVE_SWITCH), {timeout: 8_000})
    .should(this.assertBeVisible)
     .click()
     
// Verify that the toggle switch is now deactivated
cy.contains(this.strSCName)
  .parent(this.TD)
  .parent(this.TR)
  .find(this.TestIDLocator(CypressTestIds.SYSTEM_CONNECTION_LIST_ACTIVE_SWITCH))
  .should('have.attr', 'aria-checked', 'true')
  
    




}

Delete_SC(){

    cy.contains(this.strSCName,{timeout:20_000})
    .parent(this.TD)
    .parent(this.TR)  
    .find(this.TestIDLocator(CypressTestIds.SYSTEM_CONNECTION_LIST_DELETE_BUTTON), {timeout: 8_000})
    .should(this.assertBeVisible)
     .click()

      // confirmation message
      cy.get(this.TestIDLocator(CypressTestIds.CONFIRMATION_BOX_OK_BUTTON), {timeout: 20_000})
      .should(this.assertBeVisible)
      .click()
         
         //Success message
     cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
     .should(this.assertBeVisible)
 

}



}
