//import { LoginTest } from "../classes/LoginTest";
import {Datatagtest}  from "../classes/DataTagTest";


var blnUsersopened: Boolean=false;

//create UsersTest Object
const objDataTagTest:Datatagtest= new Datatagtest();



//first check Datatag  is accessible 
it(' Open datatag',()=>{
    objDataTagTest.openDataTag();
    blnUsersopened=true;

})

describe('DATATAG ACTIVITIES',()=>{

    beforeEach(()=>{
    
        objDataTagTest.openDataTag();   
    })

// add datatag
it.skip(' Add  and Save DataTag',()=>{
    objDataTagTest.addDataTag();
  
})

//view data tag
it(' View DataTag',()=>{
    objDataTagTest.viewdatatag();
  
})

//Edit data tag
it.skip('Edit DataTag',()=>{
    objDataTagTest.editdatatag();
  
})

// view History 
it.skip('View Data Classifiers History',()=>{

    objDataTagTest.viewHistory();

})

//Delete Tag
 it.skip('Delete Tag',()=>{

    objDataTagTest.deleteTag();
 }) 


//default business area :Tag visible to everyone
it.skip('Business Area is Default :Tag visible to everyne',()=>{


    objDataTagTest.default_business_area();

})



})

