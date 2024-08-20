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

    it.skip('Create Schema from File', () =>
    {
        oST.CreateSchemaFromFile();
    })

    it.skip('Create Schema Manually', () =>
    {
        oST.CreateSchemaManually();
    })

    it('Create Schema by Cloning', () =>
    {
        oST.CreateSchemaByCloning();
    })
})

