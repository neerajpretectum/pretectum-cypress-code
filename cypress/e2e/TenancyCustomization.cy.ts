import { TenancyCustomizationTest } from "../classes/TenancyCustomizationTest"

var blnTenancyCustomizationOpened: boolean = false;

const objTenancyCustomizationTest: TenancyCustomizationTest = new TenancyCustomizationTest();
// Test to see if Tenancy Customization is accessible
it.skip('Open Tenancy Customization', () => {
    objTenancyCustomizationTest.OpenTenancyCustomization();
    blnTenancyCustomizationOpened = true;
})

//If TenencyCustomization is accessible, run other test cases.
describe('Tenency Customization Activities', () => {
    beforeEach(() =>
    {
        //Opening the Tenancy Customization Page
        objTenancyCustomizationTest.OpenTenancyCustomization();
        
    })

    it('Create Tenancy Customization', () => {
        objTenancyCustomizationTest.CreateTenancyCustomization();
    })

    it('Delete Tenancy Customization', () => {
        objTenancyCustomizationTest.DeleteTenancyCustomization();
    })
    
})