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
it(' Add  and Save DataTag',()=>{
    objDataTagTest.addDataTag();
  
})

//view data tag
it(' View DataTag',()=>{
    objDataTagTest.viewdatatag();
  
})

//Edit data tag
it('Edit DataTag',()=>{
    objDataTagTest.editdatatag();
  
})

// view History 
it('View Data Classifiers History',()=>{

    objDataTagTest.viewHistory();

})



//default business area : c Business area tags are visible
it('default business area :Business area tags are visible',()=>{


    objDataTagTest.default_business_area();

})



//Specific business area :DBA and SBA both tags are visible
it('Specific Business Area  :DBA and SBA both tags are visible',()=>{


   objDataTagTest.specific_business_area();

})


//Delete Tag
it('Delete Tag',()=>{

    objDataTagTest.deleteTag();
 }) 

})

