import { TestBase } from "./TestBase";
import CypressTestIds from  "../classes/CypressTestIDs";


let image_file1: string ='Brewtopia 1.png'

export class TenancyCustomizationTest extends TestBase {

    strTenancyCustomizationTitle: string = "Tenancy Customization";
    strTenancyCustomizationTenancyName: string = "malaymo";
    strTenancyCustomizationFooterSlogan: string = "Intelligent choice for good customer data";
    strTenancyCustomizationColorPallete1: string = "#1B1725";
    

    OpenTenancyCustomization()
    {
        cy.viewport(1920, 1080);

        this.OpenURL();

        this.Login();

        cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20000})
            .should(this.assertBeVisible)
            .click();

        cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_TENANCYCUSTOMIZATION))
            .should(this.assertBeVisible)
            .click();

        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_TITLE_TEXT))
            .should(this.assertHaveText, this.strTenancyCustomizationTitle)
    }

    CreateTenancyCustomization()
    {
        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_TEXT_INPUT_1))
            .should(this.assertBeVisible)
            .type(this.strTenancyCustomizationTenancyName, {});

        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_TEXT_INPUT_2))
            .should(this.assertBeVisible)
            .type(this.strTenancyCustomizationFooterSlogan, {})

        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_IMAGE_INPUT))
            .attachFile(image_file1, { subjectType: 'drag-n-drop'});
        
        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_IMAGE_PREVIEW))
            .should(this.assertBeVisible);

        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_COLOR_PALETTE_1))
            .should(this.assertBeVisible)
            .clear()
            .type(this.strTenancyCustomizationColorPallete1)

        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_COLOR_PALETTE_2))
            .should(this.assertBeVisible)
            .clear()
            .type(this.strTenancyCustomizationColorPallete1)

        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_COLOR_PALETTE_3))
            .should(this.assertBeVisible)
            .clear()
            .type(this.strTenancyCustomizationColorPallete1)

        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_COLOR_PALETTE_4))
            .should(this.assertBeVisible)
            .clear()
            .type(this.strTenancyCustomizationColorPallete1)

        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_COLOR_PALETTE_5))
            .should(this.assertBeVisible)
            .clear()
            .type(this.strTenancyCustomizationColorPallete1)

        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_COLOR_PALETTE_6))
            .should(this.assertBeVisible)
            .clear()
            .type(this.strTenancyCustomizationColorPallete1)

        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_COLOR_PALETTE_7))
            .should(this.assertBeVisible)
            .clear()
            .type(this.strTenancyCustomizationColorPallete1)

        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_COLOR_PALETTE_8))
            .should(this.assertBeVisible)
            .clear()
            .type(this.strTenancyCustomizationColorPallete1)


        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_GENERATE_PREVIEW_BUTTON))
            .click();
    }
}