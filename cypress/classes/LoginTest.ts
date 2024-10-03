import { TestBase } from "./TestBase";
import CypressTestIds from "./CypressTestIDs";

        export class LoginTest extends TestBase
        {
            UserName: string='';
            Password: string='';
            URL: string='';
            //cidtxtEmailID: string = this.TestIDLocator(CypressTestIds.USER_LOGIN_EMAIL_INPUT) //'#basic_email'; //content ID - email ID textbox
            //cidtxtBasicPassword: string = this.TestIDLocator(CypressTestIds.USER_LOGIN_PASSWORD_INPUT) //'#basic_password'; //content ID - password textbox
            //cidbtnLogin: string = this.TestIDLocator(CypressTestIds.USER_LOGIN_SUBMIT_BUTTON) //'.ant-form-item-control-input-content > .ant-btn'; //content ID - login button
            //txtbtnLoginTitle: string = "Login"; 
            //cidmsgIncorrectUserPass: string =  '.Toastify__toast-container'; //content ID - Message box for incorrect user/password
            msgIncorrectUserPass: string = "Password may be incorrect";            
            //cidlblForgotPassword: string = 'u'; //content ID - Forgot Password lable
            //lblForgotPasswordTitle: string = 'Forgot your password?';
            //cidbtnResetPassword: string = '.ant-form-item-control-input-content > .ant-btn > span'; //content ID - reset password button 
            //btnResetTitle: string = 'Reset';
            cidlblDashboardSchema: string = ':nth-child(3) > .item-label'; //content ID - Dashboard's Schema menu item. For verification purpose
            //lblDashboardSchema: string = 'Schema';
            cidlblEmailRequiredError: string = '.ant-form-item-explain-error';
            lblEmailRequiredErrorTitle: string = 'Email is required';
            //cidlblResetEmailSent: string = '.ant-alert-message';
            lblResetEmailSentTitle: string = 'Password reset link sent';
            cidlblBackToLogin: string = 'u'; 
            lblBackToLoginTitle: string = 'Back to login';
            NewPasswordWithoutCap: string = 'txt$54s#4s';
            NewPasswordWithoutSmall: string = 'TXT$54s#4S';
            NewPasswordWithoutNumber: string = 'Txt$@ds#ws';
            NewPasswordWithoutSpecial: string = 'Txts54sy4s';
            NewPasswordMinLength: string = 'T$54s4s';
            NewPasswordMaxLength: string = 'Txt$54s#4sTxt$54s#4sTxt$54s#4sTxt$54s#4s';
            cidNewPass1: string = '[data-testid="user-login-email-input"]';
            cidNewPass2: string = '#basic_confirmNewPassword';
            //regex
            //cy.url().should('match', /myregexp/)
            /*
                cy.get('div')                // select DOM element (tag, class or id)
                .invoke('text')            // check the innerHTML text
                .should('match', /regex/)  // compare with a regular expression
            */
            //cy.url().should('contain', /regex/)
            //[a-z], [A-Z], \d and _|[^\w] 
            //(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W) combined 

            

            SetInits (URL: string, UserName: string, Password: string)
            {
                this.URL = URL;
                this.UserName = UserName;
                this.Password = Password;                             
            }
  
            //Get values from class properties
            DefaultLogin()
            {
                this.LoginRun(this.UserName, this.Password); 
            }

            OpenURL(SiteURL?: string)
            {
                if(SiteURL!==undefined)
                {
                    cy.visit(SiteURL);
                }
                else
                {
                    cy.visit(this.URL);
                }
            }

            

            //Login with correct password.
            LoginWithCorrectPass(UserName: string, Password: string, SiteURL?: string)
            {
                super.LoginWithCorrectPass(UserName, Password, this.URL);
            }

            //Login with incorrect password.
            LoginWithWrongPass(UserName: string, Password: string, SiteURL?: string)
            {
                super.LoginRun(UserName, Password, SiteURL);
                //cy.get(this.cidmsgIncorrectUserPass, {timeout:4_000})
                //.should(this.assertBeVisible)
                cy.contains(this.msgIncorrectUserPass, {timeout:4_000});
            }

            //Open forgot password page by clicking on Forgot Password link
            OpenForgotPasswordPage()
            {
                //cy.get(this.cidlblForgotPassword).contains(this.lblForgotPasswordTitle).click();
                cy.get(this.TestIDLocator(CypressTestIds.USER_LOGIN_FORGOT_PASSWORD_LINK)).click();
                cy.get(this.TestIDLocator(CypressTestIds.USER_RESET_PASSWORD_SUBMIT_BUTTON))
                .should(this.assertBeVisible);
            }

            //Back to login page by clicking on back to login link at password reset page
            BackToLogin()
            {
                cy.get(this.TestIDLocator(CypressTestIds.USER_LOGIN_FORGOT_PASSWORD_LINK)).click();
                cy.get(this.TestIDLocator(CypressTestIds.USER_RESET_PASSWORD_SUBMIT_BUTTON), {timeout: 8_000})
                .should(this.assertBeVisible);
                cy.get(this.TestIDLocator(CypressTestIds.USER_RESET_PASSWORD_BACKTOLOGIN_BUTTON))
                .contains(this.lblBackToLoginTitle).click();
                cy.get(this.TestIDLocator(CypressTestIds.USER_LOGIN_SUBMIT_BUTTON))
                .should(this.assertBeVisible);
            }

            //Click on reset button without entering email
            ClickResetWithoutEmail()
            {
                cy.get(this.TestIDLocator(CypressTestIds.USER_LOGIN_FORGOT_PASSWORD_LINK)).click();
                cy.get(this.TestIDLocator(CypressTestIds.USER_RESET_PASSWORD_SUBMIT_BUTTON), {timeout: 8_000})
                .should(this.assertBeVisible).click();
                //show error message
                cy.get(this.cidlblEmailRequiredError)
                .contains(this.lblEmailRequiredErrorTitle);
            }

            //Click on reset button with entering email
            ClickResetValidEmail()
            {
                cy.get(this.TestIDLocator(CypressTestIds.USER_LOGIN_FORGOT_PASSWORD_LINK)).click();
                cy.get(this.TestIDLocator(CypressTestIds.USER_RESET_PASSWORD_SUBMIT_BUTTON), {timeout: 8_000})
                .should(this.assertBeVisible)
                cy.get(this.TestIDLocator(CypressTestIds.USER_RESET_PASSWORD_EMAIL_INPUT))
                .type(this.UserName);
                cy.get(this.TestIDLocator(CypressTestIds.USER_RESET_PASSWORD_SUBMIT_BUTTON))
                .click();
                cy.get(this.TestIDLocator(CypressTestIds.USER_RESET_PASSWORD_LINK_SENT_MESSAGE))
                
            }

            /* //common function for login
            public LoginRun(UserName: string, Password: string, SiteURL?: string)
            {
                super.LoginRun(UserName, Password, SiteURL);
            } */

            //Reset password. Check whether UPPER CASE letter exists in new password
            CheckUpperinPass()
            {
                //[A-Z]
                //type user and password
                //cy.visit(this.URL);
                //cy.get(this.cidtxtEmailID).type(this.UserName);
                
                cy.get(this.cidNewPass1).type(this.NewPasswordWithoutCap)
                cy.get(this.cidNewPass1).invoke(this.cmdInvokeValue).should(this.cmdMatch, /[A-Z]/);
                cy.get('#basic_confirmNewPassword');

                
                //click on button
                //cy.get(this.cidbtnLogin).contains(this.txtbtnLoginTitle).click()
                //cy.get('#basic_newPassword').type('abce1234')
                //cy.get('#basic_newPassword').should('match', /[A-Z]/)
                
                //cy.get('#basic_confirmNewPassword');
            }

             //Reset password. Check whether LOWER CASE letter exists in new password
             CheckLowerinPass()
             {                   
                     cy.get(this.cidNewPass1).type(this.NewPasswordWithoutCap);
                     cy.get(this.cidNewPass1).invoke(this.cmdInvokeValue).should(this.cmdMatch, /[a-z]/);
                     cy.get('#basic_confirmNewPassword');
             }
 
             
             //Reset password. Check whether a NUMBER exists in new password
             CheckNumericinPass()
             {
 
             }
 
             //Reset password. Check whether SPECIAL CHARACTER exists in new password
             CheckSplCharinPass()
             {
 
             }
 
             //Reset password. Test new password's length lower than the limit
             CheckMinLengthofPass()
             {
 
             }
 
             //Reset password. Test new password's length higher than the limit
             CheckMaxLengthofPass()
             {
 
             }
 
        }
    