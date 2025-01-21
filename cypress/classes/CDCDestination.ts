import { TestBase } from "./TestBase";
import CypressTestIds from  "./CypressTestIDs"

export class CDCDestinations extends TestBase{ 

    strCDCDName: string = this.TimeStamp('CDCDN1-'); 
    openCDCD(){

    //open portal
    this.OpenURL();

    //login into portal with valid creadentials         
    this.Login();

    //open configuration
    cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();

    //open CDCD
    cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_CHANGEDATACAPTURE), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click()
   
    
    cy.get(this.TestIDLocator(CypressTestIds.CDC_LIST_TABLE), {timeout: 20_000})
    .should(this.assertBeVisible)


}

add_CDCD(){

    cy.get(this.TestIDLocator(CypressTestIds.CDC_LIST_ADD_BUTTON), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click()

    cy.get(this.TestIDLocator(CypressTestIds.CDC_MANAGE_NAME_INPUT), {timeout: 20_000})
    .should(this.assertBeVisible)
    .type(this.strCDCDName)
    .click()

    cy.get(this.TestIDLocator(CypressTestIds.CDC_MANAGE_DESCRIPTION_INPUT), {timeout: 20_000})
    .should(this.assertBeVisible)
    .type(this.strCDCDName + ' Description', {})
    

    this.selectDropdown1(this.TestIDLocator(CypressTestIds.CDC_MANAGE_OBJECTS_SELECT),'Schema');

    this.selectDropdown1(this.TestIDLocator(CypressTestIds.CDC_MANAGE_OBJECTS_SELECT),'Schema Field');

    this.selectDropdown1(this.TestIDLocator(CypressTestIds.CDC_MANAGE_EVENTS_SELECT),'Create');

    this.selectDropdown1(this.TestIDLocator(CypressTestIds.CDC_MANAGE_DESTINATION_SELECT),'Kinesis Stream');
    
    cy.get(this.TestIDLocator(CypressTestIds.CDC_MANAGE_KINESIS_REGION_INPUT), {timeout: 20_000})
    .should(this.assertBeVisible)
    .type('ABCD')


    cy.get(this.TestIDLocator(CypressTestIds.CDC_MANAGE_KINESIS_STREAM_ARN_INPUT), {timeout: 20_000})
    .should(this.assertBeVisible)
    .type('ABC')

    cy.get(this.TestIDLocator(CypressTestIds.CDC_MANAGE_KINESIS_ROLE_ARN_INPUT), {timeout: 20_000})
    .should(this.assertBeVisible)
    .type('ARN')

    //save
    cy.get(this.TestIDLocator(CypressTestIds.CDC_MANAGE_SAVE_BUTTON), {timeout: 8_000})
    .click()
   

    //Success message
   cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
    .should(this.assertBeVisible)


}


view_CDCD(){

    cy.contains(this.strCDCDName,{timeout:20_000})
    .parent(this.TD)
    .parent(this.TR)  
    .find(this.TestIDLocator(CypressTestIds.CDC_LIST_VIEW_BUTTON), {timeout: 8_000})
    .should(this.assertBeVisible)
     .click()
 
     cy.get(this.TestIDLocator(CypressTestIds.CDC_MANAGE_KINESIS_ROLE_ARN_INPUT),{timeout: 8_000})
    .should(this.assertBeVisible)

}

edit_CDCD(){
    cy.contains(this.strCDCDName,{timeout:20_000})
    .parent(this.TD)
    .parent(this.TR)  
    .find(this.TestIDLocator(CypressTestIds.CDC_LIST_EDIT_BUTTON), {timeout: 8_000})
    .should(this.assertBeVisible)
     .click()
 

     cy.get(this.TestIDLocator(CypressTestIds.CDC_MANAGE_DESCRIPTION_INPUT), {timeout: 20_000})
     .should(this.assertBeVisible)
     .clear()
     .type('New Description')

   
     cy.get(this.TestIDLocator(CypressTestIds.CDC_MANAGE_OBJECTS_SELECT), {timeout: 20_000}) 
     .contains('Schema')  
     .siblings('.ant-select-selection-item-remove')
     .click()
    
     this.selectDropdown1(this.TestIDLocator(CypressTestIds.CDC_MANAGE_OBJECTS_SELECT),'Data Set')

     cy.get(this.TestIDLocator(CypressTestIds.CDC_MANAGE_SAVE_BUTTON), {timeout: 8_000})
    .click()
   

    //Success message
   cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
    .should(this.assertBeVisible)


}

deactivate_CDCD(){

    cy.contains(this.strCDCDName,{timeout:20_000})
    .parent(this.TD)
    .parent(this.TR)  
    .find(this.TestIDLocator(CypressTestIds.CDC_LIST_ACTIVE_SWITCH), {timeout: 8_000})
    .should(this.assertBeVisible)
    .click()

     // Verify the button is now deactivate
     cy.get(this.TestIDLocator(CypressTestIds.CDC_LIST_ACTIVE_SWITCH), {timeout: 20_000})
     .should('have.attr', 'aria-checked', 'false')

}

delete_CDCD(){

    cy.get(this.TestIDLocator(CypressTestIds.CDC_LIST_TABLE), {timeout: 20_000})
    cy.contains(this.strCDCDName,{timeout:20_000})
    .parent(this.TD)
    .parent(this.TR)   
    .find(this.TestIDLocator(CypressTestIds.CDC_LIST_DELETE_BUTTON), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click()

    //Confirmation message
     cy.get(this.TestIDLocator(CypressTestIds.CONFIRMATION_BOX_OK_BUTTON), {timeout: 20_000})
     .should(this.assertBeVisible)
     .click()

    
    //Success message
    cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
    .should(this.assertBeVisible)
     

}




}
