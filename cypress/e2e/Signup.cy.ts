//import { LoginTest } from "../classes/LoginTest";
import {SignUpTest}  from "../classes/SignupTest";


//create  Object
const objSignUpTest :SignUpTest = new SignUpTest ();

let email = 'Testing1@mnniskor.com';
let password = 'Maria@027';
let firstName = 'Ayeza';
let lastName = 'khan';
let Verification_link = 'https://www.pretectum.net/verifyemail?code=416825&username=01e6fa46-d573-4cda-9045-ef98f8d0dbec&clientId=61junkfaas0egho45e9q71uljj&region=us-east-2&email=Testing1@mnniskor.com';




/*it('Open Signup URL ',()=>{
    objSignUpTest.openSignupURL();
    

})*/

describe('SIGN UP ACTIVITIES',()=>{
    
    beforeEach(()=>{
    
        objSignUpTest.openSignupURL();   
    })

// Signing up Empty Fields
it.skip('Signing up Empty Fields',()=>{

    objSignUpTest.signing_up_emptyfields();

})

//Signing up  with Unchecked box
it.skip('Signing up  with Unchecked box',()=>{

    objSignUpTest.unchecked_box(email, password, firstName, lastName);

})
//Sign up Process

it.skip('sign up',()=>{

    objSignUpTest.signUp(email, password, firstName, lastName, Verification_link);

})



// edge case scenarios
it.skip('Edge Case Scenario:invalid email ',()=>{

   // let email = 'Testing1@jonesassociates.biz';
    let email = 'Testing1#%jonesassociates.biz';
    let password = 'Maria@027';
    let firstName = 'Ramsha';
    let lastName = 'khan';

    objSignUpTest.edge_case_scenarios (email, password, firstName,lastName); 
    cy.get('.ant-form-item-explain-error',{timeout:8000})
    .should('be.visible')
   

})


//duplicate email
it.skip('Edge Case Scenario: duplicate email ',()=>{

    // let email = 'Testing1@jonesassociates.biz';
     let email = 'Testing1@mnniskor.com';
     let password = 'Maria@027';
     let firstName = 'Ramsha';
     let lastName = 'khan';
 
     objSignUpTest.edge_case_scenarios (email, password, firstName,lastName); 
     cy.get('.ant-form-item-explain-error',{timeout:8000})
     .should('be.visible')
 })



 //Without Password
 it.skip('Edge Case Scenario: Without Password ',()=>{

     let email = 'Testing1@jonesassociates.biz';
     let password = 'Maria@027';
     let firstName = 'Ramsha';
     let lastName = 'khan';
 
     objSignUpTest.edge_case_scenarios (email, password, firstName,lastName); 
     cy.get('.ant-form-item-explain-error',{timeout:8000})
     .should('be.visible')
 })


//password less than minimum length (i.e 8 characters)
 it.skip('Edge Case Scenario: password less than minimum length ',()=>{

    let email = 'Testing1@jonesassociates.biz';
    let password = 'Maria';
    let firstName = 'Ramsha';
    let lastName = 'khan';

    objSignUpTest.edge_case_scenarios (email, password, firstName,lastName); 
    cy.get('.ant-form-item-explain-error',{timeout:8000})
    .should('be.visible')
})


//password without special character
it.skip('Edge Case Scenario: password without special character ',()=>{

    let email = 'Testing1@jonesassociates.biz';
    let password = 'Maria1234';
    let firstName = 'Ramsha';
    let lastName = 'khan';

    objSignUpTest.edge_case_scenarios (email, password, firstName,lastName); 
    cy.get('.ant-form-item-explain-error',{timeout:8000})
    .should('be.visible')
})


//passsword contains only lower case letters 

it.skip('Edge Case Scenario: passsword contains only lower case letters  ',()=>{

    let email = 'Testing1@jonesassociates.biz';
    let password = 'maria@1234';
    let firstName = 'Ramsha';
    let lastName = 'khan';

    objSignUpTest.edge_case_scenarios (email, password, firstName,lastName); 
    cy.get('.ant-form-item-explain-error',{timeout:8000})
    .should('be.visible')
})

//passsword contains only Upper case letters 

it.skip('Edge Case Scenario: passsword contains only upper case letters  ',()=>{

    let email = 'Testing1@jonesassociates.biz';
    let password = 'MARIA@1234';
    let firstName = 'Ramsha';
    let lastName = 'khan';

    objSignUpTest.edge_case_scenarios (email, password, firstName,lastName); 
    cy.get('.ant-form-item-explain-error',{timeout:8000})
    .should('be.visible')
})


//First name field empty submission

it('Edge Case Scenario: First name field empty submission ',()=>{

    let email = 'Testing1@jonesassociates.biz';
    let password = 'Maria@027';
    let firstName = 'Ramsha';
    let lastName = 'khan';

    objSignUpTest.edge_case_scenarios (email, password, ' ',lastName ); 
    //cy.get('.ant-form-item-explain-error',{timeout:8000})
   // .should('be.visible')
})


//
it('Edge Case Scenario: First name input length less then minimum ',()=>{

    let email = 'Testing2@jonesassociates.biz';
    let password = 'Maria@027';
    let firstName = 'Ra';
    let lastName = 'khan';

    objSignUpTest.edge_case_scenarios (email, password, firstName,lastName ); 
    cy.get('.ant-form-item-explain-error',{timeout:8000})
   .should('be.visible')
})




})
//check login process

it.skip('test login ',()=>{

    objSignUpTest.open_login_Page();
    objSignUpTest.test_login(email,password);     
   

})


describe('TEST LOGIN ACTIVITIES ',()=>{

    beforeEach(()=>{
    
        objSignUpTest.open_login_Page();
        objSignUpTest.test_login(email,password);
    })



it.skip('schema_model_disabled ',()=>{

    objSignUpTest.schema_model_disabled();
   

})
    
it.skip('data_set_disabled',()=>{

    objSignUpTest.data_set_disabled();

})


it.skip('Assign   roles  to customer',()=>{

    objSignUpTest.assign_Roles();

})

//verfication 

it.skip('Schema Models and Datasets are enabled',()=>{

    objSignUpTest.verificaion();

})


})


//cy.get('.ant-alert-description')
//cy.get('.middle-row > .ant-col > .ant-btn')
// cy.get('u')