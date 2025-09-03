import CypressTestIds from  '../CypressTestIds';
import { TestBase } from "./TestBase";


var newtagdesc=' new description of data tag'
var business_area_specific= 'Test Business Area'


export class DatatagExtendedtest extends TestBase{

strEDTName: string = this.TimeStamp('DTN1-');

openDataTag(){

    this.OpenURL();

    //login into portal with valid creadentials         
    this.Login();

    //open configuration
    cy.get(this.TestIDLocator(CypressTestIds.HEADER_MENU_CONFIGURATION), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click();

    //open Data Classifierstag
    cy.get(this.TestIDLocator(CypressTestIds.VERTICAL_MENU_DATACLASSIFIERS), {timeout: 20_000})
    .should(this.assertBeVisible)
    .click ()
   
    
    cy.get(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAGLIST_TABLE), {timeout: 20_000})
    .should(this.assertBeVisible)


}

empty_DT_name(){

    //add datatag button is visible
    cy.get(this.TestIDLocator(CypressTestIds.DATATAGS_ADD_DATATAG_BUTTON), {timeout: 8_000})
    .should(this.assertBeVisible)
    .click()

    //select business area 
     this.selectDropdown(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAG_BUSINESSAREA_SELECT),this.business_area)
    
    
    //tag description
    cy.get(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAG_DESCRIPTION_INPUT),{timeout:8000})
    .type('Description')
    .click()

    //save
    cy.get(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAG_SAVE_BUTTON))
    .click()

    cy.get('.ant-form-item-explain-error > .ant-row > .ant-col',{timeout:20000})
    .should(this.assertBeVisible)





}
edge_cases(Name:string ='', desc:string =''){

//add datatag button is visible
    cy.get(this.TestIDLocator(CypressTestIds.DATATAGS_ADD_DATATAG_BUTTON), {timeout: 8_000})
    .should(this.assertBeVisible)
    .click()

    //select business area 
     this.selectDropdown(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAG_BUSINESSAREA_SELECT),this.business_area)

    //add datatag  
    cy.get(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAG_NAME_INPUT),{timeout: 8_000})
    .type(Name)
    cy.get('body').click(0,0);

    
    //tag description
    cy.get(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAG_DESCRIPTION_INPUT),{timeout:8000})
    .type(desc)
  

    
}
Create_dataa_tag(EDTName:string =''){

//add datatag button is visible
    cy.get(this.TestIDLocator(CypressTestIds.DATATAGS_ADD_DATATAG_BUTTON), {timeout: 8_000})
    .should(this.assertBeVisible)
    .click()

    //select business area 
     this.selectDropdown(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAG_BUSINESSAREA_SELECT),this.business_area)

    //add datatag  
    cy.get(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAG_NAME_INPUT),{timeout: 8_000})
    .type(EDTName)
    .click()
    
    //tag description
    cy.get(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAG_DESCRIPTION_INPUT),{timeout:8000})
    .type("Extended Data tag Description")
    .click()

    //save
    cy.get(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAG_SAVE_BUTTON))
    .click()

    //Success message
   cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
    .should(this.assertBeVisible)


}
preview_dataa_tag(){

cy.contains(this.strEDTName,{timeout:20_000})
    .parent(this.TD)
    .parent(this.TR)
    .find(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAGLIST_EDIT_BUTTON), {timeout: 8_000})
    .click()

   cy.get('button',{timeout:8000}).contains('Preview Tag').click();


   cy.get('.p-3 > .text-base',{timeout: 8_000})
   .should(this.assertBeVisible)

   cy.contains("button", "Close Preview").click();

    //save
    cy.get(this.TestIDLocator(CypressTestIds.DATATAGS_DATATAG_SAVE_BUTTON))
    .click()

    //Success message
    cy.get(this.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
     .should(this.assertBeVisible)


    }

    verify_search(Search_input:string=''){

        cy.get('input[placeholder="Search tags"]',{timeout:8000})
        .should(this.assertBeVisible)
        .type(Search_input)

    }

    filter_functionality(filter_Name: string ='',Filter_option: string ='', Column_index: string=''){


        cy.get('button .anticon-filter',{timeout:8000})
        .click()

        cy.get('.ant-dropdown-menu', { timeout: 8000 })
        .contains(filter_Name)
        .click()  

        cy.get('body', { timeout: 8000 })   
        .find('.ant-dropdown-menu')
         .contains(Filter_option)
        .click()

        cy.get(`table tbody tr td:nth-child(${Column_index}) span`, { timeout: 10000 })
        .should('have.length.greaterThan', 0)    
        .each(($cell) => {
            cy.wrap($cell)
            .invoke('text')
            .then((text) => {
                expect(text.trim()).to.eq(Filter_option)
            })
        })


    }


    filter_by_last_updated(){

        cy.get('button .anticon-filter',{timeout:8000})
        .click()

        cy.get('.ant-dropdown-menu', { timeout: 8000 })
        .contains('Last Updated')
        .click() 

        cy.get('body', { timeout: 8000 })   
        .find('.ant-dropdown-menu')
        .contains('Today')
        .click()


        cy.get('span.ant-tag.bg-teal-100.text-teal-700')
       .should('contain.text', 'Last Updated: Today')

    }

    mark_tag_as_favourite(){

        cy.get('table')
        .find('tbody tr:nth-child(2)')    // 2nd row
        .find('td:nth-child(2)')          // 2nd column
        .click();
        

        cy.contains('button', 'Favorites')
        .click();

    }
    
}