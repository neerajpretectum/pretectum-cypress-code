import { LoginTest } from "../classes/LoginTest";
import { BusinessAreaTest } from "../classes/BusinessAreaTest";
import CypressTestIds from  "../classes/CypressTestIDs";


//Before each
//call login
//call open business area

//const BaseURL: string = 'https://pretectum.net';
const BaseURL: string = 'http://localhost:3000/';
const UserName: string = 'testing1@malaymo.com';
const Password: string = 'Maria@027'
var blnBusinessAreaOpened: boolean = false;

//Create LoginTest object
//const objLoginTest: LoginTest = new LoginTest(BaseURL ,UserName, Password);
const objBusinessAreaTest: BusinessAreaTest = new BusinessAreaTest();


//First check weather Business Area is accessible
 it('Open Business Area', () =>
{
    objBusinessAreaTest.OpenBusinessArea();
    blnBusinessAreaOpened = true;
});


//If Business Area is accessible, run other test cases
//if(blnBusinessAreaOpened === true)
//{

    describe ('Business Area Activities', () =>
    {
        beforeEach(()=>
        {
 
            //it('Open Business Area', () =>
            //{                    
                objBusinessAreaTest.OpenBusinessArea();
            //})

        });

        
        it('Create Business Area', () =>
        {
            objBusinessAreaTest.CreateBusinessArea();
        });

        

        
        
        it('Edit Business Area', () =>
        {
            objBusinessAreaTest.EditBusinessArea();
        });

        //Verify Business area is not visible to the tester1


        //Assign user to the Business Area
        it('Assign user to Business Area', () =>
        {
            objBusinessAreaTest.BusinessAreaAssignUser();
        });

        //Verify Business area is visible to the tester1


        it('Remove user from Business Area', () =>
        {
            objBusinessAreaTest.BusinessAreaRemoveUser();
        });
        
        //delete business area to recreate to assign user
        it('Delete Business Area', () =>
            {
                objBusinessAreaTest.DeleteBusinessArea();
            });
        
        //Create Business Area and Assign User in one go
        it('Create Business Area and Assign User', () =>
        {
            objBusinessAreaTest.CreateBusinessAreaAndAssignUser();
        })

        it('Add credentials', () =>
            {
                objBusinessAreaTest.AddCredentials();
            })
    
            it('Uncheck All Permissions credentials', () =>
            {
                objBusinessAreaTest.UncheckAllPermissions();
            })
    
            it('Remove credentials', () =>
            {
                objBusinessAreaTest.RemoveCredentials();
            })

            it('Cancel Deletion Business Area', () =>
                {
                    objBusinessAreaTest.CancelDeleteBusinessArea();
                });       
                
        it('Delete Business Area', () =>
        {
            objBusinessAreaTest.DeleteBusinessArea();
        });

        

       
    });
    