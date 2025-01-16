import CypressTestIds from  "../classes/CypressTestIDs";
import { TestBase } from "./TestBase";

export class RolesTest extends TestBase{

    strRoleName: string = 'Test Role ';
    strRoleDesc:string = 'Role Description '
    credential:string='GoogleMaps'


    open_Role(){
    this.OpenURL();

    //login into portal with valid creadentials         
    this.Login();

    //open configuration
    cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();
    
    //open Roles section 
    cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_ROLES), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();



    }

Create_Role(){

    cy.get(this.TestIDLocator(CypressTestIds.ROLES_LIST_ADD_ROLE_BUTTON), {timeout: 8_000})
    .should(this.assertBeVisible)
    .click()

    //role name
    cy.get(this.TestIDLocator(CypressTestIds.ROLES_MANAGE_ROLE_NAME_INPUT), {timeout: 8_000})
    .should(this.assertBeVisible)
    .type(this.strRoleName)
    .click()

    //role description 
    cy.get(this.TestIDLocator(CypressTestIds.ROLES_MANAGE_ROLE_DESCRIPTION_INPUT), {timeout: 8_000})
    .should(this.assertBeVisible)
    .type(this.strRoleDesc)
    .click()

    //Save
    cy.get(this.TestIDLocator(CypressTestIds.ROLES_MANAGE_ROLE_SAVE_BUTTON), {timeout: 8_000})
    .should(this.assertBeVisible)
    .click()

    cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
    .should(this.assertBeVisible)


}

//add Permission 
add_permission(permissionName: string, desc: string){
    //add_permission(){
    this.open_Role();
    cy.get(this.TestIDLocator(CypressTestIds.ROLES_LIST_TABLE), {timeout: 20_000})
    .contains(this.strRoleName,{timeout:20_000})
    .parent(this.TR) 
    .find(this.TestIDLocator(CypressTestIds.ROLES_LIST_EDIT_BUTTON), { timeout: 8000 }) 
    .should(this.assertBeVisible)
    .click(); 

    cy.get(this.TestIDLocator(CypressTestIds.ROLES_PERMISSIONS_LIST_ADD_PERMISSION_BUTTON), {timeout: 8_000})
    .should(this.assertBeVisible)
    .click()

   this.selectDropdown1(this.TestIDLocator(CypressTestIds.ROLES_PERMISSIONS_LIST_PERMISSION_NAME_SELECT),permissionName);
  
   //decsription 
   cy.get(this.TestIDLocator(CypressTestIds.ROLES_PERMISSIONS_LIST_PERMISSION_DESCRIPTION_INPUT), {timeout: 8_000})
    .should(this.assertBeVisible)
    .last()
    .type(desc)
    .click({force:true})

    //SAVE   
    cy.get(this.TestIDLocator(CypressTestIds.ROLES_MANAGE_ROLE_SAVE_BUTTON), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click() 
    
    cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
    .should(this.assertBeVisible)
 
    cy.get('a img[src="/icons/header-menu/logout.png"]', {timeout: 8_000})
    .should(this.assertBeVisible)
     .click();

}



open_edit_window_and_edit_a_role(){

    cy.get(this.TestIDLocator(CypressTestIds.ROLES_LIST_TABLE), {timeout: 20_000})
    .contains(this.strRoleName,{timeout:20_000})
    .parent(this.TR) 
    .find(this.TestIDLocator(CypressTestIds.ROLES_LIST_EDIT_BUTTON), { timeout: 8000 }) 
    .should(this.assertBeVisible) 
    .click();


    cy.get(this.TestIDLocator(CypressTestIds.ROLES_MANAGE_ROLE_DESCRIPTION_INPUT), {timeout: 8_000})
    .should(this.assertBeVisible)
    .clear()
    .type('New description of role  "Test Role"') 
    .click()

    //Save
    cy.get(this.TestIDLocator(CypressTestIds.ROLES_MANAGE_ROLE_SAVE_BUTTON), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click() 

    //Success Message
    cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
    .should(this.assertBeVisible)

    
}

//Delete a Role
delete_a_role(rolename: string = ''){
    cy.get(this.TestIDLocator(CypressTestIds.ROLES_LIST_TABLE), {timeout: 8000})
   // cy.get('.ant-table-body',{timeout:8_000})
    .contains(rolename,{timeout:20_000})
    .parent(this.TR) 
    .find(this.TestIDLocator(CypressTestIds.ROLES_LIST_DELETE_BUTTON), { timeout: 8_000 }) 
    .should(this.assertBeVisible) 
    .click();

    // confirmation message
    cy.get(this.TestIDLocator(CypressTestIds.CONFIRMATION_BOX_OK_BUTTON), {timeout: 8_000})
   .should(this.assertBeVisible)
    .click()

    cy.get(this.TestIDLocator(CypressTestIds.ROLES_LIST_TABLE), {timeout: 8_000})
    .should(this.assertBeVisible)
    .should('not.have.text', this.strRoleName)


}

open_View_window(){
    
    cy.get(this.TestIDLocator(CypressTestIds.ROLES_LIST_TABLE), {timeout: 8_000})
    .contains(this.strRoleName,{timeout:20_000})
    .parent(this.TR) 
    .find(this.TestIDLocator(CypressTestIds.ROLES_LIST_VIEW_BUTTON), { timeout: 8_000 }) 
    .should(this.assertBeVisible) 
    .click();


    cy.get('#rc-tabs-0-tab-3' ,{ timeout: 8_000 })
    .should(this.assertBeVisible) 


}

open_View_history_window(){  
    cy.get(this.TestIDLocator(CypressTestIds.ROLES_LIST_TABLE), {timeout: 8_000})
    .contains(this.strRoleName,{timeout:20_000})
    .parent(this.TR) 
    .find(this.TestIDLocator(CypressTestIds.ROLES_LIST_HISTORY_BUTTON), { timeout: 8_000 }) 
    .should(this.assertBeVisible) 
    .click();

    cy.get('[title="Data Object"]', { timeout: 8_000 })
    .should(this.assertBeVisible) 


}

add_a_user_to_the_role(){
   

    cy.get(this.TestIDLocator(CypressTestIds.ROLES_LIST_TABLE), {timeout: 20_000})
    .contains(this.strRoleName,{timeout:20_000})
    .parent(this.TR) 
    .find(this.TestIDLocator(CypressTestIds.ROLES_LIST_EDIT_BUTTON), { timeout: 20000 }) 
    .should(this.assertBeVisible) 
    .click();

   
    cy.get('#rc-tabs-0-tab-2', { timeout: 8000 })
    .should(this.assertBeVisible) 
    .click();
    
    cy.get(this.TestIDLocator(CypressTestIds.ROLES_USER_LIST_ADD_USER_BUTTON), {timeout: 8_000})
    .should(this.assertBeVisible) 
    .click();

    //select user

    this.selectDropdown(this.TestIDLocator(CypressTestIds.ROLES_USER_LIST_USER_ID_SELECT),this.corporateEmail);

      //Save
      cy.get(this.TestIDLocator(CypressTestIds.ROLES_MANAGE_ROLE_SAVE_BUTTON), {timeout: 20_000})
      .should(this.assertBeVisible)
      .click() 


       //Success Message
    cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
    .should(this.assertBeVisible)

   



}
//Deactivate a Role
activate_and_deactivate_a_role(){

    cy.get(this.TestIDLocator(CypressTestIds.ROLES_LIST_TABLE), {timeout: 8_000})
    .contains(this.strRoleName,{timeout:20_000})
    .parent(this.TR) 
    .find(this.TestIDLocator(CypressTestIds.ROLES_LIST_ACTIVE_SWITCH), { timeout: 8000 }) 
    .should(this.assertBeVisible) 
    .click();

     //Success Message
     cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
     .should(this.assertBeVisible)
}

//add credentials
add_credentials(){

    const expectedCredential=1;
    cy.get(this.TestIDLocator(CypressTestIds.ROLES_LIST_TABLE), {timeout: 8_000})
    .contains(this.strRoleName,{timeout:20_000})
    .parent(this.TR) 
    .find(this.TestIDLocator(CypressTestIds.ROLES_LIST_EDIT_BUTTON), { timeout: 8000 }) 
    .should(this.assertBeVisible) 
    .click();

    

    cy.get('#rc-tabs-0-tab-3',{ timeout: 4000 })
    .click()
    cy.get(this.TestIDLocator(CypressTestIds.ROLES_CREDENTIALS_LIST_ADD_CREDENTIAL_BUTTON), {timeout: 8_000})
    .click()

   // select credential
    this.selectDropdown(this.TestIDLocator(CypressTestIds.ROLES_CREDENTIALS_LIST_NAME_SELECT),this.credential);
    
    //Save
     cy.get(this.TestIDLocator(CypressTestIds.ROLES_MANAGE_ROLE_SAVE_BUTTON), {timeout: 20_000})
     .should(this.assertBeVisible)
     .click() 


      //Success Message
   cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 20_000})
   .should(this.assertBeVisible)

    //verification
    
    cy.get(this.TestIDLocator(CypressTestIds.ROLES_LIST_TABLE), {timeout: 8_000})
    .contains(this.strRoleName,{timeout:20_000})
    .parent(this.TR) 
    .find(':nth-child(5)') 
    .should('have.text', `${expectedCredential}`); // Verify the permission value

}

delete_credentials(){
    cy.get(this.TestIDLocator(CypressTestIds.ROLES_LIST_TABLE), {timeout: 8_000})
    .contains(this.strRoleName,{timeout:20_000})
    .parent(this.TR) 
    .find(this.TestIDLocator(CypressTestIds.ROLES_LIST_EDIT_BUTTON), { timeout: 8000 }) 
    .should('be.visible') 
    .click(); 
    cy.get('#rc-tabs-0-tab-3',{ timeout: 4000 })
    .click()
    cy.get(this.TestIDLocator(CypressTestIds.ROLES_CREDENTIALS_LIST_TABLE), {timeout: 20_000})
    .contains(this.credential,{timeout:20_000})
    
    .parent(this.DIV)
    .parent(this.DIV)
    .parent(this.DIV)
    .parent(this.DIV)
    .parent(this.DIV)
    .parent(this.DIV)
    .parent(this.DIV)
    .parent(this.TD)
    .parent(this.TR)
    .find(this.TestIDLocator(CypressTestIds.ROLES_CREDENTIALS_LIST_DELETE_BUTTON), {timeout: 20_000})
    .should(this.assertBeVisible) 
    .click(); 

    cy.get(this.TestIDLocator(CypressTestIds.ROLES_MANAGE_ROLE_SAVE_BUTTON), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click({force:true}) 

    cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
    .should(this.assertBeVisible )



}

//COMMON FUNCTIONS 
//login as a user
login_new(){

  this.LoginWithCorrectPass(this.corporateEmail,this.Password,this.BaseURL )

}



//delete_permission  
delete_permission(rowNumber: number){
    
    this.open_Role();
  cy.get(this.TestIDLocator(CypressTestIds.ROLES_LIST_TABLE), {timeout: 20_000})
  .contains(this.strRoleName,{timeout:20_000})
  .parent(this.TR) 
  .find(this.TestIDLocator(CypressTestIds.ROLES_LIST_EDIT_BUTTON), { timeout: 8000 }) 
  .should('be.visible') 
  .click(); 


  //ROLES_PERMISSIONS_LIST_TABLE
  cy.get(this.TestIDLocator(CypressTestIds.ROLES_PERMISSIONS_LIST_TABLE), {timeout: 20_000})
  .find(`tr:nth-child(${rowNumber})`) 

  cy.get(this.TestIDLocator(CypressTestIds.ROLES_PERMISSIONS_LIST_PERMISSION_DELETE_BUTTON),{timeout: 20_000})
  .last()
  .click();
  
  cy.get(this.TestIDLocator(CypressTestIds.ROLES_MANAGE_ROLE_SAVE_BUTTON), {timeout: 20_000})
  .should(this.assertBeVisible)
  .click() 
  cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
  .should(this.assertBeVisible)

  cy.get('a img[src="/icons/header-menu/logout.png"]', {timeout: 8_000})
 .should(this.assertBeVisible)
  .click();

}


//BUSINESS AREA

verify_permisssion_BA(){

this.login_new();
cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
.should(this.assertBeVisible)
.click();

//open BA section
cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_BUSINESSAREAS), {timeout: 20_000})
.should(this.assertBeVisible)
.click();

cy.get(this.TestIDLocator(CypressTestIds.ADD_BUSINESS_AREA_BUTTON), {timeout: 20_000})
.should(this.assertBeVisible)

}

verify_revoke_permission(){

this.login_new();

cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
.should(this.assertBeVisible)
.click();

//open BAData section
cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_BUSINESSAREAS), {timeout: 20_000})
.should(this.assertBeVisible)
.click();

//permisssion denied
cy.get('.ui.big.floating.negative.message',{timeout: 20_000} )
.should('contain', 'Permission Denied', {timeout: 20_000})
.and('contain', "You don't have permisson to enter in this area.");
}

//BUSINESS AREA DATA
verify_permisssion_BADATA(){

 this.login_new();
cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
.should(this.assertBeVisible)
.click();

//open BA section
cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_BUSINESSAREADATA), {timeout: 20_000})
.should(this.assertBeVisible)
.click();
cy.get(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_LIST_TABLE), {timeout: 20_000})
 .should(this.assertBeVisible)




}

verify_revoke_permission_BADATA(){

    this.login_new();
    cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();
    
    //open BAData section
    cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_BUSINESSAREADATA), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();
    
     //permisssion denied
     cy.get('.full-height-flex-container > .ui',{timeout:8000})
     .should(this.assertBeVisible)



}


//USERS

verify_permisssion_USERS(){

    this.login_new();
    cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();
    

    cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_USERS), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();
    cy.get(this.TestIDLocator(CypressTestIds.USERS_USERSLIST_TABLE), {timeout: 20_000})
     .should(this.assertBeVisible)
    


}

verify_revoke_permission_USERS(){

    this.login_new();
    cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();
    
    //open BAData section
    cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_USERS), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();
    
     //permisssion denied
     cy.get('.full-height-flex-container > .ui',{timeout:8000})
     .should(this.assertBeVisible)

}

//ROLES

verify_permisssion_ROLES(){
    this.login_new();
    cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();
    
   
    cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_ROLES), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();
    cy.get(this.TestIDLocator(CypressTestIds.ROLES_LIST_TABLE), {timeout: 20_000})
     .should(this.assertBeVisible)

}

verify_revoke_permission_ROLES(){

    this.login_new();
    cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();
    
    //open BAData section
    cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_ROLES), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();
    
     //permisssion denied
     cy.get('.ui.big.floating.negative.message',{timeout: 20_000})
     .should('contain', 'Permission Denied')
     .and('contain', "You don't have permisson to enter in this area.");
}

//SCHEMA MODELS
verify_permisssion_SM(){


    this.login_new();
     //Open Schema Page
     cy.contains('Schema', {timeout: 8_000})
     .click();

    cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_LIST_TABLE), {timeout: 20_000})
     .should(this.assertBeVisible)

}

verify_revoke_permission_SM(){

   this.login_new();
     //Open Schema Page
     cy.contains('Schema', {timeout: 8_000})
     .click();
    
     //permisssion denied
     cy.get('.full-height-flex-container > .ui',{timeout:8000})
     .should(this.assertBeVisible)

}

//DATASET
verify_permisssion_DS(){

this.login_new();
//Open Schema Page
cy.contains('Schema', {timeout: 8_000})
.click();
cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_LIST_TABLE), {timeout: 20_000})
.should(this.assertBeVisible)
.find('tr:nth-child(2)')
.click()

//check dataset button
cy.get(this.TestIDLocator(CypressTestIds.DATASET_LIST_CREATE_NEW_DATASET_BUTTON), {timeout: 20_000})
.should(this.assertBeVisible)


}

verify_revoke_permission_DS(){

    this.login_new();
    
    cy.get('.ui.big.floating.negative.message',{timeout: 20_000})
    .should('contain', 'Permission Denied')
    .and('contain', "You don't have permisson to enter in this area.");

    cy.get('a img[src="/icons/header-menu/logout.png"]', {timeout: 8_000})
    .should(this.assertBeVisible)
     .click();
}


//DATA TAG
verify_permisssion_DT(){

    this.login_new();
    cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();
    
    
    cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_DATACLASSIFIERS), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();
    cy.get(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAGLIST_TABLE), {timeout: 20_000})
     .should(this.assertBeVisible)

}

verify_revoke_permission_DT(){
    
    
    this.login_new();
    cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();
    
    
    cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_DATACLASSIFIERS), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();
    
     //permisssion denied
    // cy.get('.full-height-flex-container > .ui',{timeout:8000})
    // .should(this.assertBeVisible)
    cy.get('.ui.big.floating.negative.message',{timeout: 20_000})
    .should('contain', 'Permission Denied')
    .and('contain', "You don't have permisson to enter in this area.");



}

//CREDENTIALS
verify_permisssion_CR(){

    this.login_new();
    cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();
    
 
    cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_CREDENTIALS), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();

    cy.get(this.TestIDLocator(CypressTestIds.APP_CLIENT_LIST_TABLE), {timeout: 20_000})
     .should(this.assertBeVisible)


}

verify_revoke_permission_CR(){

    this.login_new();
    cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();
    
 
    cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_CREDENTIALS), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();

     //permisssion denied
     cy.get('.ui.big.floating.negative.message',{timeout: 20_000})
   .should('contain', 'Permission Denied')
   .and('contain', "You don't have permisson to enter in this area.");

}

//system connections
verify_permisssion_SC(){

    this.login_new();
    cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();
    
 
    cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_SYSTEMCONNECTIONS), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();

    cy.get(this.TestIDLocator(CypressTestIds.SYSTEM_CONNECTION_LIST_TABLE), {timeout: 20_000})
     .should(this.assertBeVisible)


}

verify_revoke_permission_SC(){

    this.login_new();
    cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();
    
 
    cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_SYSTEMCONNECTIONS), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();

        //permisssion denied
     cy.get('.ui.big.floating.negative.message',{timeout: 20_000})
   .should('contain', 'Permission Denied')
   .and('contain', "You don't have permisson to enter in this area.");


}

verify_permisssion_SK(){

    this.login_new();
    cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();
    
 
    cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_SYSTEMKEYS), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();

    cy.get(this.TestIDLocator(CypressTestIds.SYSTEM_KEYS_LIST_TABLE), {timeout: 20_000})
     .should(this.assertBeVisible) 
}



verify_revoke_permission_SK(){
    
    this.login_new();
    cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();
    
 
    cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_SYSTEMKEYS), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();

     //permisssion denied
     cy.get('.ui.big.floating.negative.message',{timeout: 20_000})
     .should('contain', 'Permission Denied')
     .and('contain', "You don't have permisson to enter in this area.");


}

//CDCD

verify_permisssion_CDCD(){

    this.login_new();
    cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();
    
 
    cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_CHANGEDATACAPTURE), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();

    cy.get(this.TestIDLocator(CypressTestIds.CDC_LIST_TABLE), {timeout: 20_000})
     .should(this.assertBeVisible) 
}


verify_revoke_permission_CDCD(){


    this.login_new();
    cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();
    
 
    cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_CHANGEDATACAPTURE), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();

     //permisssion denied
     cy.get('.ui.big.floating.negative.message',{timeout: 20_000})
   .should('contain', 'Permission Denied')
   .and('contain', "You don't have permisson to enter in this area.");

}


}
