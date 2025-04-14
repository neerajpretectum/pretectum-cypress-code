import CypressTestIds from  "../classes/CypressTestIDs"
import { TestBase } from "./TestBase";


export class HomeScreentest extends TestBase{ 

    Open_Home_Screen(){

    //open portal
    this.OpenURL();

    //login into portal with valid creadentials         
    this.Login();
}

verify_Schema_Models_Visibility(){
  
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .ant-layout-header > .ant-typography',{timeout:20000})
    .contains('Schema Models')
    .should(this.assertBeVisible);  
    
    cy.get('.ant-table-body',{timeout:20000})
    .eq(0)
    .should(this.assertBeVisible); 

}


verify_Data_set_Visibility(){

    cy.get(':nth-child(1) > :nth-child(2) > .ant-layout > .ant-layout-header > .ant-typography',{timeout:20000})
    .contains('Datasets')
    .should(this.assertBeVisible)
    
    //select dataset table
    cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > .ant-layout > .ant-layout-content > .verticle-scroll > .full-height-flex-container > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-body',{timeout:20000})
    .should(this.assertBeVisible)

}


verify_System_Events_Visibility(){

    cy.get(':nth-child(2) > :nth-child(1) > .ant-layout > .ant-layout-header > .ant-typography',{timeout:20000})
    .contains('System Events')
    .should(this.assertBeVisible);  
    
   //system events table
   cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > :nth-child(2) > .ant-layout > .ant-layout-content > .verticle-scroll',{timeout:20000}) 
   .should(this.assertBeVisible); 
}

verify_Dataset_Insights_visibility(){

   //select dataset table
   cy.get('.ant-table-body',{timeout:20000})
   .eq(1)
   .find('tr').eq(1)         // First data row 
   .click();

    //data insight is visible
    cy.get(':nth-child(2) > :nth-child(2) > .ant-layout > .ant-layout-header > .ant-typography',{timeout:20000})
    .contains('Dataset Insights')
    .should(this.assertBeVisible)

   //Data insights table
   cy.get('.ant-table-body',{timeout:20000})
   .eq(3)
   .should(this.assertBeVisible)   

}

}
