
import CypressTestIds from "./CypressTestIDs";

export class TestBase
{
    //Asserts
    assertBeVisible: string = 'be.visible';
    assertHaveValue: string = 'have.value';

    //regEx
    regCap: string = '[/A-Z/]';
    TimeStampRegex = new RegExp('[:.]', 'gi');

    //const
    TD: string = 'td';
    TR: string = 'tr';
    I: string = 'i';
    SPAN: string = 'span';
    DIV: string = 'div';
    cmdInvokeValue: string = 'val';
    cmdMatch: string = 'match';
    cidNewPass1: string = '#basic_newPassword';
    cidNewPass2: string = '#basic_confirmNewPassword';
    cidSelect: string = '.ant-select-dropdown :not(.ant-select-dropdown-hidden)';
    cidSelectOption: string = '.ant-select-item-option';
    BaseURL: string = 'http://localhost:3000/';
    //BaseURL: string = 'http://pretectum.net/';
    UserName: string = 'testing1@malaymo.com';
    Password: string = 'Maria@027';
    TestIDText: string = "[data-testid=\"";
   


    

        

    selectDropdown(testId: string, optionText: string) 
        {
            // open select
            cy.get(testId).click();

            return cy
                .get(this.cidSelect)
                .find(this.cidSelectOption)
                .each(el => {
                if (el.text() === optionText) {
                    cy.wrap(el).click();
                }
        });  
    }

    selectDropdownFromATableRow(tableID: string, rowID:string, testID: string, optionText: string) 
        {

            // open select
            //cy.get(testID).click();
            cy.get(tableID)
            .find(rowID)
            .find((testID)).click();

            return cy
                .get(this.cidSelect)
                .find(this.cidSelectOption)
                .each(el => {
                if (el.text() === optionText) {
                    cy.wrap(el).click();
                }
        });  
    }

    selectDropdownFirstElement(testId: string) 
        {
            // open select
            cy.get(testId).click();

            return cy
                .get(this.cidSelect)
                .find(this.cidSelectOption)
                .first()
                .click()
                
    }

//common function for login
public LoginRun(UserName: string, Password: string, SiteURL?: string)
{
    if(SiteURL!==undefined)
    {
        cy.visit(SiteURL);
    }           
    //type user and password
    cy.get(this.TestIDLocator(CypressTestIds.USER_LOGIN_EMAIL_INPUT)).type(UserName, {})
    cy.get( this.TestIDLocator(CypressTestIds.USER_LOGIN_PASSWORD_INPUT)).type(Password, {})
    //click on button
    cy.get(this.TestIDLocator(CypressTestIds.USER_LOGIN_SUBMIT_BUTTON)).click({})       
}

    //call login from derived classes
     Login()
    {       
        //this.oLT.LoginWithCorrectPass(this.UserName, this.Password);
        this.LoginWithCorrectPass(this.UserName, this.Password, this.BaseURL)
    }

    LoginWithCorrectPass(UserName: string, Password: string, SiteURL?: string)
    {
        this.LoginRun(UserName, Password, SiteURL);
        //cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_SCHEMA), {timeout:30_000})
        //.should(this.assertBeVisible)
        cy.contains('Schema', {timeout: 8_000})
        
    }
    
    //Open Base URL
    OpenURL(SiteURL?: string)
            {
                if(SiteURL!==undefined)
                {
                    cy.visit(SiteURL);
                }
                else
                {
                    cy.visit(this.BaseURL);
                }
            }

    //generate test ID string
    TestIDLocator (TestID: string)
    {
        TestID = this.TestIDText + TestID.concat("\"]");
        return TestID;
    } 

    //generate timestamp
    TimeStamp(Prefix: string)
    {      
        var str = Prefix.concat( new Date().toISOString().replace(this.TimeStampRegex,'-'));
        return str;
    }
}