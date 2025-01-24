
import { RolesTest } from "../classes/Roles";
import { TestBase } from "../classes/TestBase"

//create Roles Object
const objRolestest:RolesTest= new RolesTest();
//first check Roles section is accessible to access Dataset
    it(' Open Roles',()=>{
        objRolestest.open_Role();
        

    })

describe('ROLES ACTIVITIES',()=>{

    beforeEach(()=>{
        
        objRolestest.open_Role();
    
    })


//create new role
    it(' Create Role',()=>{
   
        objRolestest.Create_Role();   

    })
   
    //open_edit_window_and_edit_a_role

    it('Open Edit Window And Edit a Role ',()=>{
 
        objRolestest.open_edit_window_and_edit_a_role()
        
    })

   

    //open_view_window  
    it('Open View Window ',()=>{
 
        objRolestest.open_View_window()
        
    })    

    //open_view_History_window  
    it('Open View history Window ',()=>{
    
        objRolestest.open_View_history_window()
        
    }) 



    // add a user to the role
     
    it(' add a user to the role',()=>{
    
        objRolestest.add_a_user_to_the_role()
        
    }) 

    
 //add_credentials
   it('Add Credentials',()=>{
    
    objRolestest.add_credentials()
    
}) 

})



// PERMISSION: BUSINESS ARAES 
describe('Permission:***************** BUSINESS AREAS******************', () => {

    it('Add Permission: BUSINESS ARAES ',()=>{

        objRolestest.add_permission('BUSINESS AREAS','Business Areas Management');
        objRolestest.verify_permisssion_BA();
    
    })


 it.skip('BA: Revoke permission ',()=>{
    
    objRolestest.delete_permission(2)
    objRolestest.verify_revoke_permission();
    
})



})



describe('Permission:***************** BUSINESS AREA DATA******************', () => {

it('Add Permission: BUSINESS AREA DATA ',()=>{
    
    objRolestest.add_permission('BUSINESS AREA DATA','Business Area Data Management');
    objRolestest.verify_permisssion_BADATA();
})



it('BAD: Revoke permission ',()=>{
    
    objRolestest.delete_permission(2)
    objRolestest.verify_revoke_permission_BADATA();

})

    
})



describe('Permission:***************** USERS******************', () => {

    it('Add Permission: USERS ',()=>{
        
        objRolestest.add_permission('USERS','USERS Management');
        objRolestest.verify_permisssion_USERS();

    })


    it('USERS: Revoke permission',()=>{
        
        objRolestest.delete_permission(2);
        objRolestest.verify_revoke_permission_USERS();
    
    })


    })
    
    
    

    //Roles
    describe('Permission:***************** ROLES******************', () => {


        it('Add Permission: ROLES ',()=>{
        
           
            objRolestest.add_permission('ROLES','ROLES Management');
            objRolestest.verify_permisssion_ROLES();
        })
        
        
        //verify Actions Enabled BA data
        it('ROLES: Revoke permission ',()=>{
            
            objRolestest.delete_permission(2);
            objRolestest.verify_revoke_permission_ROLES();
            
        
        })
        
    })


    //SCHEMA MODELS
    describe('Permission:***************** SCHEMA MODELS******************', () => {


        it('Add Permission: SCHEMA MODELS ',()=>{
        
            objRolestest.add_permission('SCHEMA MODELS','SCHEMA MODELS Management');
            objRolestest.verify_permisssion_SM();
        })
        
        
      
        it('SCHEMA: Revoke permission',()=>{
            
            objRolestest.delete_permission(2);
            objRolestest.verify_revoke_permission_SM();
        
        })
        
        

                
       
    })


    describe('Permission:***************** Datasets******************', () => {

        it('Add Permission:DATASETS ',()=>{
        
            objRolestest.add_permission('SCHEMA MODELS','SCHEMA MODELS Management');
            objRolestest.add_permission('DATASETS','DATASETS Management');
            objRolestest.verify_permisssion_DS();
        })

        
        it('DS: Revoke permission ',()=>{
            
            objRolestest.delete_permission(3);
            objRolestest.verify_revoke_permission_DS();
            objRolestest.delete_permission(2);
        
        })
        

    })


    describe('Permission:***************** Datatags******************', () => {

       
        it('Add Permission: DATATAGS ',()=>{
        
          
            objRolestest.add_permission('DATATAGS','DATATAGS Management');
            objRolestest.verify_permisssion_DT();
        })
        
        
        it('DT: Revoke permission ',()=>{
            
            objRolestest.delete_permission(2);
            objRolestest.verify_revoke_permission_DT();
        
        })   

    })

    describe('Permission:***************** Credentials******************', () => {

       
       
        it('Add Permission: CREDENTIALS ',()=>{
        
           
            objRolestest.add_permission('CREDENTIALS','CREDENTIALS Management');
            objRolestest.verify_permisssion_CR();
        })
        
        it('CR: Revoke permission ',()=>{
            
            objRolestest.delete_permission(2);
            objRolestest.verify_revoke_permission_CR();
        
        })   
       
    })

    describe('Permission:***************** SYSTEM CONNECTIONS******************', () => {

       
       
        it('Add Permission: SYSTEM CONNECTIONS ',()=>{
        
            objRolestest.add_permission('SYSTEM CONNECTIONS','SYSTEM CONNECTIONS Management');
            objRolestest.verify_permisssion_SC();
        })
        
        
        it('CR: Revoke permission ',()=>{
            
            objRolestest.delete_permission(2);
            objRolestest.verify_revoke_permission_SC();
        
        })
        
    })
    describe('Permission:***************** SYSTEM KEYS******************', () => {

       
       
        it('Add Permission: SYSTEM KEYS ',()=>{
        
            objRolestest.add_permission('SYSTEM KEYS','SYSTEM KEYS Management');
            objRolestest.verify_permisssion_SK();
        })
        
        
        it.skip('SK: Revoke permission ',()=>{
            
            objRolestest.delete_permission(2);
            objRolestest.verify_revoke_permission_SK();
        
        })
        
    })


    describe('Permission:***************** CDC Destinations ******************', () => {

       
       
        it('Add Permission: CDC Destinations ',()=>{
          
            objRolestest.add_permission('CHANGE DATA CAPTURE DESTINATIONS','CDC Destinations Management');
            objRolestest.verify_permisssion_CDCD();
        })
        
        
        it('CDCD: Revoke permission ',()=>{
            
            objRolestest.delete_permission(2);
            objRolestest.verify_revoke_permission_CDCD();
        
        })
       

    })

   
    describe('ROLES ACTIVITIES',()=>{

        beforeEach(()=>{
            
            objRolestest.open_Role();
        
        })

    // Delete credentials
    it('Delete Credentials',()=>{
    
        objRolestest.delete_credentials()
        
    }) 


    //activate and Deactivate  a role
    it('Deactivate a role',()=>{
    
        objRolestest.activate_and_deactivate_a_role()
        
    }) 


     // delete_a_role
   it('Delete a Role ',()=>{
 
    objRolestest.delete_a_role( objRolestest.strRoleName);
    
    })


    })
