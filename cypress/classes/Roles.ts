import CypressTestIds from  "../classes/CypressTestIDs";
import { TestBase } from "./TestBase";
//import { LoginTest } from "./LoginTest";
import { BusinessAreaTest} from "./BusinessAreaTest";

//const objLoginTest: LoginTest = new LoginTest();
//const objtestbase:TestBase = new TestBase();
const objBAT: BusinessAreaTest = new BusinessAreaTest();

export class Roles extends TestBase{

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
    cy.get('.ant-table-body',{timeout:8_000})
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

uncheck__actions_View_active(rowNumber: number){
  
  this.open_Role();
  cy.get(this.TestIDLocator(CypressTestIds.ROLES_LIST_TABLE), {timeout: 8_000})
  .contains(this.strRoleName,{timeout:20_000})
  .parent(this.TR) 
  .find(this.TestIDLocator(CypressTestIds.ROLES_LIST_EDIT_BUTTON), { timeout: 8000 }) 
  .should(this.assertBeVisible)
  .click(); 

  //ROLES_PERMISSIONS_LIST_TABLE
  cy.get(this.TestIDLocator(CypressTestIds.ROLES_PERMISSIONS_LIST_TABLE), {timeout: 20_000})
  .find(`tr:nth-child(${rowNumber})`) 

  cy.get(this.TestIDLocator(CypressTestIds.ROLES_PERMISSIONS_LIST_ACTIVE_CHECK), {timeout: 8_000})
  .last()
  .uncheck();
  
  cy.get(this.TestIDLocator(CypressTestIds.ROLES_PERMISSIONS_LIST_CAN_VIEW_CHECK), {timeout: 8_000})
  .last()
  .uncheck();
 
  cy.get(this.TestIDLocator(CypressTestIds.ROLES_MANAGE_ROLE_SAVE_BUTTON), {timeout: 20_000})
  .should(this.assertBeVisible)
  .click() 

  cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
  .should(this.assertBeVisible )


}

check__actions_View_active(rowNumber: number){
  this.open_Role();
  cy.get(this.TestIDLocator(CypressTestIds.ROLES_LIST_TABLE), {timeout: 20_000})
  .contains(this.strRoleName,{timeout:20_000})
  .parent(this.TR) 
  .find(this.TestIDLocator(CypressTestIds.ROLES_LIST_EDIT_BUTTON), { timeout: 20000 }) 
  .should(this.assertBeVisible)
  .click(); 

  //ROLES_PERMISSIONS_LIST_TABLE
  cy.get(this.TestIDLocator(CypressTestIds.ROLES_PERMISSIONS_LIST_TABLE), {timeout: 20_000})
  .find(`tr:nth-child(${rowNumber})`) 

  cy.get(this.TestIDLocator(CypressTestIds.ROLES_PERMISSIONS_LIST_ACTIVE_CHECK), {timeout: 20_000})
  .last()
  .check();
  
  cy.get(this.TestIDLocator(CypressTestIds.ROLES_PERMISSIONS_LIST_CAN_VIEW_CHECK), {timeout: 20_000})
  .last()
  .check();
 
  cy.get(this.TestIDLocator(CypressTestIds.ROLES_MANAGE_ROLE_SAVE_BUTTON), {timeout: 20_000})
  .should(this.assertBeVisible)
  .click() 

  cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 20_000})
  .should(this.assertBeVisible )


}

UCA_Add_view_edit(rowNumber: number){
  this.open_Role();
  cy.get(this.TestIDLocator(CypressTestIds.ROLES_LIST_TABLE), {timeout: 8_000})
  .contains(this.strRoleName,{timeout:20_000})
  .parent(this.TR) 
  .find(this.TestIDLocator(CypressTestIds.ROLES_LIST_EDIT_BUTTON), { timeout: 8000 }) 
  .should(this.assertBeVisible)
  .click(); 

  //ROLES_PERMISSIONS_LIST_TABLE
  cy.get(this.TestIDLocator(CypressTestIds.ROLES_PERMISSIONS_LIST_TABLE), {timeout: 20_000})
  .find(`tr:nth-child(${rowNumber})`) 

 
  cy.get(this.TestIDLocator(CypressTestIds.ROLES_PERMISSIONS_LIST_CAN_ADD_CHECK), {timeout: 8_000})
  .last()
  .uncheck();  
  cy.get(this.TestIDLocator(CypressTestIds.ROLES_PERMISSIONS_LIST_CAN_EDIT_CHECK), {timeout: 8_000})
  .last()
  .uncheck();
  cy.get(this.TestIDLocator(CypressTestIds.ROLES_PERMISSIONS_LIST_CAN_DELETE_CHECK), {timeout: 8_000})
  .last()
  .uncheck();

  cy.get(this.TestIDLocator(CypressTestIds.ROLES_MANAGE_ROLE_SAVE_BUTTON), {timeout: 20_000})
  .should(this.assertBeVisible)
  .click()

  cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
  .should(this.assertBeVisible )


}

//delete_permission  
delete_permission(rowNumber: number){

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

}


//PERMISSION :BUISNESS AREA DATA
//verify Actions Enabled Business Area 
verify_Actions_Enabled_BA(){

//open configuration
cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
.should(this.assertBeVisible)
.click();

//Open Business Area
cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_BUSINESSAREAS), {timeout: 8_000})
.should(this.assertBeVisible)
.click();

//check add Business Area Button
cy.get(this.TestIDLocator(CypressTestIds.ADD_BUSINESS_AREA_BUTTON),{timeout: 8_000})  
.should('be.enabled') 

.then(($btn) => {
    
    cy.log('✅ The  add button is enabled as expected.');

})

//check edit BA button
cy.get('.ant-col-20 > .ui', {timeout: 8_000})
.should(this.assertBeVisible)
.find('tr:nth-child(2)') 
.find(this.TestIDLocator(CypressTestIds.EDIT_BUSINESS_AREA_BUTTON),{timeout: 20_000})  
.should(this.assertBeVisible)

    .should('not.have.class', 'disabled') // Ensure the icon does not have the 'disabled' class
    .should(($icon) => {
      // Check if the icon is clickable
      const pointerEvents = $icon.css('pointer-events');
      expect(pointerEvents).not.to.equal('none'); // Ensure pointer-events is not 'none'
    })
    .then(() => {
      cy.log('Icon is enabled'); // Log the message when the icon is enabled and clickable
    });




//check activate switch
cy.get('.ant-col-20 > .ui', {timeout: 8_000})
.should(this.assertBeVisible)
.find('tr:nth-child(2)') 
.find(this.TestIDLocator(CypressTestIds.ACTIVATE_BUSINESS_AREA_SWITCH),{timeout: 20_000})  
.should(this.assertBeVisible)

// Ensure the icon does not have the 'disabled' class
    .should('not.have.class', 'disabled') 
    .should(($icon) => {
      // Check if the icon is clickable
      const pointerEvents = $icon.css('pointer-events');
      expect(pointerEvents).not.to.equal('none');
    })
    .then(() => {
      cy.log('Icon is enabled'); // Log the message when the icon is enabled and clickable
    });

//check Delete BA button
cy.get('.ant-col-20 > .ui', {timeout: 8_000})
.should(this.assertBeVisible)
.find('tr:nth-child(2)') 
.find(this.TestIDLocator(CypressTestIds. DELETE_BUSINESS_AREA_BUTTON),{timeout: 20_000})
.should(this.assertBeVisible)

// Ensure the icon does not have the 'disabled' class
.should('not.have.class', 'disabled') 
.should(($icon) => {
  // Check if the icon is clickable
  const pointerEvents = $icon.css('pointer-events');
  expect(pointerEvents).not.to.equal('none');
})
.then(() => {
  cy.log('Icon is enabled'); // Log the message when the icon is enabled and clickable
});
    
}


BA_VA_View_Active(){

  this.login_new();
  //open configuration
  cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
  .should(this.assertBeVisible)
  .click();

  //open BAData section
  cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_BUSINESSAREAS), {timeout: 20_000})
  .should(this.assertBeVisible)
  .click();

  //permisssion denied
  cy.get('.full-height-flex-container > .ui',{timeout:8000})
  .should(this.assertBeVisible)


}



BA_VA_add_del_edit(){

    //open configuration
    cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();

    //Open Business Area 
    cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_BUSINESSAREAS), {timeout: 8_000})
    .should(this.assertBeVisible)
    .click();

    //check add Business Area Button
    cy.get(this.TestIDLocator(CypressTestIds.ADD_BUSINESS_AREA_BUTTON),{timeout: 8_000}) 
    .should('be.disabled') 
    .then(($btn) => {
        
        cy.log('✅ The  button is disabled as expected.');
    }) 
    

    //check edit BA button
    cy.get('.ant-col-20 > .ui', {timeout: 8_000})
    .should(this.assertBeVisible)
    .find('tr:nth-child(2)') 
    .find(this.TestIDLocator(CypressTestIds.EDIT_BUSINESS_AREA_BUTTON),{timeout: 20_000})

    .should('have.class', 'disabled') // Assert that the disabled class is present
      .and('contain.class', 'blue pencil'); 


    //check Delete BA button
    cy.get('.ant-col-20 > .ui', {timeout: 8_000})
    .should(this.assertBeVisible)
    .find('tr:nth-child(2)') 
    .find(this.TestIDLocator(CypressTestIds.DELETE_BUSINESS_AREA_USER_BUTTON),{timeout: 20_000})
    .should('have.class', 'disabled') // Verify the disabled class is present
      .and('contain.class', 'trash alternate outline');
    

}


//DEL BA 
BA_verify_delete_functionality(){

  this.BA_VA_View_Active();
  
}



//PERMISSION: BUSINESS AREA DATA

verify_actions_enabled_BAD(){
//open configuration
cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
.should(this.assertBeVisible)
.click();


//open BAData section
cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_BUSINESSAREADATA), {timeout: 20_000})
.should(this.assertBeVisible)
.click();

//add
cy.get(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_ADD_NEW_BUTTON), {timeout: 20_000})
.should('be.enabled') 

.then(($btn) => {
    
    cy.log('✅ The  add button is enabled as expected.');

})

//check edit BADATA button

cy.get(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_LIST_TABLE), {timeout: 20_000})
.should(this.assertBeVisible)
.find('tr:nth-child(2)') 
.find(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_LIST_EDIT_BUTTON),{timeout: 20_000})
   
    .should('be.visible') 
    .should('not.have.class', 'disabled') // Ensure the icon does not have the 'disabled' class
    .should(($icon) => {
      // Check if the icon is clickable
      const pointerEvents = $icon.css('pointer-events');
      expect(pointerEvents).not.to.equal('none'); // Ensure pointer-events is not 'none'
    })
    .then(() => {
      cy.log('Icon is enabled'); // Log the message when the icon is enabled and clickable
    });
  


    //check view 
    cy.get(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_LIST_TABLE), {timeout: 20_000})
    .should(this.assertBeVisible)
    .find('tr:nth-child(2)') 
    .find(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_LIST_VIEW_BUTTON),{timeout: 20_000})
    .should('be.visible') 
    .should('not.have.class', 'disabled') // Ensure the icon does not have the 'disabled' class
    .should(($icon) => {
      // Check if the icon is clickable
      const pointerEvents = $icon.css('pointer-events');
      expect(pointerEvents).not.to.equal('none'); // Ensure pointer-events is not 'none'
    })
    .then(() => {
      cy.log('Icon is enabled'); // Log the message when the icon is enabled and clickable
    });
  

      //check Delete BA button
      cy.get(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_LIST_TABLE), {timeout: 20_000})
      .should(this.assertBeVisible)
      .find('tr:nth-child(2)') 
      .find(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_LIST_DELETE_BUTTON),{timeout: 20_000})
      .should('be.visible') 

      .should('not.have.class', 'disabled') // Ensure the icon does not have the 'disabled' class
      .should(($icon) => {
        // Check if the icon is clickable
        const pointerEvents = $icon.css('pointer-events');
        expect(pointerEvents).not.to.equal('none'); // Ensure pointer-events is not 'none'
      })
      .then(() => {
        cy.log('Icon is enabled'); // Log the message when the icon is enabled and clickable
      });




}


BAD_VA_View_Active(){

    this.login_new();
    //open configuration
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

BAData_VA_add_del_edit(){

    this.login_new();
    //open configuration
    cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();

    //open BAData section
    cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_BUSINESSAREADATA), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();

   
    //check add Business Area data Button
    cy.get(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_ADD_NEW_BUTTON),{timeout: 20_000})  
    .should('be.disabled') 
    .then(($btn) => {
        
        cy.log('✅ The  button is disabled as expected.');
    })

    

    //check edit BA button
    cy.get(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_LIST_TABLE), {timeout: 20_000})
    .should(this.assertBeVisible)
    .find('tr:nth-child(2)') 
    .find(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_LIST_EDIT_BUTTON),{timeout: 20_000})
    .should('have.class', 'disabled') // Assert that the disabled class is present
      .and('contain.class', 'blue pencil'); 



    //check Delete BA button
    cy.get(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_LIST_TABLE), {timeout: 20_000})
    .should(this.assertBeVisible)
    .find('tr:nth-child(2)') 
    .find(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_LIST_DELETE_BUTTON),{timeout: 20_000})
    .should('have.class', 'disabled') // Verify the disabled class is present
      
    
    
}

BAdata_verify_del_per(){

  this.BAD_VA_View_Active();
    
}



//PERMISSION USERS
verify_actions_enabled_USERS(){

//open configuration
cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
.should(this.assertBeVisible)
.click();

//open users
cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_USERS), {timeout: 20_000})
.should(this.assertBeVisible)
.click();

//ADD
cy.get(this.TestIDLocator(CypressTestIds.USERS_ADD_USER_BUTTON), {timeout: 20_000})
.should('be.enabled') 
.then(($btn) => {
    
    cy.log('✅ The add button is enabled as expected.');
})


//check view 
cy.get(this.TestIDLocator(CypressTestIds.USERS_USERSLIST_TABLE), {timeout: 20_000})
.should(this.assertBeVisible)
.find('tr:nth-child(2)') 
.find(this.TestIDLocator(CypressTestIds.USERS_USERSLIST_VIEW_BUTTON),{timeout: 20_000})
.should('be.visible') 
.should('not.have.class', 'disabled') // Ensure the icon does not have the 'disabled' class
.should(($icon) => {
  // Check if the icon is clickable
  const pointerEvents = $icon.css('pointer-events');
  expect(pointerEvents).not.to.equal('none'); 
})
.then(() => {
  cy.log('Icon is enabled'); // Log the message when the icon is enabled and clickable
});



//check edit  button

cy.get(this.TestIDLocator(CypressTestIds.USERS_USERSLIST_TABLE), {timeout: 20_000})
.should(this.assertBeVisible)
.find('tr:nth-child(2)') 
.find(this.TestIDLocator(CypressTestIds.USERS_USERSLIST_EDIT_BUTTON),{timeout: 20_000})
.should('be.visible') 
.should('not.have.class', 'disabled') // Ensure the icon does not have the 'disabled' class
.should(($icon) => {
  // Check if the icon is clickable
  const pointerEvents = $icon.css('pointer-events');
  expect(pointerEvents).not.to.equal('none'); // Ensure pointer-events is not 'none'
})
.then(() => {
  cy.log('Icon is enabled'); // Log the message when the icon is enabled and clickable
});



//check Active

cy.get(this.TestIDLocator(CypressTestIds.USERS_USERSLIST_TABLE), {timeout: 20_000})
.should(this.assertBeVisible)
.find('tr:nth-child(2)') 
.find(this.TestIDLocator(CypressTestIds.USERS_USERSLIST_ACTIVE_SWITCH),{timeout: 20_000})
.should('be.visible') 
.should('not.have.class', 'disabled') // Ensure the icon does not have the 'disabled' class
.should(($icon) => {
  // Check if the icon is clickable
  const pointerEvents = $icon.css('pointer-events');
  expect(pointerEvents).not.to.equal('none'); // Ensure pointer-events is not 'none'
})
.then(() => {
  cy.log('Icon is enabled'); // Log the message when the icon is enabled and clickable
});

}

USERS_VA_View_Active(){
    this.login_new();
    //open configuration
    cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();

    //open users section
    cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_USERS), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();

   //permisssion denied
   cy.get('.ui.big.floating.negative.message',{timeout: 20_000})
   .should('contain', 'Permission Denied')
   .and('contain', "You don't have permisson to enter in this area.");


}

USERS_VA_add__edit(){

    this.login_new();
    //open configuration
    cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();

   //open users section
   cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_USERS), {timeout: 20_000})
   .should(this.assertBeVisible)
   .click();

   
    //check add Business Area Button
    cy.get(this.TestIDLocator(CypressTestIds.USERS_ADD_USER_BUTTON),{timeout: 20_000})  
    .should('be.disabled') 
    .then(($btn) => {
        
        cy.log('✅ The  button is disabled as expected.');
    })

    

    //check edit BA button
    cy.get(this.TestIDLocator(CypressTestIds.USERS_USERSLIST_TABLE), {timeout: 20_000})
    .should(this.assertBeVisible)
    .find('tr:nth-child(2)') 
    .find(this.TestIDLocator(CypressTestIds.USERS_USERSLIST_EDIT_BUTTON),{timeout: 20_000})
    .should('have.class', 'disabled') // Assert that the disabled class is present
      .and('contain.class', 'blue pencil')
      .then(($btn) => {
        
        cy.log('✅ The  button is disabled as expected.');
    })
    
}

USERS_verify_del_per(){

  this.USERS_VA_View_Active();
}

//ROLES
verify_actions_enabled_ROLES(){

//open configuration
cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
.should(this.assertBeVisible)
.click();

 //open Roles section 
 cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_ROLES), {timeout: 20_000})
 .should(this.assertBeVisible)
 .click();

//ADD
cy.get(this.TestIDLocator(CypressTestIds.ROLES_LIST_ADD_ROLE_BUTTON), {timeout: 20_000})
.should('be.enabled') 

.then(($btn) => {
    
    cy.log('✅ The add button is enabled as expected.');

})
//check edit  button

cy.get(this.TestIDLocator(CypressTestIds.ROLES_LIST_TABLE), {timeout: 20_000})
.should(this.assertBeVisible)
.find('tr:nth-child(4)') 
.find(this.TestIDLocator(CypressTestIds.ROLES_LIST_EDIT_BUTTON),{timeout: 20_000})
.should('be.visible') 
.should('not.have.class', 'disabled') // Ensure the icon does not have the 'disabled' class  
    .should('be.visible') 
    .should('not.have.class', 'disabled') // Ensure the icon does not have the 'disabled' class
    .should(($icon) => {
      // Check if the icon is clickable
      const pointerEvents = $icon.css('pointer-events');
      expect(pointerEvents).not.to.equal('none'); // Ensure pointer-events is not 'none'
    })
    .then(() => {
      cy.log('edit Icon is enabled and clickable'); 
    });


//check view 
cy.get(this.TestIDLocator(CypressTestIds.ROLES_LIST_TABLE), {timeout: 20_000})
.should(this.assertBeVisible)
.find('tr:nth-child(4)') 
.find(this.TestIDLocator(CypressTestIds.ROLES_LIST_VIEW_BUTTON), {timeout: 20_000})
.should(this.assertBeVisible)
 
    .should('be.visible') 
    .should('not.have.class', 'disabled') // Ensure the icon does not have the 'disabled' class
    .should(($icon) => {
      // Check if the icon is clickable
      const pointerEvents = $icon.css('pointer-events');
      expect(pointerEvents).not.to.equal('none'); // Ensure pointer-events is not 'none'
    })
    .then(() => {
      cy.log('view Icon is enabled and clickable'); 
    });

//check Active

cy.get(this.TestIDLocator(CypressTestIds.ROLES_LIST_TABLE), {timeout: 20_000})
.should(this.assertBeVisible)
.find('tr:nth-child(4)') 
.find(this.TestIDLocator(CypressTestIds.ROLES_LIST_ACTIVE_SWITCH),{timeout: 20_000})
.should('be.visible') 
.should('not.have.class', 'disabled') // Ensure the icon does not have the 'disabled' class
.should(($icon) => {
  // Check if the icon is clickable
  const pointerEvents = $icon.css('pointer-events');
  expect(pointerEvents).not.to.equal('none'); // Ensure pointer-events is not 'none'
})
.then(() => {
  cy.log('Icon is enabled'); // Log the message when the icon is enabled and clickable
});



//check Delete BA button
cy.get(this.TestIDLocator(CypressTestIds.ROLES_LIST_TABLE), {timeout: 20_000})
.should(this.assertBeVisible)
.find('tr:nth-child(4)') 
.find(this.TestIDLocator(CypressTestIds.ROLES_LIST_DELETE_BUTTON),{timeout: 20_000})
.should('be.visible') 
.should('not.have.class', 'disabled') // Ensure the icon does not have the 'disabled' class
.should(($icon) => {
  // Check if the icon is clickable
  const pointerEvents = $icon.css('pointer-events');
  expect(pointerEvents).not.to.equal('none'); // Ensure pointer-events is not 'none'
})
.then(() => {
  cy.log('Icon is enabled'); // Log the message when the icon is enabled and clickable
});

}

ROLES_VA_View_Active(){
   
    this.login_new();
    //open configuration
    cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();

    
    //open Roles section 
    cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_ROLES), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();

    //permisssion denied
    cy.get('.ui.big.floating.negative.message',{timeout: 20_000} )
    .should('contain', 'Permission Denied', {timeout: 20_000})
    .and('contain', "You don't have permisson to enter in this area.");
}


ROLES_VA_add__edit_del(){

    this.login_new();
    //open configuration
    cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();

    //open Roles section 
    cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_ROLES), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();

   
    //check add  Button
    cy.get(this.TestIDLocator(CypressTestIds.ROLES_LIST_ADD_ROLE_BUTTON),{timeout: 20_000})  
    .should('be.disabled') 
    .then(($btn) => {
        
        cy.log('✅ The  button is disabled as expected.');
    })

  

    //check edit 
    cy.get(this.TestIDLocator(CypressTestIds.ROLES_LIST_TABLE), {timeout: 20_000})
    .should(this.assertBeVisible)
    .find('tr:nth-child(4)') 
    .find(this.TestIDLocator(CypressTestIds.ROLES_LIST_EDIT_BUTTON),{timeout: 20_000})
    .should('have.class', 'disabled') // Assert that the disabled class is present
      .and('contain.class', 'blue pencil')
      .then(($btn) => {
        
        cy.log('✅ The  button is disabled as expected.');
    })



    //check Delete BA button
    cy.get(this.TestIDLocator(CypressTestIds.ROLES_LIST_TABLE), {timeout: 20_000})
    .should(this.assertBeVisible)
    .find('tr:nth-child(4)') 
    .find(this.TestIDLocator(CypressTestIds.ROLES_LIST_DELETE_BUTTON),{timeout: 20_000})
    .should('have.class', 'disabled') // Verify the disabled class is present
      
    
   
}

ROLES_verify_del_per(){

    this.ROLES_VA_View_Active();

}


//PERMISSION : SCHEMA MODELS
verify_actions_enabled_SCHEMA(){

 //Open Schema Page
 cy.contains('Schema', {timeout: 8_000})
 .click();

//create new schema button
cy.get(this.TestIDLocator(CypressTestIds.CREATE_NEW_SCHEMA_BUTTON), {timeout: 20_000})
.should('be.enabled')

.then(($btn) => {
    
    cy.log('✅ The  add button is enabled as expected.');

})

//check edit BADATA button

cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_LIST_TABLE), {timeout: 20_000})
.should(this.assertBeVisible)
.find('tr:nth-child(2)') 
.find(this.TestIDLocator(CypressTestIds.SCHEMA_LIST_EDIT_BUTTON),{timeout: 20_000})
   
    .should('be.visible') 
    .should('not.have.class', 'disabled') // Ensure the icon does not have the 'disabled' class
    .should(($icon) => {
      // Check if the icon is clickable
      const pointerEvents = $icon.css('pointer-events');
      expect(pointerEvents).not.to.equal('none'); // Ensure pointer-events is not 'none'
    })
    .then(() => {
      cy.log(' Edit Icon is enabled'); // Log the message when the icon is enabled and clickable
    });
  


//check view 
cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_LIST_TABLE), {timeout: 20_000})
.should(this.assertBeVisible)
.find('tr:nth-child(2)') 
.find(this.TestIDLocator(CypressTestIds.SCHEMA_LIST_VIEW_BUTTON),{timeout: 20_000})
.should('be.visible') 
    .should('not.have.class', 'disabled') // Ensure the icon does not have the 'disabled' class
    .should(($icon) => {
      // Check if the icon is clickable
      const pointerEvents = $icon.css('pointer-events');
      expect(pointerEvents).not.to.equal('none'); // Ensure pointer-events is not 'none'
    })
    .then(() => {
      cy.log('View Icon is enabled'); // Log the message when the icon is enabled and clickable
    });
  

//check Delete BA button
cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_LIST_TABLE), {timeout: 20_000})
.should(this.assertBeVisible)
.find('tr:nth-child(2)') 
.find(this.TestIDLocator(CypressTestIds.SCHEMA_LIST_DELETE_BUTTON),{timeout: 20_000})
.should('be.visible') 
    .should('not.have.class', 'disabled') // Ensure the icon does not have the 'disabled' class
    .should(($icon) => {
      // Check if the icon is clickable
      const pointerEvents = $icon.css('pointer-events');
      expect(pointerEvents).not.to.equal('none'); // Ensure pointer-events is not 'none'
    })
    .then(() => {
      cy.log('Delete Icon is enabled'); // Log the message when the icon is enabled and clickable
    });

}

SCHEMA_VA_View_Active(){
    this.login_new();
    
    //Open Schema Page
    cy.contains('Schema', {timeout: 8_000})
    .click();

    //permisssion denied
    cy.get('.ui.segment.full-height-flex-container .ui.big.floating.negative.message',{timeout:20000})
    .should(this.assertBeVisible)
   
}


SCHEMA_VA_add__edit_del(){
    this.login_new();
   

    //Open Schema Page
    cy.contains('Schema', {timeout: 8_000})
    .click();

    //create new schema button
    cy.get(this.TestIDLocator(CypressTestIds.CREATE_NEW_SCHEMA_BUTTON),{timeout: 20_000})  
    .should('be.disabled') 
    .then(($btn) => {
        
        cy.log('✅ The  button is disabled as expected.');
    })

    

    //check edit BA button
    cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_LIST_TABLE), {timeout: 20_000})
    .should(this.assertBeVisible)
    .find('tr:nth-child(2)') 
    .find(this.TestIDLocator(CypressTestIds.SCHEMA_LIST_EDIT_BUTTON),{timeout: 20_000})
    .should('have.class', 'disabled') // Assert that the disabled class is present
      .and('contain.class', 'blue pencil'); 



    //check Delete BA button
    cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_LIST_TABLE), {timeout: 20_000})
    .should(this.assertBeVisible)
    .find('tr:nth-child(2)') 
    .find(this.TestIDLocator(CypressTestIds.SCHEMA_LIST_DELETE_BUTTON),{timeout: 20_000})
    .should('have.class', 'disabled') // Verify the disabled class is present
      

}


SCHEMA_verify_del_per(){
    this.SCHEMA_VA_View_Active();
    

}



//PERMISSION: DATASETS
verify_actions_enabled_DS(){

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

//check edit  button

cy.get(this.TestIDLocator(CypressTestIds.DATASET_LIST_TABLE), {timeout: 20_000})
.should(this.assertBeVisible)
.find('tr:nth-child(2)') 
.find(this.TestIDLocator(CypressTestIds.DATASET_LIST_EDIT_BUTTON),{timeout: 20_000})
  
   .should('be.visible') 
   .should('not.have.class', 'disabled') // Ensure the icon does not have the 'disabled' class
   .should(($icon) => {
     // Check if the icon is clickable
     const pointerEvents = $icon.css('pointer-events');
     expect(pointerEvents).not.to.equal('none'); // Ensure pointer-events is not 'none'
   })
   .then(() => {
     cy.log(' Edit Icon is enabled and clickable '); 
   });
 


//check view 
cy.get(this.TestIDLocator(CypressTestIds.DATASET_LIST_TABLE), {timeout: 20_000})
.should(this.assertBeVisible)
.find('tr:nth-child(2)') 
.find(this.TestIDLocator(CypressTestIds.DATASET_LIST_VIEW_BUTTON),{timeout: 20_000})
.should('be.visible') 
   .should('not.have.class', 'disabled') // Ensure the icon does not have the 'disabled' class
   .should(($icon) => {
     // Check if the icon is clickable
     const pointerEvents = $icon.css('pointer-events');
     expect(pointerEvents).not.to.equal('none'); // Ensure pointer-events is not 'none'
   })
   .then(() => {
     cy.log('View Icon is enabledand clickable'); 
   });
 

//check Delete BA button
cy.get(this.TestIDLocator(CypressTestIds.DATASET_LIST_TABLE), {timeout: 20_000})
.should(this.assertBeVisible)
.find('tr:nth-child(2)') 
.find(this.TestIDLocator(CypressTestIds.DATASET_LIST_DELETE_BUTTON),{timeout: 20_000})
.should('be.visible') 
   .should('not.have.class', 'disabled') // Ensure the icon does not have the 'disabled' class
   .should(($icon) => {
     // Check if the icon is clickable
     const pointerEvents = $icon.css('pointer-events');
     expect(pointerEvents).not.to.equal('none'); // Ensure pointer-events is not 'none'
   })
   .then(() => {
     cy.log('Delete Icon is enabled and clickable'); 
   });

}

 
DS_VA_View_Active(){
 
  this.login_new();
 
  //permission denied
  cy.get('.ui.big.floating.negative.message')
  .should('contain', 'Permission Denied')
  .and('contain', "You don't have permisson to enter in this area.");


}

DS_VA_add__edit_del(){

  this.login_new();
  //Open Schema Page
  cy.contains('Schema', {timeout: 8_000})
  .click();

  cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_LIST_TABLE), {timeout: 20_000})
  .should(this.assertBeVisible)
  .find('tr:nth-child(2)')
  .click()

  //create new schema button
  cy.get(this.TestIDLocator(CypressTestIds.DATASET_LIST_CREATE_NEW_DATASET_BUTTON),{timeout: 20_000})  
  .should('be.disabled') 
  .then(($btn) => {
      
      cy.log('✅ The  button is disabled as expected.');
  })

  

  //check edit BA button
  cy.get(this.TestIDLocator(CypressTestIds.DATASET_LIST_TABLE), {timeout: 20_000})
  .should(this.assertBeVisible)
  .find('tr:nth-child(2)') 
  .find(this.TestIDLocator(CypressTestIds.DATASET_LIST_EDIT_BUTTON),{timeout: 20_000})
  .should('have.class', 'disabled') // Assert that the disabled class is present
    .and('contain.class', 'blue pencil'); 



  //check Delete BA button
  cy.get(this.TestIDLocator(CypressTestIds.DATASET_LIST_TABLE), {timeout: 20_000})
  .should(this.assertBeVisible)
  .find('tr:nth-child(2)') 
  .find(this.TestIDLocator(CypressTestIds.DATASET_LIST_DELETE_BUTTON),{timeout: 20_000})
  .should('have.class', 'disabled') // Verify the disabled class is present


}
//delete dataset verification 
DS_verify_del_per(){

  this.DS_VA_View_Active();
    

}


//*********  PERMISSION: DataTags **********************/
verify_actions_enabled_DT(){

//open configuration
cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
.should(this.assertBeVisible)
.click();


//open Datatags section
cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_DATACLASSIFIERS), {timeout: 20_000})
.should(this.assertBeVisible)
.click();

//add
cy.get(this.TestIDLocator(CypressTestIds.DATATAGS_ADD_DATATAG_BUTTON), {timeout: 20_000})
.should('be.enabled') 

.then(($btn) => {
    
    cy.log('✅ The  add button is enabled as expected.');

})

//check Edit 

cy.get(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAGLIST_TABLE), {timeout: 20_000})
.should(this.assertBeVisible)
.find('tr:nth-child(2)') 
.find(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAGLIST_EDIT_BUTTON),{timeout: 20_000})
   
    .should('be.visible') 
    .should('not.have.class', 'disabled') // Ensure the icon does not have the 'disabled' class
    .should(($icon) => {
      // Check if the icon is clickable
      const pointerEvents = $icon.css('pointer-events');
      expect(pointerEvents).not.to.equal('none'); // Ensure pointer-events is not 'none'
    })
    .then(() => {
      cy.log('Icon is enabled'); // Log the message when the icon is enabled and clickable
    });
  


//check view 
cy.get(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAGLIST_TABLE), {timeout: 20_000})
.should(this.assertBeVisible)
.find('tr:nth-child(2)') 
.find(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAGLIST_VIEW_BUTTON),{timeout: 20_000})
.should('be.visible') 
    .should('not.have.class', 'disabled') // Ensure the icon does not have the 'disabled' class
    .should(($icon) => {
      // Check if the icon is clickable
      const pointerEvents = $icon.css('pointer-events');
      expect(pointerEvents).not.to.equal('none'); // Ensure pointer-events is not 'none'
    })
    .then(() => {
      cy.log('Icon is enabled'); // Log the message when the icon is enabled and clickable
    });
  

//check Delete BA button
cy.get(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAGLIST_TABLE), {timeout: 20_000})
.should(this.assertBeVisible)
.find('tr:nth-child(2)') 
.find(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAGLIST_DELETE_BUTTON),{timeout: 20_000})
.should('be.visible') 
    .should('not.have.class', 'disabled') // Ensure the icon does not have the 'disabled' class
    .should(($icon) => {
      // Check if the icon is clickable
      const pointerEvents = $icon.css('pointer-events');
      expect(pointerEvents).not.to.equal('none'); // Ensure pointer-events is not 'none'
    })
    .then(() => {
      cy.log('Icon is enabled'); // Log the message when the icon is enabled and clickable
    });

}

//
DT_VA_View_Active(){

  this.login_new();
    //open configuration
cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
.should(this.assertBeVisible)
.click();


//open Datatags section
cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_DATACLASSIFIERS), {timeout: 20_000})
.should(this.assertBeVisible)
.click();

 cy.get('.ui.big.floating.negative.message')
.should('contain', 'Permission Denied')
.and('contain', "You don't have permisson to enter in this area.");

}


DT_VA_add__edit_del(){

    this.login_new();
    //open configuration
    cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();

   //open Datatags
   cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_DATACLASSIFIERS), {timeout: 20_000})
   .should(this.assertBeVisible)
   .click();
   
    //check add 
    cy.get(this.TestIDLocator(CypressTestIds.DATATAGS_ADD_DATATAG_BUTTON),{timeout: 20_000})  
    .should('be.disabled') 
    .then(($btn) => {
        
        cy.log('✅ The  button is disabled as expected.');
    })

    

    //check edit BA button
    cy.get(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAGLIST_TABLE), {timeout: 20_000})
    .should(this.assertBeVisible)
    .find('tr:nth-child(2)') 
    .find(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAGLIST_EDIT_BUTTON),{timeout: 20_000})
    .should('have.class', 'disabled') // Assert that the disabled class is present
      .and('contain.class', 'blue pencil')
      .then(($btn) => {
        
        cy.log('✅ The  button is disabled as expected.');
    })
    
 //check DELETE 
 cy.get(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAGLIST_TABLE), {timeout: 20_000})
 .should(this.assertBeVisible)
 .find('tr:nth-child(2)') 
    .find(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAGLIST_EDIT_BUTTON),{timeout: 20_000})
    .should('have.class', 'disabled') // Verify the disabled class is present
      
    
}

//DELETE permission verification
DT_verify_del_per(){

  this.DT_VA_View_Active()  

}


//PERMISSION: DATASET OBJECTS SEARCH

verify_actions_enabled_DSOS(){

//open search
cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_SEARCH), {timeout: 20_000})
.should(this.assertBeVisible)
.click();

// view 
cy.wait(5000)
cy.get('#data-object-search-form_query',{timeout: 20_000})
.should(this.assertBeVisible)

// check active
cy.get('.ant-space-compact > .ant-btn',{timeout: 20_000})
.should(this.assertBeVisible)
.should('be.enabled') 
.then(($btn) => {
    
    cy.log('✅ The  search button is enabled as expected.');

})

}

//verify action view and active disbaled
DSOS_VA_View_Active(){
 
  this.login_new();
  cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_SEARCH), {timeout: 20_000})
.should(this.assertBeVisible)
.click();

//permission denied
cy.get('.ui.big.floating.negative.message',{timeout:8_000})
.should('contain', 'Permission Denied')
.and('contain', "You don't have permisson to enter in this area.");

}

//delete permission
DSOS_verify_del_per(){

this.DSOS_VA_View_Active();

}

//CREDENTIALS
verify_actions_enabled_CR(){

  //open configuration
  cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
  .should(this.assertBeVisible)
  .click();
  
  
  //open Credentials section 
  cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_CREDENTIALS), {timeout: 20_000})
  .should(this.assertBeVisible)
  .click();
  
  //ADD
  cy.get('[data-testid="app-client-list-add-button"]', {timeout: 20_000})
  .should('be.enabled') 
  
  .then(($btn) => {
      
      cy.log('✅ The add button is enabled as expected.');
  
  })
  //check edit  button
  cy.get('.ant-col-20 > .ui', {timeout: 20_000})
  .should(this.assertBeVisible)
  .find('tr:nth-child(2)') 
  .find(' [data-testid="app-client-list-edit-button"]', {timeout: 20_000})
  .should(this.assertBeVisible)

  .should('not.have.class', 'disabled') // Ensure the icon does not have the 'disabled' class  
  .should(this.assertBeVisible)
      .should('not.have.class', 'disabled') // Ensure the icon does not have the 'disabled' class
      .should(($icon) => {
        // Check if the icon is clickable
        const pointerEvents = $icon.css('pointer-events');
        expect(pointerEvents).not.to.equal('none'); // Ensure pointer-events is not 'none'
      })
      .then(() => {
        cy.log(' Edit Icon is enabled and clickable'); 
      });
  
  
  //check view 
  cy.get('.ant-col-20 > .ui', {timeout: 20_000})
  .should(this.assertBeVisible)
  .find('tr:nth-child(2)') 
  .find(' [data-testid="app-client-list-view-button"]', {timeout: 20_000})
  .should(this.assertBeVisible)
   
      .should('not.have.class', 'disabled') // Ensure the icon does not have the 'disabled' class
      .should(($icon) => {
        // Check if the icon is clickable
        const pointerEvents = $icon.css('pointer-events');
        expect(pointerEvents).not.to.equal('none'); // Ensure pointer-events is not 'none'
      })
      .then(() => {
        cy.log(' View Icon is enabled and clickable'); 
      });
  
  //check Active
  
  cy.get('.ant-col-20 > .ui', {timeout: 20_000})
  .should(this.assertBeVisible)
  .find('tr:nth-child(2)') 
  .find('[data-testid="app-client-list-active-switch"]',{timeout: 20_000})
  .should('not.have.class', 'disabled') // Ensure the icon does not have the 'disabled' class
  .should(($icon) => {
    // Check if the icon is clickable
    const pointerEvents = $icon.css('pointer-events');
    expect(pointerEvents).not.to.equal('none'); // Ensure pointer-events is not 'none'
  })
  .then(() => {
    cy.log('Icon is enabled'); // Log the message when the icon is enabled and clickable
  });
  
  
  
  //check Delete BA button
  cy.get('.ant-col-20 > .ui', {timeout: 20_000})
  .should(this.assertBeVisible)
  .find('tr:nth-child(2)') 
  .find(' [data-testid="app-client-list-delete-button"]', {timeout: 20_000})
  .should(this.assertBeVisible)

  .should('not.have.class', 'disabled') // Ensure the icon does not have the 'disabled' class
  .should(($icon) => {
    // Check if the icon is clickable
    const pointerEvents = $icon.css('pointer-events');
    expect(pointerEvents).not.to.equal('none'); // Ensure pointer-events is not 'none'
  })
  .then(() => {
    cy.log('Icon is enabled'); // Log the message when the icon is enabled and clickable
  });

}

CR_VA_View_Active(){

  this.login_new();
//open configuration
cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
.should(this.assertBeVisible)
.click();


//open Credentials section 
cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_CREDENTIALS), {timeout: 20_000})
.should(this.assertBeVisible)
.click();

cy.get('.ui.big.floating.negative.message',{timeout:20_000})
.should('contain', 'Permission Denied')
.and('contain', "You don't have permisson to enter in this area.");


}


CR_VA_add__edit_del(){

  this.login_new();
  //open configuration
  cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
  .should(this.assertBeVisible)
  .click();

 //open Datatags
 cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_CREDENTIALS), {timeout: 20_000})
 .should(this.assertBeVisible)
 .click();
 
  // add button
  cy.get('[data-testid="app-client-list-add-button"]', {timeout: 20_000}) 
  .should('be.disabled') 
  .then(($btn) => {
      
      cy.log('✅ The  button is disabled as expected.');
  })

  

  //check edit BA button
  cy.get('.ant-col-20 > .ui', {timeout: 20_000})
  .should(this.assertBeVisible)
  .find('tr:nth-child(2)') 
  .find(' [data-testid="app-client-list-edit-button"]', {timeout: 20_000})
  .should(this.assertBeVisible)

  .should('have.class', 'disabled') // Assert that the disabled class is present
    .and('contain.class', 'blue pencil')
    .then(($btn) => {
      
      cy.log('✅ The  button is disabled as expected.');
  })
  
//check DELETE 
  //check Delete BA button
  cy.get('.ant-col-20 > .ui', {timeout: 20_000})
  .should(this.assertBeVisible)
  .find('tr:nth-child(2)') 
  .find(' [data-testid="app-client-list-delete-button"]', {timeout: 20_000})
  .should(this.assertBeVisible)

  .should('have.class', 'disabled') // Verify the disabled class is present
   


}


CR_verify_del_per(){

this.CR_VA_View_Active();


}


//SYSTEM CONNECTIONS
verify_actions_enabled_SC(){

//open configuration
cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
.should(this.assertBeVisible)
.click();


//open system connections
cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_SYSTEMCONNECTIONS), {timeout: 20_000})
.should(this.assertBeVisible)
.click();

//add
cy.get(this.TestIDLocator(CypressTestIds.SYSTEM_CONNECTION_LIST_ADD_BUTTON), {timeout: 20_000})
.should('be.enabled') 

.then(($btn) => {
    
    cy.log('✅ The  add button is enabled as expected.');

})

//check edit 

cy.get(this.TestIDLocator(CypressTestIds.SYSTEM_CONNECTION_LIST_TABLE), {timeout: 20_000})
.should(this.assertBeVisible)
.find('tr:nth-child(2)') 
.find(this.TestIDLocator(CypressTestIds.SYSTEM_CONNECTION_LIST_EDIT_BUTTON),{timeout: 20_000})
   
    .should('be.visible') 
    .should('not.have.class', 'disabled') // Ensure the icon does not have the 'disabled' class
    .should(($icon) => {
      // Check if the icon is clickable
      const pointerEvents = $icon.css('pointer-events');
      expect(pointerEvents).not.to.equal('none'); // Ensure pointer-events is not 'none'
    })
    .then(() => {
      cy.log('Icon is enabled'); // Log the message when the icon is enabled and clickable
    });
  


//check view 
cy.get(this.TestIDLocator(CypressTestIds.SYSTEM_CONNECTION_LIST_TABLE), {timeout: 20_000})
.should(this.assertBeVisible)
.find('tr:nth-child(2)') 
.find(this.TestIDLocator(CypressTestIds.SYSTEM_CONNECTION_LIST_VIEW_BUTTON),{timeout: 20_000})
.should('be.visible') 
    .should('not.have.class', 'disabled') // Ensure the icon does not have the 'disabled' class
    .should(($icon) => {
      // Check if the icon is clickable
      const pointerEvents = $icon.css('pointer-events');
      expect(pointerEvents).not.to.equal('none'); // Ensure pointer-events is not 'none'
    })
    .then(() => {
      cy.log('Icon is enabled'); // Log the message when the icon is enabled and clickable
    });
  

//check Delete 
cy.get(this.TestIDLocator(CypressTestIds.SYSTEM_CONNECTION_LIST_TABLE), {timeout: 20_000})
.should(this.assertBeVisible)
.find('tr:nth-child(2)') 
.find(this.TestIDLocator(CypressTestIds.SYSTEM_CONNECTION_LIST_DELETE_BUTTON),{timeout: 20_000})
.should('be.visible') 
    .should('not.have.class', 'disabled') // Ensure the icon does not have the 'disabled' class
    .should(($icon) => {
      // Check if the icon is clickable
      const pointerEvents = $icon.css('pointer-events');
      expect(pointerEvents).not.to.equal('none'); // Ensure pointer-events is not 'none'
    })
    .then(() => {
      cy.log('Icon is enabled'); // Log the message when the icon is enabled and clickable
    });

    //check ACTIVE
cy.get(this.TestIDLocator(CypressTestIds.SYSTEM_CONNECTION_LIST_TABLE), {timeout: 20_000})
.should(this.assertBeVisible)
.find('tr:nth-child(2)') 
.find(this.TestIDLocator(CypressTestIds.SYSTEM_CONNECTION_LIST_ACTIVE_SWITCH),{timeout: 20_000})
.should('be.visible') 
    .should('not.have.class', 'disabled') // Ensure the icon does not have the 'disabled' class
    .should(($icon) => {
      // Check if the icon is clickable
      const pointerEvents = $icon.css('pointer-events');
      expect(pointerEvents).not.to.equal('none'); // Ensure pointer-events is not 'none'
    })
    .then(() => {
      cy.log('Icon is enabled'); // Log the message when the icon is enabled and clickable
    });



}

SC_VA_View_Active(){

  this.login_new();
  //open configuration
  cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
  .should(this.assertBeVisible)
  .click();
  
  
  //open Credentials section 
  cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_SYSTEMCONNECTIONS), {timeout: 20_000})
  .should(this.assertBeVisible)
  .click();
  
  cy.get('.ui.big.floating.negative.message',{timeout:8_000})
  .should('contain', 'Permission Denied')
  .and('contain', "You don't have permisson to enter in this area.");




}
SC_VA_add__edit_del(){

  this.login_new();
  //open configuration
  cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
  .should(this.assertBeVisible)
  .click();

 //open SYSTEM CONNCETIONS
 cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_SYSTEMCONNECTIONS), {timeout: 20_000})
 .should(this.assertBeVisible)
 .click();
 
  //check add 
  cy.get(this.TestIDLocator(CypressTestIds.SYSTEM_CONNECTION_LIST_ADD_BUTTON),{timeout: 20_000})  
  .should('be.disabled') 
  .then(($btn) => {
      
      cy.log('✅ The  button is disabled as expected.');
  })

  

  //check edit BA button
  cy.get(this.TestIDLocator(CypressTestIds.SYSTEM_CONNECTION_LIST_TABLE), {timeout: 20_000})
  .should(this.assertBeVisible)
  .find('tr:nth-child(2)') 
  .find(this.TestIDLocator(CypressTestIds.SYSTEM_CONNECTION_LIST_EDIT_BUTTON),{timeout: 20_000})
  .should('have.class', 'disabled') // Assert that the disabled class is present
    .and('contain.class', 'blue pencil')
    .then(($btn) => {
      
      cy.log('✅ The  button is disabled as expected.');
  })
  
//check DELETE 
cy.get(this.TestIDLocator(CypressTestIds.SYSTEM_CONNECTION_LIST_TABLE), {timeout: 20_000})
.should(this.assertBeVisible)
.find('tr:nth-child(2)') 
  .find(this.TestIDLocator(CypressTestIds.SYSTEM_CONNECTION_LIST_DELETE_BUTTON),{timeout: 20_000})
  .should('have.class', 'disabled') // Verify the disabled class is present
    

}


SC_verify_del_per(){

  this.SC_VA_View_Active();
    
}

//SYSTEM KEYS
verify_actions_enabled_SK(){

//open configuration
cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
.should(this.assertBeVisible)
.click();


//open system connections
cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_SYSTEMKEYS), {timeout: 20_000})
.should(this.assertBeVisible)
.click();

//add
cy.get(this.TestIDLocator(CypressTestIds.SYSTEM_KEYS_LIST_ADD_BUTTON), {timeout: 20_000})
.should('be.enabled') 

.then(($btn) => {
    
    cy.log('✅ The  add button is enabled as expected.');

})

//check edit 

cy.get(this.TestIDLocator(CypressTestIds.SYSTEM_KEYS_LIST_TABLE), {timeout: 20_000})
.should(this.assertBeVisible)
.find('tr:nth-child(2)') 
.find(this.TestIDLocator(CypressTestIds.SYSTEM_KEYS_LIST_EDIT_BUTTON),{timeout: 20_000})
   
    .should('be.visible') 
    .should('not.have.class', 'disabled') // Ensure the icon does not have the 'disabled' class
    .should(($icon) => {
      // Check if the icon is clickable
      const pointerEvents = $icon.css('pointer-events');
      expect(pointerEvents).not.to.equal('none'); // Ensure pointer-events is not 'none'
    })
    .then(() => {
      cy.log('Icon is enabled'); // Log the message when the icon is enabled and clickable
    });
  


//check view 
cy.get(this.TestIDLocator(CypressTestIds.SYSTEM_KEYS_LIST_TABLE), {timeout: 20_000})
.should(this.assertBeVisible)
.find('tr:nth-child(2)') 
.find(this.TestIDLocator(CypressTestIds.SYSTEM_KEYS_LIST_VIEW_BUTTON),{timeout: 20_000})
.should('be.visible') 
    .should('not.have.class', 'disabled') // Ensure the icon does not have the 'disabled' class
    .should(($icon) => {
      // Check if the icon is clickable
      const pointerEvents = $icon.css('pointer-events');
      expect(pointerEvents).not.to.equal('none'); // Ensure pointer-events is not 'none'
    })
    .then(() => {
      cy.log('Icon is enabled'); // Log the message when the icon is enabled and clickable
    });
  

//check Delete 
cy.get(this.TestIDLocator(CypressTestIds.SYSTEM_KEYS_LIST_TABLE), {timeout: 20_000})
.should(this.assertBeVisible)
.find('tr:nth-child(2)') 
.find(this.TestIDLocator(CypressTestIds.SYSTEM_KEYS_LIST_DELETE_BUTTON),{timeout: 20_000})
.should('be.visible') 
    .should('not.have.class', 'disabled') // Ensure the icon does not have the 'disabled' class
    .should(($icon) => {
      // Check if the icon is clickable
      const pointerEvents = $icon.css('pointer-events');
      expect(pointerEvents).not.to.equal('none'); // Ensure pointer-events is not 'none'
    })
    .then(() => {
      cy.log('Icon is enabled'); // Log the message when the icon is enabled and clickable
    });

}


SK_VA_View_Active(){

  this.login_new();
  //open configuration
  cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
  .should(this.assertBeVisible)
  .click();
  
  
  //open systrm keys
  cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_SYSTEMKEYS), {timeout: 20_000})
  .should(this.assertBeVisible)
  .click();
  
  cy.get('.ui.big.floating.negative.message',{timeout:8_000})
  .should('contain', 'Permission Denied')
  .and('contain', "You don't have permisson to enter in this area.");



}

SK_VA_add__edit_del(){
  this.login_new();
  //open configuration
  cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
  .should(this.assertBeVisible)
  .click();

 //open SYSTEM keys
 cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_SYSTEMKEYS), {timeout: 20_000})
 .should(this.assertBeVisible)
 .click();
 
  //check add 
  cy.get(this.TestIDLocator(CypressTestIds.SYSTEM_KEYS_LIST_ADD_BUTTON),{timeout: 20_000})  
  .should('be.disabled') 
  .then(($btn) => {
      
      cy.log('✅ The  button is disabled as expected.');
  })

  

  //check edit BA button
  cy.get(this.TestIDLocator(CypressTestIds.SYSTEM_KEYS_LIST_TABLE), {timeout: 20_000})
  .should(this.assertBeVisible)
  .find('tr:nth-child(2)') 
  .find(this.TestIDLocator(CypressTestIds.SYSTEM_KEYS_LIST_EDIT_BUTTON),{timeout: 20_000})
  .should('have.class', 'disabled') // Assert that the disabled class is present
    .and('contain.class', 'blue pencil')
    .then(($btn) => {
      
      cy.log('✅ The  button is disabled as expected.');
  })
  
//check DELETE 
  cy.get(this.TestIDLocator(CypressTestIds.SYSTEM_KEYS_LIST_TABLE), {timeout: 20_000})
  .should(this.assertBeVisible)
  .find('tr:nth-child(2)') 
  .find(this.TestIDLocator(CypressTestIds.SYSTEM_KEYS_LIST_DELETE_BUTTON),{timeout: 20_000})
  .should('have.class', 'disabled') // Verify the disabled class is present



}

SK_verify_del_per(){

this.SK_VA_View_Active();


}


//CDC Destinations
verify_actions_enabled_CDCDs(){
//open configuration
cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
.should(this.assertBeVisible)
.click();


//open CDCDs
cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_CHANGEDATACAPTURE), {timeout: 20_000})
.should(this.assertBeVisible)
.click();

//add
cy.get(this.TestIDLocator(CypressTestIds.CDC_LIST_ADD_BUTTON), {timeout: 20_000})
.should('be.enabled') 

.then(($btn) => {
    
    cy.log('✅ The  add button is enabled as expected.');

})

//check edit 

cy.get(this.TestIDLocator(CypressTestIds.CDC_LIST_TABLE), {timeout: 20_000})
.should(this.assertBeVisible)
.find('tr:nth-child(2)') 
.find(this.TestIDLocator(CypressTestIds.CDC_LIST_EDIT_BUTTON),{timeout: 20_000})
   
    .should('be.visible') 
    .should('not.have.class', 'disabled') // Ensure the icon does not have the 'disabled' class
    .should(($icon) => {
      // Check if the icon is clickable
      const pointerEvents = $icon.css('pointer-events');
      expect(pointerEvents).not.to.equal('none'); // Ensure pointer-events is not 'none'
    })
    .then(() => {
      cy.log('Icon is enabled'); // Log the message when the icon is enabled and clickable
    });
  


//check view 
cy.get(this.TestIDLocator(CypressTestIds.CDC_LIST_TABLE), {timeout: 20_000})
.should(this.assertBeVisible)
.find('tr:nth-child(2)') 
.find(this.TestIDLocator(CypressTestIds.CDC_LIST_VIEW_BUTTON),{timeout: 20_000})
.should('be.visible') 
    .should('not.have.class', 'disabled') // Ensure the icon does not have the 'disabled' class
    .should(($icon) => {
      // Check if the icon is clickable
      const pointerEvents = $icon.css('pointer-events');
      expect(pointerEvents).not.to.equal('none'); // Ensure pointer-events is not 'none'
    })
    .then(() => {
      cy.log('Icon is enabled'); // Log the message when the icon is enabled and clickable
    });
  

//check Delete 
cy.get(this.TestIDLocator(CypressTestIds.CDC_LIST_TABLE), {timeout: 20_000})
.should(this.assertBeVisible)
.find('tr:nth-child(2)') 
.find(this.TestIDLocator(CypressTestIds.CDC_LIST_DELETE_BUTTON),{timeout: 20_000})
.should('be.visible') 
    .should('not.have.class', 'disabled') // Ensure the icon does not have the 'disabled' class
    .should(($icon) => {
      // Check if the icon is clickable
      const pointerEvents = $icon.css('pointer-events');
      expect(pointerEvents).not.to.equal('none'); // Ensure pointer-events is not 'none'
    })
    .then(() => {
      cy.log('Icon is enabled'); // Log the message when the icon is enabled and clickable
    });

    //check ACTIVE
cy.get(this.TestIDLocator(CypressTestIds.CDC_LIST_TABLE), {timeout: 20_000})
.should(this.assertBeVisible)
.find('tr:nth-child(2)') 
.find(this.TestIDLocator(CypressTestIds.CDC_LIST_ACTIVE_SWITCH),{timeout: 20_000})
.should('be.visible') 
    .should('not.have.class', 'disabled') // Ensure the icon does not have the 'disabled' class
    .should(($icon) => {
      // Check if the icon is clickable
      const pointerEvents = $icon.css('pointer-events');
      expect(pointerEvents).not.to.equal('none'); // Ensure pointer-events is not 'none'
    })
    .then(() => {
      cy.log('Icon is enabled'); // Log the message when the icon is enabled and clickable
    });

}

CDCDs_VA_View_Active(){
  this.login_new();
  //open configuration
  cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
  .should(this.assertBeVisible)
  .click();
  
  
  //open CDCDs
  cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_CHANGEDATACAPTURE), {timeout: 20_000})
  .should(this.assertBeVisible)
  .click();
  
  cy.get('.ui.big.floating.negative.message',{timeout:8_000})
  .should('contain', 'Permission Denied')
  .and('contain', "You don't have permisson to enter in this area.");

}

CDCDs_VA_add__edit_del(){
  this.login_new();
  //open configuration
  cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
  .should(this.assertBeVisible)
  .click();

 //open SYSTEM CONNCETIONS
 cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_CHANGEDATACAPTURE), {timeout: 20_000})
 .should(this.assertBeVisible)
 .click();
 
  //check add 
  cy.get(this.TestIDLocator(CypressTestIds.CDC_LIST_ADD_BUTTON),{timeout: 20_000})  
  .should('be.disabled') 
  .then(($btn) => {
      
      cy.log('✅ The  button is disabled as expected.');
  })

  

  //check edit BA button
  cy.get(this.TestIDLocator(CypressTestIds.CDC_LIST_TABLE), {timeout: 20_000})
  .should(this.assertBeVisible)
  .find('tr:nth-child(2)') 
  .find(this.TestIDLocator(CypressTestIds.CDC_LIST_EDIT_BUTTON),{timeout: 20_000})
  .should('have.class', 'disabled') // Assert that the disabled class is present
    .and('contain.class', 'blue pencil')
    .then(($btn) => {
      
      cy.log('✅ The  button is disabled as expected.');
  })
  
//check DELETE 
cy.get(this.TestIDLocator(CypressTestIds.CDC_LIST_TABLE), {timeout: 20_000})
.should(this.assertBeVisible)
.find('tr:nth-child(2)') 
  .find(this.TestIDLocator(CypressTestIds.CDC_LIST_DELETE_BUTTON),{timeout: 20_000})
  .should('have.class', 'disabled') // Verify the disabled class is present
    

}

CDCDs_verify_del_per(){

  this.CDCDs_VA_View_Active();

}
}
