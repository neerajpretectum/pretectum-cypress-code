import CypressTestIds from  '../CypressTestIds';
import { TestBase } from "./TestBase";
import dayjs from 'dayjs';
/*const today = dayjs();

//  Time (same for both validFrom and validUntil)
const baseTime = today.add(30, 'minute');
const hour = baseTime.format('HH');
const minute = baseTime.format('mm');
const second = baseTime.format('ss');

//  Valid From Date
const validFromDay = baseTime.date();
const validFromDateOnly = String(validFromDay);

const nextMonth = today.add(1, 'month');
const maxDayInNextMonth = nextMonth.endOf('month').date();
const safeUntilDay = Math.min(validFromDay, maxDayInNextMonth);

// This is the true validUntil Day.js object
const validUntil = nextMonth.date(safeUntilDay);

//  Optionally format for selector
const validUntilDay = validUntil.date(); // number
const validUntilDateOnly = String(validUntilDay);*/

export class SyndicationSourceExtended extends TestBase{ 

strSSN: string = this.TimeStamp('SSN');

   hour: string;
  minute: string;
  second: string;
  validFromDateOnly: string;
  validUntilDateOnly: string;

 constructor() {
  super();
  const today = dayjs();

  
  // Valid From = now + 30 minutes
  const baseTime = today.add(30, "minute");
  this.hour = baseTime.format('HH');
  this.minute = baseTime.format('mm');
  this.second = baseTime.format('ss');
  this.validFromDateOnly = baseTime.format('D'); 
 

  // Valid Until = same day next month (safe day rollover)
  const nextMonth = today.add(1, "month");
  const safeUntilDay = Math.min(baseTime.date(), nextMonth.endOf("month").date());
  const validUntil = nextMonth.date(safeUntilDay).hour(baseTime.hour()).minute(baseTime.minute()).second(baseTime.second());

  this.validUntilDateOnly = baseTime.format('D');

}


openSyndicationSource(){

//open portal
    this.OpenURL();

    //login into portal with valid creadentials         
    this.Login();

    //open configuration
    cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();

    //open Syndication Source
    cy.get('[data-testid="vertical-menu-configuration-syndicationsource"] > .ant-menu-title-content', {timeout: 20_000})
    .should(this.assertBeVisible)
    .click ()
   
    cy.get('.ant-btn > :nth-child(2)', {timeout: 20_000})
    .should(this.assertBeVisible)

}

SS_Edge_Cases(SS_Name: string='', SS_Purpose: string='', SS_BA: string='',SS_S: string ='',shareDataset: boolean = false,
  DSDD: string = '',SI: string = '',SU: string = '',VF: string = '',VU: string = '',enableSwitch: boolean = true,){



  // helper: fill text input
  const fillField = (selector: string, value: string) => {
    cy.get(selector, { timeout: 8000 }).then($el => {
      if (value === '') {
        cy.wrap($el).type('{selectall}{backspace}', { force: true })
      } else {
        cy.wrap($el).clear().type(value)
      }
    })
  }


const selectDropdown = (selector: string, value: string) => {
  if (!value) return;


  cy.get(selector, { timeout: 20000 })
    .closest('.ant-select')
    .find('.ant-select-selector')
    .click({ force: true });

 
  cy.get('body').contains('.ant-select-item-option-content', value, { timeout: 20000 })
    .scrollIntoView() 
    .click({ force: true });
};


  // helper: checkbox
  const setCheckbox = (selector: string, checked: boolean) => {
    cy.get(selector, { timeout: 8000 }).then($el => {
      if (checked) cy.wrap($el).check({ force: true })
      else cy.wrap($el).uncheck({ force: true })
    })
  }

  // helper: switch
  const setSwitch = (selector: string, on: boolean) => {
    cy.get(selector, { timeout: 8000 }).then($el => {
      const isOn = $el.hasClass('ant-switch-checked')
      if (on && !isOn) cy.wrap($el).click()
      if (!on && isOn) cy.wrap($el).click()
    })
  }



  // open "Add Syndication Source"
  cy.get('.ant-btn > :nth-child(2)', {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();

  // fill fields
  fillField(this.TestIDLocator(CypressTestIds.SYNDICATION_SOURCE_MANAGE_NAME_INPUT), SS_Name)
  fillField(this.TestIDLocator(CypressTestIds.SYNDICATION_SOURCE_MANAGE_PURPOSE_INPUT), SS_Purpose)

  // dropdowns
  selectDropdown('#basic_businessAreaId', SS_BA)
  selectDropdown('#basic_schemaId', SS_S)

  // checkbox (share dataset)
  setCheckbox('#basic_shareDataset', shareDataset)


  // scheduling
  fillField(this.TestIDLocator(CypressTestIds.SYNDICATION_SOURCE_MANAGE_SCHEDULING_INTERVAL_INPUT), SI)
  selectDropdown(this.TestIDLocator(CypressTestIds.SYNDICATION_SOURCE_MANAGE_SCHEDULING_UNIT_SELECT), SU)
 

  cy.get(this.TestIDLocator(CypressTestIds.SYNDICATION_SOURCE_MANAGE_VALID_FROM_CALENDAR), {timeout: 20_000}).click();

  cy.get('.ant-picker-dropdown', {timeout: 8_000})
    .should('exist')
    .should(this.assertBeVisible);

  cy.get('.ant-picker-dropdown .ant-picker-body', {timeout: 8_000})
    .should(this.assertBeVisible);

   //Select your date 
    cy.get('.ant-picker-dropdown', {timeout: 8_000})
    .find('.ant-picker-cell-in-view .ant-picker-cell-inner')  
    .contains('.ant-picker-cell-inner', new RegExp(`^${VF}$`), { timeout: 20000 })
    .click();

  cy.get('.ant-picker-time-panel-column', {timeout: 8_000}).eq(0).contains(new RegExp(`^${this.hour}$`)).click();
  cy.get('.ant-picker-time-panel-column', {timeout: 8_000}).eq(1).contains(new RegExp(`^${this.minute}$`)).click();
  cy.get('.ant-picker-time-panel-column', {timeout: 8_000}).eq(2).contains(new RegExp(`^${this.second}$`)).click();

  cy.get('.ant-picker-ok button', {timeout: 8_000}).last().click();

  cy.get(this.TestIDLocator(CypressTestIds.SYNDICATION_SOURCE_MANAGE_VALID_UNTIL_CALENDAR), {timeout: 20_000}).click();

  cy.get('.ant-picker-dropdown',{timeout:20000})
        .filter(':visible')
        .should('exist')
 
   .within(() => {  

        cy.get('.ant-picker-header-next-btn',{timeout:20000})
        .click();

        cy.get('.ant-picker-cell-inner',{timeout:20000})
        .contains(new RegExp(`^${VU}$`), {timeout: 20_000})
        .click();

        cy.get('.ant-picker-time-panel-column', {timeout: 20_000}).eq(0).contains(new RegExp(`^${this.hour}$`)).click();
        cy.get('.ant-picker-time-panel-column', {timeout: 20_000}).eq(1).contains(new RegExp(`^${this.minute}$`)).click();
        cy.get('.ant-picker-time-panel-column', {timeout: 20_000}).eq(2).contains(new RegExp(`^${this.second}$`)).click();

        cy.get('.ant-picker-ok button', {timeout: 20_000}).click();
    });

  
  // switch
  setSwitch(this.TestIDLocator(CypressTestIds.SYNDICATION_SOURCE_MANAGE_ENABLED_SWITCH), enableSwitch)

  // save
  cy.get(this.TestIDLocator(CypressTestIds.SYNDICATION_SOURCE_MANAGE_SAVE_BUTTON), { timeout: 20000 })
    .should(this.assertBeVisible)
    .click()
}


invalid_valid_Until(SS_Name: string='', SS_Purpose: string='', SS_BA: string='',SS_S: string ='',shareDataset: boolean = false,
  DSDD: string = '',SI: string = '',SU: string = '',VF: string = '',VU: string = '',enableSwitch: boolean = true,){

// helper: fill text input
  const fillField = (selector: string, value: string) => {
    cy.get(selector, { timeout: 8000 }).then($el => {
      if (value === '') {
        cy.wrap($el).type('{selectall}{backspace}', { force: true })
      } else {
        cy.wrap($el).clear().type(value)
      }
    })
  }


const selectDropdown = (selector: string, value: string) => {
  if (!value) return;


  cy.get(selector, { timeout: 20000 })
    .closest('.ant-select')
    .find('.ant-select-selector')
    .click({ force: true });

 
  cy.get('body').contains('.ant-select-item-option-content', value, { timeout: 20000 })
    .scrollIntoView() 
    .click({ force: true });
};


  // helper: checkbox
  const setCheckbox = (selector: string, checked: boolean) => {
    cy.get(selector, { timeout: 8000 }).then($el => {
      if (checked) cy.wrap($el).check({ force: true })
      else cy.wrap($el).uncheck({ force: true })
    })
  }

  // helper: switch
  const setSwitch = (selector: string, on: boolean) => {
    cy.get(selector, { timeout: 8000 }).then($el => {
      const isOn = $el.hasClass('ant-switch-checked')
      if (on && !isOn) cy.wrap($el).click()
      if (!on && isOn) cy.wrap($el).click()
    })
  }



  // open "Add Syndication Source"
  cy.get('.ant-btn > :nth-child(2)', {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();

  // fill fields
  fillField(this.TestIDLocator(CypressTestIds.SYNDICATION_SOURCE_MANAGE_NAME_INPUT), SS_Name)
  fillField(this.TestIDLocator(CypressTestIds.SYNDICATION_SOURCE_MANAGE_PURPOSE_INPUT), SS_Purpose)

  // dropdowns
  selectDropdown('#basic_businessAreaId', SS_BA)
  selectDropdown('#basic_schemaId', SS_S)

  // checkbox (share dataset)
  setCheckbox('#basic_shareDataset', shareDataset)


  // scheduling
  fillField(this.TestIDLocator(CypressTestIds.SYNDICATION_SOURCE_MANAGE_SCHEDULING_INTERVAL_INPUT), SI)
  selectDropdown(this.TestIDLocator(CypressTestIds.SYNDICATION_SOURCE_MANAGE_SCHEDULING_UNIT_SELECT), SU)
 

cy.get(this.TestIDLocator(CypressTestIds.SYNDICATION_SOURCE_MANAGE_VALID_FROM_CALENDAR), {timeout: 20_000}).click();

  cy.get('.ant-picker-dropdown', {timeout: 8_000})
    .should('exist')
    .should(this.assertBeVisible);

  cy.get('.ant-picker-dropdown .ant-picker-body', {timeout: 8_000})
    .should(this.assertBeVisible);

   //Select your date 
    cy.get('.ant-picker-dropdown', {timeout: 8_000})
    .find('.ant-picker-cell-in-view .ant-picker-cell-inner')  
    .contains('.ant-picker-cell-inner', new RegExp(`^${VF}$`), { timeout: 20000 })
    .click();

  cy.get('.ant-picker-time-panel-column', {timeout: 8_000}).eq(0).contains(new RegExp(`^${this.hour}$`)).click();
  cy.get('.ant-picker-time-panel-column', {timeout: 8_000}).eq(1).contains(new RegExp(`^${this.minute}$`)).click();
  cy.get('.ant-picker-time-panel-column', {timeout: 8_000}).eq(2).contains(new RegExp(`^${this.second}$`)).click();

  cy.get('.ant-picker-ok button', {timeout: 8_000}).last().click();

  

  cy.get(this.TestIDLocator(CypressTestIds.SYNDICATION_SOURCE_MANAGE_VALID_UNTIL_CALENDAR), {timeout: 20_000})
   .type(VU)
  .click();
  

  
  // switch
  setSwitch(this.TestIDLocator(CypressTestIds.SYNDICATION_SOURCE_MANAGE_ENABLED_SWITCH), enableSwitch)

  // save
  cy.get(this.TestIDLocator(CypressTestIds.SYNDICATION_SOURCE_MANAGE_SAVE_BUTTON), { timeout: 20000 })
    .should(this.assertBeVisible)
    .click()

  cy.get('.ant-form-item-explain-error')
  .should(this.assertBeVisible)


  
}
invalid_valid_from(SS_Name: string='', SS_Purpose: string='', SS_BA: string='',SS_S: string ='',shareDataset: boolean = false,
  DSDD: string = '',SI: string = '',SU: string = '',VF: string = '',VU: string = '',enableSwitch: boolean = true,){

// helper: fill text input
  const fillField = (selector: string, value: string) => {
    cy.get(selector, { timeout: 8000 }).then($el => {
      if (value === '') {
        cy.wrap($el).type('{selectall}{backspace}', { force: true })
      } else {
        cy.wrap($el).clear().type(value)
      }
    })
  }


const selectDropdown = (selector: string, value: string) => {
  if (!value) return;


  cy.get(selector, { timeout: 20000 })
    .closest('.ant-select')
    .find('.ant-select-selector')
    .click({ force: true });

 
  cy.get('body').contains('.ant-select-item-option-content', value, { timeout: 20000 })
    .scrollIntoView() 
    .click({ force: true });
};


  // helper: checkbox
  const setCheckbox = (selector: string, checked: boolean) => {
    cy.get(selector, { timeout: 8000 }).then($el => {
      if (checked) cy.wrap($el).check({ force: true })
      else cy.wrap($el).uncheck({ force: true })
    })
  }

  // helper: switch
  const setSwitch = (selector: string, on: boolean) => {
    cy.get(selector, { timeout: 8000 }).then($el => {
      const isOn = $el.hasClass('ant-switch-checked')
      if (on && !isOn) cy.wrap($el).click()
      if (!on && isOn) cy.wrap($el).click()
    })
  }



  // open "Add Syndication Source"
  cy.get('.ant-btn > :nth-child(2)', {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();

  // fill fields
  fillField(this.TestIDLocator(CypressTestIds.SYNDICATION_SOURCE_MANAGE_NAME_INPUT), SS_Name)
  fillField(this.TestIDLocator(CypressTestIds.SYNDICATION_SOURCE_MANAGE_PURPOSE_INPUT), SS_Purpose)

  // dropdowns
  selectDropdown('#basic_businessAreaId', SS_BA)
  selectDropdown('#basic_schemaId', SS_S)

  // checkbox (share dataset)
  setCheckbox('#basic_shareDataset', shareDataset)


  // scheduling
  fillField(this.TestIDLocator(CypressTestIds.SYNDICATION_SOURCE_MANAGE_SCHEDULING_INTERVAL_INPUT), SI)
  selectDropdown(this.TestIDLocator(CypressTestIds.SYNDICATION_SOURCE_MANAGE_SCHEDULING_UNIT_SELECT), SU)
 

  cy.get(this.TestIDLocator(CypressTestIds.SYNDICATION_SOURCE_MANAGE_VALID_FROM_CALENDAR), {timeout: 20_000})
  .type(VF)
  .click();

  

  cy.get(this.TestIDLocator(CypressTestIds.SYNDICATION_SOURCE_MANAGE_VALID_UNTIL_CALENDAR), {timeout: 20_000}).click();

  cy.get('.ant-picker-dropdown',{timeout:20000})
        .filter(':visible')
        .should('exist')
 
   .within(() => {  

        cy.get('.ant-picker-header-next-btn',{timeout:20000})
        .click({force:true});

        cy.get('.ant-picker-cell-inner',{timeout:20000})
        .contains(new RegExp(`^${VU}$`), {timeout: 20_000})
        .click();

        cy.get('.ant-picker-time-panel-column', {timeout: 20_000}).eq(0).contains(new RegExp(`^${this.hour}$`)).click();
        cy.get('.ant-picker-time-panel-column', {timeout: 20_000}).eq(1).contains(new RegExp(`^${this.minute}$`)).click();
        cy.get('.ant-picker-time-panel-column', {timeout: 20_000}).eq(2).contains(new RegExp(`^${this.second}$`)).click();

        cy.get('.ant-picker-ok button', {timeout: 20_000}).click();
    });

  
  // switch
  setSwitch(this.TestIDLocator(CypressTestIds.SYNDICATION_SOURCE_MANAGE_ENABLED_SWITCH), enableSwitch)

  // save
  cy.get(this.TestIDLocator(CypressTestIds.SYNDICATION_SOURCE_MANAGE_SAVE_BUTTON), { timeout: 20000 })
    .should(this.assertBeVisible)
    .click()

  cy.get('.ant-form-item-explain-error')
  .should(this.assertBeVisible)


  
}
}














