import CypressTestIds from  "../classes/CypressTestIDs"
//import CypressTestIds from  '../../../front-end/src/cypress/CypressTestIds'
import { TestBase } from "./TestBase";


var datatag='Gender'
var defaultBAdataTag='language(English)'
var tagdesc='Female'
var newtagdesc=' the description of data tag gender'
var business_area_specific= 'Test Business Area'



export class Datatagtest extends TestBase{ 

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
    
    //cy.get(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAGLIST_TABLE), {timeout: 20_000}) 
    cy.get('[data-testid="vertical-menu-configuration-dataclassifiers"] > .ant-menu-title-content',{timeout:20_000})
    .should('be.visible')
    .click ()

    //list is visible
    cy.get('[title="Business Area"]',{timeout:20_000})
    .should('be.visible')

}

//add DataTag
addDataTag(){
    //add datatag button is visible
    cy.get(this.TestIDLocator(CypressTestIds.DATATAGS_ADD_DATATAG_BUTTON), {timeout: 8_000})
    //cy.get('.full-height-flex-container > .ant-row > .ant-col > .ant-btn',{timeout:8_000})
    .should('be.visible')
    .click()

    //select business area 
     this.selectDropdown(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAG_BUSINESSAREA_SELECT),this. business_area)

    //select datatag  
    cy.get(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAG_NAME_INPUT),{timeout: 8_000})
    .type(datatag)
    .click({force:true})
    
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

    cy.contains(datatag,{timeout:20_000})
    .parent(this.TD)
    .parent(this.TR)  
    //cy.get('[data-row-key="HwVG5APDeQtGCImZ2C5eUD"] > :nth-child(1) > :nth-child(2) > .blue',{timeout: 8_000})
   // cy.get('[data-row-key="EAIB8F9LN4p39VUzQKqKJ6"] > :nth-child(1) > :nth-child(2) > [data-testid="datatags-datataglist-history-button"]')
    .find(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAGLIST_HISTORY_BUTTON), {timeout: 8_000})
    //.find(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAGLIST_VIEW_BUTTON), {timeout: 20_000})
        .should(this.assertBeVisible)
        .click()
 
    cy.get('.ant-form-item-required',{timeout:8_000})
    .should('be.visible')

}
//edit datatag
editdatatag(){
    
    cy.contains(datatag,{timeout:20_000})
    .parent(this.TD)
    .parent(this.TR)
    //cy.get('[data-row-key="HwVG5APDeQtGCImZ2C5eUD"] > :nth-child(1) > :nth-child(1) > .blue',{timeout:20_000})
    .find(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAGLIST_EDIT_BUTTON), {timeout: 8_000})
    .click()


    //edit description
    //cy.get('#basic_tagDescription',{timeout:20_000})
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

    cy.contains(datatag,{timeout:20_000})
    .parent(this.TD)
    .parent(this.TR)
    //cy.get('[data-row-key="EVaHD6Rxi8D2cTOxGZRKnB"] > :nth-child(1) > :nth-child(3) > .blue',{timeout:20_000})
    .find(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAGLIST_VIEW_BUTTON), {timeout: 8_000})
    .should(this.assertBeVisible)
    .click()

   // cy.get('#rc-tabs-0-tab-2',{timeout:20_000})
   cy.get(this.TestIDLocator(CypressTestIds.COMMON_OBJECTS_EVENT_LIST_TABLE), {timeout: 8_000})
    .should('be.visible')


}
    // Delete Tag
    deleteTag(){



        
    cy.contains(datatag,{timeout:20_000})
    .parent(this.TD)
    .parent(this.TR)
   
    //.find(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAGLIST_DELETE_SWITCH), {timeout: 20_000})
   cy.get('[data-row-key="EauIk0IC34I76xiMRYMHdG"] > :nth-child(7) > .blue',{timeout:8_000})
   .should(this.assertBeVisible)
    .click({force:true})

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
    cy.get('[data-testid="vertical-menu-configuration-businessareadata"] > .ant-menu-title-content', {timeout: 8_000})
    .click()

    //click on add business area data
    cy.get('.full-height-flex-container > .ant-row > .ant-col > .ant-btn' , {timeout: 8_000})
    .click()

    //select default business area 
    
    cy.get('.ant-select-selection-item', {timeout: 20000})
    .click();

    cy.get('.ant-select-item-option-content', { timeout: 20000 })
   .contains(this. business_area)
   .click();



   //select  data tag  for defalt business area 
   cy.get('.ant-select-selection-item-content', {timeout:20000})
   .click()
   /*cy.get('.ant-form-item-control-input',{timeout:20000}) 
   .contains(defaultBAdataTag)
   .click()
   .should('be.visible')*/

  cy.get( '.ant-select-selection-placeholder', {timeout:20000})
    

    }
}