
import {SchemaExtended}  from "../classes/Schema_DS_Extended";


beforeEach(() => {
  cy.viewport(2000, 1000);
});

//create  Object
const objSchemaExtended:SchemaExtended= new SchemaExtended();


  /*  it(' Verify Schema list is Not Visible ',()=>{
        
        objSchemaExtended.verify_Schema_list_not_visible();
      
    
    })

    it(' Verify DATA SET list is Not Visible ',()=>{
            
        objSchemaExtended.verify_data_set_list_not_visible();


    })

   it('  Verify Create a new schema Button  is Not Visible ',()=>{
            
        objSchemaExtended.assign_permission();
        objSchemaExtended.verify_create_a_new_schema_button_not_visible();
    })


    it('  Verify Create a new Data set Button  is Not Visible ',()=>{
        
    objSchemaExtended.verify_create_a_new_Data_set_button_not_visible();
    })

    it(' Delete Permissions ',()=>{
        
        objSchemaExtended.remove_permission()
        
     })

     it(' Delete User ',()=>{
        
        objSchemaExtended.Del_user();
        
     })*/



    /*describe(' SCHEMA NAME FIELD VALIDATION',()=>{

    beforeEach(()=>{
    
        objSchemaExtended.openschema(); 
            
    })

  it('Minimum Length Input',()=>{
        
        objSchemaExtended.schema_name_validation('A');
    
       cy.get('.ant-form-item-explain-error > .ant-row > .ant-col',{timeout:20000})
        .should(objSchemaExtended.assertBeVisible)  
    
    })

    it('Maximum Length Input',()=>{
        
        objSchemaExtended.schema_name_validation('Customer Schema For Enterprise Data Management And Validation Testing With Max Character Limit Of 101');
        cy.get('.ant-form-item-explain-error > .ant-row > .ant-col',{timeout:20000})
        .should(objSchemaExtended.assertBeVisible)  
    
    })

    it('Special Charcaters',()=>{
        
        objSchemaExtended.schema_name_validation('%Test @123 schema%');
        cy.get('.ant-form-item-explain-error > .ant-row > .ant-col',{timeout:20000})
        .should(objSchemaExtended.assertBeVisible)  
    
    })

    it('Empty String',()=>{
        
        objSchemaExtended.schema_name_field_Empty();
       
    })

    it('White Space ',()=>{
        
        objSchemaExtended.schema_name_validation('  ');
        cy.get('.ant-form-item-explain-error > .ant-row > .ant-col',{timeout:20000})
        .should(objSchemaExtended.assertBeVisible)  
    
    })

        
    it(' Manually created Field Name Empty',()=>{
        
        objSchemaExtended.Manually_created_field_name_empty();
       
        
    })

    it(' Field Name less than minimum length',()=>{
        
        objSchemaExtended.fields_validation('', 'Desc')
    })




    it(' Field Name greater than maximum length',()=>{
        
        objSchemaExtended.fields_validation('This is a test field name that contains more than one hundred characters in total just to see how the system handles such inputs properly', 'Desc')
       
    })

    it('Description greater than maximum length',()=>{
        
        objSchemaExtended.fields_validation('Schema Name','This is a long description used for testing purposes to ensure that the input field can handle a large amount of text without breaking the layout or functionality of the application. The content is deliberately extended to include more than five hundred characters, containing multiple sentences that mimic real-world user input. This test ensures robustness in scenarios where detailed descriptions, notes, or extended information are required. Ensuring this capability helps improve data quality and user experience across the platform.');
       
        
    })


})*/


describe(' DATASET NAME FIELD VALIDATION ',()=>{

    beforeEach(()=>{
    
        objSchemaExtended.openschema(); 
            
    })


   /* it(' Minimum length input field in Data set name Field  ',()=>{
        
        objSchemaExtended.Data_set_Name_field_validation('A');
        cy.get('.ant-form-item-explain-error',{timeout:20000})
        .should('be.visible')
    

    })

    it(' Maximum length input field in Data set name Field  ',()=>{
        
        objSchemaExtended.Data_set_Name_field_validation('This is a test field name that contains more than one hundred characters in total just to see how the system handles such inputs properly');
        cy.get('.ant-form-item-explain-error',{timeout:20000})
        .should('be.visible')
    

    })

    it(' white space in Dataset name Field  ',()=>{
        
        objSchemaExtended.Data_set_Name_field_validation('  ');
        cy.get('.ant-form-item-explain-error',{timeout:20000})
        .should('be.visible')
    

    })


    it(' white space in Dataset name Field  ',()=>{
        
        objSchemaExtended.Data_set_Name_field_validation('  ');
        cy.get('.ant-form-item-explain-error',{timeout:20000})
        .should('be.visible')
    

    })

    it(' Special Character in Dataset name Field  ',()=>{
        
        objSchemaExtended.Data_set_Name_field_validation('Dataset@Test');
        cy.get('.ant-form-item-explain-error',{timeout:20000})
        .should('be.visible')
    
    })


    it(' Empty name Field  ',()=>{
        
        objSchemaExtended.data_set_empty_field();
        cy.get('.ant-form-item-explain-error',{timeout:20000})
        .should('be.visible')
    
    })


    it('File extension other than CSV',()=>{
        
        objSchemaExtended.File_extension_other_than_CSV(objSchemaExtended.TimeStamp('DSN-'));
    })


    it('Empty Data Set Record Fields',()=>{
        
        objSchemaExtended.empty_data_set_record_field(objSchemaExtended.TimeStamp('DSN-'));
    })*/

    it('Create schema ',()=>{
            
    
     objSchemaExtended.CreateSchemaFromFileDragDrop(objSchemaExtended.strSchemaNameWrongDT,'WrongDatatype.csv');

    })
    

})

describe('Wrong data Type validation ',()=>{


    beforeEach(()=>{
       
        objSchemaExtended.select_schema()

    })

    
   it('Create Data Set ',()=>{
        
        objSchemaExtended.create_data_set();
        
    })

    it('File_upload ',()=>{
        
        objSchemaExtended.file_upload();
        
    })


    it('Verify wrong data type',()=>{
            
            objSchemaExtended.view_data();
            
        })



})

