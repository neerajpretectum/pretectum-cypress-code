import CypressTestIds from  '../CypressTestIds';
import { TestBase } from "./TestBase";






export class BusinessAreaExtendedTest extends TestBase{

    //Timestamp const
   
     strBusinessAreaName1: string = this.TimeStamp('BA1-');
     strBAN2: string = this.TimeStamp('BA2-');
     strRoleName: string = this.TimeStamp('RN1'); 

     OpenBusinessArea()
        {

            //cy.viewport(1920, 1080);
            
            //open portal
            this.OpenURL();

            //login into portal with valid creadentials         
            this.Login();
            
            //Open Config
            cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20000})
            .should(this.assertBeVisible)
            .click();

            //Open Business Area
            cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_BUSINESSAREAS))
            .should(this.assertBeVisible)
            .click();
        }

    addBusinessArea(BAName: string = '',){

        this.OpenBusinessArea()
        //Click on Add Business Area Button
        cy.get(this.TestIDLocator(CypressTestIds.ADD_BUSINESS_AREA_BUTTON), {timeout: 40_000})
        .click({});
                
        cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_NAME_INPUT), {timeout: 40_000})
        .should(this.assertBeVisible)
        .type(BAName);

        //type BA Description
        cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DESCRIPTION_INPUT), {timeout: 20_000})
        .type(BAName + this.cntDes, {});

        //save Business Area
        cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_SAVE_BUTTON), {timeout: 20_000})
        .click({});

        //Success message shown
        cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 20_000})
        .should(this.assertBeVisible)

        cy.get('a img[src="/icons/header-menu/logout.png"]', {timeout: 20_000})
         .should(this.assertBeVisible)
          .click();

    }

        //COMMON FUNCTIONS 
        //login as a user
        login_new(){

        this.LoginWithCorrectPass(this.corporateEmail,this.Password,this.BaseURL )

        }

        verify_BA_not_visible(){

        this.login_new();

            //Open Config
            cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20000})
            .should(this.assertBeVisible)
            .click();

            //Open Business Area
            cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_BUSINESSAREAS), {timeout: 20_000})
            .should(this.assertBeVisible)
            .click();

            cy.get('[data-testid="header-menu-business-area-select-menu-button"]')
            .should('exist')
            .invoke('text')
            .then((text) => {
            if (!text.includes(this.strBusinessAreaName1)) {
                cy.log(`Business Area "${this.strBusinessAreaName1}" is not present in the header menu.`);
            }
            });

    }


    add_BA(BAName: string = '', DESC:string = ''){

        //Click on Add Business Area Button
        cy.get(this.TestIDLocator(CypressTestIds.ADD_BUSINESS_AREA_BUTTON), {timeout: 20_000})
        .click({});
                
        cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_NAME_INPUT), {timeout: 40_000})
        .should(this.assertBeVisible)
        .type(BAName);

        //type BA Description
        cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DESCRIPTION_INPUT), {timeout: 20_000})
        .type(DESC);

        //save Business Area
        cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_SAVE_BUTTON), {timeout: 20_000})
        .click({});

    }

    empty_BA(BAName: string = '', DESC:string = ''){

         //Click on Add Business Area Button
        cy.get(this.TestIDLocator(CypressTestIds.ADD_BUSINESS_AREA_BUTTON), {timeout: 20_000})
        .click({});
                
        cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_NAME_INPUT), {timeout: 20_000})
        .should(this.assertBeVisible)
       

        //type BA Description
        cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DESCRIPTION_INPUT), {timeout: 20_000})
        .type(DESC);

        //save Business Area
        cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_SAVE_BUTTON), {timeout: 20_000})
        .click({});

    }

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

    CreateRole(){
            
this.open_Role();
            cy.get(this.TestIDLocator(CypressTestIds.ROLES_LIST_ADD_ROLE_BUTTON), {timeout: 20_000})
                .should(this.assertBeVisible)
                .click()
            
                //role name
                cy.get(this.TestIDLocator(CypressTestIds.ROLES_MANAGE_ROLE_NAME_INPUT), {timeout: 20_000})
                .should(this.assertBeVisible)
                .type(this.strRoleName)
                .click()
            
                //role description 
                cy.get(this.TestIDLocator(CypressTestIds.ROLES_MANAGE_ROLE_DESCRIPTION_INPUT), {timeout: 20_000})
                .should(this.assertBeVisible)
                .type(this. strRoleName + ' Description', {})
                .click()


                cy.get(this.TestIDLocator(CypressTestIds.ROLES_PERMISSIONS_LIST_ADD_PERMISSION_BUTTON), {timeout: 20_000})
                 .should(this.assertBeVisible)
                .click()

                this.selectDropdown1(this.TestIDLocator(CypressTestIds.ROLES_PERMISSIONS_LIST_PERMISSION_NAME_SELECT),'BUSINESS AREA');

                cy.get(this.TestIDLocator(CypressTestIds.ROLES_PERMISSIONS_LIST_CAN_ADD_CHECK), {timeout: 20_000})
                     .last()
                     .check();
                
                     cy.get(this.TestIDLocator(CypressTestIds.ROLES_PERMISSIONS_LIST_CAN_VIEW_CHECK), {timeout: 20_000})
                     .last()
                     .check();
                
                      cy.get(this.TestIDLocator(CypressTestIds.ROLES_PERMISSIONS_LIST_CAN_EDIT_CHECK), {timeout: 8_000})
                       .last()
                       .check();
                    
                       cy.get(this.TestIDLocator(CypressTestIds.ROLES_PERMISSIONS_LIST_CAN_DELETE_CHECK), {timeout: 8_000})
                       .last()
                       .check()

                       cy.get('#rc-tabs-0-tab-2', { timeout: 8000 })
                           .should(this.assertBeVisible) 
                           .click();
                           
                           cy.get(this.TestIDLocator(CypressTestIds.ROLES_USER_LIST_ADD_USER_BUTTON), {timeout: 20_000})
                           .should(this.assertBeVisible) 
                           .click();
                       
                           //select user
                       
                           this.selectDropdown(this.TestIDLocator(CypressTestIds.ROLES_USER_LIST_USER_ID_SELECT),this.corporateEmail);

                           //Save
                             cy.get(this.TestIDLocator(CypressTestIds.ROLES_MANAGE_ROLE_SAVE_BUTTON), {timeout: 20_000})
                            .should(this.assertBeVisible)
                             .click() 
                             
                                  //Success Message
                               cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 20_000})
                               .should(this.assertBeVisible)



    }



    del_Role(){

     this.open_Role();

    cy.get(this.TestIDLocator(CypressTestIds.ROLES_LIST_TABLE), {timeout: 20000})
    .contains(this.strRoleName,{timeout:20_000})
    .parent(this.TR) 
    .find(this.TestIDLocator(CypressTestIds.ROLES_LIST_DELETE_BUTTON), { timeout: 8_000 }) 
    .scrollIntoView()
    .should(this.assertBeVisible) 
    .click();

    // confirmation message
    cy.get(this.TestIDLocator(CypressTestIds.CONFIRMATION_BOX_OK_BUTTON), {timeout: 20_000})
   .should(this.assertBeVisible)
    .click()

      //Success Message
      cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 20_000})
      .should(this.assertBeVisible)

    }


    add_user(){
 
    this.OpenBusinessArea();

    cy.contains(this.strBAN2, {timeout: 20_000})
    .parent(this.TD)
    .parent(this.TR)
    .find(this.TestIDLocator(CypressTestIds.EDIT_BUSINESS_AREA_BUTTON),{timeout:8000})
    .click({});
    
     cy.get(this.TestIDLocator(CypressTestIds.ADD_BUSINESS_AREA_USER_BUTTON),{timeout:20000})
    .click({});

    this.selectDropdown(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_USER_SELECT),this.corporateEmail);

    cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_SAVE_BUTTON), {timeout: 8_000})
    .click({});  

     //Success message shown
     cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 20_000})
    .should(this.assertBeVisible)

    cy.get('a img[src="/icons/header-menu/logout.png"]', {timeout: 20_000})
     .should(this.assertBeVisible)
        .click();    
            
    }

    //Business Area user access with Active and View permissions enabled
    uncheck_permission_ADD_Edit_del(){

    this.OpenBusinessArea();

    cy.contains(this.strBAN2, {timeout: 20_000})
    .parent(this.TD)
    .parent(this.TR)
    .find(this.TestIDLocator(CypressTestIds.EDIT_BUSINESS_AREA_BUTTON),{timeout:8000})
    .click({});
    
    cy.get(this.TestIDLocator(CypressTestIds.CAN_ADD_BUSINESS_AREA_USER_CHECKBOX), {timeout: 20_000})
     .uncheck();

     cy.get(this.TestIDLocator(CypressTestIds.CAN_EDIT_BUSINESS_AREA_USER_CHECKBOX), {timeout: 20_000})
     .uncheck();

     cy.get(this.TestIDLocator(CypressTestIds.CAN_DELETE_BUSINESS_AREA_USER_CHECKBOX), {timeout: 20_000})
     .uncheck();

    cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_SAVE_BUTTON))
    .click({});  

     //Success message shown
    cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 20_000})
     .should(this.assertBeVisible)

    cy.get('a img[src="/icons/header-menu/logout.png"]', {timeout: 20_000})
     .should(this.assertBeVisible)
        .click(); 

    }
    
    verify_Permission_View_Active(){
    
    this.uncheck_permission_ADD_Edit_del();

    this.login_new();

  //Open Config
    cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20000})
    .should(this.assertBeVisible)
    .click();

    //Open Business Area
    cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_BUSINESSAREAS), {timeout: 20_000})
     .should(this.assertBeVisible)
     .click();   

    cy.get(this.TestIDLocator(CypressTestIds.ADD_BUSINESS_AREA_BUTTON), {timeout: 40_000})
    .should('be.disabled');

    cy.get(this.TestIDLocator(CypressTestIds.VIEW_BUSINESS_AREA_BUTTON), {timeout: 40_000})
     .eq(-2) 
      .should('not.have.class', 'disabled')

     cy.get(this.TestIDLocator(CypressTestIds.EDIT_BUSINESS_AREA_BUTTON), {timeout: 40_000})
    .eq(-2)
   .should('have.class', 'disabled');  

     cy.get(this.TestIDLocator(CypressTestIds.DELETE_BUSINESS_AREA_BUTTON), {timeout: 40_000})
     .eq(-2)
    .should('have.class', 'disabled');  

     cy.get(this.TestIDLocator(CypressTestIds.ACTIVATE_BUSINESS_AREA_SWITCH), {timeout: 40_000})
     .eq(-2) 
      .should('not.have.class', 'disabled')

    }
    //Business Area user access with all permissions enabled
    check_permission_ADD_Edit_del(){

    this.OpenBusinessArea();

    cy.contains(this.strBAN2, {timeout: 20_000})
    .parent(this.TD)
    .parent(this.TR)
    .find(this.TestIDLocator(CypressTestIds.EDIT_BUSINESS_AREA_BUTTON),{timeout:8000})
    .click({});
    
    cy.get(this.TestIDLocator(CypressTestIds.CAN_ADD_BUSINESS_AREA_USER_CHECKBOX), {timeout: 20_000})
     .check();

     cy.get(this.TestIDLocator(CypressTestIds.CAN_EDIT_BUSINESS_AREA_USER_CHECKBOX), {timeout: 20_000})
     .check();

     cy.get(this.TestIDLocator(CypressTestIds.CAN_DELETE_BUSINESS_AREA_USER_CHECKBOX), {timeout: 20_000})
     .check();

    cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_SAVE_BUTTON))
    .click({});  

     //Success message shown
    cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 20_000})
     .should(this.assertBeVisible)

    cy.get('a img[src="/icons/header-menu/logout.png"]', {timeout: 20_000})
     .should(this.assertBeVisible)
        .click(); 

    }
    verify_all_permissions(){

    this.login_new();

    //Open Config
    cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20000})
    .should(this.assertBeVisible)
    .click();

    //Open Business Area
    cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_BUSINESSAREAS), {timeout: 20_000})
     .should(this.assertBeVisible)
     .click();   

    cy.get(this.TestIDLocator(CypressTestIds.ADD_BUSINESS_AREA_BUTTON), {timeout: 40_000})
    .should('be.enabled');

    cy.get(this.TestIDLocator(CypressTestIds.VIEW_BUSINESS_AREA_BUTTON), {timeout: 40_000})
    .eq(-2) 
    .should('not.have.class', 'disabled')

     cy.get(this.TestIDLocator(CypressTestIds.EDIT_BUSINESS_AREA_BUTTON), {timeout: 40_000})
      .eq(-2) 
    .should('not.have.class', 'disabled')

     cy.get(this.TestIDLocator(CypressTestIds.DELETE_BUSINESS_AREA_BUTTON), {timeout: 40_000})
      .eq(-2) 
    .should('not.have.class', 'disabled')

     cy.get(this.TestIDLocator(CypressTestIds.ACTIVATE_BUSINESS_AREA_SWITCH), {timeout: 40_000})
     .eq(-2) 
    .should('not.have.class', 'disabled')


    }
 //Business Area user access with VIEW permission enabled
    uncheck_permissionActive(){

    this.OpenBusinessArea();

    cy.contains(this.strBAN2, {timeout: 20_000})
    .parent(this.TD)
    .parent(this.TR)
    .find(this.TestIDLocator(CypressTestIds.EDIT_BUSINESS_AREA_BUTTON),{timeout:8000})
    .click({});
    
  /*  cy.get(this.TestIDLocator(CypressTestIds.CAN_ADD_BUSINESS_AREA_USER_CHECKBOX), {timeout: 20_000})
     .uncheck();

     cy.get(this.TestIDLocator(CypressTestIds.CAN_EDIT_BUSINESS_AREA_USER_CHECKBOX), {timeout: 20_000})
     .uncheck();

     cy.get(this.TestIDLocator(CypressTestIds.CAN_DELETE_BUSINESS_AREA_USER_CHECKBOX), {timeout: 20_000})
     .uncheck();*/

      cy.get(this.TestIDLocator(CypressTestIds.ACTIVATE_BUSINESS_AREA_USER_CHECKBOX), {timeout: 20_000})
     .uncheck();

    cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_SAVE_BUTTON))
    .click({});  

     //Success message shown
    cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 20_000})
     .should(this.assertBeVisible)

    cy.get('a img[src="/icons/header-menu/logout.png"]', {timeout: 20_000})
     .should(this.assertBeVisible)
        .click(); 

    }
    
    verify_permission_VIEW(){

    this.uncheck_permissionActive();

    this.login_new();

  //Open Config
    cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20000})
    .should(this.assertBeVisible)
    .click();

    //Open Business Area
    cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_BUSINESSAREAS), {timeout: 20_000})
     .should(this.assertBeVisible)
     .click();   

    cy.get(this.TestIDLocator(CypressTestIds.ADD_BUSINESS_AREA_BUTTON), {timeout: 40_000})
    .should('be.disabled');

    cy.get(this.TestIDLocator(CypressTestIds.VIEW_BUSINESS_AREA_BUTTON), {timeout: 40_000})
     .eq(-2) 
      .should('not.have.class', 'disabled')

     cy.get(this.TestIDLocator(CypressTestIds.EDIT_BUSINESS_AREA_BUTTON), {timeout: 40_000})
    .eq(-2)
    .should('have.class', 'disabled');  

     cy.get(this.TestIDLocator(CypressTestIds.DELETE_BUSINESS_AREA_BUTTON), {timeout: 40_000})
     .eq(-2)
    .should('have.class', 'disabled');  

     cy.get(this.TestIDLocator(CypressTestIds.ACTIVATE_BUSINESS_AREA_SWITCH), {timeout: 40_000})
     .eq(-2) 
     .should('be.disabled');  

    }

    delete_BA(){

    this.del_BA(this.strBusinessAreaName1);
    this.del_BA(this.strBAN2)


    }
    del_BA(BA_Name: string=''){

    cy.contains(BA_Name, {timeout: 20_000})
            .parent(this.TD)
            .parent(this.TR)
            .find(this.TestIDLocator(CypressTestIds.DELETE_BUSINESS_AREA_BUTTON))
            .click();
            
            // confirmation message
            cy.get(this.TestIDLocator(CypressTestIds.CONFIRMATION_BOX_OK_BUTTON), {timeout: 20_000})
            .should(this.assertBeVisible)
            .click()

            //Success message shown
            cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 20_000})
            .should(this.assertBeVisible)

    }
}