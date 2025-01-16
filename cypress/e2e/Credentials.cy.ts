import { LoginTest } from "../classes/LoginTest";
import { CredentialsTest } from "../classes/CredentialsTest"
import CypressTestIds from  "../classes/CypressTestIDs";


const objCredentialsTest: CredentialsTest = new CredentialsTest();


//First check weather Business Area is accessible
 it('Open Credentials', () =>
{
    objCredentialsTest.OpenCredentials();
});



    describe ('Credentials Activities', () =>
    {
        beforeEach(()=>
        {               
            objCredentialsTest.OpenCredentials();
        });

        
        it('Create Credentials', () =>
        {
            objCredentialsTest.CreateCredentials();
        });

        it('View Credentials', () =>
        {
            objCredentialsTest.ViewCredentials();
        });    

        it('Deactivate Credentials', () =>
        {
            objCredentialsTest.DeactivateCredentials();
        });

        it('Activate Credentials', () =>
        {
            objCredentialsTest.ActivateCredentials();
        });
        
        it('Edit Credentials', () =>
        {
            objCredentialsTest.EditCredentials();
        });

        it('Delete Credentials', () =>
            {
                objCredentialsTest.DeleteCredentials
            });

            it('Cancel Deletion Credentials', () =>
                {
                    objCredentialsTest.CancelDeleteCredentials();
                });       
                
        it('Delete Credentials', () =>
        {
            objCredentialsTest.DeleteCredentials();
        });  
    });
    