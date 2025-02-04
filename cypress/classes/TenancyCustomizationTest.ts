import { TestBase } from "./TestBase";
import CypressTestIds from  "../classes/CypressTestIDs";


let image_file1: string ='Brewtopia 1.png';
let image_file2: string ='Brolly Insurance 2.png';
let image_file3: string ='SmallLogo.png';

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

    defaultColorsRgb: string[] = [
        "rgb(232,232,232)",
        "rgb(27,28,29)",
        "rgb(24,144,255)",
        "rgb(22,119,255)",
        "rgb(255,255,255)",
        "rgb(209,213,216)",
        "rgb(230,244,255)",
        "rgb(0,0,0)",
    ]

    defaultColorsHex: string[] = [
        "#E8E8E8",
        "#1B1C1D",
        "#1890FF",
        "#1677FF",
        "#FFFFFF",
        "#D1D5D8",
        "#E6F4FF",
        "#000000"
    ]

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
            .should('have.text', this.strTenancyCustomizationTitle);
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
            .should(this.assertBeVisible);

        for(let i = 0; i < this.palettes.length; i++){
            cy.colorPaletteTextInputTest(this.TestIDLocator(this.palettes[i]), color[i]);
        }

        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_SUBMIT_BUTTON))
            .click();

        //Reloading the page
        cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 10000})
        .should(this.assertBeVisible);

        cy.reload();

        cy.wait(6000);

        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_IMAGE_PREVIEW))
            .should(this.assertBeVisible);

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
            .should('have.css', 'background-color', rgbColors[0])
            .wait(200);

        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_PREVIEW_NAVIGATION_BAR))
            .should('have.css', 'background-color', rgbColors[1])
            .wait(200);

        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_PREVIEW_SELECTED_HEADER))
            .should('have.css', 'background-color', rgbColors[2])
            .wait(200);
        
        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_PREVIEW_PRIMARY_BUTTONS))
            .should('have.css', 'background-color', rgbColors[3])
            .wait(200);
        
        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_PREVIEW_FORM_BACKGROUND))
            .should('have.css', 'background-color', rgbColors[4])
            .wait(200);

        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_PREVIEW_SECONDARY_BUTTONS))
            .should('have.css', 'background-color', rgbColors[5])
            .wait(200);
        
        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_PREVIEW_SELECTED_ROW))
            .should('have.css', 'background-color', rgbColors[6])
            .wait(200);

        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_PREVIEW_LABEL_COLOR))
            .should('have.css', 'color', rgbColors[7])
            .wait(200);
    }

    UpdateTenancyCustomization(color: string[])
    {
        // cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_TEXT_INPUT_1))
        //     .should(this.assertBeVisible)
        //     .type(this.strTenancyCustomizationTenancyName, { delay: 100 })
        //     .wait(500);

        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_TEXT_INPUT_2))
            .should(this.assertBeVisible)
            .should(this.assertHaveValue, this.strTenancyCustomizationFooterSlogan2)
            .clear()
            .type(this.strTenancyCustomizationFooterSlogan1, { delay: 100 })
            .wait(500);

        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_DELETE_IMAGE_BUTTON))
            .click()
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

        //Reloading the page
        cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 10000})
        .should(this.assertBeVisible);

        cy.reload()

        cy.wait(6000);

        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_IMAGE_PREVIEW))
            .should(this.assertBeVisible);
            
        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_TEXT_INPUT_2))
            .should(this.assertHaveValue, this.strTenancyCustomizationFooterSlogan2);

        for(let i = 0; i< this.palettes.length; i++) {
            cy.get(this.TestIDLocator(this.palettes[i]))
                .should(this.assertHaveValue, color[i]);
        }
    }

    CheckValidations()
    {
        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_DELETE_IMAGE_BUTTON))
            .click()
            .wait(500);

        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_IMAGE_INPUT))
            .attachFile(image_file3, { subjectType: 'drag-n-drop'})
            .wait(500);

        cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_ERROR))
            .should(this.assertBeVisible);

        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_COLOR_PALETTE_1))
            .clear()
            .type("invalid");

        cy.get('.ant-form-item-explain-error')
            .should(this.assertBeVisible);
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

        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_TEXT_INPUT_2))
            .should(this.assertHaveValue, '');
        
        cy.get(this.TestIDLocator(CypressTestIds.TENANCY_CUSTOMIZATION_IMAGE_INPUT))
            .should(this.assertBeVisible);

        for(let i=0; i< this.palettes.length; i++) {
            cy.get(this.TestIDLocator(this.palettes[i]))
                .should(this.assertHaveValue, this.defaultColorsHex[i]);
        }
    }
}