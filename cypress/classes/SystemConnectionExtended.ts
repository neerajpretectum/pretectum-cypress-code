import CypressTestIds from  '../CypressTestIds';
import { TestBase } from "./TestBase";


export class SystemConnectionExtended extends TestBase{ 

strSCName: string = this.TimeStamp('SCN1-'); 
openSystemConnection(){

    //open portal
    this.OpenURL();

    //login into portal with valid creadentials         
    this.Login();

    //open configuration
    cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();

    //open System Connection
    cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_SYSTEMCONNECTIONS), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click ()

    
    cy.get(this.TestIDLocator(CypressTestIds.SYSTEM_CONNECTION_LIST_TABLE), {timeout: 20_000})
    .should(this.assertBeVisible)
    

}

connection_form(name: string='', description: string='', accessKey: string='', secretKey: string='', bucket: string='') {

    const fillField = (selector: string, value: string) => {
    cy.get(selector, { timeout: 8000 }).then($el => {
      if (value === '') {
        // empty case
        cy.wrap($el).type('{selectall}{backspace}', { force: true })
      } else {
        cy.wrap($el).clear().type(value)
      }
    })
  }

  // open form
  cy.get(this.TestIDLocator(CypressTestIds.SYSTEM_CONNECTION_LIST_ADD_BUTTON), { timeout: 20000 })
    .should(this.assertBeVisible)
    .click()

  cy.get(':nth-child(1) > :nth-child(1) > .ant-btn', { timeout: 20000 }).click()

  // fill fields using selectors (not CypressTestIds)
  fillField('#basic_name', name)
  fillField('#basic_description', description)
  fillField('#basic_accessKeyId', accessKey)
  fillField('#basic_secretAccessKey', secretKey)
  fillField('#basic_bucket', bucket)

  // click save
  cy.get('.ant-space > :nth-child(2) > .ant-btn', { timeout: 8000 }).click()
}


}