import {SyndicationSourceExtended}  from "../classes/SynSourceExtended";


beforeEach(() => {
  cy.viewport(2000, 1000);
});

//create  Object
const objSSE :SyndicationSourceExtended = new SyndicationSourceExtended();

it('Open Syndication Source ',()=>{
    objSSE.openSyndicationSource();
    

})

describe('SYNDICATION SOURCE EDGE CASES',()=>{
    
    beforeEach(()=>{
    
        objSSE.openSyndicationSource();   
    })


    it('Empty Input Name',()=>{

    objSSE.SS_Edge_Cases(
    "",
    "Testing Purpose",
    "DEFAULT",
    "Syn_Source_Schema",
    true,    
    "Sync_Source_DS " ,      //DS     
    "10",                  // SI
    "minutes",             // SU
    objSSE.validFromDateOnly,   // valid from
    objSSE.validUntilDateOnly,          // VU
    true );
    
    cy.get('#basic_name_help > :nth-child(1) > .ant-row > .ant-col',{timeout:8000})
    .should(objSSE.assertBeVisible)

    })

    it(' Input Name Less than Minimum Characters',()=>{


    objSSE.SS_Edge_Cases(
    "A",
    "Testing Purpose",
    "DEFAULT",
    "Syn_Source_Schema",
    true,    
    "Sync_Source_DS " ,      //DS     
    "10",                  // SI
    "minutes",             // SU
    objSSE.validFromDateOnly,   // valid from
    objSSE.validUntilDateOnly,          // VU
    true );
    cy.get('#basic_name_help > :nth-child(1) > .ant-row > .ant-col',{timeout:8000})
    .should(objSSE.assertBeVisible)
    })

    it(' Input Name Greater than Maximum Characters',()=>{


    objSSE.SS_Edge_Cases(
    "This is a very long input name created specifically for testing scenarios where the total length exceeds one hundred characters easily",
    "Testing Purpose",
    "DEFAULT",
    "Syn_Source_Schema",
    true,    
    "Sync_Source_DS " ,      //DS     
    "10",                  // SI
    "minutes",             // SU
    objSSE.validFromDateOnly,   // valid from
    objSSE.validUntilDateOnly,          // VU
    true );
    cy.get('#basic_name_help > :nth-child(1) > .ant-row > .ant-col',{timeout:8000})
    .should(objSSE.assertBeVisible)

    })

    it(' Input Name Contains Special Characters',()=>{


    objSSE.SS_Edge_Cases(
    "Test@#$",
    "Testing Purpose",
    "DEFAULT",
    "Syn_Source_Schema",
    true,    
    "Sync_Source_DS " ,      //DS     
    "10",                  // SI
    "minutes",             // SU
    objSSE.validFromDateOnly,   // valid from
    objSSE.validUntilDateOnly,          // VU
    true );

    cy.get('#basic_name_help > :nth-child(1) > .ant-row > .ant-col',{timeout:8000})
    .should(objSSE.assertBeVisible)
    
    })

    it(' Input Name Contains White Space Only',()=>{


    objSSE.SS_Edge_Cases(
    "   ",
    "Testing Purpose",
    "DEFAULT",
    "Syn_Source_Schema",
    true,    
    "Sync_Source_DS " ,      //DS     
    "10",                  // SI
    "minutes",             // SU
    objSSE.validFromDateOnly,   // valid from
    objSSE.validUntilDateOnly,          // VU
    true );

    cy.get('#basic_name_help > :nth-child(1) > .ant-row > .ant-col',{timeout:8000})
    .should(objSSE.assertBeVisible)
    
    })


     it(' Purpose Greater than 500 Charaters',()=>{

    objSSE.SS_Edge_Cases(
    "Test_Source",
    "This is a very long input name created specifically for testing scenarios where the total length exceeds one hundred characters easily. This is a very long input name created specifically for testing scenarios where the total length exceeds one hundred characters easily.This is a very long input name created specifically for testing scenarios where the total length exceeds one hundred characters easily. This is a very long input name created specifically for testing scenarios where the total length exceeds one hundred characters easily. This is a very long input name created specifically for testing scenarios where the total length exceeds one hundred characters easily",
    "DEFAULT",
    "Syn_Source_Schema",
    true,    
    "Sync_Source_DS " ,      //DS     
    "10",                  // SI
    "minutes",             // SU
    objSSE.validFromDateOnly,   // valid from
    objSSE.validUntilDateOnly,          // VU
    true );
 
    cy.get('.ant-form-item-explain-error > .ant-row > .ant-col',{timeout:3000})
    .should(objSSE.assertBeVisible)
    
    })


    it(' Empty Business Area and Schema ',()=>{

    objSSE.SS_Edge_Cases(
    "Testing1_Source",
    "Testing Purpose",
    "",
    "",
    true,    
    "Sync_Source_DS " ,      //DS     
    "10",                  // SI
    "minutes",             // SU
    objSSE.validFromDateOnly,   // valid from
    objSSE.validUntilDateOnly,          // VU
    true );

    cy.get('#basic_businessAreaId_help > .ant-form-item-explain-error',{timeout:8000})
    .should(objSSE.assertBeVisible)
       
    })

    it(' Empty Scheduling Interval',()=>{


    objSSE.SS_Edge_Cases(
    "Test 123",
    "Testing Purpose",
    "DEFAULT",
    "Syn_Source_Schema",
    true,    
    "Sync_Source_DS " ,      //DS     
    "",                  // SI
    "minutes",             // SU
    objSSE.validFromDateOnly,   // valid from
    objSSE.validUntilDateOnly,          // VU
    true );

    cy.get('.ant-form-item-explain-error',{timeout:8000})
    .should(objSSE.assertBeVisible)
    
    })

     it(' Empty Scheduling Unit',()=>{


    objSSE.SS_Edge_Cases(
    "Test_2 ",
    "Testing Purpose",
    "DEFAULT",
    "Syn_Source_Schema",
    true,    
    "Sync_Source_DS " ,      //DS     
    "20",                  // SI
    "",             // SU
    objSSE.validFromDateOnly,   // valid from
    objSSE.validUntilDateOnly,          // VU
    true );

     cy.get('.ant-form-item-explain-error',{timeout:8000})
    .should(objSSE.assertBeVisible)
    
    })

    
    

    it('Invalid " VALID FROM " ',()=>{

    objSSE.invalid_valid_from(
    "Test_28 ",
    "Testing Purpose",
    "DEFAULT",
    "Syn_Source_Schema",
    true,    
    "Sync_Source_DS " ,      //DS     
    "20",                  // SI
    "minutes",             // SU
    "2025-08-16 00:00:00",   // valid from
    objSSE.validUntilDateOnly,          // VU
    true );
  
    })

    
    it('Invalid " VALID UNTIL " ',()=>{

    objSSE.invalid_valid_Until(
    "Test_28 ",
    "Testing Purpose",
    "DEFAULT",
    "Syn_Source_Schema",
    true,    
    "Sync_Source_DS " ,      //DS     
    "20",                  // SI
    "minutes",             // SU
     objSSE.validFromDateOnly,   // valid from
    "2025-08-16 00:00:00",          // VU
    true );
  
    })

     it('Disable switch ',()=>{

    objSSE.SS_Edge_Cases(
    "Test_67 ",
    "Testing Purpose",
    "DEFAULT",
    "Syn_Source_Schema",
    true,    
    "Sync_Source_DS " ,      //DS     
    "20",                  // SI
    "minutes",             // SU
    objSSE.validFromDateOnly,   // valid from
    objSSE.validUntilDateOnly,          // VU
    false );

    cy.get('.ant-form-item-explain-error',{timeout:8000})
    .should(objSSE.assertBeVisible)
    
    })
})