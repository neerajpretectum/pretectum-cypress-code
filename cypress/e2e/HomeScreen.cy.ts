import { LoginTest } from "../classes/LoginTest";
import {Datatagtest}  from "../classes/DataTagTest";
import { HomeScreentest } from "../classes/HomeScreenTests";


var blnUsersopened: Boolean=false;

const objHomeScreenTests:HomeScreentest= new HomeScreentest();


describe('HOME SCREEN ACTIVITIES',()=>{

    beforeEach(()=>{
    
        objHomeScreenTests.Open_Home_Screen();   
    })


    it(' Verify Schema Models Visibility ',()=>{
     
        objHomeScreenTests.verify_Schema_Models_Visibility()
      
    })


    it(' Verify Data Set Visibility ',()=>{
     
        objHomeScreenTests.verify_Data_set_Visibility()
      
    })


    it(' Verify System Events Visibility ',()=>{
     
        objHomeScreenTests.verify_System_Events_Visibility()
      
    })

    it(' Verify DataSets Insights',()=>{
     
        objHomeScreenTests.verify_Dataset_Insights_visibility()
      
    })
})
