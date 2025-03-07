
import {Systemkeystest}  from "../classes/Systemkeys";
import CypressTestIds from  "../classes/CypressTestIDs"
var blnUsersopened: Boolean=false;

//create SystemKeys Object
const objSystemkeysTest:Systemkeystest= new Systemkeystest();
const open_AI_API = Cypress.env('OPEN_AI_API_KEY');
const google_maps_API=Cypress.env('GOOGLE_MAPS_API_KEY');


//first check System Key is accessible 
it(' Open System keys',()=>{
    objSystemkeysTest.openSystemKeys();
    blnUsersopened=true;

})

describe('SYSTEM KEYS ACTIVITIES',()=>{

    beforeEach(()=>{
    
        objSystemkeysTest.openSystemKeys();   
    })


    // add System key Google Map 
    it(' Add System key',()=>{
       
        objSystemkeysTest.Add_key('Google Maps',google_maps_API);
      

        //Success message
        cy.get(objSystemkeysTest.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
        .should(objSystemkeysTest.assertBeVisible)
    

    })


    //verify Single Key Per Type
     it('Google Map:  verify Single Key Per Type',()=>{
       
        
        objSystemkeysTest.Add_key('Google Maps',google_maps_API);
        //Error Message
        cy.get(objSystemkeysTest.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_ERROR), {timeout: 8_000})
        .should(objSystemkeysTest.assertBeVisible)

    
    })


    //view System key
    it(' View System key',()=>{
       
        objSystemkeysTest.view_key();
    
    })

    //Edit System key
    it('Edit System key',()=>{
        objSystemkeysTest.edit_key();
    
    })

    // view History 
    it('View System key History',()=>{

        objSystemkeysTest.view_key_history();

    })

    // Delete Key
    it('Delete key',()=>{

        objSystemkeysTest.delete_key();

    })

     // add System key OpenAI 
     it(' Add System key',()=>{
       
        objSystemkeysTest.Add_key('Open AI', open_AI_API);
        //Success message
        cy.get(objSystemkeysTest.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
        .should(objSystemkeysTest.assertBeVisible)
    
    })

     //verify Single Key Per Type
     it('Open AI:  verify Single Key Per Type',()=>{
       
      
        objSystemkeysTest.Add_key('Open AI', open_AI_API);
          //Error Message
        cy.get(objSystemkeysTest.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_ERROR), {timeout: 8_000})
        .should(objSystemkeysTest.assertBeVisible)

    
    })

    // Delete Key
    it('Delete key',()=>{

        objSystemkeysTest.delete_key();

    })

})
