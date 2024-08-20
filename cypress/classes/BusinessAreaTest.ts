import CypressTestIds from  "../classes/CypressTestIDs";
import { TestBase } from "./TestBase";


//Variables and const
var regex = new RegExp('[:.]', 'gi');
const TimeStamp = new Date().toISOString().replace(regex,'-');
const strBusinessAreaName1: string = 'BA1-' + TimeStamp;
const strBusinessAreaName2: string = 'BA2-' + TimeStamp;



export class BusinessAreaTest extends TestBase
{
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
            .click({force: true});

            //Open Business Area
            cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_BUSINESSAREAS))
            .should(this.assertBeVisible)
            .click({force: true});
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
            .click({force: true});

            //New Business Area Form is visible
            //type BA Name
            cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_NAME_INPUT))
            .should(this.assertBeVisible)
            .type(strBusinessAreaName1, {force: true});

            //type BA Description
            cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DESCRIPTION_INPUT))
            .type(strBusinessAreaName1 + ' Description', {force: true});

            //save Business Area
            cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_SAVE_BUTTON))
            .click({force: true});

            //Success message shown
            cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
            .should(this.assertBeVisible)
        }

        //Edit Business Area
        EditBusinessArea()
        {
            cy.contains(strBusinessAreaName1, {timeout: 20_000})
            .parent(this.TD)
            .parent(this.TR)
            .find(this.TestIDLocator(CypressTestIds.EDIT_BUSINESS_AREA_BUTTON))
            .click({force: true});
                
            //get the description
            cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DESCRIPTION_INPUT))
            .should(this.assertBeVisible)
            .clear({force: true})
            .type(strBusinessAreaName1 + ' Description - 1', {force: true});

            //save Business Area
            cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_SAVE_BUTTON))
            .click({force: true});

            //Success message shown
            cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
            .should(this.assertBeVisible)

        }

        BusinessAreaAssignUser()
        {
            //Open Edit Window
            cy.contains(strBusinessAreaName1, {timeout: 20_000})
            .parent(this.TD)
            .parent(this.TR)
            .find(this.TestIDLocator(CypressTestIds.EDIT_BUSINESS_AREA_BUTTON))
            .click({force: true});

            //Click on Add User Button
            cy.get(this.TestIDLocator(CypressTestIds.ADD_BUSINESS_AREA_USER_BUTTON))
            .click({force: true});

            //get the drop down
            //cy.get(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_USER_SELECT))
            //.click()
            this.selectDropdown(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_USER_SELECT),this.UserName);
            //save Business Area
            cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_SAVE_BUTTON))
            .click({force: true});      
            
             //Success message shown
             cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
             .should(this.assertBeVisible)
        }

        BusinessAreaRemoveUser()
        {
            //Open Edit Window
            cy.contains(strBusinessAreaName1, {timeout: 20_000})
            .parent(this.TD)
            .parent(this.TR)
            .find(this.TestIDLocator(CypressTestIds.EDIT_BUSINESS_AREA_BUTTON))
            .click({force: true});

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
            .click({force: true});

            //save Business Area
            cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_SAVE_BUTTON))
            .click({force: true});    
            
             //Success message shown
             cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
             .should(this.assertBeVisible)
        }
        
        DeleteBusinessArea()
        {
            cy.contains(strBusinessAreaName1, {timeout: 20_000})
            .parent(this.TD)
            .parent(this.TR)
            .find(this.TestIDLocator(CypressTestIds.DELETE_BUSINESS_AREA_BUTTON))
            .click({force: true});
            
            // confirmation message
            cy.get(this.TestIDLocator(CypressTestIds.CONFIRMATION_BOX_OK_BUTTON), {timeout: 8_000})
            .should(this.assertBeVisible)
            .click({force: true})

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
            cy.contains(strBusinessAreaName1, {timeout: 20_000})
            .parent(this.TD)
            .parent(this.TR)
            .find(this.TestIDLocator(CypressTestIds.DELETE_BUSINESS_AREA_BUTTON))
            .click({force: true});
            
            // confirmation message
            cy.get(this.TestIDLocator(CypressTestIds.CONFIRMATION_BOX_CANCEL_BUTTON), {timeout: 8_000})
            .should(this.assertBeVisible)
            .click({force: true})
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
            .click({force: true});

            //New Business Area Form is visible
            //type BA Name
            cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_NAME_INPUT))
            .should(this.assertBeVisible)
            .type(strBusinessAreaName1, {force: true});

            //type BA Description
            cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_DESCRIPTION_INPUT))
            .type(strBusinessAreaName1 + ' Description', {force: true});

            //Click on Add User Button
            cy.get(this.TestIDLocator(CypressTestIds.ADD_BUSINESS_AREA_USER_BUTTON))
            .click();

            //get the drop down
            //cy.get(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_USER_SELECT))
            //.click()
            this.selectDropdown(this.TestIDLocator(CypressTestIds.BUSINESS_AREA_USER_SELECT),this.UserName);
            //save Business Area
            cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_SAVE_BUTTON))
            .click({force: true});      
            
             //Success message shown
             cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
             .should(this.assertBeVisible)
        }

        AddCredentials()
        {
            cy.contains(strBusinessAreaName1, {timeout: 20_000})
            .parent(this.TD)
            .parent(this.TR)
            .find(this.TestIDLocator(CypressTestIds.EDIT_BUSINESS_AREA_BUTTON))
            .click({force: true});

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
            cy.contains(strBusinessAreaName1, {timeout: 20_000})
            .parent(this.TD)
            .parent(this.TR)
            .find(this.TestIDLocator(CypressTestIds.EDIT_BUSINESS_AREA_BUTTON))
            .click({force: true});

            cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_TAB_CREDENTIALS))
            .click({}) 

            //get table's first row
            cy.get("[data-testid='business-area-client-list-table']")
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
            cy.contains(strBusinessAreaName1, {timeout: 20_000})
            .parent(this.TD)
            .parent(this.TR)
            .find(this.TestIDLocator(CypressTestIds.EDIT_BUSINESS_AREA_BUTTON))
            .click({force: true});

            cy.get(this.TestIDLocator(CypressTestIds.MANAGE_BUSINESS_AREA_TAB_CREDENTIALS))
            .click({}) 

            cy.get('.right > :nth-child(2) > .ui').click()
            

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

        

/*
    cy.selectDropdown('select-test-id', 'Some Option Text');
    */
}


 /*
        Create business area

        assign users

        Create business area and assign users
        
        Business area is visible to the assigned user
        Business area is not visible to the unassigned user
        remove a user from business area
        remove a business area
        Edge case scenarios



    */
