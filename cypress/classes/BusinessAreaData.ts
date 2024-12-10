import CypressTestIds from  "../classes/CypressTestIDs"
//import CypressTestIds from  '../../../front-end/src/cypress/CypressTestIds'

import { TestBase } from "./TestBase"


//var D_description ='South Asian Countries'
var purpose ='Picklist For Validation'
var Data_tag='Date (start Date of business)'




export class BADataTest extends TestBase{

  strDomainName: string = this.TimeStamp('DN-'); 
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
   
   .click();

    //select buisness area  
    cy.get('.ant-select-selection-item', { timeout: 20000 })
    .click();
    cy.get('.ant-select-item-option-content', { timeout: 20000 })
    .contains(this.business_area)
    .click({force:true});

    //MANAGE_BUSINESS_AREA_DATA_DOMAIN_NAME_INPUT:
    cy.get(this.TestIDLocator(CypressTestIds. MANAGE_BUSINESS_AREA_DATA_DOMAIN_NAME_INPUT), {timeout: 20_000})
    .should(this.assertBeVisible)
    .type(this.strDomainName)
    .click()

    
    //domain DEscription 
    cy.get(this.TestIDLocator(CypressTestIds. MANAGE_BUSINESS_AREA_DATA_DESCRIPTION_INPUT), {timeout: 20_000})
    .type(this.strDomainName + ' Description', {})
    .click()


    //Domain Purpose 
    cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_PURPOSE_INPUT), {timeout: 20_000})
    .type(purpose)
    .click();

    // Select Data Tag
    cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_DATA_TAGS_SELECT), {timeout: 20_000})
    .click()
    cy.get('[title= "language (English)"]> .ant-select-item-option-content')
    .click()

   cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_SAVE_BUTTON), {timeout: 20_000})
   .click()

   cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 20_000})
        .should(this.assertBeVisible)

    }
    

// drag and drop a CSV file
    drag_and_drop_file( fileName: string){

        cy.contains(this.strDomainName,{timeout:20_000})
        .parent(this.TD)
        .parent(this.TR)
      
         .find(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_LIST_EDIT_BUTTON), {timeout: 8_000})
         .click()

         cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_FILE_INPUT), { timeout: 8_000 })
        .attachFile( fileName, { subjectType: 'drag-n-drop', force: true });

        // Wait for the file to upload
         cy.wait(8000);

         cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_SAVE_BUTTON), { timeout: 20_000 }) 
         //.should('contain.text', 'Save and upload') // Check if the correct label is present          
         .click({force:true});   
     
         cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 20_000})
        .should(this.assertBeVisible)

    }

    // drag and drop a CSV file
    drag_and_drop_non_csv_file( fileName: string){

      cy.contains(this.strDomainName,{timeout:20_000})
      .parent(this.TD)
      .parent(this.TR)
    
       .find(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_LIST_EDIT_BUTTON), {timeout: 8_000})
       .click()

       cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_FILE_INPUT), { timeout: 8_000 })
      .attachFile( fileName, { subjectType: 'drag-n-drop', force: true });

      // Wait for the file to upload
       cy.wait(8000);

       cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_SAVE_BUTTON), { timeout: 20_000 }) 
       //.should('contain.text', 'Save and upload') // Check if the correct label is present          
       .click({force:true});   
   
       cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 20_000})
      .should(this.assertBeVisible)

  }


check_record_value(){

  
  //cy.wait(5000);
  cy.get(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_LIST_TABLE), {timeout: 20_000})
  .should(this.assertBeVisible)
  cy.reload({ timeout: 10000 }); // Sets a 10-second timeout
  cy.contains('td', this.strDomainName) // Locate the cell containing the domain name
  .parent('tr') // Get the parent row
  .within(() => {
    // Locate the "Records" cell in the same row
    cy.get('td') // Get all cells within this row
      .eq(6)// Adjust the index to target the "Records" cell
      .invoke('text') // Get the text content
      .then((text) => {
        const recordValue = parseInt(text.trim(), 10); // Parse the text to an integer

        // Check if the value is greater than zero
        if (recordValue > 0) {
          cy.log(`The "Records" value for domain ${this.strDomainName} is ${recordValue}, which is greater than zero.`);
        } else {
          cy.log(`The "Records" value for domain ${this.strDomainName} is ${recordValue}, which is zero or less.`);
        }

        // Optional: Add an assertion
        expect(recordValue).to.be.greaterThan(0, 'Record value should be greater than zero');
      });
  })


}




   // Browse a file
    Browse_CSV_file(fileName: string){

        cy.contains(this.strDomainName,{timeout:20_000})
        .parent(this.TD)
        .parent(this.TR)
      
         .find(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_LIST_EDIT_BUTTON), {timeout: 8_000})
         .click()

         cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_FILE_INPUT), {timeout: 20_000})
         .attachFile(fileName,{force:true});
        
         // Wait for the file to upload
         cy.wait(10000);

         cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_SAVE_BUTTON))
         .should('contain.text', 'Save and upload') // Check if the correct label is present
         .click({force:true});

        cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 20_000})
        .should(this.assertBeVisible)
        

       
    }


    // replace existing data with the new one 
    replace_data(){
        cy.contains(this.strDomainName,{timeout:20_000})
        .parent(this.TD)
        .parent(this.TR)
      
         .find(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_LIST_EDIT_BUTTON), {timeout: 8_000})
         .click()
        

       // Verify that the new data is visible in the preview
        cy.contains('E02387', {timeout: 20_000})
        .should(this.assertBeVisible);

         cy.contains('Emily Davis', {timeout: 20_000})
         .should(this.assertBeVisible);

    }

// appending data
        appending_data(fileName: string){

            cy.contains(this.strDomainName,{timeout:20_000})
            .parent(this.TD)
            .parent(this.TR)
          
             .find(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_LIST_EDIT_BUTTON), {timeout: 8_000})
             .click()

             cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_FILE_INPUT), {timeout: 20_000})
             .attachFile(fileName,{force:true})

              // MANAGE_BUSINESS_AREA_DATA_APPEND_THE_DATA_OPTION
             cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_APPEND_DATA_OPTION), {timeout: 20_000})
             .check()
            // Wait for the file to upload
            cy.wait(8000);
            cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_SAVE_BUTTON))
             .should('contain.text', 'Save and upload') // Check if the correct label is present
             .click({force:true});
    
            cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 20_000})
            .should(this.assertBeVisible)

        }

        check_table(){
          cy.contains(this.strDomainName ,{timeout: 20_000})
          .parent(this.TD)
          .parent(this.TR)
          .find(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_LIST_EDIT_BUTTON), {timeout: 20_000})
          
          .click({force:true})
          cy.wait(8000)
  
          cy.get('.ant-table-content', {timeout: 8_000})

          .find('tr') // Find all the rows in the table
          .then((rows) => {
            // If there are no rows, log the message
            if (rows.length === 2) {
              cy.log('Only CSV files are acceptable.');
            } else {
              cy.log(`Table contains ${rows.length} row(s).`);
            }
          });



        }
        
        //View business area data

    viewBAdata(){
        cy.contains(this.strDomainName ,{timeout: 20_000})
        .parent(this.TD)
        .parent(this.TR)
        .find(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_LIST_VIEW_BUTTON), {timeout: 20_000})
        
        .click({force:true})
    
        cy.get('.ant-upload-drag-icon', {timeout: 20_000})
        .should(this.assertBeVisible)
  

    }


        File_Preview(){
          cy.contains(this.strDomainName, { timeout: 20000 })
          .parent(this.TD)
          .parent(this.TR)
          .find(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_LIST_EDIT_BUTTON), { timeout: 20000 })
          .click()
          //cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_DOMAIN_DATA_PREVIEW_LIST), { timeout: 20000 })
          cy.get('.ant-col-20 > .ui', { timeout: 20000 })
          .should(this.assertBeVisible)
      
        }


    // Business Area data History 
    view_BA_history(){

        cy.contains(this.strDomainName ,{timeout: 20_000})
        .parent(this.TD)
        .parent(this.TR)

        .find(this.TestIDLocator(CypressTestIds. BUSINESS_AREA_DATA_LIST_VIEW_HISTORY_BUTTON), {timeout: 20_000})
        //.should(this.assertBeVisible)
        .click()

        cy.get('#rc-tabs-0-tab-1',{timeout:8_000})
        .should(this.assertBeVisible)

    }
    
    // Edge_Case_Scenarios
    Edge_Case_Scenarios(BA:string= '', DN:string = '', Desc:string = '', Purpose: string = ''){

        //add buisness area data 

        cy.get(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_ADD_NEW_BUTTON), {timeout: 20_000})
        .click();
  
        //select business area  
        cy.get('.ant-select-selection-item', { timeout: 20000 })
        .click();
        cy.get('.ant-select-item-option-content', { timeout: 20000 })
        .contains(BA)
        .click({force:true});
        
        //Domain Name

        cy.get(this.TestIDLocator(CypressTestIds. MANAGE_BUSINESS_AREA_DATA_DOMAIN_NAME_INPUT), {timeout: 20_000})
        .should(this.assertBeVisible)
       .type(DN)
       .click({force:true})

        //Domain Description
        cy.get(this.TestIDLocator(CypressTestIds. MANAGE_BUSINESS_AREA_DATA_DESCRIPTION_INPUT), {timeout: 20_000}) 
        .type(Desc)
        .click({force:true})


        //Domain Purpose 
        cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_PURPOSE_INPUT), {timeout: 20_000})
         cy.get('#basic_domainPurpose',{timeout: 20_000})
        .type(Purpose)
        .click();

            // Select Data Tag
        cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_DATA_TAGS_SELECT), {timeout: 20_000})
        .click()
        cy.get('[title= "language (English)"]> .ant-select-item-option-content')
        .click()

        cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_SAVE_BUTTON), {timeout: 20_000})
        .click()

        // Error message
        cy.get('.ant-form-item-explain-error > .ant-row > .ant-col', {timeout: 20_000})
       .should(this.assertBeVisible)

    }
    // Edge_Case_Scenarios
    emptydomain(BA:string= '', DN:string = '', Desc:string = '', Purpose: string = ''){

      //add buisness area data 

      cy.get(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_ADD_NEW_BUTTON), {timeout: 20_000})
      .click();

      //select business area  
      cy.get('.ant-select-selection-item', { timeout: 20000 })
      .click();
      cy.get('.ant-select-item-option-content', { timeout: 20000 })
      .contains(BA)
      .click({force:true});
      
      //Domain Description
      cy.get(this.TestIDLocator(CypressTestIds. MANAGE_BUSINESS_AREA_DATA_DESCRIPTION_INPUT), {timeout: 20_000}) 
      .type(Desc)
      .click({force:true})


      //Domain Purpose 
      cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_PURPOSE_INPUT), {timeout: 20_000})
       cy.get('#basic_domainPurpose',{timeout: 20_000})
      .type(Purpose)
      .click();

      cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_SAVE_BUTTON), {timeout: 20_000})
      .click()

      cy.get('.ant-form-item-explain-error > .ant-row > .ant-col', {timeout: 20_000})
     .should(this.assertBeVisible)

  }

  empty_desc_and_purpose(BA:string= '', DN:string = '', Desc:string = '', Purpose: string = ''){

  //add buisness area data 

  cy.get(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_ADD_NEW_BUTTON), {timeout: 20_000})
  .click();

  //select business area  
  cy.get('.ant-select-selection-item', { timeout: 20000 })
  .click();
  cy.get('.ant-select-item-option-content', { timeout: 20000 })
  .contains(BA)
  .click({force:true});

  

  cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_SAVE_BUTTON), {timeout: 20_000})
  .click()

    
  }

  Delete_BAD(){
    cy.contains(this.strDomainName,{timeout:20_000})
    .parent(this.TD)
    .parent(this.TR)
  
     .find(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_LIST_DELETE_BUTTON), {timeout: 8_000})
     .click()


      // confirmation message
      cy.get(this.TestIDLocator(CypressTestIds.CONFIRMATION_BOX_OK_BUTTON), {timeout: 8_000})
      .should(this.assertBeVisible)
      .click() 

      //Success message
     cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 20_000})
    .should(this.assertBeVisible)

  }
}
