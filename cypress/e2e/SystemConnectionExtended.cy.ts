import { LoginTest } from "../classes/LoginTest";
import {SystemConnectionExtended}  from "../classes/SystemConnectionExtended";

// Global viewport setup for all tests
beforeEach(() => {
  cy.viewport(2000, 1000);
});

var blnUsersopened: Boolean=false;

//create UsersTest Object
const objSysConExtTest:SystemConnectionExtended= new SystemConnectionExtended();

//first check System Connection  is accessible 
it(' Open System Connection',()=>{
    objSysConExtTest.openSystemConnection();
    blnUsersopened=true;

})

describe('System Connection ACTIVITIES',()=>{

    beforeEach(()=>{
    
        objSysConExtTest.openSystemConnection();   
    })


     it('Connection Name Input Greater Than Maximum length',()=>{
        
      objSysConExtTest.connection_form('Connection name created for testing the maximum allowed length validation in cloud storage configuration system demo','Description', 'AKIAYK64BMR2Z3CMHSVX',
        'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY' , 'ps3td'); 

        cy.get('.ant-form-item-explain-error > .ant-row > .ant-col',{timeout:8000})
        .should('be.visible')
    })

     it('Connection Name Input less Than Minimum length',()=>{
        
        objSysConExtTest.connection_form('C','Description', 'AKIAYK64BMR2Z3CMHSVX','wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY' , 'ps3td');
        cy.get('.ant-form-item-explain-error > .ant-row > .ant-col',{timeout:8000})
        .should('be.visible') 
    })

     it('Connection Name Contains Special',()=>{
        
        objSysConExtTest.connection_form('@C%6','Description', 'AKIAYK64BMR2Z3CMHSVX','wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY' , 'ps3td'); 
        cy.get('.ant-form-item-explain-error > .ant-row > .ant-col',{timeout:8000})
        .should('be.visible')
    })


    it('Connection Name Field Empty',()=>{
        
         objSysConExtTest.connection_form('','Description', 'AKIAYK64BMR2Z3CMHSVX','wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY' , 'ps3td'); 
        cy.get('.ant-form-item-explain-error > .ant-row > .ant-col',{timeout:8000})
        .should('be.visible')
    })


    it('Description Field Empty',()=>{
        
        objSysConExtTest.connection_form('TestSC','', 'AKIAYK64BMR2Z3CMHSVX','wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY' , 'ps3td'); 
       cy.get('.ant-form-item-explain-error',{timeout:8000})
        .should('be.visible')
    })

    it(' Empty access Key id',()=>{
        
        objSysConExtTest.connection_form('TestSC','Description', '','wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY' , 'ps3td'); 
        cy.get('.ant-form-item-explain-error',{timeout:8000})
        .should('be.visible')
    })


    it('Invalid access Key id',()=>{
        
        objSysConExtTest.connection_form('TestSC','Description', 'we56','wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY' , 'ps3td'); 
        cy.get('#basic_accessKeyId_help > .ant-form-item-explain-error',{timeout:8000})
        .should('be.visible')
    })
    
     it(' Empty  Secret access Key id',()=>{
        
        objSysConExtTest.connection_form('TestSC','Description', 'AKIAYK64BMR2Z3CMHSVX','' , 'ps3td'); 
       cy.get('.ant-form-item-explain-error',{timeout:8000})
        .should('be.visible')
    })


    it('Invalid access Key id',()=>{
        
        objSysConExtTest.connection_form('TestSC','Description', 'AKIAYK64BMR2Z3CMHSVX','wJal9898' , 'ps3td');     
        cy.get('#basic_secretAccessKey_help > .ant-form-item-explain-error',{timeout:8000})
        .should('be.visible')
    })

     it('Empty Bucket Name',()=>{
        
        objSysConExtTest.connection_form('TestSC','Description', 'AKIAYK64BMR2Z3CMHSVX','wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY' , ''); 
       
        cy.get('#basic_secretAccessKey_help > .ant-form-item-explain-error',{timeout:8000})
        .should('be.visible')
    })
})