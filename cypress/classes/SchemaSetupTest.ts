import { TestBase } from "./TestBase";
import CypressTestIds from  "../classes/CypressTestIDs";

export class SchemaSetupTest extends TestBase
{
    strSchemaNameFile: string = this.TimeStamp('SNF-');
    strSchemaNameDragDrop: string = this.TimeStamp('SNDD-');
    strSchemaNameManual: string = this.TimeStamp('SNM-');
    strSchemaNameClone: string = this.TimeStamp('SNC-');
    strDescription: string = ' Description';

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
        cy.contains('Create', {timeout: 16_000})
        .should(this.assertBeVisible)

        cy.get('[data-testid="schema-list-table"]', {timeout: 8_000})
        .should(this.assertBeVisible)

    }

    //Click on create button. Common function for all create activities
    ClickOnCreateButton()
    {
        //get create button
        cy.contains('Create').click();
    }

    //create schema from file
    CreateSchemaFromFileInput()
    {
        this.ClickOnCreateButton();
/*
        cy.get(this.TestIDLocator(CypressTestIds.UPLOAD_SCHEMA_FILE_INPUT_ICON_BUTTON), {timeout: 8_000})
        .click({force:true});
*/
        
        cy.get(this.TestIDLocator(CypressTestIds.UPLOAD_SCHEMA_FILE_INPUT), {timeout: 8_000})
        .attachFile('countriesFixtures.csv');

        //cy.get('[data-cy="dropzone"]')
  //.attachFile('myfixture.json', { subjectType: 'drag-n-drop' });

        cy.get(this.TestIDLocator(CypressTestIds.UPLOAD_SCHEMA_NEXT_BUTTON), {timeout: 8_000})
        .should(this.assertBeVisible)
        .click()

        cy.get(this.TestIDLocator(CypressTestIds.MANAGE_SCHEMA_MODEL_NAME_INPUT), {timeout: 8_000})
        .should(this.assertBeVisible)
        .clear()
        .type(this.strSchemaNameFile)

        cy.get(this.TestIDLocator(CypressTestIds.MANAGE_SCHEMA_MODEL_DESCRIPTION_INPUT))
        .clear()
        .type(this.strSchemaNameFile + this.strDescription)

        cy.get(this.TestIDLocator(CypressTestIds.MANAGE_SCHEMA_MODEL_SAVE_AS_DRAFT_BUTTON))
        .should(this.assertBeVisible)
        .click()
        
        cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
        .should(this.assertBeVisible)
    }

    //create schema from file
    CreateSchemaFromFileDragDrop()
    {
        this.ClickOnCreateButton();
/*
        cy.get(this.TestIDLocator(CypressTestIds.UPLOAD_SCHEMA_FILE_INPUT_ICON_BUTTON), {timeout: 8_000})
        .click({force:true});
*/
        
        cy.get(this.TestIDLocator(CypressTestIds.UPLOAD_SCHEMA_FILE_INPUT), {timeout: 8_000})
        .attachFile('countriesFixtures.csv', { subjectType: 'drag-n-drop' });

        cy.get(this.TestIDLocator(CypressTestIds.UPLOAD_SCHEMA_NEXT_BUTTON), {timeout: 8_000})
        .should(this.assertBeVisible)
        .click()

        cy.get(this.TestIDLocator(CypressTestIds.MANAGE_SCHEMA_MODEL_NAME_INPUT), {timeout: 8_000})
        .should(this.assertBeVisible)
        .clear()
        .type(this.strSchemaNameDragDrop)

        cy.get(this.TestIDLocator(CypressTestIds.MANAGE_SCHEMA_MODEL_DESCRIPTION_INPUT))
        .clear()
        .type(this.strSchemaNameDragDrop  + this.strDescription)

        cy.get(this.TestIDLocator(CypressTestIds.MANAGE_SCHEMA_MODEL_SAVE_AS_DRAFT_BUTTON))
        .should(this.assertBeVisible)
        .click()
        
        cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
        .should(this.assertBeVisible)
    }

    CreateSchemaManually()
    {
        var intRowCount = 0;
        var strRowID = "";

        //Click on Create Schema
        this.ClickOnCreateButton();

        //Click on Define fields manually
        cy.contains('Define', {timeout: 8_000})
        .should(this.assertBeVisible)
        .click();

        //Schema Name
        cy.get(this.TestIDLocator(CypressTestIds.MANAGE_SCHEMA_MODEL_NAME_INPUT), {timeout: 8_000})
        .clear()
        .type(this.strSchemaNameManual)
        
        //Schema Description
        cy.get(this.TestIDLocator(CypressTestIds.MANAGE_SCHEMA_MODEL_DESCRIPTION_INPUT), {timeout: 8_000})
        .clear()
        .type(this.strSchemaNameManual  + this.strDescription)

        

        /*
        CypressTestIds.SCHEMA_FIELD_NAME_INPUT
        CypressTestIds.SCHEMA_FIELD_DESCRIPTION_INPUT
        CypressTestIds.SCHEMA_FIELD_ISREQUIRED_CHECKBOX
        CypressTestIds.SCHEMA_FIELD_DELETE_BUTTON
        CypressTestIds.SCHEMA_FIELD_ISPRIMARY_CHECKBOX
        CypressTestIds.SCHEMA_FIELD_ISSORTKEY_CHECKBOX
        CypressTestIds.SCHEMA_FIELD_ISACTIVE_CHECKBOX
        CypressTestIds.SCHEMA_FIELD_DATATYPE_SELECT
        */

        var genArr = Array.from({length:5},(v,k)=>k+1)
        //cy.wrap(genArr).each((index) => {

        //Row 1

        cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_ADD_BUTTON))
            .click();
        
        //IsPrimary
        cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
        .find('[data-row-key="' + intRowCount.toString() + '"]')
        .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_ISPRIMARY_CHECKBOX)))
        .check()

        //IsSortKey
        cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
        .find('[data-row-key="' + intRowCount.toString() + '"]')
        .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_ISSORTKEY_CHECKBOX)))
        .check()

        //IsActive
        cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
        .find('[data-row-key="' + intRowCount.toString() + '"]')
        .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_ISACTIVE_CHECKBOX)))
        .check()
        
        //field name
        cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE), {timeout:8_000})
        .find('[data-row-key="' + intRowCount.toString() + '"]')
        .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_NAME_INPUT)))
        .type('Na' + (intRowCount+1).toString())

        //field description
        cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
        .find('[data-row-key="' + intRowCount.toString() + '"]')
        .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_DESCRIPTION_INPUT)))
        .type('Des' + (intRowCount+1).toString())

        //DataType
        // cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
        // .find('[data-row-key="' + intRowCount.toString() + '"]')
        // .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_DATATYPE_SELECT)))

        strRowID = '[data-row-key="' + intRowCount.toString() + '"]';
        this.selectDropdownFromATableRow(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE), strRowID, (this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_DATATYPE_SELECT)), "Float")

        //IsRequired
        cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
        .find('[data-row-key="' + intRowCount.toString() + '"]')
        .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_ISREQUIRED_CHECKBOX)))
        .check()

        //Delete
        cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
        .find('[data-row-key="' + intRowCount.toString() + '"]')
        .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_DELETE_BUTTON)))
        

        intRowCount= intRowCount+1;

        

        //Row 2

        cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_ADD_BUTTON))
            .click();
        
        //IsPrimary
        cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
        .find('[data-row-key="' + intRowCount.toString() + '"]')
        .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_ISPRIMARY_CHECKBOX)))
        //.check()

        //IsSortKey
        cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
        .find('[data-row-key="' + intRowCount.toString() + '"]')
        .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_ISSORTKEY_CHECKBOX)))
        .check()

        //IsActive
        cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
        .find('[data-row-key="' + intRowCount.toString() + '"]')
        .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_ISACTIVE_CHECKBOX)))
        .check()
        
        //field name
        cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE), {timeout:8_000})
        .find('[data-row-key="' + intRowCount.toString() + '"]')
        .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_NAME_INPUT)))
        .type('Na' + (intRowCount+1).toString())

        //field description
        cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
        .find('[data-row-key="' + intRowCount.toString() + '"]')
        .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_DESCRIPTION_INPUT)))
        .type('Des' + (intRowCount+1).toString())

                //DataType
        // cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
        // .find('[data-row-key="' + intRowCount.toString() + '"]')
        // .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_DATATYPE_SELECT)))

        strRowID = '[data-row-key="' + intRowCount.toString() + '"]';
        this.selectDropdownFromATableRow(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE), strRowID, (this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_DATATYPE_SELECT)), "Email")

        //IsRequired
        cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
        .find('[data-row-key="' + intRowCount.toString() + '"]')
        .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_ISREQUIRED_CHECKBOX)))
        .check()

        //Delete
        cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
        .find('[data-row-key="' + intRowCount.toString() + '"]')
        .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_DELETE_BUTTON)))
        

        intRowCount= intRowCount+1;

        //Row 3

        cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_ADD_BUTTON))
            .click();
        
        //IsPrimary
        cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
        .find('[data-row-key="' + intRowCount.toString() + '"]')
        .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_ISPRIMARY_CHECKBOX)))
        //.check()

        //IsSortKey
        cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
        .find('[data-row-key="' + intRowCount.toString() + '"]')
        .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_ISSORTKEY_CHECKBOX)))
        .check()

        //IsActive
        cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
        .find('[data-row-key="' + intRowCount.toString() + '"]')
        .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_ISACTIVE_CHECKBOX)))
        .check()
        
        //field name
        cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE), {timeout:8_000})
        .find('[data-row-key="' + intRowCount.toString() + '"]')
        .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_NAME_INPUT)))
        .type('Na' + (intRowCount+1).toString())

        //field description
        cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
        .find('[data-row-key="' + intRowCount.toString() + '"]')
        .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_DESCRIPTION_INPUT)))
        .type('Des' + (intRowCount+1).toString())

        //DataType
        // cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
        // .find('[data-row-key="' + intRowCount.toString() + '"]')
        // .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_DATATYPE_SELECT)))

        strRowID = '[data-row-key="' + intRowCount.toString() + '"]';
        this.selectDropdownFromATableRow(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE), strRowID, (this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_DATATYPE_SELECT)), "Phone")

        //IsRequired
        cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
        .find('[data-row-key="' + intRowCount.toString() + '"]')
        .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_ISREQUIRED_CHECKBOX)))
        .check()

        //Delete
        cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
        .find('[data-row-key="' + intRowCount.toString() + '"]')
        .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_DELETE_BUTTON)))
        

        intRowCount= intRowCount+1;


        //Row 4

        cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_ADD_BUTTON))
            .click();
        
        //IsPrimary
        cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
        .find('[data-row-key="' + intRowCount.toString() + '"]')
        .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_ISPRIMARY_CHECKBOX)))
        //.check()

        //IsSortKey
        cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
        .find('[data-row-key="' + intRowCount.toString() + '"]')
        .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_ISSORTKEY_CHECKBOX)))
        .check()

        //IsActive
        cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
        .find('[data-row-key="' + intRowCount.toString() + '"]')
        .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_ISACTIVE_CHECKBOX)))
        .check()
        
        //field name
        cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE), {timeout:8_000})
        .find('[data-row-key="' + intRowCount.toString() + '"]')
        .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_NAME_INPUT)))
        .type('Na' + (intRowCount+1).toString())

        //field description
        cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
        .find('[data-row-key="' + intRowCount.toString() + '"]')
        .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_DESCRIPTION_INPUT)))
        .type('Des' + (intRowCount+1).toString())

        //DataType
        // cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
        // .find('[data-row-key="' + intRowCount.toString() + '"]')
        // .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_DATATYPE_SELECT)))

        strRowID = '[data-row-key="' + intRowCount.toString() + '"]';
        this.selectDropdownFromATableRow(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE), strRowID, (this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_DATATYPE_SELECT)), "String")

        //IsRequired
        cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
        .find('[data-row-key="' + intRowCount.toString() + '"]')
        .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_ISREQUIRED_CHECKBOX)))
        .check()

        //Delete
        cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
        .find('[data-row-key="' + intRowCount.toString() + '"]')
        .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_DELETE_BUTTON)))
        

        intRowCount= intRowCount+1;


        //Row 5

        cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_ADD_BUTTON))
            .click();
        
        //IsPrimary
        cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
        .find('[data-row-key="' + intRowCount.toString() + '"]')
        .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_ISPRIMARY_CHECKBOX)))
        //.check()

        //IsSortKey
        cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
        .find('[data-row-key="' + intRowCount.toString() + '"]')
        .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_ISSORTKEY_CHECKBOX)))
        .check()

        //IsActive
        cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
        .find('[data-row-key="' + intRowCount.toString() + '"]')
        .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_ISACTIVE_CHECKBOX)))
        .check()
        
        //field name
        cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE), {timeout:8_000})
        .find('[data-row-key="' + intRowCount.toString() + '"]')
        .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_NAME_INPUT)))
        .type('Na' + (intRowCount+1).toString())

        //field description
        cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
        .find('[data-row-key="' + intRowCount.toString() + '"]')
        .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_DESCRIPTION_INPUT)))
        .type('Des' + (intRowCount+1).toString())

        //DataType
        // cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
        // .find('[data-row-key="' + intRowCount.toString() + '"]')
        // .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_DATATYPE_SELECT)))

        strRowID = '[data-row-key="' + intRowCount.toString() + '"]';
        this.selectDropdownFromATableRow(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE), strRowID, (this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_DATATYPE_SELECT)), "URL")
        //IsRequired
        cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
        .find('[data-row-key="' + intRowCount.toString() + '"]')
        .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_ISREQUIRED_CHECKBOX)))
        .check()

        //Delete
        cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
        .find('[data-row-key="' + intRowCount.toString() + '"]')
        .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_DELETE_BUTTON)))
        .click()

        //intRowCount= intRowCount+1;


        //
        //})

        for(intRowCount=0; intRowCount++; intRowCount<=7)
        {
            //Add Field Row
            
            
                cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_ADD_BUTTON))
                .click();
            
            
            //field name
            cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
            .eq(intRowCount)
            .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_NAME_INPUT)))
            .type('Field Name - ' + intRowCount.toString())


            //field description
            cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_TABLE))
            .eq(intRowCount)
            .find((this.TestIDLocator(CypressTestIds.SCHEMA_FIELD_DESCRIPTION_INPUT)))
            .type('Field Description - ' + intRowCount.toString())
        //
        }
        //cy.get('[data-row-key="0"]')
    }

    CreateSchemaByCloning()
    {
        //Click on Create Schema
        this.ClickOnCreateButton();
        cy.get(this.TestIDLocator(CypressTestIds.CREATE_NEW_SCHEMA_CLONE_BUTTON), {timeout: 8_000})
        .click();

        //cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_CREATE_NEW_SCHEMA_CLONE_SCHEMA_TREE))
        //.children(0)
        cy.get(':nth-child(1) > .ant-tree-checkbox > .ant-tree-checkbox-inner',  {timeout: 16_000})
        .should('be.visible')
        .click()
        cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_CREATE_NEW_SCHEMA_CLONE_SCHEMA_NAME_INPUT))
        .type(this.strSchemaNameClone)
        cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_CREATE_NEW_SCHEMA_CLONE_SCHEMA_DESC_INPUT))
        .type(this.strSchemaNameClone  + this.strDescription)


        cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_CREATE_NEW_SCHEMA_CLONE_SCHEMA_CREATE_BUTTON), {timeout: 8_000})
        .should('be.enabled')
        .click()
        cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
        cy.get('[data-testid="schema-list-table"]', {timeout: 8_000})
        .should(this.assertBeVisible)
        .should('not.have.text', 'Clone 1')
    }

    EditSchema()
    {
        cy.contains(this.strSchemaNameFile, {timeout: 20_000})
        .parent(this.TD)
        .parent(this.TR)
        .find(this.TestIDLocator(CypressTestIds.SCHEMA_LIST_EDIT_BUTTON))
        .click({});
        
        
        /*
            cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_LIST_TABLE), {timeout: 20_000})
            .eq(0)
            .find((this.TestIDLocator(CypressTestIds.SCHEMA_LIST_EDIT_BUTTON)))
            .click()

            cy.get(this.TestIDLocator(CypressTestIds.SCHEMA_LIST_TABLE).find("tr").find("td").contains("Germany");
        */
    }

    ViewSchema()
    {
        cy.contains(this.strSchemaNameFile, {timeout: 20_000})
        .parent(this.TD)
        .parent(this.TR)
        .find(this.TestIDLocator(CypressTestIds.SCHEMA_LIST_VIEW_BUTTON))
        .click();
        cy.get('[data-testid="manage-schema-model-name-input"]', {timeout: 8_000})
        .should(this.assertHaveValue, this.strSchemaNameFile)
        
        //get the cancel button
        cy.get('[data-testid="manage-schema-model-cancel-button"]')
        .click()
        //get back to the schema list and find the table
        cy.get('[data-testid="schema-list-table"]', {timeout: 8_000})
        .should(this.assertBeVisible)
        //throw new Error("test fails here")
    }

    SchemaChangeHistory()
    {
        cy.contains(this.strSchemaNameFile, {timeout: 20_000})
        .parent(this.TD)
        .parent(this.TR)
        .find(this.TestIDLocator(CypressTestIds.SCHEMA_LIST_CHANGE_HISTORY_BUTTON))
        .click();
        cy.get(this.TestIDLocator(CypressTestIds.COMMON_OBJECTS_EVENT_LIST_TABLE), {timeout: 8_000})
        cy.get('#rc-tabs-0-tab-2')
        .click()
        //Find Revisions table
        
        cy.get(this.TestIDLocator(CypressTestIds.COMMON_OBJECTS_REVISIONS_LIST_TABLE))
    }

    DeleteSchema()
    {
        cy.contains(this.strSchemaNameFile, {timeout: 20_000})
        .parent(this.TD)
        .parent(this.TR)
        .find(this.TestIDLocator(CypressTestIds.SCHEMA_LIST_DELETE_BUTTON))
        .click();
        // confirmation message
        cy.get(this.TestIDLocator(CypressTestIds.CONFIRMATION_BOX_OK_BUTTON), {timeout: 8_000})
        .should(this.assertBeVisible)
        .click()
        cy.get('[data-testid="schema-list-table"]', {timeout: 8_000})
        .should(this.assertBeVisible)
        .should('not.have.text', this.strSchemaNameFile)
    }
}