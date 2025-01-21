import CypressTestIds from  "../classes/CypressTestIDs";
import { TestBase } from "../classes/TestBase";
import { RolesTest } from "../classes/Roles"

    
    let Permision1= 'SCHEMA MODELS'
    let Permission2= 'DATASETS'
    const objRolestest:RolesTest= new RolesTest();  
export class SignUpTest extends TestBase{

    strRole: string = this.TimeStamp('role-');
     

openSignupURL(){

    cy.visit('http://localhost:3000/signup');
    // cy.get(':nth-child(7) > .ant-modal-root > .ant-modal-wrap > .ant-modal > [tabindex="-1"] > .ant-modal-content > .ant-modal-body > .middle-row > .ant-col > .ant-btn > span')
}





//Signing up empty fields

signing_up_emptyfields(){

   // sign up
   cy.get(this.TestIDLocator(CypressTestIds.USER_SIGNUP_SIGNUP_BUTTON), {timeout: 20_000})
   .click()

    cy.get('#basic_email_help > .ant-form-item-explain-error',{timeout:20000})
    .should(this.assertBeVisible)

    cy.get('#basic_password_help > .ant-form-show-help-item-appear',{timeout:20_000})
    .should(this.assertBeVisible)

    cy.get('#basic_firstName_help > .ant-form-show-help-item-appear',{timeout:20_000})
    .should(this.assertBeVisible)

   cy.get('#basic_lastName_help > .ant-form-show-help-item-appear',{timeout:20_000})
   .should(this.assertBeVisible)

   cy.get('#basic_termsAndConditions_help > .ant-form-show-help-item-appear',{timeout:20_000})
   .should(this.assertBeVisible)
}

//signing_up_with_unchecked_box

unchecked_box(email: string = '', password: string = '', firstName: string = '', lastName: string = ''){

    //enter email
   
    cy.get(this.TestIDLocator(CypressTestIds. USER_SIGNUP_CORPORATE_EMAIL_INPUT), {timeout: 20_000})
   .type(email)

    //enter Password
    cy.get(this.TestIDLocator(CypressTestIds.USER_SIGNUP_PASSWORD_INPUT), {timeout: 20_000})
    .type(password)

    //enter fisrt name
    cy.get(this.TestIDLocator(CypressTestIds.USER_SIGNUP_FIRST_NAME_INPUT), {timeout: 20_000})
    .type(firstName)

    //enter last name
    cy.get(this.TestIDLocator(CypressTestIds.USER_SIGNUP_LAST_NAME_INPUT), {timeout: 20_000})
    .type(lastName)
 
    // sign up
    cy.get(this.TestIDLocator(CypressTestIds.USER_SIGNUP_SIGNUP_BUTTON), {timeout: 20_000})
    //cy.get('.ant-form-item-control-input-content > .ant-btn > span',{timeout:8_000})
    .click()
    
    cy.get('#basic_termsAndConditions_help > .ant-form-show-help-item-appear',{timeout:20_000})
    .should('be.visible')
 

}
 // sign up process
signUp(email: string = '', password: string = '', firstName: string = '', lastName: string = '',Verification_link=''){

   cy.get(this.TestIDLocator(CypressTestIds. USER_SIGNUP_CORPORATE_EMAIL_INPUT), {timeout: 20_000})
   .type(email)

    //enter Password
    cy.get(this.TestIDLocator(CypressTestIds.USER_SIGNUP_PASSWORD_INPUT), {timeout: 20_000})
    .type(password)

    //enter fisrt name
    cy.get(this.TestIDLocator(CypressTestIds.USER_SIGNUP_FIRST_NAME_INPUT), {timeout: 20_000})
    .type(firstName)

    //enter last name
    cy.get(this.TestIDLocator(CypressTestIds.USER_SIGNUP_LAST_NAME_INPUT), {timeout: 20_000})
    .type(lastName)
 
    // //check 
    cy.get(this.TestIDLocator(CypressTestIds.USER_SIGNUP_AGREE_TERMS_CHECKBOX), {timeout: 20_000})
    .check()

    // sign up
    cy.get(this.TestIDLocator(CypressTestIds.USER_SIGNUP_SIGNUP_BUTTON), {timeout: 20_000})
    .click()

   
   // email verification 
  cy.visit(Verification_link, {timeout: 20000});
  cy.contains(Verification_link)
  .click({force:true}); 

   //Success message shown
   cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
   .should(this.assertBeVisible) 

}

edge_case_scenarios(email: string = '', password: string = '', firstName: string = '', lastName: string = ''){

    cy.get(this.TestIDLocator(CypressTestIds. USER_SIGNUP_CORPORATE_EMAIL_INPUT), {timeout: 20_000})
    .type(email)
 
     //enter Password
     cy.get(this.TestIDLocator(CypressTestIds.USER_SIGNUP_PASSWORD_INPUT), {timeout: 20_000})
     .type(password)
 
     //enter fisrt name
     cy.get(this.TestIDLocator(CypressTestIds.USER_SIGNUP_FIRST_NAME_INPUT), {timeout: 20_000})
     .type(firstName)
 
     //enter last name
     cy.get(this.TestIDLocator(CypressTestIds.USER_SIGNUP_LAST_NAME_INPUT), {timeout: 20_000})
     .type(lastName)
  
     // //check 
     cy.get(this.TestIDLocator(CypressTestIds.USER_SIGNUP_AGREE_TERMS_CHECKBOX), {timeout: 20_000})
     .check()
 
     // sign up
     cy.get(this.TestIDLocator(CypressTestIds.USER_SIGNUP_SIGNUP_BUTTON), {timeout: 20_000})
     .click()
 


}

empty_name_and_password(email: string = '', password: string = '', firstName: string = '', lastName: string = ''){

    cy.get(this.TestIDLocator(CypressTestIds. USER_SIGNUP_CORPORATE_EMAIL_INPUT), {timeout: 20_000})
    .type(email)

     //enter last name
     cy.get(this.TestIDLocator(CypressTestIds.USER_SIGNUP_LAST_NAME_INPUT), {timeout: 20_000})
     .type(lastName)
  
     // //check 
     cy.get(this.TestIDLocator(CypressTestIds.USER_SIGNUP_AGREE_TERMS_CHECKBOX), {timeout: 20_000})
     .check()
 
     // sign up
     cy.get(this.TestIDLocator(CypressTestIds.USER_SIGNUP_SIGNUP_BUTTON), {timeout: 20_000})
     .click()
 
     cy.get('.ant-form-item-explain-error',{timeout:8000})
     .should('be.visible')

}


    

    //schema model disabled
    schema_model_disabled() {

    cy.get(':nth-child(1) > :nth-child(1) > .ant-layout > .ant-layout-header > .ant-typography',{timeout:20_000})
    .should(this.assertBeVisible)
    cy.get(':nth-child(1) > .ant-layout > .ant-layout-content > .ui',{timeout:20_000})
    .should(this.assertBeVisible)

    }

    //data set disabled
    data_set_disabled(){

    cy.get(':nth-child(1) > :nth-child(2) > .ant-layout > .ant-layout-header > .ant-typography',{timeout:20_000})
    .should('be.visible')
    cy.get(':nth-child(2) > .ant-layout > .ant-layout-content > .ui',{timeout:20_000})
    .should('be.visible')
    }
    

    assign_Roles(){

    //Open Config
    cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();
   
    
    cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_ROLES), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();

    cy.get(this.TestIDLocator(CypressTestIds.ROLES_LIST_ADD_ROLE_BUTTON), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();
    cy.get(this.TestIDLocator(CypressTestIds.ROLES_MANAGE_ROLE_NAME_INPUT), {timeout: 20_000})
    .type(this.strRole)

    cy.get(this.TestIDLocator(CypressTestIds.ROLES_MANAGE_ROLE_DESCRIPTION_INPUT), {timeout: 20_000})
    .type(this.strRole + ' Description - 1', {});

    // click on add permissions
    cy.get(this.TestIDLocator(CypressTestIds.ROLES_PERMISSIONS_LIST_ADD_PERMISSION_BUTTON), {timeout: 20_000})
    .click()
    //add schema model
    this.selectDropdown1(this.TestIDLocator(CypressTestIds.ROLES_PERMISSIONS_LIST_PERMISSION_NAME_SELECT),Permision1);

    cy.get(this.TestIDLocator(CypressTestIds.ROLES_PERMISSIONS_LIST_ADD_PERMISSION_BUTTON), {timeout: 20_000})
    .click()
    // add Datasets
    this.selectDropdown1(this.TestIDLocator(CypressTestIds.ROLES_PERMISSIONS_LIST_PERMISSION_NAME_SELECT),Permission2);
   
    //add user
    cy.get('#rc-tabs-0-tab-2', {timeout: 20_000})
    
    .click()

    //click on add user
    cy.get(this.TestIDLocator(CypressTestIds.ROLES_USER_LIST_ADD_USER_BUTTON), {timeout: 8_000})
    .should(this.assertBeVisible) 
    .click();

    //add user
    this.selectDropdown(this.TestIDLocator(CypressTestIds.ROLES_USER_LIST_USER_ID_SELECT),this.email)
    
   //Save
   cy.get(this.TestIDLocator(CypressTestIds.ROLES_MANAGE_ROLE_SAVE_BUTTON), {timeout: 20_000})
   .should(this.assertBeVisible)
   .click() 


    //Success Message
 cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
 .should(this.assertBeVisible)


}




verificaion(){

//Open Schema Page
cy.contains('Schema', {timeout: 8_000})
.click();

cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_LIST_TABLE), {timeout: 20_000})
.should(this.assertBeVisible)
.find('tr:nth-child(2)')
.click()

//create new dataset button
cy.get(this.TestIDLocator(CypressTestIds.DATASET_LIST_CREATE_NEW_DATASET_BUTTON), {timeout: 20_000})
.should('be.enabled')

.then(($btn) => {
   
   cy.log('✅ The  add button is enabled as expected.');

})



}
delete_a_role(){
    //Open Config
    cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();
   
    //open roles
    cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_ROLES), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();

    objRolestest.delete_a_role(this.strRole);


}

}
