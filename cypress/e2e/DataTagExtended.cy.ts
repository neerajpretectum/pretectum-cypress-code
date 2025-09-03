
import {DatatagExtendedtest}  from "../classes/DataTagExtended";


// Global viewport setup for all tests
beforeEach(() => {
  cy.viewport(2000, 1000);
});


var blnUsersopened: Boolean=false;

const objDTExtended:DatatagExtendedtest= new DatatagExtendedtest();

//first check Datatag  is accessible 
it(' Open datatag',()=>{
    objDTExtended.openDataTag();
    blnUsersopened=true;

})

describe('DATATAG EDGE CASE SCENARIOS',()=>{

    beforeEach(()=>{
    
        objDTExtended.openDataTag();   
    })


it('Empty Data Tag Name Field',()=>{

    objDTExtended.empty_DT_name();
     cy.get('.ant-form-item-explain-error > .ant-row > .ant-col',{timeout:20000})
    .should('be.visible')
  
})


it('Data Tag Name Input shorter than minimum length',()=>{

    objDTExtended.edge_cases('a', 'Description');
    cy.get('.ant-form-item-explain-error > .ant-row > .ant-col',{timeout:20000})
    .should('be.visible')
  
  
})

it('Data Tag Name Input Greater than maximum length',()=>{

    objDTExtended.edge_cases('This is a long sample input string that contains more than one hundred ', 'Description');
    cy.get('.ant-form-item-explain-error',{timeout:20000})
    .should('be.visible')
  
})

it('Data Tag Name Contains Special Character',()=>{

    objDTExtended.edge_cases('Test@#Data tag ', 'Description');
    cy.get('.ant-form-item-explain-error > .ant-row > .ant-col',{timeout:20000})
    .should('be.visible')
  
  
})


it('Data Tag Descriptoin Greater than maximum character',()=>{

    objDTExtended.edge_cases('Test data tag', 'This Business Area is responsible for coordinating global initiatives across multiple regions, focusing on innovation, operational excellence, and customer engagement through advanced analytics, strategic planning, and technology-driven process improvements. The team works closely with cross-functional departments to deliver value-added solutions, streamline workflows, and drive sustainable growth through efficient resource allocation and data-informed decision making. The team works closely with');
  cy.get('.ant-input-data-count').should('have.text', '500 / 500');

})

it('Create data tag ',()=>{

    objDTExtended.Create_dataa_tag(objDTExtended.strEDTName);
  
})

it('Preview data tag ',()=>{

    objDTExtended.preview_dataa_tag();
  
})

it('Verify search results on exact match',()=>{

    objDTExtended.verify_search(objDTExtended.strEDTName);
    
    cy.get('tbody tr td:nth-child(6)').contains(objDTExtended.strEDTName)  
})

it('Verify search results on Partial match',()=>{

    objDTExtended.verify_search('Count');
     cy.get('tbody tr td:nth-child(6)').contains('Count')
     cy.get('tbody tr td:nth-child(6)').contains('Country')
    
  
})

it('Verify search results on non existing match',()=>{

    objDTExtended.verify_search('State');
 
    cy.get('.ant-empty-description',{timeout:8000})
    .should('be.visible')


})

it(' Filter Data Tag by Business Area',()=>{

    objDTExtended.filter_functionality('Business Area', 'DEFAULT','5');


})

it('Filter Data Tag by Updated By',()=>{

    objDTExtended.filter_functionality('Updated By','testing1@malaymo.com' ,'9');
 

})

it('Filter Data Tag by Last Updated',()=>{

    objDTExtended.filter_by_last_updated();
 

})

it('Mark Data Tag as Favourite',()=>{

    objDTExtended.mark_tag_as_favourite();
 

})

})