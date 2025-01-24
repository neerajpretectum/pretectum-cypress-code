//import { LoginTest } from "../classes/LoginTest";
//
import {CDCDestinations}  from "../classes/CDCDestination";


var blnUsersopened: Boolean=false;

//create CDCDTest Object
const objCDCDtest:CDCDestinations= new CDCDestinations();



//first check CDC Destination  is accessible 
it(' Open CDC Destination',()=>{
    objCDCDtest.openCDCD();
    blnUsersopened=true;

})

describe('CDCD ACTIVITIES',()=>{

    beforeEach(()=>{
    
        objCDCDtest.openCDCD();   
    })



    it(' Add CDC Destination',()=>{
       
        objCDCDtest.add_CDCD();
        
    })

    it(' View CDC Destination',()=>{
       
        objCDCDtest.view_CDCD();
        
    })

    it(' Edit CDC Destination',()=>{
       
        objCDCDtest.edit_CDCD();
        
    })

    it.skip(' deactivate CDC Destination',()=>{
       
        objCDCDtest.deactivate_CDCD();
        
    })
    it(' Delete CDC Destination',()=>{
       
        objCDCDtest.delete_CDCD();
        
    })


})
