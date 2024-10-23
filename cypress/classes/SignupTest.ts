import CypressTestIds from  "../classes/CypressTestIDs";
//import CypressTestIds from  '../../../front-end/src/cypress/CypressTestIds'
import { TestBase } from "../classes/TestBase";


    
    let Permision1= 'SCHEMA MODELS'
    let Permission2= 'DATASETS'
    
export class SignUpTest extends TestBase{



openSignupURL(){

    cy.visit('http://localhost:3000/signup');
    // cy.get(':nth-child(7) > .ant-modal-root > .ant-modal-wrap > .ant-modal > [tabindex="-1"] > .ant-modal-content > .ant-modal-body > .middle-row > .ant-col > .ant-btn > span')
}





//Signing up empty fields

signing_up_emptyfields(){

    
    
    // submit
    cy.get('.ant-form-item-control-input-content > .ant-btn > span',{timeout:8_000})
    .click()

    cy.get('#basic_email_help > .ant-form-item-explain-error',{timeout:20000})
    .should('be.visible')

    cy.get('#basic_password_help > .ant-form-show-help-item-appear',{timeout:20_000})
    .should('be.visible')

    cy.get('#basic_firstName_help > .ant-form-show-help-item-appear',{timeout:20_000})
   .should('be.visible')

   cy.get('#basic_lastName_help > .ant-form-show-help-item-appear',{timeout:20_000})
   .should('be.visible')

   cy.get('#basic_termsAndConditions_help > .ant-form-show-help-item-appear',{timeout:20_000})
    .should('be.visible')
}

//signing_up_with_unchecked_box

unchecked_box(email: string = '', password: string = '', firstName: string = '', lastName: string = ''){

    //enter email
    cy.get('#basic_email', {timeout:20_000})
   .type(email)

    //enter Password
    cy.get('#basic_password', {timeout:20_000})
    .type(password)

    //enter fisrt name
    cy.get('#basic_firstName',{timeout:8_000})
    .type(firstName)

    //enter last name
    cy.get('#basic_lastName',{timeout:8_000})
    .type(lastName)
 
    // submit
    cy.get('.ant-form-item-control-input-content > .ant-btn > span',{timeout:8_000})
    .click()
    
    cy.get('#basic_termsAndConditions_help > .ant-form-show-help-item-appear',{timeout:20_000})
    .should('be.visible')
 

}
 // sign up process
signUp(email: string = '', password: string = '', firstName: string = '', lastName: string = '',Verification_link=''){

    // enter email
    cy.get('#basic_email', {timeout:20_000})
   .type(email)

    //enter Password
    cy.get('#basic_password', {timeout:20_000})
    .type(password)

    //enter fisrt name
    cy.get('#basic_firstName',{timeout:8_000})
    .type(firstName)

    //enter last name
    cy.get('#basic_lastName',{timeout:8_000})
    .type(lastName)

    //check 
    cy.get('#basic_termsAndConditions')
    .check()

   // submit
   cy.get('.ant-form-item-control-input-content > .ant-btn > span',{timeout:8_000})
   .click()

   // email verification 
  cy.visit(Verification_link, {timeout: 20000});
   cy.contains(Verification_link)
   .click({force:true}); 

   //
   //Success message shown
   /*cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
   .should(this.assertBeVisible)*/
    

}

edge_case_scenarios(email: string = '', password: string = '', firstName: string = '', lastName: string = ''){

// enter email
cy.get('#basic_email', {timeout:20_000})
.type(email)

 //enter Password
 cy.get('#basic_password', {timeout:20_000})
 .type(password)

 //enter fisrt name
 cy.get('#basic_firstName',{timeout:8_000})
 .type(firstName)

 //enter last name
 cy.get('#basic_lastName',{timeout:8_000})
 .type(lastName)

 //check 
 cy.get('#basic_termsAndConditions')
 .check()

// submit
cy.get('.ant-form-item-control-input-content > .ant-btn > span',{timeout:8_000})
.click()



}





//open login page
open_login_Page(){
 
    //open login page
 this.OpenURL();

}

// test_login 
test_login(email:string=' ', password:string=' '){
    
    cy.get('[data-testid="user-login-email-input"]',{timeout:8_000})
    .should('be.visible')
    .type(email)

    cy.get('[data-testid="user-login-password-input"]',{timeout:8_000})
    .type(password)

    cy.get('[data-testid="user-login-submit-button"]',{timeout:8_000})
    .click()

    //landing pages
    cy.get('.ant-layout-header > :nth-child(1) > :nth-child(2)',{timeout:20_000})
    .should('be.visible')

    
}
    

    //schema model disabled
    schema_model_disabled() {

    cy.get(':nth-child(1) > :nth-child(1) > .ant-layout > .ant-layout-header > .ant-typography',{timeout:8_000})
    .should('be.visible')
    cy.get(':nth-child(1) > .ant-layout > .ant-layout-content > .ui',{timeout:8_000})
    .should('be.visible')

    }

    //data set disabled
    data_set_disabled(){

    cy.get(':nth-child(1) > :nth-child(2) > .ant-layout > .ant-layout-header > .ant-typography',{timeout:8_000})
    .should('be.visible')
    cy.get(':nth-child(2) > .ant-layout > .ant-layout-content > .ui',{timeout:8_000})
    .should('be.visible')

    }
    

    assign_Roles(){

    //Open Config
    cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();

    //
    cy.get('[data-testid="vertical-menu-configuration-roles"]',{timeout:20000})
    .click()

    cy.get('[style="padding-top: 1rem;"] > .ant-row > .ant-col > .ant-btn',{timeout:20000})
    .click()

    cy.get('#basic_name',{timeout:8000})
    .type('Super User')

    cy.get('#basic_description',{timeout:8000})
    .type('Role of Super User')

    // click on add permissions
    cy.get('.ant-form-item-control-input-content > .ant-btn',{timeout:8000})
    .click()
    
    //add schema model
    cy.get('#basic_permissions_0_name',{timeout:20000})
    .type(Permision1)

    // Select the desired option from the dropdown
    cy.get('.ant-select-item-option', {timeout:8000})
      .contains(Permision1)  
      .click();

    // add Datasets

    cy.get('.ant-form-item-control-input-content > .ant-btn > :nth-child(2)', {timeout:8000})
    .click()
    
    cy.get('#basic_permissions_1_name',  {timeout:8000})
    .type(Permission2)

    // Select the desired option from the dropdown
    cy.get('.ant-select-item-option', {timeout:8000})
    .should('be.visible')
    .contains(Permission2)  
    .click();

   
    //add user
    cy.get('#rc-tabs-0-tab-2', {timeout:8000})
    .click()

    //click on add user
    cy.get('[data-testid="add-role-user-button"]',{timeout:20000})
    .click()
    this.selectDropdown(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_USER_SELECT),this.email1);



   // Select the desired option from the dropdown
    //cy.get('.ant-select-item-option', {timeout:20000})
   // cy.get(':nth-child(5) > .ant-select-dropdown > :nth-child(1) > .rc-virtual-list > .rc-virtual-list-holder > :nth-child(1) > .rc-virtual-list-holder-inner > .ant-select-item')
    //.should('be.visible')
    //.contains(email)  
    //.click();


     //save
    cy.get('.ant-space > :nth-child(2) > .ant-btn', {timeout:8000})
    .click()

   //success message shown
    cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
    .should(this.assertBeVisible)


      




}
//verify roles are enabled
verificaion(){



}

}