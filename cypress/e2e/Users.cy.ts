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

//Users Section Axtivities
describe('USERS ACTIVITIES',()=>{

beforeEach(()=>{
    
    objUsersTest.openUsers();

})


//add user button is visible

it('Add User Button Is Visible',()=>{

    objUsersTest.AddUsersButtonIsVisible();

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

//reset password
it.skip('Reset Password',()=>{
    objUsersTest.resetPassword();

})







})
