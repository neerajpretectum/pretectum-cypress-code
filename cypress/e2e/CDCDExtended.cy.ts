
import {CDCDExtended}  from "../classes/CDCDExtended";

// Global viewport setup for all tests
beforeEach(() => {
  cy.viewport(2000, 1000);
});

var blnUsersopened: Boolean=false;

//create CDCDTest Object
const objCDCDExtended:CDCDExtended= new CDCDExtended();

//first check CDC Destination  is accessible 
it(' Open CDC Destination',()=>{
    objCDCDExtended.openCDCD();
    blnUsersopened=true;

})

describe('CDCD EDGE CASES',()=>{

    beforeEach(()=>{
    
        objCDCDExtended.openCDCD();   
    })



    it('Empty CDCD Name field',()=>{
       
        objCDCDExtended.CDCD_Edge_Case('', 'desc', 'Schema', 'Create', 'Kinesis Stream','ABCD', 'ABC', 'ARN' );
        cy.get('.ant-form-item-explain-error > .ant-row > .ant-col',{timeout:8000})
        .should('be.visible')
    })

    it('CDCD Name Input Greater than maximum length',()=>{
       
        objCDCDExtended.CDCD_Edge_Case('This is a sample CDCD destination name that is intentionally written with many words to exceed one hundred characters for testing edge cases properly', 'desc', 'Schema', 'Create', 'Kinesis Stream','ABCD', 'ABC', 'ARN' );
        cy.get('.ant-form-item-explain-error > .ant-row > .ant-col',{timeout:8000})
        .should('be.visible')
    })

    it('CDCD Name Less than minimum length',()=>{
       
        objCDCDExtended.CDCD_Edge_Case('C', 'desc', 'Schema', 'Create', 'Kinesis Stream','ABCD', 'ABC', 'ARN' );
        cy.get('.ant-form-item-explain-error > .ant-row > .ant-col',{timeout:8000})
        .should('be.visible')
    })

    it('White space Only',()=>{
       
        objCDCDExtended.CDCD_Edge_Case('  ', 'desc', 'Schema', 'Create', 'Kinesis Stream','ABCD', 'ABC', 'ARN' );
        cy.get('.ant-form-item-explain-error > .ant-row > .ant-col',{timeout:8000})
        .should('be.visible')
    })


     it('Contains Special Character',()=>{
       
        objCDCDExtended.CDCD_Edge_Case('C@%dCd^8', 'desc', 'Schema', 'Create', 'Kinesis Stream','ABCD', 'ABC', 'ARN' );
        cy.get('.ant-form-item-explain-error > .ant-row > .ant-col',{timeout:8000})
        .should('be.visible')
    })

     it('Description Greater than maximum length',()=>{
       
        objCDCDExtended.CDCD_Edge_Case('Test_CDCD', 'This description is intentionally written to be longer than five hundred characters in order to test the validation of input fields within the application. The purpose of this text is to ensure that the system can properly handle very large descriptions without truncating, crashing, or displaying unexpected behavior. By writing a description of this length, we can confirm whether character limits are enforced correctly and whether the user interface remains responsive. It also helps in identifying performance issues related to text rendering and database storage. A long description like this one can also simulate real-world scenarios where users may include detailed notes, background information, or context about a configuration, a change data capture destination, or any other entity that requires documentation. Ensuring stability with longer inputs ultimately leads to a more reliable and user-friendly product', 'Schema', 'Create', 'Kinesis Stream','ABCD', 'ABC', 'ARN' );
        cy.get('.ant-form-item-explain-error > .ant-row > .ant-col',{timeout:8000})
        .should('be.visible')
    })

     it('Empty Object Field',()=>{
       
        objCDCDExtended.CDCD_Edge_Case('Test_CDCD', 'desc', '', 'Create', 'Kinesis Stream','ABCD', 'ABC', 'ARN' );
        cy.get('.ant-form-item-explain-error',{timeout:8000})
        .should('be.visible')
    })

    it('Empty Event Field',()=>{
       
        objCDCDExtended.CDCD_Edge_Case('Test_CDCD', 'desc', 'Schema', '', 'Kinesis Stream','ABCD', 'ABC', 'ARN' );
         cy.get('.ant-form-item-explain-error',{timeout:8000})
        .should('be.visible')
    })


    it('Empty Destination Field',()=>{
       
        objCDCDExtended.CDCD_Edge_Case('Test_CDCD', 'desc', 'Schema', 'Update', '','ABCD', 'ABC', 'ARN' );
      
    })

    
    it('Empty Region Field',()=>{
       
        objCDCDExtended.CDCD_Edge_Case('Test_CDCD', 'desc', 'Schema', 'Update', 'Kinesis Stream','', 'ABC', 'ARN' );
        cy.get('.ant-form-item-explain-error',{timeout:8000})
        .should('be.visible')
    })

     it('Empty KS ARN',()=>{
       
        objCDCDExtended.CDCD_Edge_Case('Test_CDCD', 'desc', 'Schema', 'Create', 'Kinesis Stream','ABCD', '', 'ARN' );
         cy.get('.ant-form-item-explain-error',{timeout:8000})
        .should('be.visible')
    })

    it('Empty Role ARN',()=>{
       
        objCDCDExtended.CDCD_Edge_Case('Test_CDCD', 'desc', 'Schema', 'Create', 'Kinesis Stream','ABCD', 'ABC', '' );
        cy.get('.ant-form-item-explain-error',{timeout:8000})
        .should('be.visible')
    })
})
