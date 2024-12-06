import CypressTestIds from  "../classes/CypressTestIDs"
//import CypressTestIds from  '../../../front-end/src/cypress/CypressTestIds'

import { TestBase } from "./TestBase"


var D_description ='South Asian Countries'
var purpose ='Picklist For Validation'
var Domain_name ='Honorific'
var Data_tag='Date (start Dtae of business)'




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
    drag_and_drop_CSV_file_and_non_csv_file( fileName: string){

        cy.contains(Domain_name,{timeout:20_000})
        .parent(this.TD)
        .parent(this.TR)
      
         .find(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_LIST_EDIT_BUTTON), {timeout: 8_000})
         .click()

        // cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_FILE_INPUT), {timeout: 8_000})
        // .attachFile('BAdata.csv', {subjectType: 'drag-n-drop' })

         

         cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_FILE_INPUT), { timeout: 8_000 })
        .attachFile( fileName, { subjectType: 'drag-n-drop', force: true });

        // Wait for the file to upload
         cy.wait(10000);

         cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_SAVE_BUTTON), { timeout: 20_000 }) 
         .should('contain.text', 'Save and upload') // Check if the correct label is present          
         .click({force:true});   
        
      

     
         cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 20_000})
        .should(this.assertBeVisible)

    

    }

   


   // Browse a file
    Browse_CSV_file(fileName: string){

        cy.contains(Domain_name,{timeout:20_000})
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
        cy.contains(Domain_name,{timeout:20_000})
        .parent(this.TD)
        .parent(this.TR)
      
         .find(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_LIST_EDIT_BUTTON), {timeout: 8_000})
         .click()
        

       // Verify that the new data is visible in the preview
        cy.contains('E02387', {timeout: 20_000})
        .should(this.assertBeVisible);

         cy.contains('Emily Davis', {timeout: 20_000})
         .should(this.assertBeVisible);

         //cy.get('[data-row-key="BVHPxzPFMxmK7n20QGrOxY"] > :nth-child(2)')
        //.should(this.assertBeVisible)

       //cy.get('[data-row-key="ATP7hlnB4AdBSXR93iqGaZ"] > :nth-child(3)')
       //.should(this.assertBeVisible)
       // cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_DOMAIN_DATA_PREVIEW_LIST), {timeout: 20_000})

        /*// Check for the first value from the CSV file
        .should('contain.text', 'E02387')  

        // Check for the second value from the CSV file 
        .and('contain.text', 'Emily Davis') 

        .and('be.visible');*/

    }

// appending data
        appending_data(fileName: string){

            cy.contains(Domain_name,{timeout:20_000})
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

             //cy.get(':nth-child(2) > .ant-radio-wrapper > .ant-radio > .ant-radio-input' ,{timeout: 8_000})
             //.check()
             //.should(this.assertBeVisible)
             //.check({force:true})
             //cy.get(':nth-child(2) > .ant-radio-wrapper > .ant-radio > .ant-radio-input' ,{timeout: 8_000})
             //.should('be.visible')
             //.check()
            
             // Wait for the file to upload
            
             //ant-radio-input
            

             //click on append the data option 
             //cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_APPEND_THE_DATA_OPTION), {timeout: 20_000})
            //.check()
           // cy.get(':nth-child(2) > .ant-radio-wrapper > .ant-radio > .ant-radio-input').check()

            cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_SAVE_BUTTON))
             .should('contain.text', 'Save and upload') // Check if the correct label is present
             .click({force:true});
    
            cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 20_000})
            .should(this.assertBeVisible)
            




        }
        
        //View business area data

    viewBAdata(){


      /*  function forceVisible(element: JQuery<HTMLElement>) {
            if (element.length) {
              element[0].scrollIntoView(); // Ensure it is in view
              element.trigger('mouseover'); // Trigger hover if needed
              return cy.wrap(element).click({ force: true }); // Force click
            }
            throw new Error('Element not found');
          }*/



        cy.contains(Domain_name ,{timeout: 20_000})
        .parent(this.TD)
        .parent(this.TR)
        .find(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_LIST_VIEW_BUTTON), {timeout: 20_000})
        .should(this.assertBeVisible)
        .click()

  
       
        

                // Check if the ant-table-container exists and is visible
        //cy.get('.ant-table-content', {timeout: 8_000}) 
        //.should('exist', {timeout: 8_000}) // Assert that the element exists in the DOM
        //cy.wait(8000)
        //.should(this.assertBeVisible)

        
        

        //class="full-height-flex-container verticle-scroll"
     // Verify that the new data is visible in the preview
             cy.get('.ant-table-content', {timeout: 8_000})
            // cy.get('[data-layer="Content"]')
             .should('exist')
             .scrollIntoView() 
             .should(this.assertBeVisible, {timeout: 8_000});

             
             
             cy.contains('Emily Davis', {timeout: 20_000})
             .scrollIntoView()
             .should(this.assertBeVisible);
    
              cy.contains('1000', {timeout: 20_000})
              .scrollIntoView() 
             .should(this.assertBeVisible);

    }


        File_Preview(){
            
            
                  // First, ensure you are in the right context and click the button to view data
                  cy.contains(Domain_name, { timeout: 20000 })
                    .parent(this.TD)
                    .parent(this.TR)
                    .find(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_LIST_VIEW_BUTTON), { timeout: 20000 })
                    .should(this.assertBeVisible)
                    .click(); // Click the button to view data

                    cy.get('.ant-table-content', { timeout: 20000 })
                    .should('be.visible');

                    cy.get('.ant-table-content .ant-table-row', { timeout: 20000 }).each(($row, index) => {
                        // For each row, get the text of the cells
                        const rowData: string[] = []; // Explicitly type rowData as string array
                        cy.wrap($row).find('.ant-table-cell').each(($cell) => {
                          rowData.push($cell.text()); // Push the text of each cell
                        }).then(() => {
                          // Log the row's data
                          cy.log(`Row ${index + 1}: ${rowData.join(', ')}`); // Display the data in the log
                        });
                      });
              
        }


    // Business Area data History 
    view_BA_history(){

        cy.contains(Domain_name ,{timeout: 20_000})
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

        cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_SAVE_BUTTON), {timeout: 20_000})
        .click()

        // 
        cy.get('.ant-form-item-explain-error > .ant-row > .ant-col', {timeout: 20_000})
      // .should('contain.text', 'Please input name')
       .should(this.assertBeVisible)

        





    }
}
