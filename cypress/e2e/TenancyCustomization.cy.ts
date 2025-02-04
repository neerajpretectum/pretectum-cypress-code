import { TenancyCustomizationTest } from "../classes/TenancyCustomizationTest"

var blnTenancyCustomizationOpened: boolean = false;

const rgbColor: string[] = [
    'rgb(102, 194, 165)',
    'rgb(252, 141, 98)',
    'rgb(141, 160, 203)',
    'rgb(231, 138, 195)',
    'rgb(171, 216, 100)',
    'rgb(255, 217, 47)',
    'rgb(229, 196, 148)',
    'rgb(179, 179, 179)'
]

const hexColor: string[] = [
    "#66C2A5",
    "#FC8D62",
    "#8DA0CB",
    "#E78AC3",
    "#ABD864",
    "#FFD92F",
    "#E5C494",
    "#B3B3B3",
];

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
        
    });

    it('Create Tenancy Customization', () => {
        //Testing the creation of Tenancy Customization
        objTenancyCustomizationTest.CreateTenancyCustomization(hexColor);
    });

    it('Check Preview Tenancy Customization for Create', () => {
        objTenancyCustomizationTest.TenancyCustomizationPreviewUpdated(rgbColor);
    });

    it('Delete Tenancy Customization', () => {
        objTenancyCustomizationTest.DeleteTenancyCustomization();
    });
    
})