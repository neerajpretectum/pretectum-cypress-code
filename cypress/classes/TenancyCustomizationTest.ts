import { TestBase } from "./TestBase";
import CypressTestIds from  "../classes/CypressTestIDs";


let image_file1: string ='Brewtopia 1.png'

export class TenancyCustomizationTest extends TestBase {

    strTenancyCustomizationTitle: string = "Tenancy Customization";
    strTenancyCustomizationTenancyName: string = "malaymo";
    strTenancyCustomizationFooterSlogan: string = "Intelligent choice for good customer data";

    color: string[] = [
        "#66C2A5",
        "#FC8D62",
        "#8DA0CB",
        "#E78AC3",
        "#ABD864",
        "#FFD92F",
        "#E5C494",
        "#B3B3B3",
    ];
    
    

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
            .should(this.assertHaveText, this.strTenancyCustomizationTitle);
        cy.wait(6000);
    }

    CreateTenancyCustomization()
    {
        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_TEXT_INPUT_1))
            .should(this.assertBeVisible)
            .type(this.strTenancyCustomizationTenancyName, { delay: 100 })
            .wait(500);

        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_TEXT_INPUT_2))
            .should(this.assertBeVisible)
            .type(this.strTenancyCustomizationFooterSlogan, { delay: 100 })
            .wait(500);

        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_IMAGE_INPUT))
            .attachFile(image_file1, { subjectType: 'drag-n-drop'});
        
        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_IMAGE_PREVIEW))
            .should(this.assertBeVisible);

        const palettes = [
            CypressTestIds.TENANCY_CUSTOMIZATION_COLOR_PALETTE_1,
            CypressTestIds.TENANCY_CUSTOMIZATION_COLOR_PALETTE_2,
            CypressTestIds.TENANCY_CUSTOMIZATION_COLOR_PALETTE_3,
            CypressTestIds.TENANCY_CUSTOMIZATION_COLOR_PALETTE_4,
            CypressTestIds.TENANCY_CUSTOMIZATION_COLOR_PALETTE_5,
            CypressTestIds.TENANCY_CUSTOMIZATION_COLOR_PALETTE_6,
            CypressTestIds.TENANCY_CUSTOMIZATION_COLOR_PALETTE_7,
            CypressTestIds.TENANCY_CUSTOMIZATION_COLOR_PALETTE_8,
        ];

        for(let i = 0; i < palettes.length; i++){
            cy.colorPaletteTextInputTest(this.TestIDLocator(palettes[i]), this.color[i]);
        }

        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_SUBMIT_BUTTON))
            .click();

        cy.wait(6000);
    }

    TenancyCustomizationPreviewUpdated()
    {
        
    }

    DeleteTenancyCustomization()
    {
        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_RESET_BUTTON))
            .should(this.assertBeVisible)
            .click();

        cy.wait(2000);
        cy.get('.ant-modal-footer > .ant-btn-primary')
            .click();
        
        cy.wait(3000);
        
        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_RESET_BUTTON))
            .should('be.disabled');
    }
}