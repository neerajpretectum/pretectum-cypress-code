import { SchemaSetupTest } from "../classes/SchemaSetupTest";
import { TestBase } from "../classes/TestBase";

//Create LoginTest object
const oTB: TestBase = new TestBase();

const oST: SchemaSetupTest = new SchemaSetupTest();

//Open Schema Page
it.skip('Open Schema Page', () =>
{
    oST.OpenSchemaPage();
});

//Specs related to Schema Setup
describe('Schema Setup related activities', ()=> 
{
    beforeEach(() =>
    {
        oST.OpenSchemaPage();
    })

    

        it('View Dataset of a Schema', () =>
            {
                oST.ViewDataSetsOfASchema();
            })

            
    /*
    

    it('Create Schema from File Input', () =>
    {
        oST.CreateSchemaFromFileInput();
    })

    it('Create Schema from File Input Without Header Row', () =>
    {
        oST.CreateSchemaFromFileInputWHR();
    })

    it('Create Schema Manually', () =>
    {
        oST.CreateSchemaManually();
    })

    it('Create Schema by Cloning', () =>
    {
        oST.CreateSchemaByCloning();
    })

    it('Edit Schema', () =>
    {
        oST.EditSchema();
    })

    it('Schema Change History', () =>
    {
        oST.SchemaChangeHistory();
    })

    it('View Schema', () =>
    {
        oST.ViewSchema();
    })

    it('Delete a Schema', () =>
    {
        oST.DeleteSchema();
    })
        */
})

