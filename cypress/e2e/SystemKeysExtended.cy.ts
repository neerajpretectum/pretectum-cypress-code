import {SystemkeyExtended}  from "../classes/SystemkeysExtended";
import CypressTestIds from  "../CypressTestIds"

var blnUsersopened: Boolean=false;

// Global viewport setup for all tests
beforeEach(() => {
  cy.viewport(2000, 1000);
});

//create SystemKeys Object
const objSKExtended:SystemkeyExtended= new SystemkeyExtended();


//first check System Key is accessible 
it(' Open System keys',()=>{
    objSKExtended.openSystemKeys();
    blnUsersopened=true;

})

describe('SYSTEM KEYS EDGE CASES',()=>{

    beforeEach(()=>{
    
        objSKExtended.openSystemKeys();   
    })


    
  it('System Key Name field is shorter than the minimum length',()=>{
       
       objSKExtended.system_Keys_edge_case('G','google_maps_API', 'Google Maps', 'AIzaSyA1bC2dE3fG4hI5jK6lM7nO8pQ9rS0tU');
        cy.get('.ant-form-item-explain-error',{timeout: 8000})
        .should(objSKExtended.assertBeVisible)

    })

    it('System Key Name field is Greater than the maximum length',()=>{
       
       objSKExtended.system_Keys_edge_case('API Name For Testing Maximum Length Validation Exceeding One Hundred Characters With Extra Words Added','google_maps_API', 'Google Maps', 'AIzaSyA1bC2dE3fG4hI5jK6lM7nO8pQ9rS0tU');
        cy.get('.ant-form-item-explain-error',{timeout: 8000})
        .should(objSKExtended.assertBeVisible)

    })


    it('System Key Name field Contains Special Character',()=>{
       
       objSKExtended.system_Keys_edge_case('API@%6','google_maps_API', 'Google Maps', 'AIzaSyA1bC2dE3fG4hI5jK6lM7nO8pQ9rS0tU');
        cy.get('.ant-form-item-explain-error',{timeout: 8000})
        .should(objSKExtended.assertBeVisible)

    })


     it('System Key Name field Contains White Space Only',()=>{
       
       objSKExtended.system_Keys_edge_case('  ','google_maps_API', 'Google Maps', 'AIzaSyA1bC2dE3fG4hI5jK6lM7nO8pQ9rS0tU');
        cy.get('.ant-form-item-explain-error',{timeout: 8000})
        .should(objSKExtended.assertBeVisible)

    })


    it(' Empty System Key Name ',()=>{
       
       objSKExtended.system_Keys_edge_case('','google_maps_API', 'Google Maps', 'AIzaSyA1bC2dE3fG4hI5jK6lM7nO8pQ9rS0tU');
        cy.get('.ant-form-item-explain-error',{timeout: 8000})
        .should(objSKExtended.assertBeVisible)

    })

     it('Description exceeds maximum length',()=>{
       
       objSKExtended.system_Keys_edge_case('Test_API','This description is intentionally written to exceed the five hundred character limit so that it can be used for testing validation rules in the application. By including multiple words, repeated phrases, and extended sentences, the length of this description will continue to grow. Quality assurance teams often need this kind of test data to confirm that the system correctly handles inputs that go beyond expected b. This description is intentionally written to exceed the five hundred character limit ', 'Google Maps', 'AIzaSyA1bC2dE3fG4hI5jK6lM7nO8pQ9rS0tU');
        cy.get('.ant-form-item-explain-error',{timeout: 8000})
        .should(objSKExtended.assertBeVisible)

    })

    it('Invalid API key',()=>{
       
       objSKExtended.system_Keys_edge_case('Test_API','Description', 'Open AI', '#E%67(84hI5jK6lM7nO8pQ9rS0tU');
        cy.get('.ant-form-item-explain-error',{timeout: 8000})
        .should(objSKExtended.assertBeVisible)

    })

     it('Empty API key',()=>{
       
       objSKExtended.system_Keys_edge_case('Test_API','Description', 'Google Maps', '');
        cy.get('.ant-form-item-explain-error',{timeout: 8000})
        .should(objSKExtended.assertBeVisible)

    })
})