import { TestBase } from "./TestBase";
import CypressTestIds from  '../CypressTestIds';

export class CDCDExtended extends TestBase{ 

strCDCDName: string = this.TimeStamp('CDCDN1-'); 

openCDCD(){

//open portal
    this.OpenURL();

    //login into portal with valid creadentials         
    this.Login();

    //open configuration
    cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();

    //open CDCD
    cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_CHANGEDATACAPTURE), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click()
   
    
    cy.get(this.TestIDLocator(CypressTestIds.CDC_LIST_TABLE), {timeout: 20_000})
    .should(this.assertBeVisible)


}

CDCD_Edge_Case(CDCD_name: string ='', desc: string ='',object: string ='', events: string='', destination : string='', region : string='', KS_ARN: string ='', role_ARN: string = ''){

            // helper for input fields
    const fillField = (selector: string, value: string) => {
      cy.get(selector, { timeout: 20000 }).then($el => {
        if (value === '') {
          // clear field if empty string provided
          cy.wrap($el).type('{selectall}{backspace}', { force: true })
        } else {
          cy.wrap($el).clear().type(value)
        }
      })
    }

    // helper for dropdowns
    const selectDropdown = (selector: string, value: string) => {
      if (value === '') return 

      cy.get(`${selector} .ant-select-selector`, { timeout: 20000 })
        .click({ force: true })

     
      cy.get('.ant-select-dropdown', { timeout: 10000 })
        .contains('.ant-select-item-option-content', value)
        .click()
    }

   
    cy.get(this.TestIDLocator(CypressTestIds.CDC_LIST_ADD_BUTTON), { timeout: 20000 })
      .should(this.assertBeVisible)
      .click()

   
    fillField(this.TestIDLocator(CypressTestIds.CDC_MANAGE_NAME_INPUT), CDCD_name)
    fillField(this.TestIDLocator(CypressTestIds.CDC_MANAGE_DESCRIPTION_INPUT), desc)

   
    selectDropdown(this.TestIDLocator(CypressTestIds.CDC_MANAGE_OBJECTS_SELECT), object)
    selectDropdown(this.TestIDLocator(CypressTestIds.CDC_MANAGE_EVENTS_SELECT), events)
    cy.get('body').click(0, 0); 

    // check if Destination is provided
    if (destination === '') {
      cy.log('Destination is empty, skipping dependent fields and verifying error')

      cy.get(this.TestIDLocator(CypressTestIds.CDC_MANAGE_SAVE_BUTTON), { timeout: 8000 })
        .should(this.assertBeVisible)
        .click()
  
      cy.get('.ant-form-item-explain-error', { timeout: 8000 })
        .should('be.visible')
      
    } 
    else {
   
      selectDropdown(this.TestIDLocator(CypressTestIds.CDC_MANAGE_DESTINATION_SELECT), destination) 

      fillField(this.TestIDLocator(CypressTestIds.CDC_MANAGE_KINESIS_REGION_INPUT), region )
      fillField(this.TestIDLocator(CypressTestIds.CDC_MANAGE_KINESIS_STREAM_ARN_INPUT), KS_ARN)
      fillField(this.TestIDLocator(CypressTestIds.CDC_MANAGE_KINESIS_ROLE_ARN_INPUT), role_ARN)

      cy.get(this.TestIDLocator(CypressTestIds.CDC_MANAGE_SAVE_BUTTON), { timeout: 8000 })
        .should(this.assertBeVisible)
        .click()
}

}

}