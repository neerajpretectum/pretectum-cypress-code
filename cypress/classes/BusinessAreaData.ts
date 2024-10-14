import CypressTestIds from  "../classes/CypressTestIDs"
//import CypressTestIds from  '../../../front-end/src/cypress/CypressTestIds'

import { TestBase } from "./TestBase"


var D_description ='South Asian Countries'
var purpose ='Picklist For Validation'
var Domain_name ='Honorific'
var Data_tag='Date (start Dtae of business)'
const filePath = 'BAdata.csv';  

export class BADataTest extends TestBase{

openBAData(){

    //open portal
    this.OpenURL();

    //login into portal with valid creadentials         
   
    this.Login();
    //open configuration
    cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 8_000})
    .should(this.assertBeVisible)
    .click();

    //open BAData section
    cy.get('[data-testid="vertical-menu-configuration-businessareadata"] > .ant-menu-title-content',{timeout:8000})
   .should(this.assertBeVisible)
    .click();

}

//add Business area Data
addBAdata(){

   //add buisness area data 

   cy.get(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_ADD_NEW_BUTTON), {timeout: 20_000})
   //.should(this.assertBeVisible)
   //cy.get('.full-height-flex-container > .ant-row > .ant-col > .ant-btn',{timeout: 20_000})
   .click();

    //select buisness area
  // this.selectDropdown(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_DATA_TAGS_SELECT),this.business_area)
   
 //select business area  
    cy.get('.ant-select-selection-item', { timeout: 20000 })
    .click();
    cy.get('.ant-select-item-option-content', { timeout: 20000 })
    .contains(this.business_area)
    .click();



    //MANAGE_BUSINESS_AREA_DATA_DOMAIN_NAME_INPUT:
    cy.get(this.TestIDLocator(CypressTestIds. MANAGE_BUSINESS_AREA_DATA_DOMAIN_NAME_INPUT), {timeout: 20_000})
    .should(this.assertBeVisible)
    .type(Domain_name)
    .click({force:true})

    
    //cy.get('#basic_domainName',{timeout:8_000})
    //.type ('domain ')

    //domain DEscription 

    cy.get(this.TestIDLocator(CypressTestIds. MANAGE_BUSINESS_AREA_DATA_DESCRIPTION_INPUT), {timeout: 20_000})
    //cy.get('#basic_domainDescription',{timeout: 20_000})
    .type(D_description)
    .click({force:true})


    //Domain Purpose 
    cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_PURPOSE_INPUT), {timeout: 20_000})
   // cy.get('#basic_domainPurpose',{timeout: 20_000})
    .type(purpose)
    .click();

    // Data Tag
    //this.selectDropdown(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_DATA_TAGS_SELECT),this.business_area)
        
    //
    //cy.get('.ant-select-selection-item',{timeout:20_000})
    //.click()
    //cy.get('.ant-select-selection-overflow-item',{timeout:20_000})
   // cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .ant-form-item > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector')
  // cy.get('.ant-select-selection-overflow').find('>span').contains(Data_tag)
   // .click()

   cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_SAVE_BUTTON), {timeout: 20_000})
   .click()

   cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 20_000})
        .should(this.assertBeVisible)

    }


// drag and drop a CSV file
    drag_and_drop_CSV_file(){

        cy.contains(Domain_name,{timeout:20_000})
        .parent(this.TD)
        .parent(this.TR)
      
         .find(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_LIST_EDIT_BUTTON), {timeout: 8_000})
         .click({force:true})

        /* cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_FILE_INPUT), {timeout: 8_000})
         .attachFile(filePath, { subjectType: 'drag-n-drop' })
          


         cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_SAVE_BUTTON), { timeout: 20_000 }) 
         .scrollIntoView() 
         .should(this.assertBeVisible)      
         .click();       
     
         cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 20_000})
        .should(this.assertBeVisible)*/

    

    }

    //drag_and_drop_non_CSV_file
    drag_and_drop_non_CSV_file(){


        cy.contains(Domain_name,{timeout:20_000})
        .parent(this.TD)
        .parent(this.TR)
      
         .find(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_LIST_EDIT_BUTTON), {timeout: 8_000})
         .click()

         cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_FILE_INPUT), {timeout: 8_000})
         .attachFile('BAdata.txt', { subjectType: 'drag-n-drop' });

         cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_SAVE_BUTTON), {timeout: 20_000})  
         .scrollIntoView()  
         .should(this.assertBeVisible)
         .click({force:true})


        cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 20_000})
        .should(this.assertBeVisible)


    }


   // Browse a file
    Browse_CSV_file(){

        cy.contains(Domain_name,{timeout:20_000})
        .parent(this.TD)
        .parent(this.TR)
      
         .find(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_LIST_EDIT_BUTTON), {timeout: 8_000})
         .click()

         /*cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_FILE_INPUT), {timeout: 20_000})
         .attachFile('BAdata.csv');

         cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_SAVE_BUTTON), {timeout: 20_000})
        //   
         .scrollIntoView()  
         .should(this.assertBeVisible)
         .click({force:true})


       // cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 20_000})
       // .should(this.assertBeVisible)*/



       
    }
    
}