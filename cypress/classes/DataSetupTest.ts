import CypressTestIds from  "../classes/CypressTestIDs"
import { TestBase } from "./TestBase"

 var Dataset_Name ='Employee_Data123'
 var Dataset_Desc='Description of Employee Data set'
 var data_set_file='Dataset.csv'
 

export class DataSetup extends TestBase{
  

    openSchema(){

    //open portal
    this.OpenURL();

    //login into portal with valid creadentials         
    this.Login();

    //Open Schema Page
    cy.contains('Schema', {timeout: 8_000})
    .click();
    
    //select the required schema
    //cy.get('[style="display: flex; flex-direction: column; height: 100%;"] > .ant-layout > .ant-layout-content > .verticle-scroll > .full-height-flex-container',{timeout:8000})
    cy.get('[data-row-key="EKwEBy35zfuLgAMYAAwAsv"] > :nth-child(3)',{timeout:20_000})
    .click()

    
    }


    //open new data set window
    open_new_dataset_window(){

    cy.get('.page-container > .ant-layout > .ant-layout-footer > .ant-row > .ant-col > .ant-btn',{timeout:8000})
    .click()



    }

    //save dataset container 
    save_data_set(){
    
    cy.get('.page-container > .ant-layout > .ant-layout-footer > .ant-row > .ant-col > .ant-btn',{timeout:8000})
    .click()
    
    //DataSet Name

    cy.get('#basic_dataSetName',{timeout:8000})
    .type(Dataset_Name)
  // .type('Employee_Data@123')

    //Data set description

    cy.get('#basic_dataSetDescription',{timeout:8000})
    .type(Dataset_Desc)

    //save
    cy.get(':nth-child(3) > .ant-row > .ant-col > .ant-space > :nth-child(2) > .ant-btn',{timeout:8000})
    .should(this.assertBeVisible)
    .click()

    //Success message shown
    cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
    .should(this.assertBeVisible)

    }


    //add data manually
    add_dataset_record_manually(){

    cy.contains(Dataset_Name,{timeout:20_000})
    .parent(this.TD)
    .parent(this.TR)
    .find('div > .pencil', {timeout: 8_000})
    .click()
    
    cy.get(':nth-child(3) > .ant-row > .ant-col > .ant-space > :nth-child(2) > .ant-btn', {timeout: 8_000})
    .click()
    
    //EEID
    cy.get('#basic_G3Oie04XwEOLOUqXlDSoam', {timeout: 8_000})
    .type('E02387')

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

    //Save
    cy.get('#rc-tabs-0-panel-DATASET_RECORD > .ant-layout > .ant-layout-footer > .ant-row > .ant-col > .ant-space > :nth-child(2) > .ant-btn',{timeout:8000})
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

   //Save
   cy.get('#rc-tabs-0-panel-DATASET_RECORD > .ant-layout > .ant-layout-footer > .ant-row > .ant-col > .ant-space > :nth-child(2) > .ant-btn',{timeout:8000})
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
 
    //Save
    cy.get('#rc-tabs-0-panel-DATASET_RECORD > .ant-layout > .ant-layout-footer > .ant-row > .ant-col > .ant-space > :nth-child(2) > .ant-btn',{timeout:8000})
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
 
    //Save
    cy.get('#rc-tabs-0-panel-DATASET_RECORD > .ant-layout > .ant-layout-footer > .ant-row > .ant-col > .ant-space > :nth-child(2) > .ant-btn',{timeout:8000})
   .click()
  
   //Success message shown
   cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
   .should(this.assertBeVisible)

   //Save Data set
   cy.get(':nth-child(3) > .ant-row > .ant-col > .ant-space > :nth-child(3) > .ant-btn', {timeout: 8_000})
   .click()

    //Success message shown
    cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
    .should(this.assertBeVisible)
  }

  //Edit dataset
  Edit_DataSet(){

  cy.contains(Dataset_Name,{timeout:20_000})
    .parent(this.TD)
    .parent(this.TR)
    .find('div > .pencil', {timeout: 8_000})
    .click()
  
    cy.get('#basic_dataSetDescription',{timeout:8000})
    .clear()
    .type('new description of employee')


    cy.get('.ant-table-body',{timeout:8000})
    .contains('E02387')
    //.find('tr') 
    //.contains('td', 'E02387')
    .click() 

    cy.get('#basic_BlFUXQ0v8rPDPQEg5xvFjh',{timeout:20_000})
    .clear()
    .type('IT and Sales')
    
    //Save
    cy.get('#rc-tabs-0-panel-DATASET_RECORD > .ant-layout > .ant-layout-footer > .ant-row > .ant-col > .ant-space > :nth-child(2) > .ant-btn',{timeout:8000})
   .click()

    //Success message shown
    cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
    .should(this.assertBeVisible)

  
    //Save Data set
   cy.get(':nth-child(3) > .ant-row > .ant-col > .ant-space > :nth-child(3) > .ant-btn', {timeout: 8_000})
   .click()

  //Success message shown
    cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
    .should(this.assertBeVisible)


}

// drag and drop a file and replace existing data
Drag_and_drop_file_and_replace_existing_data(){
    
  cy.contains(Dataset_Name,{timeout:20_000})
    .parent(this.TD)
    .parent(this.TR)
    .find('div > .pencil', {timeout: 8_000})
    .click()

  cy.get('.ant-col-4 > .ant-space > :nth-child(3) > .ant-btn',{timeout:20_000})
    .click()

   cy.get('.ant-upload-text',{timeout:8_000})
   .should(this.assertBeVisible)
  .attachFile('Employeedata.csv', { subjectType: 'drag-n-drop' });

  cy.wait(20000);
  //cy.get('.ant-select-dropdown css-dev-only-do-not-override-98ntnt ant-select-dropdown-placement-bottomLeft',{timeout:20_000})
  //.should(this.assertBeVisible)
//.ant-select-dropdown css-dev-only-do-not-override-98ntnt ant-select-dropdown-placement-bottomLeft

  //cy.log('File uploaded, waiting for mapping to complete');
  
  //.attachFile( data_set_file, { subjectType: 'drag-n-drop' });
  //cy.wait(20000)
  cy.get(':nth-child(2) > .ant-layout-footer > .ant-row > :nth-child(2) > .ant-btn',{timeout:20_000})
  .click()
  /*cy.get('.ant-layout-content > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-body', {timeout:8_000})
  .click()
  .contains('Full Name')



  cy.get('.ant-select-selection-item', { timeout: 20000 })
 // .click({force:true})
  //cy.get('.ant-select-item-option-content', { timeout: 20000 })
  .contains('Full Name')
  .click();

    //cy.get('[data-row-key="EwCOqQdnvrPLTeB21EelCy"] > :nth-child(4) > .ant-select > .ant-select-selector').select('Full name')
 // cy.wait(20000);
  
  //cy.get('.ant-select-selection-search',{timeout:8000})

  //cy.get(':nth-child(2) > .ant-layout-footer > .ant-row > :nth-child(2) > .ant-btn',{timeout:8_000})
  //.click()
  //cy.get('.ant-select-selection-item',{timeout:20000})
  
  //cy.get('[data-row-key="EwCOqQdnvrPLTeB21EelCy"] > :nth-child(4) > .ant-select > .ant-select-selector')
  //.should(this.assertBeVisible)
 // .contains('Full Name')
  //cy.get('ant-select-selection-search-input')  .contains('Full Name')
  
  //cy.get('.ant-select-dropdown-menu').contains('Full Name').click();

 //cy.get('[data-row-key="EwCOqQdnvrPLTeB21EelCy"] > :nth-child(4) > .ant-select > .ant-select-selector') .contains('Full Name',{timeout:8000})
//"ant-select-selection-search"



  
   /*cy.wait(20000);

 cy.get('.full-height-flex-container verticle-scroll',{timeout: 8_000})
 .contains(Dataset_Name)*/
 //Success message shown
 cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
  .should(this.assertBeVisible)




}

//browse a csv file
browse_a_csv_file(){
    
  cy.contains(Dataset_Name,{timeout:20_000})
  .parent(this.TD)
  .parent(this.TR)
  .find('div > .pencil', {timeout: 8_000})
  .click()

  cy.get('.ant-col-4 > .ant-space > :nth-child(3) > .ant-btn',{timeout:20_000})
  .click()

  cy.get('.ant-upload-text',{timeout:8_000})
.attachFile('Dataset.csv' , { force: true });

  cy.wait(10000);

  cy.get(':nth-child(2) > .ant-layout-footer > .ant-row > :nth-child(2) > .ant-btn',{timeout:20_000})
  .click()

 //Success message shown
 cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
 .should(this.assertBeVisible)

 cy.wait(20000);

 cy.get('.full-height-flex-container verticle-scroll',{timeout: 8_000})
 .contains(Dataset_Name)

}










}