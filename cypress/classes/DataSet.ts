import CypressTestIds from  "./CypressTestIDs"
import { TestBase } from "./TestBase"


export class DataSet extends TestBase{
  
  strDSName: string = this.TimeStamp('DSN-'); 
  schema_name:string = this.TimeStamp('SN-');

    createSchema(){

    //open portal
    this.OpenURL();

    //login into portal with valid creadentials         
    this.Login();

    //Open Schema Page
    cy.get(this.TestIDLocator(CypressTestIds. HEADER_MENU_SCHEMA), {timeout: 20_000})
    .click()

    cy.get(this.TestIDLocator(CypressTestIds.CREATE_NEW_SCHEMA_BUTTON), {timeout: 20_000})
    .click()

    cy.get(this.TestIDLocator(CypressTestIds.UPLOAD_SCHEMA_FILE_INPUT), {timeout: 8_000})
    .attachFile('Dataset.csv', { subjectType: 'drag-n-drop' });

    cy.get(this.TestIDLocator(CypressTestIds.UPLOAD_SCHEMA_NEXT_BUTTON), {timeout: 8_000})
    .should(this.assertBeVisible)
    .click()

    cy.get(this.TestIDLocator(CypressTestIds.MANAGE_SCHEMA_MODEL_NAME_INPUT), {timeout: 20_000})
    .should(this.assertBeVisible)
    .clear()
    .type(this.schema_name)

    cy.get(this.TestIDLocator(CypressTestIds.MANAGE_SCHEMA_MODEL_DESCRIPTION_INPUT), {timeout: 20_000})
    .clear()
    .type('Description')

    cy.get(this.TestIDLocator(CypressTestIds.MANAGE_SCHEMA_MODEL_SAVE_AS_DRAFT_BUTTON), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click()
    
    cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
    .should(this.assertBeVisible)
    
    cy.wait(8000)
    cy.reload();
    
    }

    select_schema(){

      this.OpenURL();

    //login into portal with valid creadentials         
      this.Login();

    //Open Schema Page
    cy.get(this.TestIDLocator(CypressTestIds. HEADER_MENU_SCHEMA), {timeout: 20_000})
    .click()

    //cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_LIST_TABLE), {timeout: 8_000})
    //.should(this.assertBeVisible)
    cy.contains(this.schema_name, {timeout: 20_000})
    .click()


    }
    //open new data set window
    open_new_dataset_window(){

      cy.get(this.TestIDLocator(CypressTestIds.DATASET_LIST_CREATE_NEW_DATASET_BUTTON),{timeout:20_000})
      .click();

    }

    //save dataset container 
    save_data_set(){
    
      cy.get(this.TestIDLocator(CypressTestIds.DATASET_LIST_CREATE_NEW_DATASET_BUTTON),{timeout:8_000})
      .click();
    
    //DataSet Name

    cy.get(this.TestIDLocator(CypressTestIds.DATASET_MANAGE_DATASET_NAME_INPUT),{timeout:8_000})
    .type(this.strDSName)
 

    //DataSet Description
    cy.get(this.TestIDLocator(CypressTestIds.DATASET_MANAGE_DATASET_DESCRIPTION_INPUT),{timeout:8_000})
    .type(this.strDSName + ' Description - 1', {});
  

    //save
    cy.get(this.TestIDLocator(CypressTestIds.DATASET_MANAGE_DATASET_SAVE_BUTTON),{timeout:8_000})
    .should(this.assertBeVisible)
    .click()

    //Success message shown
    cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
    .should(this.assertBeVisible)

    }


    //add data manually
    add_dataset_record_manually(){

    cy.contains(this.strDSName,{timeout:20_000})
    .parent(this.TD)
    .parent(this.TR)
    .find(this.TestIDLocator(CypressTestIds.DATASET_LIST_EDIT_BUTTON), { timeout: 8000 })
    .click()
    
    //addd data
    cy.get(':nth-child(3) > .ant-row > .ant-col > .ant-space > :nth-child(2) > .ant-btn', {timeout: 8_000})
    .click()
    
    // Row#1
    //EEID
   // cy.get('#basic_G3Oie04XwEOLOUqXlDSoam', {timeout: 8_000})
   cy.get('#basic_8aIaFHfVF5Q7yJxLnd0pJ0', {timeout: 8_000})
    .type('E02387')

    //cy.get('#basic_8aIaFHfVF5Q7yJxLnd0pJ0')
    //Full Name
    cy.get('#basic_EwCOqQdnvrPLTeB21EelCy')
    .type('Emily Davis')

    //Job Title
    cy.get('#basic_6BFtcYwCrmPFbCT9LRSavU')
    .type('Sr. Manger')

      //Department
    cy.get('#basic_BlFUXQ0v8rPDPQEg5xvFjh')
    .type('IT')

    //Business Unit
    cy.get('#basic_5UfhRkWpILAHt6przHQdiv')
    .type('Research & Development')

      //Gender
    cy.get('#basic_0QcFf0G9FbDEZCG1XCnfpA')
    .type('Female')

    //Ethnicity
    cy.get('#basic_EKwEBy361x9B7SYNtLMttS')
    .type('Black')

    //Age
    cy.get('#basic_LeOJXr9GFI5IJBl3EVWKjU')
    .type('55')

     //save
     cy.get(this.TestIDLocator(CypressTestIds.DATASET_MANAGE_DATASET_SAVE_BUTTON),{timeout:8_000})
     .should(this.assertBeVisible)
     .click()
      
   //add more data
   cy.get(':nth-child(3) > .ant-row > .ant-col > .ant-space > :nth-child(2) > .ant-btn',{timeout:8000})
   .click()
 
    //Row2 
    //EEID
   cy.get('#basic_G3Oie04XwEOLOUqXlDSoam', {timeout: 8_000})
   .type('E02387')

  
   //Full Name
   cy.get('#basic_EwCOqQdnvrPLTeB21EelCy')
   .type('Theodore Dinh')

   //Job Title
   cy.get('#basic_6BFtcYwCrmPFbCT9LRSavU')
   .type('Technical Architect')

     //Department
   cy.get('#basic_BlFUXQ0v8rPDPQEg5xvFjh')
   .type('IT')

   //Business Unit
   cy.get('#basic_5UfhRkWpILAHt6przHQdiv')
   .type('Manufacturing')

     //Gender
   cy.get('#basic_0QcFf0G9FbDEZCG1XCnfpA')
   .type('Female')

   //Ethnicity
   cy.get('#basic_EKwEBy361x9B7SYNtLMttS')
   .type('Asian')

   //Age
   cy.get('#basic_LeOJXr9GFI5IJBl3EVWKjU')
   .type('59')

   //save
   cy.get(this.TestIDLocator(CypressTestIds.DATASET_MANAGE_DATASET_SAVE_BUTTON),{timeout:20_000})
   .should(this.assertBeVisible)
   .click()
 
  //Success message shown
  cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
  .should(this.assertBeVisible)
 
 //Row3
      
  //add more data
   cy.get(':nth-child(3) > .ant-row > .ant-col > .ant-space > :nth-child(2) > .ant-btn',{timeout:8000})
   .click()


    //EEID
    cy.get('#basic_G3Oie04XwEOLOUqXlDSoam', {timeout: 8_000})
    .type('E02567')
 
   
    //Full Name
    cy.get('#basic_EwCOqQdnvrPLTeB21EelCy')
    .type('Bella Powell')
 
    //Job Title
    cy.get('#basic_6BFtcYwCrmPFbCT9LRSavU')
    .type('Vice President')
 
      //Department
    cy.get('#basic_BlFUXQ0v8rPDPQEg5xvFjh')
    .type('Marketing')
 
    //Business Unit
    cy.get('#basic_5UfhRkWpILAHt6przHQdiv')
    .type('Research & Development')
 
      //Gender
    cy.get('#basic_0QcFf0G9FbDEZCG1XCnfpA')
    .type('Female')
 
    //Ethnicity
    cy.get('#basic_EKwEBy361x9B7SYNtLMttS')
    .type('white')
 
    //Age
    cy.get('#basic_LeOJXr9GFI5IJBl3EVWKjU')
    .type('59')
 
   //save
   cy.get(this.TestIDLocator(CypressTestIds.DATASET_MANAGE_DATASET_SAVE_BUTTON),{timeout:20_000})
   .should(this.assertBeVisible)
   .click()
   //Success message shown
   cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
   .should(this.assertBeVisible)

   //Row4

   //add more data
   cy.get(':nth-child(3) > .ant-row > .ant-col > .ant-space > :nth-child(2) > .ant-btn',{timeout:8000})
   .click()


    //EEID
    cy.get('#basic_G3Oie04XwEOLOUqXlDSoam', {timeout: 8_000})
    .type('E02355')
 
   
    //Full Name
    cy.get('#basic_EwCOqQdnvrPLTeB21EelCy')
    .type('Camila Silva')
 
    //Job Title
    cy.get('#basic_6BFtcYwCrmPFbCT9LRSavU')
    .type('Vice President')
 
      //Department
    cy.get('#basic_BlFUXQ0v8rPDPQEg5xvFjh')
    .type('Accounting')
 
    //Business Unit
    cy.get('#basic_5UfhRkWpILAHt6przHQdiv')
    .type('Speciality Products')
 
      //Gender
    cy.get('#basic_0QcFf0G9FbDEZCG1XCnfpA')
    .type('male')
 
    //Ethnicity
    cy.get('#basic_EKwEBy361x9B7SYNtLMttS')
    .type('Black')
 
    //Age
    cy.get('#basic_LeOJXr9GFI5IJBl3EVWKjU')
    .type('49')
 
    //save
    cy.get(this.TestIDLocator(CypressTestIds.DATASET_MANAGE_DATASET_SAVE_BUTTON),{timeout:20_000})
    .should(this.assertBeVisible)
    .click()
  
   //Success message shown
   cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
   .should(this.assertBeVisible)

   
  }

  //Edit dataset
  Edit_DataSet(){

  cy.contains(this.strDSName,{timeout:20_000})
    .parent(this.TD)
    .parent(this.TR)
    .find(this.TestIDLocator(CypressTestIds.DATASET_LIST_EDIT_BUTTON), { timeout: 20000 })
    .click()
  
    cy.get(this.TestIDLocator(CypressTestIds.DATASET_MANAGE_DATASET_DESCRIPTION_INPUT),{timeout:20_000})
    .type(this.strDSName + '  New Description - 1', {});
  
     //save
   cy.get(this.TestIDLocator(CypressTestIds.DATASET_MANAGE_DATASET_SAVE_BUTTON),{timeout:20_000})
   .should(this.assertBeVisible)
   .click()

  //Success message shown
    cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
    .should(this.assertBeVisible)


}

// drag and drop a file and replace existing data
Drag_and_drop_file_and_replace_existing_data(){
    
  cy.contains(this.strDSName,{timeout:20_000})
    .parent(this.TD)
    .parent(this.TR)
    .find(this.TestIDLocator(CypressTestIds.DATASET_LIST_EDIT_BUTTON), { timeout: 20000 })
    .click()
    
    cy.get(this.TestIDLocator(CypressTestIds.DATASET_MANAGE_DATASET_LOAD_DATA_FILE_INPUT),{timeout:20_000})
    .click()

    cy.get('.ant-upload-text').should('contain.text', 'Click or drag file to this area to upload')
   .attachFile('Dataset.csv', { subjectType: 'drag-n-drop' });

    cy.wait(5000);

    //verify and upload
    cy.contains('button', 'Verify and Upload',{timeout:8_000})
    .click();

  
 cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 20_000})
  .should(this.assertBeVisible)

  cy.wait(30000)


}

//browse a csv file
browse_a_csv_file(){
    
  cy.contains(this.strDSName,{timeout:20_000})
  .parent(this.TD)
  .parent(this.TR)
  .find(this.TestIDLocator(CypressTestIds.DATASET_LIST_EDIT_BUTTON), { timeout: 20000 })
  .click()

 // cy.get('.ant-col-4 > .ant-space > :nth-child(3) > .ant-btn',{timeout:20_000})
  //.click()

  /*cy.get(this.TestIDLocator(CypressTestIds.DATASET_MANAGE_DATASET_LOAD_DATA_FILE_INPUT),{timeout:20_000})
  .click()*/

  /*cy.get('.ant-upload-text').should('contain.text', 'Click or drag file to this area to upload')
  .attachFile('Dataset.csv', { subjectType: 'drag-n-drop' });
  cy.wait(5000);*/
;
  cy.get(this.TestIDLocator(CypressTestIds.DATASET_MANAGE_DATASET_LOAD_DATA_FILE_INPUT),{timeout:20_000})
    .click()

    cy.get('.ant-upload-text').should('contain.text', 'Click or drag file to this area to upload')
   .attachFile('Dataset.csv');
   cy.wait(10000);


 cy.contains('button', 'Verify and Upload',{timeout:20_000})
 .click();

 //Success message shown
 cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
 .should(this.assertBeVisible)



 //cy.get('.full-height-flex-container verticle-scroll',{timeout: 8_000})
// .contains(Dataset_Name)

}


verify_data(){

  cy.get(this.TestIDLocator(CypressTestIds.DATASET_LIST_TABLE), {timeout: 8_000})
 .should(this.assertBeVisible)
  cy.reload();
  cy.contains(this.strDSName,{timeout:20_000})
  .parent(this.TD)
  .parent(this.TR)
  .find(this.TestIDLocator(CypressTestIds.DATASET_LIST_EDIT_BUTTON), {timeout:8000})
  .click()

  cy.wait(8000);
  //request verification
  cy.get('.ant-col-4 > .ant-space > :nth-child(2) > .ant-btn > :nth-child(1)',{timeout:8000})
  .click()

  // cy.get('.ant-card-head-title',{timeout:8000})
  cy.contains('Choose data attribute for verification')
  .click()
  
  //select attributes
  cy.get('.ant-card-body > :nth-child(1)',{timeout:8000})
  .click()

  cy.get('.ant-card-body > :nth-child(2)',{timeout:8000})
  .click()

  cy.get('.ant-card-body > :nth-child(5)',{timeout:8000})
  .click()

 //check box
  cy.get('.ant-checkbox-input',{timeout:8000} )
  .check();

  //type confirm
  cy.get(':nth-child(2) > .ant-input',{timeout:8000})
  .type('CONFIRM')

  cy.get('.ant-modal-footer > .ant-btn-primary > span',{timeout:8000})
  .click()
 
  //success message
  cy.contains('.ant-result-title', 'Bulk verification job created.',{timeout:8000})
  .should(this.assertBeVisible)

  cy.get('.ant-result-extra > .ant-btn-primary > span',{timeout:8000})
  .click()

  cy.wait(20000)
  

}


empty_consent_textbox(){

  cy.get(this.TestIDLocator(CypressTestIds.DATASET_LIST_TABLE), {timeout: 8_000})
  .should(this.assertBeVisible)
   cy.reload();
   cy.contains(this.strDSName,{timeout:20_000})
   .parent(this.TD)
   .parent(this.TR)
   .find(this.TestIDLocator(CypressTestIds.DATASET_LIST_EDIT_BUTTON), {timeout:8000})
   .click()
 
   cy.wait(8000);
   //request verification
 
   cy.get('.ant-col-4 > .ant-space > :nth-child(2) > .ant-btn > :nth-child(1)',{timeout:8000})
   .click()
    cy.get('.ant-card-head-title',{timeout:8000})
   .contains('Choose data attribute for verification')
   .click()
   
   //select attribute
   cy.get('.ant-card-body > :nth-child(1)',{timeout:8000})
   .click()
 
   cy.get('.ant-card-body > :nth-child(2)',{timeout:8000})
   .click()
 
   cy.get('.ant-card-body > :nth-child(5)',{timeout:8000})
   .click()
 
  //check box
   cy.get('.ant-checkbox-input',{timeout:8000})
   .check();

  

  cy.get('.ant-typography.ant-typography-danger')
  .contains('Type CONFIRM to verify to run a bulk job')
  .should(this.assertBeVisible)
  
  cy.get('.ant-modal-footer > .ant-btn-primary > span',{timeout:20000})
   .click()
  
}

uncheck_consent_box(){

  cy.get(this.TestIDLocator(CypressTestIds.DATASET_LIST_TABLE), {timeout: 8_000})
  .should(this.assertBeVisible)
   cy.reload();
   cy.contains(this.strDSName,{timeout:20_000})
   .parent(this.TD)
   .parent(this.TR)
   .find(this.TestIDLocator(CypressTestIds.DATASET_LIST_EDIT_BUTTON), {timeout:8000})
   .click()
 
   cy.wait(10000);
   //request verification
   cy.get('.ant-col-4 > .ant-space > :nth-child(2) > .ant-btn > :nth-child(1)',{timeout:8000})
   .click()
    cy.get('.ant-card-head-title',{timeout:20000})
   .contains('Choose data attribute for verification')
   .click()
   
   //select attribute
   cy.get('.ant-card-body > :nth-child(1)',{timeout:8000})
   .click()
 
   cy.get('.ant-card-body > :nth-child(2)',{timeout:8000})
   .click()
 
   cy.get('.ant-card-body > :nth-child(5)',{timeout:8000})
   .click()
 
   //type confirm
   cy.get(':nth-child(2) > .ant-input',{timeout:20000})
   .should(this.assertBeVisible)
   .type('CONFIRM')
 
   cy.get('.ant-modal-footer > .ant-btn-primary > span',{timeout:20000})
   .click()

  

}

delete_dataset(){

 cy.get(this.TestIDLocator(CypressTestIds.DATASET_LIST_TABLE), {timeout: 8_000})
  .should(this.assertBeVisible)
   cy.reload();
   cy.contains(this.strDSName,{timeout:20_000})
   .parent(this.TD)
   .parent(this.TR)
   .find(this.TestIDLocator(CypressTestIds.DATASET_LIST_DELETE_BUTTON), {timeout:8000})
   .click()


   // confirmation message
   cy.get(this.TestIDLocator(CypressTestIds.CONFIRMATION_BOX_OK_BUTTON), {timeout: 8_000})
   .should(this.assertBeVisible)
   .click() 
     
   //success Message
   cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 20_000})
    .should(this.assertBeVisible)


}
DeleteSchema()
    {
        cy.contains(this.schema_name, {timeout: 20_000})
        .parent(this.TD)
        .parent(this.TR)
        .find(this.TestIDLocator(CypressTestIds.SCHEMA_LIST_DELETE_BUTTON))
        .click();
        // confirmation message
        cy.get(this.TestIDLocator(CypressTestIds.CONFIRMATION_BOX_OK_BUTTON), {timeout: 8_000})
        .should(this.assertBeVisible)
        .click()
      
    }

}
