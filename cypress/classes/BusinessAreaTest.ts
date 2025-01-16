import CypressTestIds from  "../classes/CypressTestIDs";
import { TestBase } from "./TestBase";






export class BusinessAreaTest extends TestBase
{
        //Timestamp const
        strBusinessAreaName1: string = this.TimeStamp('BA1-');

        //Open business area
        OpenBusinessAreaFirstTime()
        {

            //cy.viewport(1920, 1080);
            
            //open portal
            this.OpenURL();

            //login into portal with valid creadentials         
            this.Login();
            
            //cy.get('[data-testid="header-menu-configuration"]', {timeout:20_000}).click();
            //cy.get(CypressTestIds.HEADER_MENU_CONFIGURATION, {timeout:20_000}).click();

            //Open Config
            cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20000})
            .should(this.assertBeVisible)
            .click();

            //Open Business Area
            cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_BUSINESSAREAS))
            .should(this.assertBeVisible)
            .click();
        }

        //Open business area
        OpenBusinessArea()
        {

            //cy.viewport(1920, 1080);
            
            //open portal
            this.OpenURL();

            //login into portal with valid creadentials         
            this.Login();
            
            //cy.get('[data-testid="header-menu-configuration"]', {timeout:20_000}).click();
            //cy.get(CypressTestIds.HEADER_MENU_CONFIGURATION, {timeout:20_000}).click();

            //Open Config
            cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20000})
            .should(this.assertBeVisible)
            .click();

            //Open Business Area
            cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_BUSINESSAREAS))
            .should(this.assertBeVisible)
            .click();
        }
        
        //Add Business Area Button is visible
        BusinessAreaButtonIsVisible()
        {
            cy.get(this.TestIDLocator(CypressTestIds.ADD_BUSINESS_AREA_BUTTON))
            .should(this.assertBeVisible);
        }

        //Create Business Area
        CreateBusinessArea()
        {
            //Click on Add Business Area Button
            cy.get(this.TestIDLocator(CypressTestIds.ADD_BUSINESS_AREA_BUTTON), {timeout: 20_000})
            .click({});

            //New Business Area Form is visible
            //type BA Name
            cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_NAME_INPUT))
            .should(this.assertBeVisible)
            .type(this.strBusinessAreaName1, {});

            //type BA Description
            cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DESCRIPTION_INPUT))
            .type(this.strBusinessAreaName1 + this.cntDes, {});

            //save Business Area
            cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_SAVE_BUTTON))
            .click({});

            //Success message shown
            cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
            .should(this.assertBeVisible)
        }

        //Edit Business Area
        EditBusinessArea()
        {
            cy.contains(this.strBusinessAreaName1, {timeout: 20_000})
            .parent(this.TD)
            .parent(this.TR)
            .find(this.TestIDLocator(CypressTestIds.EDIT_BUSINESS_AREA_BUTTON))
            .click({});
                
            //get the description
            cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DESCRIPTION_INPUT))
            .should(this.assertBeVisible)
            .clear({})
            .type(this.strBusinessAreaName1 + this.cntDes1, {});

            //save Business Area
            cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_SAVE_BUTTON))
            .click({});

            //Success message shown
            cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
            .should(this.assertBeVisible)

        }

        BusinessAreaAssignUser()
        {
            //Open Edit Window
            cy.contains(this.strBusinessAreaName1, {timeout: 20_000})
            .parent(this.TD)
            .parent(this.TR)
            .find(this.TestIDLocator(CypressTestIds.EDIT_BUSINESS_AREA_BUTTON))
            .click({});

            //Click on Add User Button
            cy.get(this.TestIDLocator(CypressTestIds.ADD_BUSINESS_AREA_USER_BUTTON))
            .click({});

            //get the drop down
            //cy.get(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_USER_SELECT))
            //.click()
            this.selectDropdown(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_USER_SELECT),this.UserName);
            //save Business Area
            cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_SAVE_BUTTON))
            .click({});      
            
             //Success message shown
             cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
             .should(this.assertBeVisible)
        }

        BusinessAreaRemoveUser()
        {
            //Open Edit Window
            cy.contains(this.strBusinessAreaName1, {timeout: 20_000})
            .parent(this.TD)
            .parent(this.TR)
            .find(this.TestIDLocator(CypressTestIds.EDIT_BUSINESS_AREA_BUTTON))
            .click({});

            //get the description
            cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DESCRIPTION_INPUT))
            .should(this.assertBeVisible)

            //Click on Add User Button
            //cy.get(this.TestIDLocator(CypressTestIds.ADD_BUSINESS_AREA_USER_BUTTON))
            //.click();

            //get the drop down
            //cy.get(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_USER_SELECT))
            //.click()
            //this.selectDropdown(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_USER_SELECT),UserName);
            cy.contains(this.UserName, {timeout: 20_000})
            
            .parent(this.DIV)
            .parent(this.DIV)
            .parent(this.DIV)
            .parent(this.DIV)
            .parent(this.DIV)
            .parent(this.DIV)
            .parent(this.DIV)
            .parent(this.TD)
            .parent(this.TR)
            .find(this.TestIDLocator(CypressTestIds.DELETE_BUSINESS_AREA_USER_BUTTON))
            .click({});

            //save Business Area
            cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_SAVE_BUTTON))
            .click({});    
            
             //Success message shown
             cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
             .should(this.assertBeVisible)
        }
        
        DeleteBusinessArea()
        {
            cy.contains(this.strBusinessAreaName1, {timeout: 20_000})
            .parent(this.TD)
            .parent(this.TR)
            .find(this.TestIDLocator(CypressTestIds.DELETE_BUSINESS_AREA_BUTTON))
            .click();
            
            // confirmation message
            cy.get(this.TestIDLocator(CypressTestIds.CONFIRMATION_BOX_OK_BUTTON), {timeout: 8_000})
            .should(this.assertBeVisible)
            .click()

            // confirmation message
            /*
            cy.get('.ant-modal-content')
            .find('.ant-modal-footer > .ant-btn-primary')
            .click();
*/

            //Success message shown
            cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
            .should(this.assertBeVisible)
        }

        CancelDeleteBusinessArea()
        {
            cy.contains(this.strBusinessAreaName1, {timeout: 20_000})
            .parent(this.TD)
            .parent(this.TR)
            .find(this.TestIDLocator(CypressTestIds.DELETE_BUSINESS_AREA_BUTTON))
            .click();
            
            // confirmation message
            cy.get(this.TestIDLocator(CypressTestIds.CONFIRMATION_BOX_CANCEL_BUTTON), {timeout: 8_000})
            .should(this.assertBeVisible)
            .click()
            /*
            cy.get('.ant-modal-content')
            .find('.ant-modal-footer > .ant-btn-default')
            .click();
            */
        }

        CreateBusinessAreaAndAssignUser()
        {
            //Click on Add Business Area Button
            cy.get(this.TestIDLocator(CypressTestIds.ADD_BUSINESS_AREA_BUTTON), {timeout: 20_000})
            .click();

            //New Business Area Form is visible
            //type BA Name
            cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_NAME_INPUT))
            .should(this.assertBeVisible)
            .type(this.strBusinessAreaName1, {});

            //type BA Description
            cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DESCRIPTION_INPUT))
            .type(this.strBusinessAreaName1 + this.cntDes, {});

            //Click on Add User Button
            cy.get(this.TestIDLocator(CypressTestIds.ADD_BUSINESS_AREA_USER_BUTTON))
            .click();

            //get the drop down
            //cy.get(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_USER_SELECT))
            //.click()
            this.selectDropdown(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_USER_SELECT),this.UserName);
            //save Business Area
            cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_SAVE_BUTTON))
            .click();      
            
             //Success message shown
             cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
             .should(this.assertBeVisible)
        }

        AddCredentials()
        {
            cy.contains(this.strBusinessAreaName1, {timeout: 20_000})
            .parent(this.TD)
            .parent(this.TR)
            .find(this.TestIDLocator(CypressTestIds.EDIT_BUSINESS_AREA_BUTTON))
            .click();

            cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_TAB_CREDENTIALS))
            .click({}) 
            
            cy.get(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_CLIENT_ADD_BUTTON))
            .click()

            this.selectDropdownFirstElement(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_CLIENT_LIST_SELECT));

            cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_SAVE_BUTTON))
            .click()

             //Success message shown
             cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
             .should(this.assertBeVisible)  
        }

        RemoveCredentials()
        {
            cy.contains(this.strBusinessAreaName1, {timeout: 20_000})
            .parent(this.TD)
            .parent(this.TR)
            .find(this.TestIDLocator(CypressTestIds.EDIT_BUSINESS_AREA_BUTTON))
            .click();

            cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_TAB_CREDENTIALS), {timeout: 20_000})
            .click() 

            //get table's first row
            cy.get(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_CLIENT_LIST_TABLE), {timeout: 20_000})           
            .eq(0)
            .find((this.TestIDLocator(CypressTestIds.BUSINESS_AREA_CLIENT_LIST_DELETE_BUTTON)))
            .click()
            //get the delete button
            //click on delete button
            //wait for confirmation prompt
            //Click ok
            //wait for success message
        }

        CancelRemoveCredentials()
        {
            //get table's first row
            //get the delete button
            //click on delete button
            //wait for confirmation prompt
            //Click cancel
        }

        UncheckAllPermissions()
        {
            cy.contains(this.strBusinessAreaName1, {timeout: 20_000})
            .parent(this.TD)
            .parent(this.TR)
            .find(this.TestIDLocator(CypressTestIds.EDIT_BUSINESS_AREA_BUTTON))
            .click();

            cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_TAB_CREDENTIALS))
            .click() 

            //cy.get('.right > :nth-child(2) > .ui').click()
            

            //get table's first row
            cy.get(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_CLIENT_LIST_TABLE))
            .eq(0)
            //get and uncheck all permissions
            .find(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_CLIENT_LIST_CAN_ADD_CHECKBOX))
            .uncheck()
            cy.get(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_CLIENT_LIST_TABLE))
            .eq(0)
            .find(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_CLIENT_LIST_CAN_VIEW_CHECKBOX))
            .uncheck()
            cy.get(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_CLIENT_LIST_TABLE))
            .eq(0)
            .find(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_CLIENT_LIST_CAN_EDIT_CHECKBOX))
            .uncheck()
            cy.get(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_CLIENT_LIST_TABLE))
            .eq(0)
            .find(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_CLIENT_LIST_CAN_DEL_CHECKBOX))
            .uncheck()
            cy.get(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_CLIENT_LIST_TABLE))
            .eq(0)
            .find(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_CLIENT_LIST_ACTIVE_CHECKBOX))
            .uncheck() 

            cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_SAVE_BUTTON))
            .click();      
        }
}