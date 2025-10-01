
import { Roles } from "../classes/RolesExtended";
import { TestBase } from "../classes/TestBase"
import CypressTestIds from  '../CypressTestIds';


// Global viewport setup for all tests
beforeEach(() => {
  cy.viewport(2000, 1000);
});


//create Roles Object
const objRoles:Roles= new Roles();
//first check Roles section is accessible to access Dataset
    it(' Open Roles',()=>{
     
        objRoles.open_Role();

    })

describe('ROLE FIELDS EDGE CASE SCENARIOS',()=>{

    beforeEach(()=>{
        
        objRoles.open_Role();
    
    })

  /*  it('Empty Role Name',()=>{
   
        objRoles.Create_Role('','Description');  
        cy.get('.ant-form-item-explain-error > .ant-row > .ant-col')
        .should('be.visible') 

    })
   
    it('Name Less Than minimum Length',()=>{
 
        objRoles.Create_Role('R','Description')
         cy.get('.ant-form-item-explain-error > .ant-row > .ant-col')
        .should('be.visible') 
        
    })

   
    it('Name Greater than Maximum Length ',()=>{
 
        objRoles.Create_Role('Super Administrator Of Global Enterprise Systems With Extended Access Control And Comprehensive Audit Management Lead', 'Description')
         cy.get('.ant-form-item-explain-error > .ant-row > .ant-col')
        .should('be.visible') 
    })    

  
    it('Field Contains Special Character',()=>{
    
        objRoles.Create_Role('Role!@#', 'Description')
         cy.get('.ant-form-item-explain-error > .ant-row > .ant-col')
        .should('be.visible') 
    }) 

     
    it(' White Space Only',()=>{
    
        objRoles.Create_Role('  ', 'Description')
         cy.get('.ant-form-item-explain-error > .ant-row > .ant-col')
        .should('be.visible') 
    }) 

   it('Description Greater than Maximum length',()=>{
    
    objRoles.Create_Role('This role is designed for administrators who require extended access across multiple enterprise systems and applications, ensuring that they can manage permissions, monitor activity, and enforce compliance across diverse business units. The individual assigned to this role is responsible for coordinating with security teams, performing audits, generating compliance reports, and ensuring that all user actions are aligned with organizational policies. In addition, they will oversee onboarding processes, provide training, and act as a liaison between departments to maintain efficiency', 'Description');
     cy.get('.ant-form-item-explain-error > .ant-row > .ant-col')
        .should('be.visible') 

}) */

  it(' Create Role',()=>{
    
        objRoles.Create_Role(objRoles.strRoleName, 'Description')
         //Success Message
        cy.get(objRoles.TestIDLocator(CypressTestIds.TOAST_ALERT_MESSAGE_SUCCESS), {timeout: 8_000})
        .should('be.visible') 
    }) 


     it(' Add a User to Role',()=>{
    
        objRoles.add_a_user_to_the_role()
         
    })
})



// PERMISSION: BUSINESS ARAES 
describe.skip('Permission:***************** BUSINESS AREAS******************', () => {

    it('Add Permission: BUSINESS ARAES ',()=>{

    objRoles.add_permission('BUSINESS AREAS','Business Areas Management');
    
    })


it.skip('BA: Verify Functionality When Active is Checked',()=>{
    
    
    objRoles.VF_Active();
    
       
})

it.skip('BA: Verify Functionality When Active and View are Checked',()=>{
     
    objRoles.Check_uncheck_actions(2,{view:true});
    objRoles.VF_Active_View();
        
})

  it('BA: Verify Functionality When All Actions are Enabled',()=>{  
        
    objRoles.Check_uncheck_actions(2,{add:true, edit:true, delete:true, view:true});
    objRoles.verify_All_Actions_Enabled_BA();
   
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



describe.skip('Permission:***************** BUSINESS AREA DATA******************', () => {

it('Add Permission: BUSINESS AREA DATA ',()=>{
    
    objRoles.add_permission('BUSINESS AREA DATA','Business Area Data Management');
})


it('BAD: Verify Functionality When Active is Checked',()=>{
    
    
    objRoles.BAD_VF_Active();
    
       
})

it('BAD: Verify Functionality When Active and View are Checked',()=>{
     
    objRoles.Check_uncheck_actions(2,{view:true});
    objRoles.BAD_VF_Active_View();
        
})

  it('BAD: Verify Functionality When All Actions are Enabled',()=>{  
        
    objRoles.Check_uncheck_actions(2,{add:true, edit:true, delete:true, view:true});
    objRoles.verify_actions_enabled_BAD();
   
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

describe.skip('Permission:***************** USERS******************', () => {

    it('Add Permission: USERS ',()=>{
        
        objRoles.add_permission('USERS','USERS Management');
    })
    
    
    
    it('USERS: Verify Functionality When Active is Checked ',()=>{
        
       
       objRoles.Users_VF_Active();
    
    })
    
    
    //// uncheck_actions
    it('USERS:Verify Functionality When Active and View are Enabled',()=>{   
         
     objRoles.Check_uncheck_actions(2,{view:true});
     objRoles.Users_VF_Active_View();
        
     })
    
     //// verify_actions view and edit 
    it('USERS:Verify Functionality When All Actions are Enabled ',()=>{   
         
        objRoles.Check_uncheck_actions(2,{add:true, edit:true, delete:true, view:true});
        objRoles.verify_actions_enabled_USERS();  
        
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
    describe.skip('Permission:***************** ROLES******************', () => {


        it('Add Permission: ROLES ',()=>{
        
            objRoles.add_permission('ROLES','ROLES Management');
        })
        
        
        it('ROLES: Verify Functionality When Active is Checked ',()=>{
            
        
        objRoles.Roles_VF_Active();
        
        })
        
        
       
        it('ROLES:Verify Functionality When Active and View are Checked',()=>{   
            
        objRoles.Check_uncheck_actions(2,{view:true});
        objRoles.Roles_VF_Active_View();
            
        })
        
        //// verify_actions view and edit 
        it('ROLES:Verify Functionality When All Actions are Enabled ',()=>{   
            
        objRoles.Check_uncheck_actions(2,{add:true, edit:true, delete:true, view:true});
        objRoles.verify_all_actions_enabled_ROLES();  
            
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
    describe.skip('Permission:***************** SCHEMA MODELS******************', () => {


        it('Add Permission: SCHEMA MODELS ',()=>{
        
            objRoles.add_permission('SCHEMA MODELS','SCHEMA MODELS Management');
        })
        
        it('SCHEMA MODELS: Verify Functionality When Active is Checked ',()=>{
            
        
        objRoles.SM_VF_Active();
        
        })       
        
        it('SCHEMA MODELS:Verify Functionality When Active and View are Checked',()=>{   
            
        objRoles.Check_uncheck_actions(2,{view:true});
        objRoles.SCHEMA_MODELS_VF_Active_View();
            
        })
        
        // verify_actions view and edit 
        it('SCHEMA MODELS:Verify Functionality When All Actions are Enabled ',()=>{   
            
        objRoles.Check_uncheck_actions(2,{add:true, edit:true, delete:true, view:true});
        objRoles.verify_actions_enabled_SCHEMA();  
            
        })
        
          //delete Schema Models 
          it('SCHEMA MODELS: delete_permission ',()=>{
            
            objRoles.open_Role();
            objRoles.delete_permission(2);
            
        })

        // verify Del permission Schema Models
        it('SCHEMA MODELS :verify_ del_per',()=>{
            
            objRoles.SCHEMA_verify_del_per();
            
        })

                
       
    })


    describe('Permission:***************** Datasets******************', () => {

        it('Add Permission: SCHEMA MODELS ',()=>{
        
            objRoles.add_permission('SCHEMA MODELS','SCHEMA MODELS Management');
            objRoles.Check_uncheck_actions(2,{add:true, edit:true, delete:true, view:true});

        })

        
        it('Add Permission: DATASETS ',()=>{
        
            objRoles.add_permission('DATASETS','DATASETS Management');
        })
        
        
        it('DataSets: Verify Functionality When Active is Checked ',()=>{
            
        
        objRoles.DS_VF_Active();
        
        })
        
        it('DataSets:Verify Functionality When Active and View are Checked',()=>{   
            
        objRoles.Check_uncheck_actions(2,{view:true});
        objRoles.DS_VA_View_Active();
            
        })
        
        // verify_actions view and edit 
        it('DS:Verify Functionality When All Actions are Enabled ',()=>{   
            
        objRoles.Check_uncheck_actions(2,{add:true, edit:true, delete:true, view:true});
        objRoles.verify_actions_enabled_DS();  
            
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
        
        
        
        it('DataTags: Verify Functionality When Active is Enabled ',()=>{
            
        
        objRoles.DT_VF_Active();
        
        })
        
        it('DataTags:Verify Functionality When Active and View are Checked',()=>{   
            
        objRoles.Check_uncheck_actions(2,{view:true});
        objRoles.DT_VA_View_Active();
            
        })
        
        // verify_actions view and edit 
        it('DataTag:Verify Functionality When All Actions are Enabled ',()=>{   
            
        objRoles.Check_uncheck_actions(2,{add:true, edit:true, delete:true, view:true});
        objRoles.verify_actions_enabled_DT();  
            
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
        
        
       it('DSOS: Verify Functionality When Active is Enabled ',()=>{
            
        
        objRoles.DSOS_VF_Active();
        
        })
        
        it('DSOS:Verify Functionality When Active and View are Checked',()=>{   
            
        objRoles.Check_uncheck_actions(2,{view:true});
       // objRoles.DSOS_VA_View_Active();
            
        })
        
        // verify_actions view and edit 
        it('DSOS:Verify Functionality When All Actions are Enabled ',()=>{   
            
        objRoles.Check_uncheck_actions(2,{add:true, edit:true, delete:true, view:true});
        objRoles.verify_actions_enabled_DSOS();  
            
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
        
        
        it('Credentials: Verify Functionality When Active is Enabled ',()=>{
            
        
        objRoles.CR_VF_Active();
        
        })
        
        it('Credentials:Verify Functionality When Active and View are Checked',()=>{   
            
        objRoles.Check_uncheck_actions(2,{view:true});
        objRoles.CR_VA_View_Active();
            
        })
        
        // verify_actions view and edit 
        it('Credentials:Verify Functionality When All Actions are Enabled ',()=>{   
            
        objRoles.Check_uncheck_actions(2,{add:true, edit:true, delete:true, view:true});
        objRoles.verify_actions_enabled_CR();  
            
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
        
        
        it('SYSTEM CONNECTIONS: Verify Functionality When Active is Enabled ',()=>{
            
        
        objRoles.SC_VF_Active();
        
        })
        
        it('SYSTEM CONNECTIONS:Verify Functionality When Active and View are Checked',()=>{   
            
        objRoles.Check_uncheck_actions(2,{view:true});
        objRoles.SC_VA_View_Active();
            
        })
        
        // verify_actions view and edit 
        it('SYSTEM CONNECTIONS:Verify Functionality When All Actions are Enabled ',()=>{   
            
        objRoles.Check_uncheck_actions(2,{add:true, edit:true, delete:true, view:true});
        objRoles.verify_actions_enabled_SC();  
            
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
        
       
        
        it('SYSTEM KEYS: Verify Functionality When Active is Enabled ',()=>{
            
        
        objRoles.SK_VF_Active();
        
        })
        
        it('SYSTEM KEYS:Verify Functionality When Active and View are Checked',()=>{   
            
        objRoles.Check_uncheck_actions(2,{view:true});
        objRoles.SK_VA_View_Active();
            
        })
        
        // verify_actions view and edit 
        it('SYSTEM KEYS:Verify Functionality When All Actions are Enabled ',()=>{   
            
        objRoles.Check_uncheck_actions(2,{add:true, edit:true, delete:true, view:true});
        objRoles.verify_actions_enabled_SK();  
            
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
        
         it('CDC Destinations: Verify Functionality When Active is Enabled ',()=>{
            
        
        objRoles.CDCDS_VF_Active();
        
        })
        
        it('CDC Destinations:Verify Functionality When Active and View are Checked',()=>{   
            
        objRoles.Check_uncheck_actions(2,{view:true});
        objRoles.CDCDs_VA_View_Active();
            
        })
        
        // verify_actions view and edit 
        it('SYSTEM KEYS:Verify Functionality When All Actions are Enabled ',()=>{   
            
        objRoles.Check_uncheck_actions(2,{add:true, edit:true, delete:true, view:true});
        objRoles.verify_actions_enabled_CDCDs();  
            
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


  


     // delete_a_role
   it('Delete a Role ',()=>{
 
    objRoles.delete_a_role(objRoles.strRoleName);
    
    })


    })
