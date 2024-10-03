import { LoginTest } from "../classes/LoginTest";
//import LoginTest = Pretectum.Authentication.LoginTest;


    //const BaseURL: string = 'https://pretectum.net';
    const BaseURL: string = 'http://localhost:3000/';
    const UserName: string = 'testing1@malaymo.com';
    const CorrectPassword: string = 'Maria@027';
    const NewPassword: string = 'Txt$54s#4s';
    const NewPasswordAlt: string = 'Due@96x#8p';
    const WrongPassword: string = "Maria";
    const ResetPasswordURL: string = BaseURL + '/resetpassword?code=959988&username=f7b76cc4-b45e-47a6-855c-31c788f1be77&clientId=61junkfaas0egho45e9q71uljj&region=us-east-2&email=testing1@malaymo.com';
 
    //Create LoginTest object
    const objLoginTest: LoginTest = new LoginTest();

    objLoginTest.SetInits(BaseURL, UserName, CorrectPassword);
    
    /*
    it("test", () =>{
        cy.viewport(1920,1080);
        objLoginTest.OpenURL(BaseURL);
        objLoginTest.LoginWithCorrectPass (UserName, CorrectPassword); 
    })
        */
    //describe - Password reset's initial operations

    
    
    describe("Password reset's initial operations", ()=> 
    {
        
        //cy.log("spec describe - Password reset's initial operation - started");
         beforeEach(()=>
        {
            //cy.log("spec before each - visit url - started");
            objLoginTest.OpenURL(BaseURL);
            //cy.log("spec before each - visit url - finished");
        }) 
 
        //Open Reset Password Window
        it("Open Forgot Password Page", () => 
        {   
            cy.log("spec open forgot password page - started");          
            objLoginTest.OpenForgotPasswordPage(); 
            cy.log("spec open forgot password page - finished");
           
        });

        //back to login
        it("Click Back to login", () => 
        {         
            cy.log("spec back to login - started");    
            objLoginTest.BackToLogin();   
            cy.log("spec back to login - started");
        }) 

        //Click on reset button without entering email id
        it("Click Reset button without Entering Email", () => 
        {     
            cy.log("spec click reset button without email - started");        
            objLoginTest.ClickResetWithoutEmail(); 
            cy.log("spec click reset button without email - finished"); 
        }) 

        //Click on reset button with registered email
        it("Click Reset button", () => 
        {        
            cy.log("spec click reset button - started");      
            objLoginTest.ClickResetValidEmail(); 
            cy.log("spec click reset button - finished");
        })
        //cy.log("spec describe - Password reset's initial operation - finished");
    })

    /*
    // describe - Password reset page operations. Check complexity and length related parameters
    describe('Password reset page operations', () => 
    {
        //cy.log("spec describe - Password reset page operations - started");
        beforeEach(()=>
        {
            // cy.log("spec before each - visit url - started");
            objLoginTest.OpenURL(ResetPasswordURL);
            // cy.log("spec before each - visit url - finished");
        })
    

        it("Password Reset New Pass without Cap Letter", () => 
        {
            cy.log("spec Password Reset New Pass without Cap Letter - started");
            objLoginTest.CheckUpperinPass();
            cy.log("spec Password Reset New Pass without Cap Letter - finished");
        })   
        //cy.log("spec describe - Password reset page operations - finished");    
    })

    */
   
    // describe - Login operations like login with correct and incorrect password
    describe("Login operations", () =>
    {
        
        //cy.log("spec describe - Login operations - started");
        beforeEach(()=>
        {
            // cy.log("spec before each - visit url - started");
            objLoginTest.OpenURL(BaseURL);
            // cy.log("spec before each - visit url - finished");
        }) 
        
        //Login with incorrect Password
        it("Login Test with Wrong Password", () => 
        {            
             cy.log("spec Login Test with Wrong Password - started");
            objLoginTest.LoginWithWrongPass (UserName, WrongPassword);   
             cy.log("spec Login Test with Wrong Password - finished");    
        })
    
        //Login with correct Password
        it("Login Test with Correct Password", () =>
        {             
            cy.log("spec Login Test with correct Password - started");
            objLoginTest.LoginWithCorrectPass (UserName, CorrectPassword); 
            cy.log("spec Login Test with correct Password - finished");      
        })
        //cy.log("spec describe - Login operations - finished");
    })


