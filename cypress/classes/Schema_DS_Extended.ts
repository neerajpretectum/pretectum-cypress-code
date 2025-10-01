import CypressTestIds from  '../CypressTestIds';
import { TestBase } from "./TestBase";
//import { RolesTest } from "./Roles";
//const objRolestest:RolesTest= new RolesTest();
//import { SchemaSetupTest } from "cypress/classes/SchemaSetupTest";
//const oST: SchemaSetupTest = new SchemaSetupTest();

export class SchemaExtended extends TestBase{ 

  strSchemaNameManual1: string = this.TimeStamp('SNM-');
  strDescription: string = ' Description';
  strSchemaNameWrongDT: string = this.TimeStamp('SWDT-');
  strDSNameWrongDT: string = this.TimeStamp('DSWDT-'); 


    openschema(){

     //open portal
     this.OpenURL();

     //login into portal with valid creadentials         
     this.Login();

     //Open Schema Page
     cy.contains(this.cntSchema, {timeout: 20_000})
     .click();

     //Page is loaded
     cy.get(this.TestIDLocator(CypressTestIds.CREATE_NEW_SCHEMA_BUTTON), {timeout: 16_000})
     .should(this.assertBeVisible)

     cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_LIST_TABLE), {timeout: 8_000})
     .should(this.assertBeVisible)

    }



    //login as a user
    login_new(){

    this.LoginWithCorrectPass(this.corporateEmail,this.Password,this.BaseURL )
      
  }

    verify_Schema_list_not_visible(){

        this.login_new();

        //permisssion denied
        cy.get('.ui.big.floating.negative.message',{timeout: 20_000} )
        .should('contain', 'Permission Denied', {timeout: 20_000})
        .and('contain', "You don't have permisson to enter in this area.");

    }


    assign_permission(){

      this.Login();

       //open configuration
        cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
        .should(this.assertBeVisible)
        .click();
          
          //open Roles section 
        cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_ROLES), {timeout: 20_000})
        .should(this.assertBeVisible)
        .click();


        cy.get(this.TestIDLocator(CypressTestIds.ROLES_LIST_TABLE), {timeout: 20_000})
      .contains('Super User',{timeout:20_000})
      .parent(this.TR) 
      .find(this.TestIDLocator(CypressTestIds.ROLES_LIST_EDIT_BUTTON), { timeout: 20000 }) 
      .scrollIntoView()
      .should(this.assertBeVisible)
      .click(); 

    
      cy.get(this.TestIDLocator(CypressTestIds.ROLES_PERMISSIONS_LIST_ADD_PERMISSION_BUTTON), {timeout: 20_000})
      .should(this.assertBeVisible)
      .click()

      this.selectDropdown1(this.TestIDLocator(CypressTestIds.ROLES_PERMISSIONS_LIST_PERMISSION_NAME_SELECT),'SCHEMA MODELS');

      cy.get(this.TestIDLocator(CypressTestIds.ROLES_PERMISSIONS_LIST_CAN_VIEW_CHECK), {timeout: 20_000})
           .last()
           .check();

      cy.get(this.TestIDLocator(CypressTestIds.ROLES_PERMISSIONS_LIST_ADD_PERMISSION_BUTTON), {timeout: 20_000})
      .should(this.assertBeVisible)
      .click()

      this.selectDropdown1(this.TestIDLocator(CypressTestIds.ROLES_PERMISSIONS_LIST_PERMISSION_NAME_SELECT),'DATASETS');
       cy.get(this.TestIDLocator(CypressTestIds.ROLES_PERMISSIONS_LIST_CAN_VIEW_CHECK), {timeout: 8_000})
      .last()
      .check()

    
      //add user
          cy.get('#rc-tabs-0-tab-2', {timeout: 20_000})
          .click()
      
          //click on add user
          cy.get(this.TestIDLocator(CypressTestIds.ROLES_USER_LIST_ADD_USER_BUTTON), {timeout: 8_000})
          .should(this.assertBeVisible) 
          .click();
      
          //add user
          this.selectDropdown1(this.TestIDLocator(CypressTestIds.ROLES_USER_LIST_USER_ID_SELECT),this.corporateEmail)
          
        //SAVE   
        cy.get(this.TestIDLocator(CypressTestIds.ROLES_MANAGE_ROLE_SAVE_BUTTON), {timeout: 20_000})
        .should(this.assertBeVisible)
        .click() 
        
        cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 20_000})
        .should(this.assertBeVisible)
     
        cy.get('a img[src="/icons/header-menu/logout.png"]', {timeout: 20_000})
         .click();



    }

    Del_user(){

       this.Login();
      //open configuration
         cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
         .should(this.assertBeVisible)
         .click();
         
         //open Roles section 
         cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_ROLES), {timeout: 20_000})
         .should(this.assertBeVisible)
         .click();
 
         
         cy.get(this.TestIDLocator(CypressTestIds.ROLES_LIST_TABLE), {timeout: 20_000})
          .contains('Super User',{timeout:20_000})
          .parent(this.TR) 
          .find(this.TestIDLocator(CypressTestIds.ROLES_LIST_EDIT_BUTTON), { timeout: 8000 }) 
          .should(this.assertBeVisible) 
          .click(); 
 
        cy.get('#rc-tabs-0-tab-2', {timeout: 20_000})
          .click()

         //delete User
         cy.contains('td', 'testing3@malaymo.com') // Find the cell with the text
         .parent('tr') // Get the entire row containing this cell
          
         .within(() => {
         //cy.get('button')
         cy.get(this.TestIDLocator(CypressTestIds.ROLES_USER_LIST_USER_DELETE_BUTTON),{timeout: 20_000})
         .last().click(); 
           });

          cy.get(this.TestIDLocator(CypressTestIds.ROLES_MANAGE_ROLE_SAVE_BUTTON), {timeout: 20_000})
               .should(this.assertBeVisible)
               .click()

               
           cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 20_000})
               .should(this.assertBeVisible)



    }

    verify_create_a_new_schema_button_not_visible(){

      this.login_new();

      //Open Schema Page
      cy.contains(this.cntSchema, {timeout: 20_000})
      .click()
      
      cy.get(this.TestIDLocator(CypressTestIds.CREATE_NEW_SCHEMA_BUTTON),{timeout: 20_000})  
      .should('be.disabled') 
      .then(($btn) => {
          
          cy.log('✅ The  button is disabled as expected.');
      })


    }

    //Click on create button. Common function for all create activities
    ClickOnCreateButton()
    {
        //get create button
        cy.get(this.TestIDLocator(CypressTestIds.CREATE_NEW_SCHEMA_BUTTON))
        .click();
    }


    schema_name_validation(SchemaName: string){

      this.ClickOnCreateButton();

      cy.contains('Define', { timeout: 8_000 })
      .should(this.assertBeVisible)
      .click();
          
      //Schema Details
      cy.get(this.TestIDLocator(CypressTestIds.MANAGE_SCHEMA_MODEL_NAME_INPUT), { timeout: 8_000 })
      .clear()
      .type(SchemaName)
      
      
    }

    schema_name_field_Empty(){

      this.ClickOnCreateButton();

      cy.contains('Define', { timeout: 8_000 })
      .should(this.assertBeVisible)
      .click();
          
      //Schema Details
      cy.get(this.TestIDLocator(CypressTestIds.MANAGE_SCHEMA_MODEL_NAME_INPUT), { timeout: 8_000 })

      cy.get(this.TestIDLocator(CypressTestIds.MANAGE_SCHEMA_MODEL_DESCRIPTION_INPUT))
      .clear()
      .type('desc')

       cy.get(this.TestIDLocator(CypressTestIds.MANAGE_SCHEMA_MODEL_SAVE_AS_DRAFT_BUTTON))
       .should(this.assertBeVisible)
        .click()

      cy.get('.ant-form-item-explain-error > .ant-row > .ant-col',{timeout:20000})
      .should(this.assertBeVisible)  
   
    }

 
    Manually_created_field_name_empty(){

    var intRowCount = 0;
     
    this.ClickOnCreateButton();
    cy.contains('Define', { timeout: 8_000 })
    .should(this.assertBeVisible)
    .click();

    //Schema Name
    cy.get(this.TestIDLocator(CypressTestIds.MANAGE_SCHEMA_MODEL_NAME_INPUT), {timeout: 8_000})
    .clear()
    .type(this.strSchemaNameManual1)

    //Schema Description
    cy.get(this.TestIDLocator(CypressTestIds.MANAGE_SCHEMA_MODEL_DESCRIPTION_INPUT), {timeout: 8_000})
    .clear()
    .type(this.strSchemaNameManual1  + this.strDescription)

    cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_ADD_BUTTON))
     .click()

            
    //IsPrimary
    cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
    .find(this.cntTableRowKey + intRowCount.toString() + this.cntTableRowKeyClose)
    .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_ISPRIMARY_CHECKBOX)))
    .check()
    
    //IsSortKey
    cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
    .find(this.cntTableRowKey + intRowCount.toString() + this.cntTableRowKeyClose)
    .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_ISSORTKEY_CHECKBOX)))
    .check()
    
    
    //IsActive
    cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
    .find(this.cntTableRowKey + intRowCount.toString() + this.cntTableRowKeyClose)
    .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_ISACTIVE_CHECKBOX)))
    .check()
            
     //field name
     cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE), {timeout:8_000})
    .find(this.cntTableRowKey + intRowCount.toString() + this.cntTableRowKeyClose)
    .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_NAME_INPUT)))
    

    cy.get(this.TestIDLocator(CypressTestIds.MANAGE_SCHEMA_MODEL_SAVE_AS_DRAFT_BUTTON),{timeout:8000})
    .click()

    cy.get('.ant-form-item-explain-error > .ant-row > .ant-col',{timeout:20000})
       .should(this.assertBeVisible)  


    }

    fields_validation(FieldName: string, Desc:string){
      var intRowCount = 0;
     
      this.ClickOnCreateButton();
      cy.contains('Define', { timeout: 8_000 })
      .should(this.assertBeVisible)
      .click();
  
      //Schema Name
      cy.get(this.TestIDLocator(CypressTestIds.MANAGE_SCHEMA_MODEL_NAME_INPUT), {timeout: 8_000})
      .clear()
      .type(this.strSchemaNameManual1)
  
      //Schema Description
      cy.get(this.TestIDLocator(CypressTestIds.MANAGE_SCHEMA_MODEL_DESCRIPTION_INPUT), {timeout: 8_000})
      .clear()
      .type(this.strSchemaNameManual1  + this.strDescription)
  
      cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_ADD_BUTTON))
       .click()
  
              
      //IsPrimary
      cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
      .find(this.cntTableRowKey + intRowCount.toString() + this.cntTableRowKeyClose)
      .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_ISPRIMARY_CHECKBOX)))
      .check()
      
      //IsSortKey
      cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
      .find(this.cntTableRowKey + intRowCount.toString() + this.cntTableRowKeyClose)
      .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_ISSORTKEY_CHECKBOX)))
      .check()
      
      //IsActive
      cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
      .find(this.cntTableRowKey + intRowCount.toString() + this.cntTableRowKeyClose)
      .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_ISACTIVE_CHECKBOX)))
      .check()
              
       //field name
       cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE), {timeout:8_000})
      .find(this.cntTableRowKey + intRowCount.toString() + this.cntTableRowKeyClose)
      .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_NAME_INPUT)))
      .type(FieldName + (intRowCount+1).toString())

      cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
      .find(this.cntTableRowKey + intRowCount.toString() + this.cntTableRowKeyClose)
      .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_DESCRIPTION_INPUT)))
      .type(Desc + (intRowCount+1).toString())
  
      cy.get(this.TestIDLocator(CypressTestIds.MANAGE_SCHEMA_MODEL_SAVE_AS_DRAFT_BUTTON))
      .click()

     cy.get('.ant-form-item-explain-error > .ant-row > .ant-col',{timeout:20000})
         .should(this.assertBeVisible) 
       }
  
  
    
    remove_permission(){

      this.Login();
      //open configuration
         cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
         .should(this.assertBeVisible)
         .click();
         
         //open Roles section 
         cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_ROLES), {timeout: 20_000})
         .should(this.assertBeVisible)
         .click();
 
         
         cy.get(this.TestIDLocator(CypressTestIds.ROLES_LIST_TABLE), {timeout: 20_000})
          .contains('Super User',{timeout:20_000})
          .parent(this.TR) 
          .find(this.TestIDLocator(CypressTestIds.ROLES_LIST_EDIT_BUTTON), { timeout: 8000 }) 
          .should(this.assertBeVisible) 
          .click(); 
 
           //ROLES_PERMISSIONS_LIST_TABLE
         cy.get(this.TestIDLocator(CypressTestIds.ROLES_PERMISSIONS_LIST_TABLE), {timeout: 20_000})

         //delete permissions
         cy.contains('td', 'SCHEMA MODELS') // Find the cell with the text
         .parent('tr') // Get the entire row containing this cell
          
         .within(() => {
         //cy.get('button')
         cy.get(this.TestIDLocator(CypressTestIds.ROLES_PERMISSIONS_LIST_PERMISSION_DELETE_BUTTON),{timeout: 20_000})
         .last().click(); 
           });

           cy.contains('td', 'DATASETS') // Find the cell with the text
           .parent('tr') // Get the entire row containing this cell
            
           .within(() => {
           //cy.get('button')
           cy.get(this.TestIDLocator(CypressTestIds.ROLES_PERMISSIONS_LIST_PERMISSION_DELETE_BUTTON),{timeout: 20_000})
           .last().click(); 
             });
 
         cy.get(this.TestIDLocator(CypressTestIds.ROLES_MANAGE_ROLE_SAVE_BUTTON), {timeout: 20_000})
         .should(this.assertBeVisible)
         .click() 
         cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 20_000})
         .should(this.assertBeVisible)

    }

    verify_data_set_list_not_visible(){

      this.login_new();
        
         //permisssion denied
        cy.get('.ui.big.floating.negative.message',{timeout: 20_000} )
        .should('contain', 'Permission Denied', {timeout: 20_000})
        .and('contain', "You don't have permisson to enter in this area.");
      

    }

    verify_create_a_new_Data_set_button_not_visible(){


      this.login_new();

      //Open Schema Page
      cy.contains(this.cntSchema, {timeout: 20_000})
      .click()

      //select schema 
       cy.get('tbody.ant-table-tbody tr.ant-table-row', {timeout: 8_000})
      .eq(0)
      .click();
      
      cy.get(this.TestIDLocator(CypressTestIds.DATASET_LIST_CREATE_NEW_DATASET_BUTTON),{timeout: 20_000})  
      .should('be.disabled') 
      .then(($btn) => {
          
          cy.log('✅ The  button is disabled as expected.');
      })




    }

   

    Data_set_Name_field_validation(DSName:string = ''){

      cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_LIST_TABLE), {timeout: 8_000})
      .should(this.assertBeVisible)
     
        cy.get('tbody.ant-table-tbody tr.ant-table-row', {timeout: 8_000})
      .eq(0)
      .click();

      cy.get(this.TestIDLocator(CypressTestIds.DATASET_LIST_CREATE_NEW_DATASET_BUTTON), {timeout: 8_000})
      .click()

      cy.get(this.TestIDLocator(CypressTestIds.DATASET_MANAGE_DATASET_NAME_INPUT), {timeout: 8_000})
      .type(DSName)

    }
   
    data_set_empty_field(){

      //select first row of schema
      cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_LIST_TABLE), {timeout: 8_000})
      .should(this.assertBeVisible)
      
      cy.get('tbody.ant-table-tbody tr.ant-table-row', {timeout: 8_000})
      .eq(0)
      .click();

      cy.get(this.TestIDLocator(CypressTestIds.DATASET_LIST_CREATE_NEW_DATASET_BUTTON), {timeout: 8_000})
      .click()

      cy.get(this.TestIDLocator(CypressTestIds.DATASET_MANAGE_DATASET_NAME_INPUT), {timeout: 8_000})

      cy.get(this.TestIDLocator(CypressTestIds.DATASET_MANAGE_DATASET_SAVE_BUTTON),{timeout:20_000})
      .click()
      

    }

    File_extension_other_than_CSV(DSName:string = ''){

      this.Data_set_Name_field_validation(DSName);

      //save
        cy.get(this.TestIDLocator(CypressTestIds.DATASET_MANAGE_DATASET_SAVE_BUTTON),{timeout:20_000})
        .should(this.assertBeVisible)
        .click()

        cy.wait(5000)
        cy.contains(DSName,{timeout:20_000})
        .parent(this.TD)
        .parent(this.TR)
        .find(this.TestIDLocator(CypressTestIds.DATASET_LIST_EDIT_BUTTON), { timeout: 20000 })
        .click()
      
         cy.get(this.TestIDLocator(CypressTestIds.DATASET_MANAGE_DATASET_LOAD_DATA_FILE_INPUT), {timeout: 8_000})
          .click()

          cy.get('input[type="file"]', {timeout: 8_000})
          .attachFile('BADataFile.xlsx', { subjectType: 'drag-n-drop' })
          .trigger('change', { force: true });

          cy.get('.Toastify__toast-body',{timeout: 8_000})
          .should(this.assertBeVisible)

         

    }



    empty_data_set_record_field(DSName:string = ''){

      this.Data_set_Name_field_validation(DSName);

      //save
        cy.get(this.TestIDLocator(CypressTestIds.DATASET_MANAGE_DATASET_SAVE_BUTTON),{timeout:20_000})
        .should(this.assertBeVisible)
        .click()

        cy.wait(5000)
        cy.contains(DSName,{timeout:20_000})
        .parent(this.TD)
        .parent(this.TR)
        .find(this.TestIDLocator(CypressTestIds.DATASET_LIST_EDIT_BUTTON), { timeout: 20000 })
        .click()

        //Add Data ,, Test id needs to be swapped
        cy.get(this.TestIDLocator(CypressTestIds.DATASET_MANAGE_DATASET_CANCEL_BUTTON),{timeout:20_000})
        .click()

       //save Record //Test id Required 
       cy.get(':nth-child(2) > .flex > .ant-btn-primary',{timeout:20_000})
       .click()
      
        //Success message shown
        cy.get('.ant-modal-content', {timeout: 8_000})
        .should(this.assertBeVisible)

    }

/*create_schema(){

      this.ClickOnCreateButton();
        
              cy.get(this.TestIDLocator(CypressTestIds.UPLOAD_SCHEMA_FILE_INPUT), {timeout: 8_000})
              .attachFile('WrongDataType.csv');
      
              cy.get(this.TestIDLocator(CypressTestIds.UPLOAD_SCHEMA_NEXT_BUTTON), {timeout: 8_000})
              .should(this.assertBeVisible)
              .click()
      
              cy.get(this.TestIDLocator(CypressTestIds.MANAGE_SCHEMA_MODEL_NAME_INPUT), {timeout: 8_000})
              .should(this.assertBeVisible)
              .clear()
              .type(this.strSchemaNameWrongDT)
      
              cy.get(this.TestIDLocator(CypressTestIds.MANAGE_SCHEMA_MODEL_SAVE_AS_DRAFT_BUTTON))
              .should(this.assertBeVisible)
              .click()
              
              cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 20_000})
              .should(this.assertBeVisible)


    }*/



    CreateSchemaFromFileDragDrop(schema_name:string='', file_type:string=''){


      this.ClickOnCreateButton();

        
        cy.get(this.TestIDLocator(CypressTestIds.UPLOAD_SCHEMA_FILE_INPUT), {timeout: 8_000})
        .attachFile(file_type, { subjectType: 'drag-n-drop' });


        cy.get(this.TestIDLocator(CypressTestIds.UPLOAD_SCHEMA_NEXT_BUTTON), {timeout: 8_000})
        .should(this.assertBeVisible)
        .click()

        cy.get(this.TestIDLocator(CypressTestIds.MANAGE_SCHEMA_MODEL_NAME_INPUT), {timeout: 8_000})
        .should(this.assertBeVisible)
        .clear()
        .type(schema_name)

        cy.get(this.TestIDLocator(CypressTestIds.MANAGE_SCHEMA_MODEL_DESCRIPTION_INPUT))
        .clear()
        .type('Description')

        const typeMapping = [
  "Boolean",
  "Currency",
  "Date",
  "Date",
  "Datetime",
  "Document",
  "Email",
  "GeoLatitude",
  "GeoLongitude",
  "GeoCoordinates",
  "Phone",
  "URL",
  
];

function selectDataTypeForRow(rowIndex: number, typeName: string): void {

cy.get(`#basic_fields_${rowIndex}_dataType`).type(typeName, { force: true });

    cy.get('.ant-select-dropdown:visible')
      .should('exist')
      .within(() => {
        cy.contains('.ant-select-item-option-content', typeName, { matchCase: false })
          .click({ force: true });
      });

    cy.get(`#basic_fields_${rowIndex}_dataType`)
      .parents('.ant-select')
      .find('.ant-select-selection-item')
      .should('contain.text', typeName);
  };

   // Loop through all rows
  typeMapping.forEach((type, index) => {
    selectDataTypeForRow(index, type);
  });


 
        cy.get(this.TestIDLocator(CypressTestIds.MANAGE_SCHEMA_MODEL_SAVE_AS_DRAFT_BUTTON), {timeout: 8_000})
        .should(this.assertBeVisible)
        .click()

       cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
        .should(this.assertBeVisible)

    }



    select_schema()
    {

      this.OpenURL();

      //login into portal with valid creadentials         
        this.Login();
  
      //Open Schema Page
      cy.get(this.TestIDLocator(CypressTestIds. HEADER_MENU_SCHEMA), {timeout: 20_000})
      .click()
  
    
      cy.contains(this.strSchemaNameWrongDT, {timeout: 20_000})
      .click()


    }

    create_data_set(){

  
      cy.get(this.TestIDLocator(CypressTestIds.DATASET_LIST_CREATE_NEW_DATASET_BUTTON),{timeout:8_000})
      .click()

      cy.get(this.TestIDLocator(CypressTestIds.DATASET_MANAGE_DATASET_NAME_INPUT),{timeout:8_000})
      .type(this.strSchemaNameWrongDT)

    //DataSet Description
    cy.get(this.TestIDLocator(CypressTestIds.DATASET_MANAGE_DATASET_DESCRIPTION_INPUT),{timeout:8_000})
    .type(this.strDescription);

    cy.get(this.TestIDLocator(CypressTestIds.DATASET_MANAGE_DATASET_SAVE_BUTTON),{timeout:20_000})
    .click()

    cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS),{timeout:20_000})
    .click()
   
   }

    file_upload(){

    

    cy.get(this.TestIDLocator(CypressTestIds.DATASET_LIST_TABLE),{timeout:20_000})
    .should(this.assertBeVisible)
    .first() 
    .click()

    .find(this.TestIDLocator(CypressTestIds.DATASET_LIST_EDIT_BUTTON),{timeout:20_000})
    .click()

    cy.get(this.TestIDLocator(CypressTestIds.DATASET_MANAGE_DATASET_LOAD_DATA_FILE_INPUT),{timeout:20_000})
    .click()

    cy.get('.ant-upload-text').should('contain.text', 'Click or drag file to this area to upload')
   .attachFile('WrongDatatype.csv', { subjectType: 'drag-n-drop' });



    
    //verify and upload // ******TEST ID 
    cy.contains('button', 'Verify and Upload',{timeout:8_000})
    .click();
 
    cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 20_000})
    .should(this.assertBeVisible)

    cy.wait(10000)


      }

      view_data(){

        cy.reload()

        cy.get(this.TestIDLocator(CypressTestIds.DATASET_LIST_TABLE),{timeout:20_000})
        .should(this.assertBeVisible)
        .first()
        .click()
    
        .find(this.TestIDLocator(CypressTestIds.DATASET_LIST_VIEW_BUTTON),{timeout:20_000})
        .click()

        cy.wait(10000)
        cy.get('.ant-table-content').should(this.assertBeVisible)
        cy.get('span[role="img"].anticon-warning',{timeout:20000})
        .should(this.assertBeVisible)
 

      }
}