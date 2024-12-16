import CypressTestIds from  "../classes/CypressTestIDs"
import { TestBase } from "./TestBase";

//var defaultBAdataTag='language(English)'
var tagdesc='Female'
var newtagdesc=' the description of data tag gender'
var business_area_specific= 'Test Business Area'



export class Datatagtest extends TestBase{ 

strDTName: string = this.TimeStamp('DTN1-'); 

openDataTag(){
    //open portal
    this.OpenURL();

    //login into portal with valid creadentials         
    this.Login();

    //open configuration
    cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();

    //open Data Classifierstag
    cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_DATACLASSIFIERS), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click ()
   
    //list is visible
    cy.get('[title="Business Area"]',{timeout:20_000})
    .should('be.visible')

}

//add DataTag
addDataTag(){
    //add datatag button is visible
    cy.get(this.TestIDLocator(CypressTestIds.DATATAGS_ADD_DATATAG_BUTTON), {timeout: 8_000})
    .should('be.visible')
    .click()

    //select business area 
     this.selectDropdown(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAG_BUSINESSAREA_SELECT),this.business_area)

    //select datatag  
    cy.get(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAG_NAME_INPUT),{timeout: 8_000})
    .type(this.strDTName)
    .click()
    
    //tag description
    cy.get(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAG_DESCRIPTION_INPUT),{timeout:8000})
    .type(tagdesc)
    .click()

    //save
    cy.get(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAG_SAVE_BUTTON))
    .click()
   

    //Success message
   cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
    .should(this.assertBeVisible)
        
      
}
viewdatatag(){

    cy.contains(this.strDTName,{timeout:20_000})
    .parent(this.TD)
    .parent(this.TR)  
    .find(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAGLIST_HISTORY_BUTTON), {timeout: 8_000})
        .should(this.assertBeVisible)
        .click()
 
    cy.get('.ant-form-item-required',{timeout:8_000})
    .should('be.visible')

}
//edit datatag
editdatatag(){
    
    cy.contains(this.strDTName,{timeout:20_000})
    .parent(this.TD)
    .parent(this.TR)
    .find(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAGLIST_EDIT_BUTTON), {timeout: 8_000})
    .click()


    //edit description
    cy.get(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAG_DESCRIPTION_INPUT), {timeout: 20_000})
    .should(this.assertBeVisible)
    .type('{selectall}{backspace}')
    .type(newtagdesc)

    //save
    cy.get(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAG_SAVE_BUTTON), {timeout: 20_000})
    .click()

    //Success message
    cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
     .should(this.assertBeVisible)
        
}

    // view History  
viewHistory(){

    cy.contains(this.strDTName,{timeout:20_000})
    .parent(this.TD)
    .parent(this.TR)
    .find(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAGLIST_VIEW_BUTTON), {timeout: 8_000})
    .should(this.assertBeVisible)
    .click()

   // cy.get('#rc-tabs-0-tab-2',{timeout:20_000})
   cy.get(this.TestIDLocator(CypressTestIds.COMMON_OBJECTS_EVENT_LIST_TABLE), {timeout: 8_000})
    .should('be.visible')


}
    // Delete Tag
    deleteTag(){    
       
    cy.get(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAGLIST_TABLE), {timeout: 20_000})
    cy.contains(this.strDTName,{timeout:20_000})
    .parent(this.TD)
    .parent(this.TR)   
   cy.get(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAGLIST_DELETE_BUTTON), {timeout: 20_000})
   .should(this.assertBeVisible)
    .last()
    .click()

  // confirmation message
     cy.get(this.TestIDLocator(CypressTestIds.CONFIRMATION_BOX_OK_BUTTON), {timeout: 20_000})
     .should(this.assertBeVisible)
     .click()
        
        //Success message
    cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
    .should(this.assertBeVisible)


    }

 //default business area :Tag visible to everyone
    default_business_area(){
    
    //click business area data
    cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_BUSINESSAREADATA), {timeout: 8_000})
    .click()

    //click on add business area data
    cy.get(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_ADD_NEW_BUTTON), {timeout: 8_000})
    .click()
    
     cy.get('.ant-select-selector') // This targets the dropdown container
     .first()
     .click({force:true});  // This will open the dropdown

   // Step 3: Select the option from the dropdown
    cy.get('.ant-select-dropdown') 
    .first()
     .find('.ant-select-item')  // This finds individual dropdown items
     .contains('DEFAULT')  // Filter items to find the one containing "DEFAULT"
     .click({force:true});

    cy.get('[data-testid="manage-business-area-data-tags-select"] .ant-select-selector', { timeout: 10000 })
    .click() 
    cy.get('[title= "language (English)"]> .ant-select-item-option-content')
    .click()
    .should(this.assertBeVisible)

    cy.get('[title="Gender (Female)"] > .ant-select-item-option-content')
  .click()
  .should(this.assertBeVisible)
  .then(() => {
    cy.log('Visible: Default Data Tags are visible');
    
  });

    }


    specific_business_area(){
        
        //click business area data
        cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_BUSINESSAREADATA), {timeout: 8_000})
        .click()
        cy.get(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_ADD_NEW_BUTTON), {timeout: 20_000})
        .click({force:true});
    
        //select specific business area 
        cy.get('.ant-select-selection-item', {timeout: 20000})
        .click();
        cy.get('.ant-select-item-option-content', { timeout: 20000 })
        .contains(business_area_specific)
        .click({force:true})
        .debug();
    
    
        cy.get('[data-testid="manage-business-area-data-tags-select"] .ant-select-selector', { timeout: 10000 })
        .click()
        //.debug() 
        cy.get('[title= "language (English)"]> .ant-select-item-option-content')
        .click()
        .should(this.assertBeVisible)
    
        cy.get('[title="Gender (Female)"] > .ant-select-item-option-content')
        .click()
        .should(this.assertBeVisible)
    
        cy.get('[title="Test Tag for Neeraj (Description)"] > .ant-select-item-option-content')
        .click()
        .should(this.assertBeVisible)
    
        cy.get('[title="Date (start date of business )"] > .ant-select-item-option-content')
        .click()
        .should(this.assertBeVisible)
    
    
        .then(() => {
        cy.log('Both Default Data Tag and Specific Data Tag are visible');
    
        });

    }

        
    }
