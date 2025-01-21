import { LoginTest } from "../classes/LoginTest";
import {SystemConnection}  from "../classes/SystemconnectionsTest";


var blnUsersopened: Boolean=false;

//create UsersTest Object
const objSysConTest:SystemConnection= new SystemConnection();



//first check System Connection  is accessible 
it(' Open System Connection',()=>{
    objSysConTest.openSystemConnection();
    blnUsersopened=true;

})

describe('System Connection ACTIVITIES',()=>{

    beforeEach(()=>{
    
        objSysConTest.openSystemConnection();   
    })

    it(' Add System Connection',()=>{
        objSysConTest.AddSystemConnection();
       
    
    })

    it(' View System Connection',()=>{

        objSysConTest.View_SC();
       
    
    })

    it(' Edit System Connection',()=>{

        objSysConTest.Edit_SC();
       
    
    })

    it(' View System Connection history',()=>{

        objSysConTest.View_SC_history();
       
    
    })

    it(' Deactivate System Connection ',()=>{

        objSysConTest.deactivate_SC();
       
    
    })

    it(' Activate System Connection ',()=>{

        objSysConTest.activate_SC();
       
    
    })

    it(' Delete System Connection ',()=>{

        objSysConTest.Delete_SC();
       
    
    })
})
