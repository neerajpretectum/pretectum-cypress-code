import CypressTestIds from  "../classes/CypressTestIDs"
import { TestBase } from "./TestBase"


var purpose ='Picklist For Validation'
var Data_tag='data classifer tag (for test case )'

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
    cy.get(this.TestIDLocator(CypressTestIds. VERTICAL_MENU_BUSINESSAREADATA), {timeout: 8_000})
   .should(this.assertBeVisible)
    .click();

}

//add Business area Data
addBAdata(){

   //add buisness area data 

   cy.get(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_ADD_NEW_BUTTON), {timeout: 20_000})
   
   .click();

    this.selectDropdown(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_BUSINESS_AREA_NAME_SELECT),this.business_area);

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
    this.selectDropdown(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_DATA_TAGS_SELECT),Data_tag)

  // Close the dropdown with the Escape key
    cy.get(this.cntBody).type(this.cntEscape);

   cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_SAVE_BUTTON), {timeout: 20_000})
   .click()

   cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 20_000})
  .should(this.assertBeVisible)

    }
    


    drag_and_drop_non_csv_file(fileName: string ){

        //const fileName = 'BADataFile.xlsx';
        cy.contains(this.strDomainName,{timeout:20_000})
        .parent(this.TD)
        .parent(this.TR)
      
         .find(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_LIST_EDIT_BUTTON), {timeout: 8_000})
         .click()

         cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_FILE_INPUT), { timeout: 20_000 })
         .attachFile( fileName, { subjectType: 'drag-n-drop',force:true})
         .trigger('change', { force: true });

          //Error Message
          cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_ERROR), {timeout: 20_000})
          .should(this.assertBeVisible)
         
    }

    // drag and drop a CSV file
    drag_and_drop_csv_file( fileName: string){

      cy.contains(this.strDomainName,{timeout:20_000})
      .parent(this.TD)
      .parent(this.TR)
    
       .find(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_LIST_EDIT_BUTTON), {timeout: 8_000})
       .click()

       cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_FILE_INPUT), { timeout: 20_000 })
       .attachFile( fileName, { subjectType: 'drag-n-drop' });

      // Wait for the file to upload
       cy.wait(8000);
       cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_SAVE_BUTTON), { timeout: 20_000 }) 
      .click();
      
      cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 20_000})
        .should(this.assertBeVisible)
   
       

  }


   // Browse a file
    Browse_CSV_file(fileName: string){

        cy.reload();
        cy.contains(this.strDomainName,{timeout:20_000})
        .parent(this.TD)
        .parent(this.TR)
      
         .find(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_LIST_EDIT_BUTTON), {timeout: 8_000})
         .click()

         cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_FILE_INPUT), {timeout: 20_000})
         .attachFile(fileName); 
        
         // Wait for the file to upload
         cy.wait(8000);

         cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_SAVE_BUTTON))
         .click();

        cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 20_000})
        .should(this.assertBeVisible)
        

       
    }


// appending data
        appending_data(fileName: string){

            cy.reload();
            cy.contains(this.strDomainName,{timeout:20_000})
            .parent(this.TD)
            .parent(this.TR)
          
             .find(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_LIST_EDIT_BUTTON), {timeout: 8_000})
             .click()

             cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_FILE_INPUT), {timeout: 20_000})
             .attachFile(fileName)

             // Wait for the file to upload
              cy.wait(8000);

              // MANAGE_BUSINESS_AREA_DATA_APPEND_THE_DATA_OPTION
             cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_APPEND_DATA_OPTION), {timeout: 20_000})
             .check()

            // Wait for the file to upload
            cy.wait(8000);
            cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_SAVE_BUTTON))
             .click();
    
            cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 20_000})
            .should(this.assertBeVisible)

        }
    
        //View business area data

    viewBAdata(){
        cy.contains(this.strDomainName ,{timeout: 20_000})
        .parent(this.TD)
        .parent(this.TR)
        .find(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_LIST_VIEW_BUTTON), {timeout: 20_000})
        .click()
    
        cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_DESCRIPTION_INPUT), {timeout: 20_000})
        .should(this.assertBeVisible)
       
  

    }

        File_Preview(){

          cy.reload()
          cy.contains(this.strDomainName, { timeout: 20000 })
          .parent(this.TD)
          .parent(this.TR)
          .find(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_LIST_VIEW_BUTTON), { timeout: 20000 })
          .click()

          cy.wait(8000)

          cy.get('.ant-table-content')
          .scrollIntoView()
          .should(this.assertBeVisible)
          .scrollTo('bottom', { ensureScrollable: false });
          
          cy.get('.ant-table-content tbody tr').its('length').then((rowCount) => {
                for (let i = 0; i < rowCount; i++) {
                  cy.get('.ant-table-content tbody tr').eq(i).scrollIntoView().should(this.assertBeVisible);
                }
              });
           
      
          
      
        }

      
    // Business Area data History 
    view_BA_history(){

        cy.contains(this.strDomainName ,{timeout: 20_000})
        .parent(this.TD)
        .parent(this.TR)

        .find(this.TestIDLocator(CypressTestIds. BUSINESS_AREA_DATA_LIST_VIEW_HISTORY_BUTTON), {timeout: 20_000})
        .click()

        cy.get('#rc-tabs-0-tab-1',{timeout:8_000})
        .should(this.assertBeVisible)

    }
    
    // Edge_Case_Scenarios
    Edge_Case_Scenarios(BA:string= '', DN:string = '', Desc:string = '', Purpose: string = '', DT:string=''){

        //add buisness area data 

        cy.get(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_ADD_NEW_BUTTON), {timeout: 20_000})
        .click();
 
        this.selectDropdown(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_BUSINESS_AREA_NAME_SELECT),BA);

        //Domain Name
        cy.get(this.TestIDLocator(CypressTestIds. MANAGE_BUSINESS_AREA_DATA_DOMAIN_NAME_INPUT), {timeout: 20_000})
        .should(this.assertBeVisible)
       .type(DN)
       .click()

        //Domain Description
        cy.get(this.TestIDLocator(CypressTestIds. MANAGE_BUSINESS_AREA_DATA_DESCRIPTION_INPUT), {timeout: 20_000}) 
        .focus()
        .type(Desc)
        .click()


        //Domain Purpose 
        cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_PURPOSE_INPUT), {timeout: 20_000})
        .type(Purpose)
        .click();

            // Select Data Tag
        this.selectDropdown(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_DATA_TAGS_SELECT),DT)
    
        // Close the dropdown with the Escape key
        cy.get(this.cntBody).type(this.cntEscape);

        //save
        cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_SAVE_BUTTON), {timeout: 20_000})
        .click()

        // Error message
        cy.get('.ant-form-item-explain-error > .ant-row > .ant-col', {timeout: 20_000})
       .should(this.assertBeVisible)

    }




    // empty domain
    emptydomain(BA:string= '', DN:string = '', Desc:string = '', Purpose: string = '',DT:string=''){

      //add buisness area data 
       cy.get(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_ADD_NEW_BUTTON), {timeout: 20_000})
      .click();

      this.selectDropdown(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_BUSINESS_AREA_NAME_SELECT),BA);

      //Domain Description
      cy.get(this.TestIDLocator(CypressTestIds. MANAGE_BUSINESS_AREA_DATA_DESCRIPTION_INPUT), {timeout: 20_000}) 
      .type(Desc)
      .click()

      //Domain Purpose 
      cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_PURPOSE_INPUT), {timeout: 20_000})
      .type(Purpose)
      .click();

      //DATA TAG
      this.selectDropdown(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_DATA_TAGS_SELECT),DT)

      // Close the dropdown with the Escape key
      cy.get(this.cntBody).type(this.cntEscape);

      cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_SAVE_BUTTON), {timeout: 20_000})
      .click()

      cy.get('.ant-form-item-explain-error > .ant-row > .ant-col', {timeout: 20_000})
     .should(this.assertBeVisible)

  }


  // empty_desc_and_purpose
  empty_desc_and_purpose(BA:string= '', DN:string = '', Desc:string = '', Purpose: string = '',DT:string=''){

  //add buisness area data 

  cy.get(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_ADD_NEW_BUTTON), {timeout: 20_000})
  .click();
  

  //select business area 
   this.selectDropdown(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_BUSINESS_AREA_NAME_SELECT),BA); 

//DOMAIN NAME
  cy.get(this.TestIDLocator(CypressTestIds. MANAGE_BUSINESS_AREA_DATA_DOMAIN_NAME_INPUT), {timeout: 20_000})
        .should(this.assertBeVisible)
       .type(DN)
       .click()


  //DATA TAG
  this.selectDropdown(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DATA_DATA_TAGS_SELECT),DT)
   // Close the dropdown with the Escape key
   cy.get(this.cntBody).type(this.cntEscape);

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
