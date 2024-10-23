import { BADataTest } from "../classes/BusinessAreaData"
var blnUsersopened: Boolean=false;

//create BADataTest Object
const objBADataTest:BADataTest= new BADataTest();

//first check Users section is accessible 
it(' Open BAData',()=>{
    objBADataTest.openBAData();
    blnUsersopened=true;

})

// BAData activities

describe(' BADATA ACTIVITIES',()=>{

    beforeEach(()=>{
        
        objBADataTest.openBAData();
    
    })


//add BAdata

it.skip(' add BAData  ',()=>{

    objBADataTest.addBAdata();

})


// drag and drop a CSV file
it('drag and drop a CSV file  ',()=>{

    objBADataTest.drag_and_drop_CSV_file();    

})


// drag and drop a  non-CSV file
it.skip('Drag and Drop for Non-CSV File  ',()=>{

    objBADataTest.drag_and_drop_non_CSV_file();    

})


// Browse a file
it.skip ('Browse a CSV file  ',()=>{

    objBADataTest.Browse_CSV_file();    

})




})