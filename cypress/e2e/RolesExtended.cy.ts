
import { Roles } from "../classes/RolesExtended";
import { TestBase } from "../classes/TestBase"

//create Roles Object
const objRoles:Roles= new Roles();
//first check Roles section is accessible to access Dataset
    it(' Open Roles',()=>{
        objRoles.open_Role();
        

    })

describe('ROLES ACTIVITIES',()=>{

    beforeEach(()=>{
        
        objRoles.open_Role();
    
    })


//create new role
    it(' Create Role',()=>{
   
        objRoles.Create_Role();   

    })
   
    //open_edit_window_and_edit_a_role

    it('Open Edit Window And Edit a Role ',()=>{
 
        objRoles.open_edit_window_and_edit_a_role()
        
    })

   

    //open_view_window  
    it('Open View Window ',()=>{
 
        objRoles.open_View_window()
        
    })    

    //open_view_History_window  
    it('Open View history Window ',()=>{
    
        objRoles.open_View_history_window()
        
    }) 



    // add a user to the role
     
    it(' add a user to the role',()=>{
    
        objRoles.add_a_user_to_the_role()
        
    }) 

    

   //add_credentials
   it('Add Credentials',()=>{
    
    objRoles.add_credentials()
    
}) 

})



// PERMISSION: BUSINESS ARAES 
describe.skip('Permission:***************** BUSINESS AREAS******************', () => {

    it('Add Permission: BUSINESS ARAES ',()=>{

    objRoles.add_permission('BUSINESS AREAS','Business Areas Management');
    
})


it('BA: verify Actions Enabled ',()=>{
    
    objRoles.login_new();
    objRoles.verify_Actions_Enabled_BA();
    
})

  // uncheck_actions
  it('BA: uncheck_actions',()=>{   
   
    objRoles.uncheck__actions_View_active(2);
   
})

//verify view and active

it('BA:verify Active and View ',()=>{   
   
    objRoles.BA_VA_View_Active();  
   
})


//check actions  View and Active
it('BA:Check Actions View, Active ',()=>{   
   
    objRoles.check__actions_View_active(2);   
    
 })

 //UnCheck Actions Add, Edit,Del
it('BA:UnCheck Actions Add, Edit,Del ',()=>{   
    
    objRoles.UCA_Add_view_edit(2) ;  
    
 })


// verify Actions disabled
it('BA: verify Actions disabled',()=>{

    objRoles.login_new();
    objRoles.BA_VA_add_del_edit();

})

// delete_permission
 it('BA: delete_permission ',()=>{
    
    objRoles.open_Role();
    objRoles.delete_permission(2);
    
})


//verify delete permission functionality
it('BA: verify_ delete_permission_functionality',()=>{
    
    
    objRoles.BA_verify_delete_functionality();
    
})

})



describe('Permission:***************** BUSINESS AREA DATA******************', () => {

it('Add Permission: BUSINESS AREA DATA ',()=>{
    
    objRoles.add_permission('BUSINESS AREA DATA','Business Area Data Management');
})


//verify Actions Enabled BA data
it('BAD: verify Actions Enabled ',()=>{
    
    objRoles.login_new();
    objRoles.verify_actions_enabled_BAD();

})


// uncheck_actions
it('BAD:uncheck_actions VA',()=>{   
     
    objRoles.uncheck__actions_View_active(2);   
    
 })

 // verify_actions view and edit 
it('BAD:Verify Actions VA ',()=>{   
     
    objRoles.BAD_VA_View_Active();   
    
 })

 //check actions  View and Active
 it('BAD:Check Actions View, Active ',()=>{   
   
    objRoles.check__actions_View_active(2); 
   
 })
  
it('BAD:UnCheck Actions Add, Edit,Del ',()=>{   
   
    objRoles.UCA_Add_view_edit(2)   
    
 })

 // verify actions diasbled ADD ,EDIT, DEL
 it('BAD:verify add, edit, del ',()=>{   
     
    objRoles.BAData_VA_add_del_edit();
    
 })

 //Delete permission BAdata
 it('BAData: delete_permission ',()=>{
    
    objRoles.open_Role();
    objRoles.delete_permission(2);
    
})

//BAdata : verify Del per
it('BAdata :verify_ del_per',()=>{
    
    objRoles.BAdata_verify_del_per();
    
})
})

describe('Permission:***************** USERS******************', () => {

    it('Add Permission: USERS ',()=>{
        
        objRoles.add_permission('USERS','USERS Management');
    })
    
    
    //verify Actions Enabled BA data
    it('USERS: verify Actions Enabled ',()=>{
        
        objRoles.login_new();
        objRoles.verify_actions_enabled_USERS();
    
    })
    
    
    //// uncheck_actions
    it('USERS:uncheck_actions VA',()=>{   
         
        objRoles.uncheck__actions_View_active(2);   
        
     })
    
     //// verify_actions view and edit 
    it('USERS:Verify Actions VA ',()=>{   
         
        objRoles.USERS_VA_View_Active();   
        
     })
    
     //check actions  View and Active
     it('USERS:Check Actions View, Active ',()=>{   
       
        objRoles.check__actions_View_active(2); 
        
        
     })
      
    it('USERS:UnCheck Actions Add, Edit,Del ',()=>{   
        
        objRoles.UCA_Add_view_edit(2);  
        
     })
    
     // verify actions diasbled ADD ,EDIT, DEL
     it('USERS:verify add, edit,  ',()=>{   
         
        objRoles.USERS_VA_add__edit() 
        
     }) 

      //Delete permission 
      it('USERS: delete_permission ',()=>{
            
        objRoles.open_Role();
        objRoles.delete_permission(2);
        
    })

    // verify Del per
    it('Users:verify_ del_per',()=>{
        
        objRoles.USERS_verify_del_per();
        
    })
    })

    //Roles
    describe('Permission:***************** ROLES******************', () => {


        it('Add Permission: ROLES ',()=>{
        
            objRoles.add_permission('ROLES','ROLES Management');
        })
        
        
        //verify Actions Enabled BA data
        it('ROLES: verify Actions Enabled ',()=>{
            
            objRoles.login_new();
           objRoles.verify_actions_enabled_ROLES();
        
        })
        
        
        //// uncheck_actions
        it('ROLES:uncheck_actions VA',()=>{   
             
            objRoles.uncheck__actions_View_active(2);   
            
         })
        
         //// verify_actions view and edit 
        it('ROLES:Verify Actions VA ',()=>{   
             
            objRoles.ROLES_VA_View_Active();   
            
         })
        
         //check actions  View and Active
         it('ROLES:Check Actions View, Active ',()=>{   
           
            objRoles.check__actions_View_active(2); 
            
            
         })
          
        it('ROLES:UnCheck Actions Add, Edit,Del ',()=>{   
            
            objRoles.UCA_Add_view_edit(2)   
            
         })
        
         // verify actions diasbled ADD ,EDIT, DEL
         it('ROLES:verify add, edit,Del',()=>{   
             
            objRoles.ROLES_VA_add__edit_del(); 
            
         }) 

                
        //Delete permission 
        it('ROLES: delete_permission ',()=>{
            
            objRoles.open_Role();
            objRoles.delete_permission(2);
            
        })

        // verify Del per
        it('ROLES :verify_ del_per',()=>{
            
            objRoles.ROLES_verify_del_per();
            
        })
    })


    //SCHEMA MODELS
    describe('Permission:***************** SCHEMA MODELS******************', () => {


        it('Add Permission: SCHEMA MODELS ',()=>{
        
            objRoles.add_permission('SCHEMA MODELS','SCHEMA MODELS Management');
        })
        
        
        //verify Actions Enabled 
        it('SCHEMA: verify Actions Enabled ',()=>{
            
            objRoles.login_new();
            objRoles.verify_actions_enabled_SCHEMA();
        
        })
        
        
        //// uncheck_actions
        it('SCHEMA :uncheck_actions VA',()=>{   
             
            objRoles.uncheck__actions_View_active(2);   
            
         })
        
         //// verify_actions view and edit 
        it('SCHEMA :Verify Actions VA ',()=>{   
             
            objRoles.SCHEMA_VA_View_Active();   
            
         })
        
         //check actions  View and Active
         it('SCHEMA:Check Actions View, Active ',()=>{   
           
            objRoles.check__actions_View_active(2); 
            
            
         })
          
        it('SCHEMA:UnCheck Actions Add, Edit,Del ',()=>{   
           
            
            objRoles.UCA_Add_view_edit(2)   
            
         })
        
         // verify actions diasbled ADD ,EDIT, DEL
         it('SCHEMA:verify add, edit,Del  ',()=>{   
             
          objRoles.SCHEMA_VA_add__edit_del(); 
            
         }) 

          //delete Schema Models 
          it('SCHEMA: delete_permission ',()=>{
            
            objRoles.open_Role();
            objRoles.delete_permission(2);
            
        })

        // verify Del permission Schema Models
        it('SCHEMA :verify_ del_per',()=>{
            
            objRoles.SCHEMA_verify_del_per();
            
        })

                
       
    })


    describe('Permission:***************** Datasets******************', () => {

        it('Add Permission: SCHEMA MODELS ',()=>{
        
            objRoles.add_permission('SCHEMA MODELS','SCHEMA MODELS Management');
        })

        
        it('Add Permission: DATASETS ',()=>{
        
            objRoles.add_permission('DATASETS','DATASETS Management');
        })
        
        
        //verify Actions Enabled 
        it('DS: verify Actions Enabled ',()=>{
            
            objRoles.login_new();
            objRoles.verify_actions_enabled_DS();
        
        })
        
        
        //// uncheck_actions
        it('DS :uncheck_actions VA',()=>{   
             
            objRoles.uncheck__actions_View_active(3);   
            
         })
        
         //// verify_actions view and edit 
        it('DS :Verify Actions VA ',()=>{   
             
            objRoles.DS_VA_View_Active();   
            
         })
        
         //check actions  View and Active
         it('DS:Check Actions View, Active ',()=>{   
           
            objRoles.check__actions_View_active(3); 
            
            
         })
          
        it('DS:UnCheck Actions Add, Edit,Del ',()=>{   
           
            
            objRoles.UCA_Add_view_edit(3)   
            
         })
        
         // verify actions diasbled ADD ,EDIT, DEL
         it('DS:verify add, edit,Del  ',()=>{   
             
         objRoles.DS_VA_add__edit_del(); 
            
         }) 

                
        //Delete permission Datasets
        it('DS: delete_permission ',()=>{
            
            objRoles.open_Role();
            objRoles.delete_permission(3);
            
        })

        // verify Del per Datasets
        it('DS :verify_ del_per',()=>{
            
            objRoles.DS_verify_del_per();
            
        })

        //delete Schema Models 
         it('SCHEMA: delete_permission ',()=>{
            
            objRoles.open_Role();
            objRoles.delete_permission(2);
            
        })


    })


    describe('Permission:***************** Datatags******************', () => {

       
        it('Add Permission: DATATAGS ',()=>{
        
            objRoles.add_permission('DATATAGS','DATATAGS Management');
        })
        
        
        //verify Actions Enabled BA data
        it('DT: verify Actions Enabled ',()=>{
            
            objRoles.login_new();
            objRoles.verify_actions_enabled_DT();
        
        })
        
        
        //// uncheck_actions
        it('DT :uncheck_actions VA',()=>{   
             
            objRoles.uncheck__actions_View_active(2);   
            
         })
        
         //// verify_actions view and edit 
        it('DT :Verify Actions VA ',()=>{   
             
          objRoles.DT_VA_View_Active();   
            
         })
        
         //check actions  View and Active
         it('DT:Check Actions View, Active ',()=>{   
           
            objRoles.check__actions_View_active(2); 
            
            
         })
          
        it('DT:UnCheck Actions Add, Edit,Del ',()=>{   
           
            
            objRoles.UCA_Add_view_edit(2)   
            
         })
        
         // verify actions diasbled ADD ,EDIT, DEL
         it('DT:verify add, edit,Del  ',()=>{   
             
            objRoles.DT_VA_add__edit_del(); 
            
         }) 

                
        //Delete permission 
        it('DT: delete_permission ',()=>{
            
            objRoles.open_Role();
            objRoles.delete_permission(2);
            
        })

        // verify Del per
        it('DT :verify_ del_per',()=>{
            
            objRoles.DT_verify_del_per();
            
        })

       

    })

    describe('Permission:***************** DataSet Objects Serach******************', () => {

       
       
        it('Add Permission: DATASET OBJECTS SEARCH ',()=>{
        
            objRoles.add_permission('DATASET OBJECTS SEARCH','DATASET OBJECTS SEARCH Management');
        })
        
        
        //verify Actions Enabled BA data
        it('DSOS: verify Actions Enabled ',()=>{
            
            objRoles.login_new();
            objRoles.verify_actions_enabled_DSOS();
        
        })
        
       
        //// uncheck_actions
        it('DSOS :uncheck_actions VA',()=>{   
             
            objRoles.uncheck__actions_View_active(2);   
            
         })
        
         //// verify_actions view and edit 
        it('DSOS :Verify Actions VA ',()=>{   
             
         objRoles.DSOS_VA_View_Active();   
            
         })
        
                
        //Delete permission 
        it('DSOS: delete_permission ',()=>{
            
            objRoles.open_Role();
            objRoles.delete_permission(2);
            
        })

        // verify Del per
        it('DSOS :verify_ del_per',()=>{
            
            objRoles.DSOS_verify_del_per();
            
        })

       

    })

    describe('Permission:***************** Credentials******************', () => {

       
       
        it('Add Permission: CREDENTIALS ',()=>{
        
            objRoles.add_permission('CREDENTIALS','CREDENTIALS Management');
        })
        
        
        //verify Actions Enabled BA data
        it('CR: verify Actions Enabled ',()=>{
            
            objRoles.login_new();
            objRoles.verify_actions_enabled_CR();
        
        })
        
        
        //// uncheck_actions
        it('CR :uncheck_actions VA',()=>{   
             
            objRoles.uncheck__actions_View_active(2);   
            
         })
        
         //// verify_actions view and edit 
        it('CR :Verify Actions VA ',()=>{   
             
          objRoles.CR_VA_View_Active();   
            
         })
        
         //check actions  View and Active
         it('CR:Check Actions View, Active ',()=>{   
           
            objRoles.check__actions_View_active(2); 
            
            
         })
          
        it('CR:UnCheck Actions Add, Edit,Del ',()=>{   
           
            
            objRoles.UCA_Add_view_edit(2)   
            
         })
        
         // verify actions diasbled ADD ,EDIT, DEL
         it('CR:verify add, edit,Del  ',()=>{   
             
            objRoles.CR_VA_add__edit_del(); 
            
         }) 

                
        //Delete permission 
        it('CR: delete_permission ',()=>{
            
            objRoles.open_Role();
            objRoles.delete_permission(2);
            
        })

        // verify Del per
        it('CR :verify_ del_per',()=>{
            
            objRoles.CR_verify_del_per();
            
        })

       

    })

    describe('Permission:***************** SYSTEM CONNECTIONS******************', () => {

       
       
        it('Add Permission: SYSTEM CONNECTIONS ',()=>{
        
            objRoles.add_permission('SYSTEM CONNECTIONS','SYSTEM CONNECTIONS Management');
        })
        
        
        //verify Actions Enabled BA data
        it('SC: verify Actions Enabled ',()=>{
            
            objRoles.login_new();
            objRoles.verify_actions_enabled_SC();
        
        })
        
        
        //// uncheck_actions
        it('SC :uncheck_actions VA',()=>{   
             
            objRoles.uncheck__actions_View_active(2);   
            
         })
        
         //// verify_actions view and edit 
        it('SC :Verify Actions VA ',()=>{   
             
          objRoles.SC_VA_View_Active();   
            
         })
        
         //check actions  View and Active
         it('SC:Check Actions View, Active ',()=>{   
           
            objRoles.check__actions_View_active(2); 
            
            
         })
          
        it('SC:UnCheck Actions Add, Edit,Del ',()=>{   
           
            
            objRoles.UCA_Add_view_edit(2)   
            
         })
        
         // verify actions diasbled ADD ,EDIT, DEL
         it('SC:verify add, edit,Del  ',()=>{   
             
            objRoles.SC_VA_add__edit_del(); 
            
         }) 

                
        //Delete permission 
        it('SC: delete_permission ',()=>{
            
            objRoles.open_Role();
            objRoles.delete_permission(2);
            
        })

        // verify Del per
        it('SC :verify_ del_per',()=>{
            
            objRoles.SC_verify_del_per();
            
        })

       

    })

    describe('Permission:***************** SYSTEM KEYS******************', () => {

       
       
        it('Add Permission: SYSTEM KEYS ',()=>{
        
            objRoles.add_permission('SYSTEM KEYS','SYSTEM KEYS Management');
        })
        
        
        //verify Actions Enabled 
        it('SK: verify Actions Enabled ',()=>{
            
            objRoles.login_new();
            objRoles.verify_actions_enabled_SK();
        
        })
        
        
        //// uncheck_actions
        it('SK :uncheck_actions VA',()=>{   
             
            objRoles.uncheck__actions_View_active(2);   
            
         })
        
         //// verify_actions view and edit 
        it('SK :Verify Actions VA ',()=>{   
             
          objRoles.SK_VA_View_Active();   
            
         })
        
         //check actions  View and Active
         it('SK:Check Actions View, Active ',()=>{   
           
            objRoles.check__actions_View_active(2); 
            
            
         })
          
        it('SK:UnCheck Actions Add, Edit,Del ',()=>{   
           
            
            objRoles.UCA_Add_view_edit(2)   
            
         })
        
         // verify actions diasbled ADD ,EDIT, DEL
         it('SK:verify add, edit,Del  ',()=>{   
             
            objRoles.SK_VA_add__edit_del(); 
            
         }) 

                
        //Delete permission 
        it('SK: delete_permission ',()=>{
            
            objRoles.open_Role();
            objRoles.delete_permission(2);
            
        })

        // verify Del per
        it('SK :verify_ del_per',()=>{
            
            objRoles.SK_verify_del_per();
            
        })

       

    })

    describe('Permission:***************** CDC Destinations ******************', () => {

       
       
        it('Add Permission: CDC Destinations ',()=>{
        
            objRoles.add_permission('CHANGE DATA CAPTURE DESTINATIONS','CDC Destinations Management');
        })
        
        
        //verify Actions Enabled BA data
        it('CDCDs: verify Actions Enabled ',()=>{
            
            objRoles.login_new();
            objRoles.verify_actions_enabled_CDCDs();
        
        })
        
        
        //// uncheck_actions
        it('CDCDs :uncheck_actions VA',()=>{   
             
            objRoles.uncheck__actions_View_active(2);   
            
         })
        
         //// verify_actions view and edit 
        it('CDCDs :Verify Actions VA ',()=>{   
             
          objRoles.CDCDs_VA_View_Active();   
            
         })
        
         //check actions  View and Active
         it('CDCDs:Check Actions View, Active ',()=>{   
           
            objRoles.check__actions_View_active(2); 
            
            
         })
          
        it('CDCDs:UnCheck Actions Add, Edit,Del ',()=>{   
           
            
            objRoles.UCA_Add_view_edit(2)   
            
         })
        
         // verify actions diasbled ADD ,EDIT, DEL
         it('CDCDs:verify add, edit,Del  ',()=>{   
             
            objRoles.CDCDs_VA_add__edit_del(); 
            
         }) 

                
        //Delete permission 
        it('CDCDs: delete_permission ',()=>{
            
            objRoles.open_Role();
            objRoles.delete_permission(2);
            
        })

        // verify Del per
        it('CDCDs :verify_ del_per',()=>{
            
            objRoles.CDCDs_verify_del_per();
            
        })

       

    })

   
    describe('ROLES ACTIVITIES',()=>{

        beforeEach(()=>{
            
            objRoles.open_Role();
        
        })

    // Delete credentials
    it('Delete Credentials',()=>{
    
        objRoles.delete_credentials()
        
    }) 


    //activate and Deactivate  a role
    it('Deactivate a role',()=>{
    
        objRoles.activate_and_deactivate_a_role()
        
    }) 


     // delete_a_role
   it('Delete a Role ',()=>{
 
    objRoles.delete_a_role(objRoles.strRoleName);
    
    })


    })
