import { TestBase } from "./TestBase";
import CypressTestIds from  "../classes/CypressTestIDs";


let image_file1: string ='Brewtopia 1.png';
let image_file2: string ='Brolly Insurance 2.png';

export class TenancyCustomizationTest extends TestBase {

    strTenancyCustomizationTitle: string = "Tenancy Customization";
    strTenancyCustomizationTenancyName: string = "malaymo";
    strTenancyCustomizationFooterSlogan1: string = "Intelligent choice for good customer data";
    strTenancyCustomizationFooterSlogan2: string = "Intelligent choice for good customer data";

    palettes: string[] = [
        CypressTestIds.TENANCY_CUSTOMIZATION_COLOR_PALETTE_1,
        CypressTestIds.TENANCY_CUSTOMIZATION_COLOR_PALETTE_2,
        CypressTestIds.TENANCY_CUSTOMIZATION_COLOR_PALETTE_3,
        CypressTestIds.TENANCY_CUSTOMIZATION_COLOR_PALETTE_4,
        CypressTestIds.TENANCY_CUSTOMIZATION_COLOR_PALETTE_5,
        CypressTestIds.TENANCY_CUSTOMIZATION_COLOR_PALETTE_6,
        CypressTestIds.TENANCY_CUSTOMIZATION_COLOR_PALETTE_7,
        CypressTestIds.TENANCY_CUSTOMIZATION_COLOR_PALETTE_8,
    ];

    imgSrc = '';

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
        cy.wait(6500);
    }

    CreateTenancyCustomization(color: string[])
    {
        //The next cy.get won't have a validation because that hasn't been implemented yet
        // cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_TEXT_INPUT_1))
        //     .should(this.assertBeVisible)
        //     .clear()
        //     .type(this.strTenancyCustomizationTenancyName, { delay: 100 })
        //     .wait(500);

        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_TEXT_INPUT_2))
            .should(this.assertBeVisible)
            .clear()
            .type(this.strTenancyCustomizationFooterSlogan1, { delay: 100 })
            .wait(500);

        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_IMAGE_INPUT))
            .attachFile(image_file1, { subjectType: 'drag-n-drop'});
        
        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_IMAGE_PREVIEW))
            .should(this.assertBeVisible)
            .invoke('attr', 'src')
            .as('imageSrc');

        for(let i = 0; i < this.palettes.length; i++){
            cy.colorPaletteTextInputTest(this.TestIDLocator(this.palettes[i]), color[i]);
        }

        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_SUBMIT_BUTTON))
            .click();

        //Reloading the page
        cy.wait(6000);
        cy.reload()
        cy.wait(6000);

        cy.get('@imageSrc').then((imageSrc) => {
            cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_IMAGE_PREVIEW))
                .should('be.visible')
                .invoke('attr', 'src')
                .should('eq', imageSrc);
        })

        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_TEXT_INPUT_2))
            .should(this.assertHaveValue, this.strTenancyCustomizationFooterSlogan1);

        for(let i = 0; i< this.palettes.length; i++) {
            cy.get(this.TestIDLocator(this.palettes[i]))
                .should(this.assertHaveValue, color[i]);
        }
        
    }

    TenancyCustomizationPreviewUpdated(rgbColors: string[])
    {
        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_PREVIEW_HEADER_FOOTER))
            .should('have.css', 'background-color', rgbColors[0]);

        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_PREVIEW_NAVIGATION_BAR))
            .should('have.css', 'background-color', rgbColors[1]);

        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_PREVIEW_SELECTED_HEADER))
            .should('have.css', 'background-color', rgbColors[2]);
        
        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_PREVIEW_PRIMARY_BUTTONS))
            .should('have.css', 'background-color', rgbColors[3]);
        
        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_PREVIEW_FORM_BACKGROUND))
            .should('have.css', 'background-color', rgbColors[4]);

        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_PREVIEW_SECONDARY_BUTTONS))
            .should('have.css', 'background-color', rgbColors[5]);
        
        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_PREVIEW_SELECTED_ROW))
            .should('have.css', 'background-color', rgbColors[6]);

        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_PREVIEW_LABEL_COLOR))
            .should('have.css', 'color', rgbColors[7]);
    }

    UpdateTenancyCustomization(color: string[])
    {
        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_TEXT_INPUT_1))
            .should(this.assertBeVisible)
            .type(this.strTenancyCustomizationTenancyName, { delay: 100 })
            .wait(500);

        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_TEXT_INPUT_2))
            .should(this.assertBeVisible)
            .should(this.assertHaveText, this.strTenancyCustomizationFooterSlogan1)

            .type(this.strTenancyCustomizationFooterSlogan1, { delay: 100 })
            .wait(500);

        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_IMAGE_INPUT))
            .attachFile(image_file1, { subjectType: 'drag-n-drop'});
        
        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_IMAGE_PREVIEW))
            .should(this.assertBeVisible);

        for(let i = 0; i < this.palettes.length; i++){
            cy.colorPaletteTextInputTest(this.TestIDLocator(this.palettes[i]), color[i]);
        }

        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_SUBMIT_BUTTON))
            .click();

        cy.wait(6000);
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