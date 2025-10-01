import CypressTestIds from  "../CypressTestIds";
import { TestBase } from "./TestBase";

export class Roles extends TestBase{

    strRoleName: string = this.TimeStamp('RN1')
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

Create_Role(name: string ='', desc:string=''){

      // fill input with support for empty + edge cases
const fillInputField = (selector: string, value: string, timeout = 20000) => {
  cy.get(selector, { timeout })
    .should('be.visible')
    .then($el => {
      if (value === '') {
        // clear if empty string provided
        cy.wrap($el).type('{selectall}{backspace}', { force: true })
      } else {
        cy.wrap($el).clear().type(value, { delay: 0 }) // fast typing
      }
    })
}

    cy.get(this.TestIDLocator(CypressTestIds.ROLES_LIST_ADD_ROLE_BUTTON), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click()

    fillInputField(this.TestIDLocator(CypressTestIds.ROLES_MANAGE_ROLE_NAME_INPUT), name)

    fillInputField(this.TestIDLocator(CypressTestIds.ROLES_MANAGE_ROLE_DESCRIPTION_INPUT), desc)

    cy.get(this.TestIDLocator(CypressTestIds.ROLES_MANAGE_ROLE_SAVE_BUTTON),{timeout:20000})
      .should('be.visible')
      .click()

}


add_permission(permissionName: string, desc: string) {
  
  this.open_Role();

  // Open role edit
  cy.get(this.TestIDLocator(CypressTestIds.ROLES_LIST_TABLE), { timeout: 20_000 })
    .contains(this.strRoleName, { timeout: 20_000 })
    .parent(this.TR)
    .find(this.TestIDLocator(CypressTestIds.ROLES_LIST_EDIT_BUTTON), { timeout: 20_000 })
    .scrollIntoView()
    .should(this.assertBeVisible)
    .click();

  // Click Add Permission
  cy.get(this.TestIDLocator(CypressTestIds.ROLES_PERMISSIONS_LIST_ADD_PERMISSION_BUTTON), { timeout: 20_000 })
    .should(this.assertBeVisible)
    .click();

  // Select Permission
  this.selectDropdown1(this.TestIDLocator(CypressTestIds.ROLES_PERMISSIONS_LIST_PERMISSION_NAME_SELECT), permissionName);

  
  // Description
  cy.get(this.TestIDLocator(CypressTestIds.ROLES_PERMISSIONS_LIST_PERMISSION_DESCRIPTION_INPUT), { timeout: 20_000 })
    .should(this.assertBeVisible)
    .last()
    .type(desc)
    .click({ force: true });

  // Save
  cy.get(this.TestIDLocator(CypressTestIds.ROLES_MANAGE_ROLE_SAVE_BUTTON), { timeout: 20_000 })
    .should(this.assertBeVisible)
    .click();

  cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), { timeout: 20_000 })
    .should(this.assertBeVisible);

  // Logout
  cy.get('a img[src="/icons/header-menu/logout.png"]', { timeout: 20_000 })
    .click();
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



add_a_user_to_the_role(){
   

    cy.get(this.TestIDLocator(CypressTestIds.ROLES_LIST_TABLE), {timeout: 20_000})
    .contains(this.strRoleName,{timeout:20_000})
    .parent(this.TR) 
    .find(this.TestIDLocator(CypressTestIds.ROLES_LIST_EDIT_BUTTON), { timeout: 20000 }) 
    .should(this.assertBeVisible) 
    .click();

   
    cy.get('#rc-tabs-0-tab-2', { timeout: 20_000 })
    .should(this.assertBeVisible) 
    .click();
    
    cy.get(this.TestIDLocator(CypressTestIds.ROLES_USER_LIST_ADD_USER_BUTTON), {timeout: 20_000})
    .should(this.assertBeVisible) 
    .click();

    //select user

    this.selectDropdown1(this.TestIDLocator(CypressTestIds.ROLES_USER_LIST_USER_ID_SELECT),this.corporateEmail);

      //Save
      cy.get(this.TestIDLocator(CypressTestIds.ROLES_MANAGE_ROLE_SAVE_BUTTON), {timeout: 20_000})
      .should(this.assertBeVisible)
      .click() 


       //Success Message
    cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 20_000})
    .should(this.assertBeVisible)


}

//COMMON FUNCTIONS 
//login as a user
login_new(){

  this.LoginWithCorrectPass(this.corporateEmail,this.Password,this.BaseURL )

}





Check_uncheck_actions(rowNumber: number, actions: { active?: boolean; add?: boolean; view?: boolean; edit?: boolean; delete?: boolean }){

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

 // Conditionally check actions
  if (actions.active) {
    cy.get(this.TestIDLocator(CypressTestIds.ROLES_PERMISSIONS_LIST_ACTIVE_CHECK), { timeout: 20_000 })
      .last()
      .check();
  }
  if (actions.add) {
    cy.get(this.TestIDLocator(CypressTestIds.ROLES_PERMISSIONS_LIST_CAN_ADD_CHECK), { timeout: 20_000 })
      .last()
      .check();
  }
  if (actions.view) {
    cy.get(this.TestIDLocator(CypressTestIds.ROLES_PERMISSIONS_LIST_CAN_VIEW_CHECK), { timeout: 20_000 })
      .last()
      .check();
  }
  if (actions.edit) {
    cy.get(this.TestIDLocator(CypressTestIds.ROLES_PERMISSIONS_LIST_CAN_EDIT_CHECK), { timeout: 8_000 })
      .last()
      .check();
  }
  if (actions.delete) {
    cy.get(this.TestIDLocator(CypressTestIds.ROLES_PERMISSIONS_LIST_CAN_DELETE_CHECK), { timeout: 8_000 })
      .last()
      .check();
  }

 

  cy.get(this.TestIDLocator(CypressTestIds.ROLES_MANAGE_ROLE_SAVE_BUTTON), {timeout: 20_000})
  .should(this.assertBeVisible)
  .click()

  cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 20_000})
  .should(this.assertBeVisible )

 cy.get('a img[src="/icons/header-menu/logout.png"]', {timeout: 20_000})
     .click();
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


//PERMISSION :BUISNESS AREA

VF_Active(){

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

VF_Active_View(){

this.login_new();

//open configuration
  cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
  .should(this.assertBeVisible)
  .click();

  //open BAData section
  cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_BUSINESSAREAS), {timeout: 20_000})
  .should(this.assertBeVisible)
  .click();


    //check add Business Area Button
    cy.get(this.TestIDLocator(CypressTestIds.ADD_BUSINESS_AREA_BUTTON),{timeout: 20_000})  
    .should('be.disabled') 
    .then(($btn) => {
        
        cy.log('✅ The  button is disabled as expected.');
    })

    

    //check edit BA button
    cy.get('.ant-table-body', {timeout: 8_000})
    .should(this.assertBeVisible)
    .find('tbody tr:nth-child(2)')
    .find(this.TestIDLocator(CypressTestIds.EDIT_BUSINESS_AREA_BUTTON),{timeout: 20_000})
    .should('have.class', 'disabled') // Assert that the disabled class is present
      .and('contain.class', 'blue pencil')
      .then(($btn) => {
        
        cy.log('✅ The  button is disabled as expected.');
    })


     //check Delete BA button
    cy.get('.ant-table-body', {timeout: 8_000})
    .should(this.assertBeVisible)
    .find('tbody tr:nth-child(2)')
    .find(this.TestIDLocator(CypressTestIds.DELETE_BUSINESS_AREA_BUTTON),{timeout: 20_000})
    .should('have.class', 'disabled') // Assert that the disabled class is present
      .and('contain.class', 'blue pencil')
      .then(($btn) => {
        
        cy.log('✅ The  button is disabled as expected.');
    })
}

//verify Actions Enabled Business Area 
verify_All_Actions_Enabled_BA(){

this.login_new();

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
cy.get('.ant-table-body', {timeout: 8_000})
.should(this.assertBeVisible)
.find('tbody tr:nth-child(2)')
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
cy.get('.ant-table-body', {timeout: 8_000})
.should(this.assertBeVisible)
.find('tbody tr:nth-child(2)')
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
cy.get('.ant-table-body', {timeout: 8_000})
.should(this.assertBeVisible)
.find('tbody tr:nth-child(2)')
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


//DEL BA 
BA_verify_delete_functionality(){

  this.VF_Active();
  
}


//PERMISSION: BUSINESS AREA DATA
BAD_VF_Active(){

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
    cy.get('.ui.big.floating.negative.message',{timeout: 20_000} )
    .should('contain', 'Permission Denied', {timeout: 20_000})
    .and('contain', "You don't have permisson to enter in this area.");


}

BAD_VF_Active_View(){

this.login_new();
    //open configuration
    cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();

   //open users section
   cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_BUSINESSAREADATA), {timeout: 20_000})
   .should(this.assertBeVisible)
   .click();

   
    //check add Business Area Button
    cy.get(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_ADD_NEW_BUTTON),{timeout: 20_000})  
    .should('be.disabled') 
    .then(($btn) => {
        
        cy.log('✅ The  button is disabled as expected.');
    })

    //Edit
    cy.get(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_LIST_TABLE), {timeout: 20_000})
    .should(this.assertBeVisible)
    .find('tbody tr:nth-child(2)')
    .find(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_LIST_EDIT_BUTTON),{timeout: 20_000})
    .should('have.class', 'disabled')
   //Delete
    cy.get(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_LIST_TABLE), {timeout: 20_000})
    .should(this.assertBeVisible)
   .find('tbody tr:nth-child(2)')    
    .find(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_DATA_LIST_DELETE_BUTTON),{timeout: 20_000})
    .should('have.class', 'disabled') // Assert that the disabled class is present
     
}

verify_actions_enabled_BAD(){
  this.login_new();
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
.find('tbody tr:nth-child(2)')
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
    .find('tbody tr:nth-child(2)') 
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
      .find('tbody tr:nth-child(2)')
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

BAdata_verify_del_per(){

  this.BAD_VF_Active();
    
}

//PERMISSION USERS/////

Users_VF_Active(){

this.login_new();
    //open configuration
    cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();

    //open Users Section
    cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_USERS), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();

        //permisssion denied
    cy.get('.ui.big.floating.negative.message',{timeout: 20_000} )
    .should('contain', 'Permission Denied', {timeout: 20_000})
    .and('contain', "You don't have permisson to enter in this area.");

}

Users_VF_Active_View(){

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
    .find('tbody tr:nth-child(2)')
    .find(this.TestIDLocator(CypressTestIds.USERS_USERSLIST_EDIT_BUTTON),{timeout: 20_000})
    .should('have.class', 'disabled') // Assert that the disabled class is present
  
}


verify_actions_enabled_USERS(){

   this.login_new();
   
//open configuration
cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
.should(this.assertBeVisible)
.click();

//open Users
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


USERS_verify_del_per(){

  this.Users_VF_Active();
}

//ROLES//////

Roles_VF_Active(){

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

Roles_VF_Active_View(){

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
    .find('tr:nth-child(5)') 
    .find(this.TestIDLocator(CypressTestIds.ROLES_LIST_EDIT_BUTTON),{timeout: 20_000})
    .should('have.class', 'disabled') // Assert that the disabled class is present
      .and('contain.class', 'blue pencil')
      .then(($btn) => {
        
        cy.log('✅ The  button is disabled as expected.');
    })

    //check Delete 
    cy.get(this.TestIDLocator(CypressTestIds.ROLES_LIST_TABLE), {timeout: 20_000})
    .should(this.assertBeVisible)
    .find('tr:nth-child(5)') 
    .find(this.TestIDLocator(CypressTestIds.ROLES_LIST_DELETE_BUTTON),{timeout: 20_000})
    .should('have.class', 'disabled') // Verify the disabled class is present
      
}


verify_all_actions_enabled_ROLES(){

this.login_new();
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

ROLES_verify_del_per(){

    this.Roles_VF_Active();

}


//PERMISSION : SCHEMA MODELS


SM_VF_Active(){

  this.login_new();

  //Open Schema Page
 cy.contains('Schema', {timeout: 8_000})
 .click();

  //permisssion denied
    cy.get('.ui.big.floating.negative.message',{timeout: 20_000} )
    .should('contain', 'Permission Denied', {timeout: 20_000})
    .and('contain', "You don't have permisson to enter in this area.");



}


SCHEMA_MODELS_VF_Active_View(){

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
      

    //check Delete BA button
    cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_LIST_TABLE), {timeout: 20_000})
    .should(this.assertBeVisible)
    .find('tr:nth-child(2)') 
    .find(this.TestIDLocator(CypressTestIds.SCHEMA_LIST_DELETE_BUTTON),{timeout: 20_000})
    .should('have.class', 'disabled') // Verify the disabled class is present


}


verify_actions_enabled_SCHEMA(){

   this.login_new();

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

SCHEMA_verify_del_per(){
    this.SM_VF_Active();
}
//PERMISSION: DATASETS

DS_VF_Active(){

this.login_new();

 //permission denied
  cy.get('.ui.big.floating.negative.message')
  .should('contain', 'Permission Denied')
  .and('contain', "You don't have permisson to enter in this area.");

}

DS_VA_View_Active(){
 
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
  
  //check Delete BA button
  cy.get(this.TestIDLocator(CypressTestIds.DATASET_LIST_TABLE), {timeout: 20_000})
  .should(this.assertBeVisible)
  .find('tr:nth-child(2)') 
  .find(this.TestIDLocator(CypressTestIds.DATASET_LIST_DELETE_BUTTON),{timeout: 20_000})
  .should('have.class', 'disabled') // Verify the disabled class is present

}

verify_actions_enabled_DS(){

  this.login_new();
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

 
//delete dataset verification 
DS_verify_del_per(){

  this.DS_VF_Active();
    

}
//*********  PERMISSION: DataTags **********************/

DT_VF_Active(){

   this.login_new();
    //open configuration
cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
.should(this.assertBeVisible)
.click();


//open Datatags section
cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_DATACLASSIFIERS), {timeout: 20_000})
.should(this.assertBeVisible)
.click();

 cy.get('.ui.big.floating.negative.message', {timeout: 20_000})
.should('contain', 'Permission Denied')
.and('contain', "You don't have permisson to enter in this area.");


}


DT_VA_View_Active(){
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
    .find(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAGLIST_DELETE_BUTTON),{timeout: 20_000})
    .should('have.class', 'disabled') // Verify the disabled class is present
}

verify_actions_enabled_DT(){

 this.login_new();
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

//DELETE permission verification
DT_verify_del_per(){

  this.DT_VF_Active()  

}


//PERMISSION: DATASET OBJECTS SEARCH
DSOS_VF_Active(){
  this.login_new();
  cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_SEARCH), {timeout: 20_000})
.should(this.assertBeVisible)
.click();

//permission denied
cy.get('.ui.big.floating.negative.message',{timeout:8_000})
.should('contain', 'Permission Denied')
.and('contain', "You don't have permisson to enter in this area.");

}


DSOS_VA_View_Active(){
  this.login_new();
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

verify_actions_enabled_DSOS(){

 this.login_new();
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

//delete permission
DSOS_verify_del_per(){

this.DSOS_VF_Active();

}

//CREDENTIALS////
CR_VF_Active(){

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

CR_VA_View_Active(){

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

verify_actions_enabled_CR(){


  this.login_new();
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




CR_verify_del_per(){

this.CR_VF_Active();


}


//SYSTEM CONNECTIONS

SC_VF_Active(){

this.login_new();
  //open configuration
  cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
  .should(this.assertBeVisible)
  .click();
  
  
  //open Credentials section 
  cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_SYSTEMCONNECTIONS), {timeout: 20_000})
  .should(this.assertBeVisible)
  .click();
  
  cy.get('.ui.big.floating.negative.message',{timeout:20_000})
  .should('contain', 'Permission Denied')
  .and('contain', "You don't have permisson to enter in this area.");

}

SC_VA_View_Active(){

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

verify_actions_enabled_SC(){

this.login_new();
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

SC_verify_del_per(){

  this.SC_VF_Active();
    
}

//SYSTEM KEYS

SK_VF_Active(){

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

verify_actions_enabled_SK(){

this.login_new();

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

 //open SYSTEM kEYS
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

this.SK_VF_Active();


}


//// CDC Destinations ////

CDCDS_VF_Active(){

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

CDCDs_VA_View_Active(){


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
verify_actions_enabled_CDCDs(){

this.login_new();
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



CDCDs_verify_del_per(){

  this.CDCDS_VF_Active();

}
}
