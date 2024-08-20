import { TestBase } from "./TestBase";
import CypressTestIds from  "../classes/CypressTestIDs";

export class SchemaSetupTest extends TestBase
{
    OpenSchemaPage()
    {
           
        //open portal
        this.OpenURL();

        //login into portal with valid creadentials         
        this.Login();

        //Open Schema Page
        cy.contains('Schema', {timeout: 8_000})
        .click();

        //Page is loaded
        cy.contains('Create', {timeout: 8_000})
        .should(this.assertBeVisible)
    }

    //Click on create button. Common function for all create activities
    ClickOnCreateButton()
    {
        //get create button
        cy.contains('Create').click();
    }

    //create schema from file
    CreateSchemaFromFile()
    {
        this.ClickOnCreateButton();

        cy.get('.ant-upload-drag-container', {timeout: 8_000})
        .should(this.assertBeVisible)
        .click();



    }

    CreateSchemaManually()
    {
        //Click on Create Schema
        this.ClickOnCreateButton();

        //Click on Define fields manually
        cy.contains('Define', {timeout: 8_000})
        .should(this.assertBeVisible)
        .click();

        //Schema Name
        cy.get('#basic_name').type('Schema Test 1')
        //Schema Description
        cy.get('#basic_description').type('Schema Test 1 Description')
        //Add Field
        cy.contains('Add')
        .click();

        cy.get('.ant-table-body')
        cy.get('[data-row-key="0"]')
    }

    CreateSchemaByCloning()
    {
        //Click on Create Schema
        this.ClickOnCreateButton();
        cy.get(this.TestIDLocator(CypressTestIds.CREATE_NEW_SCHEMA_CLONE_BUTTON))
        .click();
    }

    EditSchema()
    {

    }

    ViewSchema()
    {

    }

    ViewSchemaHistory()
    {

    }

    DeleteSchema()
    {

    }
}