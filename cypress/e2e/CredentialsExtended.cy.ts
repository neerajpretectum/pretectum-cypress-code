
import { CredentialsTest } from "../classes/CredentialsExtended"

const objCredentialsExtendedTest: CredentialsTest = new CredentialsTest();

beforeEach(() => {
  cy.viewport(2000, 1000);
});

//First check weather Business Area is accessible
 it('Open Credentials', () =>
{
    objCredentialsExtendedTest.OpenCredentials();
});

    describe (' Extended Credentials ', () =>
    {
        beforeEach(()=>
        {               
            objCredentialsExtendedTest.OpenCredentials();
        });
  
        it('Empty Name Field', () =>
        {
            objCredentialsExtendedTest.CreateCredentials('', '2 hours')
        });

         it('Name Less than Minimum length', () =>
        {
            objCredentialsExtendedTest.CreateCredentials('A', '2')
            cy.get('.ant-form-show-help-item-appear',{timeout:8000})
            .should('be.visible')
        });

         it('Name Greater than Maximum length', () =>
        {
            objCredentialsExtendedTest.CreateCredentials('This is a long sample input string that contains more than one hundred', '2')
            cy.get('.ant-form-show-help-item-appear',{timeout:8000})
            .should('be.visible')
        });

         it('Name Contains Special Character', () =>
        {
            objCredentialsExtendedTest.CreateCredentials('App@123', '2')
            cy.get('.ant-form-show-help-item-appear',{timeout:8000})
            .should('be.visible')
        });

          it('Name Contains White Space Only ', () =>
        {
            objCredentialsExtendedTest.CreateCredentials('  ', '2')
            cy.get('.ant-form-show-help-item-appear',{timeout:8000})
            .should('be.visible')
        });

          it('Duplicate Name ', () =>
        {
            objCredentialsExtendedTest.CreateCredentials('Client123', '2')
            cy.get('.ant-form-show-help-item-appear',{timeout:8000})
            .should('be.visible')
        });

          it('Empty Access Token Validity Field ', () =>
        {
            objCredentialsExtendedTest.CreateCredentials('App23', '')
            cy.get('.ant-form-show-help-item-appear',{timeout:8000})
            .should('be.visible')
        });
    
            it('Input Zero: Access Token Validity Field ', () =>
        {
            objCredentialsExtendedTest.CreateCredentials('AppName1623', '0')
            cy.get('.ant-form-show-help-item-appear',{timeout:8000})
            .should('be.visible')
        });

              it('Non Numeric input: Access Token Validity Field ', () =>
        {
            objCredentialsExtendedTest.CreateCredentials('AppName1623', 'abcd')
            cy.get('.ant-form-item-explain-error',{timeout:8000})
            .should('be.visible')
        });

      
    })