//import { LoginTest } from "../classes/LoginTest";
import {SignUpTest}  from "../classes/SignupTest";
import { TestBase } from "../classes/TestBase";


//create  Object
const objSignUpTest :SignUpTest = new SignUpTest ();
const objTestBase:TestBase= new TestBase();

let email = 'Testing1@mnniskor.com';
let password = 'Maria@027';
const strUserFirstName: string = objTestBase.TimeStamp('UFN-');
const strUserLastName: string = objTestBase.TimeStamp('ULN-');

let Verification_link = 'https://www.pretectum.net/verifyemail?code=416825&username=01e6fa46-d573-4cda-9045-ef98f8d0dbec&clientId=61junkfaas0egho45e9q71uljj&region=us-east-2&email=Testing1@mnniskor.com';




it('Open Signup URL ',()=>{
    objSignUpTest.openSignupURL();
    

})

describe('SIGN UP ACTIVITIES',()=>{
    
    beforeEach(()=>{
    
        objSignUpTest.openSignupURL();   
    })

// Signing up Empty Fields
it('Signing up Empty Fields',()=>{

    objSignUpTest.signing_up_emptyfields();

})

//Signing up  with Unchecked box
it('Signing up  with Unchecked box',()=>{
    
    objSignUpTest.unchecked_box(email, password,strUserFirstName , strUserLastName);

})
//Sign up Process

it('sign up',()=>{

    objSignUpTest.signUp(objTestBase.email1, password, strUserFirstName , strUserLastName, Verification_link);

})



// edge case scenarios
it('Edge Case Scenario:invalid email ',()=>{

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
it('Edge Case Scenario: duplicate email ',()=>{

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
 it('Edge Case Scenario: Without Password ',()=>{

     let email = 'Testing1@jonesassociates.biz';
     let password = 'Maria@027';
     let firstName = 'Ramsha';
     let lastName = 'khan';
 
     objSignUpTest.edge_case_scenarios (email, password, firstName,lastName); 
     cy.get('.ant-form-item-explain-error',{timeout:8000})
     .should('be.visible')
 })


//password less than minimum length (i.e 8 characters)
 it('Edge Case Scenario: password less than minimum length ',()=>{

    let email = 'Testing1@jonesassociates.biz';
    let password = 'Maria';
    let firstName = 'Ramsha';
    let lastName = 'khan';

    objSignUpTest.edge_case_scenarios (email, password, firstName,lastName); 
    cy.get('.ant-form-item-explain-error',{timeout:8000})
    .should('be.visible')
})


//password without special character
it('Edge Case Scenario: password without special character ',()=>{

    let email = 'Testing1@jonesassociates.biz';
    let password = 'Maria1234';
    let firstName = 'Ramsha';
    let lastName = 'khan';

    objSignUpTest.edge_case_scenarios (email, password, firstName,lastName); 
    cy.get('.ant-form-item-explain-error',{timeout:8000})
    .should('be.visible')
})


//passsword contains only lower case letters 

it('Edge Case Scenario: passsword contains only lower case letters  ',()=>{

    let email = 'Testing1@jonesassociates.biz';
    let password = 'maria@1234';
    let firstName = 'Ramsha';
    let lastName = 'khan';

    objSignUpTest.edge_case_scenarios (email, password, firstName,lastName); 
    cy.get('.ant-form-item-explain-error',{timeout:8000})
    .should('be.visible')
})

//passsword contains only Upper case letters 

it('Edge Case Scenario: passsword contains only upper case letters  ',()=>{

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

it('test login ',()=>{

    objSignUpTest.open_login_Page();
    objSignUpTest.test_login(email,password);     
   

})


describe('TEST LOGIN ACTIVITIES ',()=>{

    beforeEach(()=>{
    
        objSignUpTest.open_login_Page();
        objSignUpTest.test_login(email,password);
    })



it('schema_model_disabled ',()=>{

    objSignUpTest.schema_model_disabled();
   

})
    
it('data_set_disabled',()=>{

    objSignUpTest.data_set_disabled();

})


it('Assign   roles  to customer',()=>{

    objSignUpTest.assign_Roles();

})

//verfication 

it('Schema Models and Datasets are enabled',()=>{

    objSignUpTest.verificaion();

})


})


