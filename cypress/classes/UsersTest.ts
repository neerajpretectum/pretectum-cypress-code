import CypressTestIds from  "../classes/CypressTestIDs";

import { TestBase } from "./TestBase";

//variables
let corporateEmail = 'testing4@malaymo.com'
var firstname ='sanam'
var lastname ='khan'
var newfirstname ='Sara'
var newlastname ='Abbasi'
var newpassword='Maria@102'

export class UsersTest extends TestBase{    
openUsers(){

    //open portal
    this.OpenURL();

    //login into portal with valid creadentials         
    this.Login();

    //open configuration
    cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();

    //open Users section
    cy.get('[data-testid="vertical-menu-configuration-users"] > .ant-menu-title-content') 
   //cy.get(this.TestIDLocator(CypressTestIds.USERS_USERSLIST_TABLE), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();

    }

    //add user button is visible
    AddUsersButtonIsVisible(){
        
        cy.get(this.TestIDLocator(CypressTestIds.USERS_ADD_USER_BUTTON),{timeout: 20_000})
        .should(this.assertBeVisible)

    }

    //add user
    adduser(){

   //click on add Users
        cy.get(this.TestIDLocator(CypressTestIds.USERS_ADD_USER_BUTTON),{timeout: 20_000})
        .click ()
        
        //type corporate email address
       // cy.get('#basic_email')
       cy.get(this.TestIDLocator(CypressTestIds.USERS_EMAIL_INPUT),{timeout: 8000})
       .should(this.assertBeVisible)
        .type(corporateEmail)

        //type first name
        cy.get(this.TestIDLocator(CypressTestIds.USERS_FIRST_NAME_INPUT),{timeout: 8000})
        .should(this.assertBeVisible)
        .type(firstname)
        
        //type last name 
        cy.get(this.TestIDLocator(CypressTestIds.USERS_LAST_NAME_INPUT),{timeout: 8_000})
        .should(this.assertBeVisible)
        .type(lastname)

        //save user
        cy.get(this.TestIDLocator(CypressTestIds.USERS_SAVE_BUTTON),{timeout: 8_000})
        .click ()

         //Success message shown
         cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 20_000})
         .should(this.assertBeVisible)

    }

    //edit user
    editUser(){

        //get the user id
        cy.contains(corporateEmail ,{timeout: 20_000})
        .parent(this.TD)
        .parent(this.TR)
        .find(this.TestIDLocator(CypressTestIds.USERS_USERSLIST_EDIT_BUTTON), {timeout: 20_000})
        .click();

        
        //edit first name 
        cy.get(this.TestIDLocator(CypressTestIds.USERS_FIRST_NAME_INPUT),{timeout: 8000})  
        .should(this.assertBeVisible)
        .type('{selectall}{backspace}')
         .type(newfirstname)
        //edit last name 
        cy.get(this.TestIDLocator(CypressTestIds.USERS_LAST_NAME_INPUT),{timeout: 8_000}) 
        .should(this.assertBeVisible)
        .type('{selectall}{backspace}')
        
        .type(newlastname)

        //Save User
        cy.get(this.TestIDLocator(CypressTestIds.USERS_SAVE_BUTTON),{timeout: 8_000})
        .click()

        //success message alert 
        cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 20_000})
         .should(this.assertBeVisible)


    }

    viewuser(){

        //get the user id
        cy.contains(corporateEmail ,{timeout: 20_000})
        .parent(this.TD)
        .parent(this.TR)
        .find(this.TestIDLocator(CypressTestIds.USERS_USERSLIST_VIEW_BUTTON), {timeout: 20_000})
        .should(this.assertBeVisible)
        .click()
        //Verify that the view user form is visible
        cy.get(':nth-child(2) > .ant-row > .ant-form-item-label > .ant-form-item-required', {timeout: 8_000})
        .should(this.assertBeVisible)

    }

    //view user history
    viewUserHistory(){

        cy.contains(corporateEmail ,{timeout: 20_000})
        .parent(this.TD)
        .parent(this.TR)
        .find(this.TestIDLocator(CypressTestIds.USERS_USERSLIST_HISTORY_BUTTON), {timeout: 20_000})
        .should(this.assertBeVisible)
        .click()

        //verify user history is visible
        cy.get('[title="Date"]',{timeout: 8000}).should('be.visible')

    }


    //Reset Password 
    resetPassword(){
   const  verificationLink='https://www.pretectum.net/resetpassword?code=695038&username=360e4a0e-a62a-4524-84ca-b4ae7820b45b&clientId=null&region=us-east-2&email=testing4@malaymo.com';
        cy.contains(corporateEmail ,{timeout: 20_000})
        //.parent(this.SPAN)
        .parent(this.TD)
        .parent(this.TR)
       // .find(this.TestIDLocator(CypressTestIds.USERS_USERSLIST_EDIT_BUTTON), {timeout: 20_000})
       // .click();

        //get reset password button
        cy.get(this.TestIDLocator(CypressTestIds.USERS_RESETPASSWORD_BUTTON), {timeout: 20_000})
        //cy.get('.ant-space > :nth-child(2) > .ant-btn', {timeout: 20_000})
        .should(this.assertBeVisible)
        .click()
        

        //success message 
        cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 20_000})
         .should(this.assertBeVisible)

         
         cy.visit(verificationLink,{ timeout: 120000 });
    
         cy.get(this.TestIDLocator(CypressTestIds.USER_CHANGE_PASSWORD_INPUT), {timeout: 20_000})
         .type(newpassword)
         cy.get(this.TestIDLocator(CypressTestIds.USER_CHANGE_PASSWORD_CONFIRM_INPUT), {timeout: 20_000})
         .type(newpassword)
        // USER_CHANGE_PASSWORD_SUBMIT_BUTTON
        cy.get(this.TestIDLocator(CypressTestIds.USER_CHANGE_PASSWORD_SUBMIT_BUTTON), {timeout: 20_000})
         .click ()

         //success message 
        cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 20_000})
        .should(this.assertBeVisible)
      
    
    

    }
    
}




