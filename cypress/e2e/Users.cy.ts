import { LoginTest } from "../classes/LoginTest";
import {UsersTest}  from "../classes/UsersTest";


var blnUsersopened: Boolean=false;

//create UsersTest Object
const objUsersTest:UsersTest= new UsersTest();

//first check Users section is accessible 
it(' Open Users',()=>{
    objUsersTest.openUsers();
    blnUsersopened=true;

})

//Users Section Activities
describe('USERS ACTIVITIES',()=>{

beforeEach(()=>{
    
    objUsersTest.openUsers();

})


//add user button is visible

it('Add User Button Is Visible',()=>{

    objUsersTest.AddUsersButtonIsVisible();

})

// user list is visible

it(' User List Is Visible',()=>{

    objUsersTest.UserListVisible();

})

//add user
it('Add User ',()=>{

    objUsersTest.adduser();

})

//view users
it('View User',()=>{
    objUsersTest.viewuser();

})


//edit users
it('Edit User',()=>{
    objUsersTest.editUser();

})

//view users
it('View User',()=>{
    objUsersTest.viewuser();

})

//view user histoty
it('View User History',()=>{
    objUsersTest.viewUserHistory();

})


//send reset password link
it('send reset password link',()=>{
     objUsersTest.send_resetPassowrd_link();
 
 })


//reset password
it('Reset Password',()=>{
    
    objUsersTest.reset_Passowrd();

})


})

