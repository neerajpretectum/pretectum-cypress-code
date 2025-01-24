//import { LoginTest } from "../classes/LoginTest";
import { RolesTest} from "../classes/Roles";
import {SignUpTest}  from "../classes/SignupTest";
import { TestBase } from "../classes/TestBase";



//create  Object
const objSignUpTest :SignUpTest = new SignUpTest ();
const objTestBase:TestBase= new TestBase();
const objRolestest:RolesTest= new RolesTest();


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
    
    objSignUpTest.unchecked_box(objTestBase.email, password,strUserFirstName , strUserLastName);

})
//Sign up Process

it.skip('sign up',()=>{

    objSignUpTest.signUp(objTestBase.email, password, strUserFirstName , strUserLastName, Verification_link);

})



// edge case scenarios
it('Edge Case Scenario:invalid email ',()=>{

    objSignUpTest.edge_case_scenarios ('Testing1#%jonesassociates.biz', 'Maria@027', 'Ramsha','khan'); 
    cy.get('.ant-form-item-explain-error',{timeout:20000})
    .should('be.visible')
   

})


//duplicate email
it('Edge Case Scenario: duplicate email ',()=>{
 
     objSignUpTest.edge_case_scenarios ('testing2@malaymo.com', 'Maria@027', 'Ramsha','khan'); 
     cy.get('.ant-form-item-explain-error',{timeout:20000})
     .should('be.visible')
 })

//First name and password field empty submission

it('Edge Case Scenario: First name and password field empty submission ',()=>{


    objSignUpTest.empty_name_and_password('Testing1@jonesassociates.biz', '', '','khan' ); 
    
})




//password less than minimum length (i.e 8 characters)
 it('Edge Case Scenario: password less than minimum length ',()=>{

    objSignUpTest.edge_case_scenarios ('Testing1@jonesassociates.biz', 'Ma@12', 'Ramsha','khan'); 
    cy.get('.ant-form-item-explain-error',{timeout:8000})
    .should('be.visible')
})


//password without special character
it('Edge Case Scenario: password without special character ',()=>{

    objSignUpTest.edge_case_scenarios ('Testing1@jonesassociates.biz', 'Maria1234', 'Ramsha','khan'); 
    cy.get('.ant-form-item-explain-error',{timeout:8000})
    .should('be.visible')
})


//passsword contains only lower case letters 

it('Edge Case Scenario: passsword contains only lower case letters  ',()=>{


    objSignUpTest.edge_case_scenarios ('Testing1@jonesassociates.biz', 'maria@1234', 'Ramsha','khan'); 
    cy.get('.ant-form-item-explain-error',{timeout:8000})
    .should('be.visible')
})

//passsword contains only Upper case letters 

it('Edge Case Scenario: passsword contains only upper case letters  ',()=>{

    objSignUpTest.edge_case_scenarios ('Testing1@jonesassociates.biz', 'MARIA@1234', 'Ramsha','khan'); 
    cy.get('.ant-form-item-explain-error',{timeout:8000})
    .should('be.visible')
})



//
it('Edge Case Scenario: First name input length less then minimum ',()=>{

    objSignUpTest.edge_case_scenarios ('Testing2@jonesassociates.biz', 'Maria@027','Ra','khan' ); 
    cy.get('.ant-form-item-explain-error',{timeout:20000})
   .should('be.visible')
})




})
//check login process

it('test login ',()=>{

     
    objTestBase.LoginWithCorrectPass(objTestBase.email,objTestBase.Password,objTestBase.BaseURL )    
   

})


describe('TEST LOGIN ACTIVITIES ',()=>{

    beforeEach(()=>{
    
        objTestBase.LoginWithCorrectPass(objTestBase.email,objTestBase.Password,objTestBase.BaseURL )    
    })



it.skip('schema_model_disabled ',()=>{

    objSignUpTest.schema_model_disabled();
   

})
    
it.skip('data_set_disabled',()=>{

    objSignUpTest.data_set_disabled();

})


it('Assign   roles  to customer',()=>{

    objSignUpTest.assign_Roles();
    

    

})

//verfication 

it('Schema Models and Datasets are enabled',()=>{

    objSignUpTest.verificaion();

})

/*
// delete_a_role
 it('Delete a Role ',()=>{
 
    objSignUpTest.delete_a_role();
    
    
  })

*/
})


