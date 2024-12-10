import { BADataTest } from "../classes/BusinessAreaData"
import { TestBase } from "../classes/TestBase"

var blnUsersopened: Boolean=false;

//create BADataTest Object
const objBADataTest:BADataTest= new BADataTest();

let csv_file1: string = 'countriesFixtures.csv'; 
let csv_file2: string = 'BAdata.csv';
let xlsx_file: string = 'BADataFile.xlsx';
let csv_file3: string = 'Appendingdata.csv';
var Data_tag1='Date (start Dtae of business)'


//first check Users section is accessible 
it(' Open BAData',()=>{
    objBADataTest.openBAData();
    blnUsersopened=true;

})

// BAData activities

describe(' BADATA ACTIVITIES',()=>{

    beforeEach(()=>{
        
        objBADataTest.openBAData();
    
    })


//add BAdata

it(' add BAData  ',()=>{

    objBADataTest.addBAdata();

})

// drag and drop a  non-CSV file
it('Drag and Drop a Non-CSV File  ',()=>{

    //xlsxfile
    objBADataTest.drag_and_drop_non_csv_file(xlsx_file); 
   

})

// drag and drop a  non-CSV file
it('verify non csv file  ',()=>{

    //xlsxfile
    objBADataTest.check_table();
   

})

// drag and drop a CSV file
it('drag and drop a CSV file  ',()=>{

    objBADataTest. drag_and_drop_file(csv_file1); 
     

})

it('View BAdata  ',()=>{

    //xlsxfile
    objBADataTest.viewBAdata(); 

})

// Browse a file
it('Browse a CSV file  ',()=>{

    objBADataTest.Browse_CSV_file(csv_file2);    

})


//Over Writing data
it('Over Writing data  ',()=>{

    objBADataTest.Browse_CSV_file(csv_file2);    

})

// appending data()

it('Appending Data  ',()=>{
    
    objBADataTest.appending_data(csv_file3);
})

// File Preview

it ('File Preview',()=>{
    //objBADataTest.viewBAdata();
    objBADataTest.File_Preview();    

})


//View Business Data history

it('View Business Area Data HISTORY',()=>{

    objBADataTest.view_BA_history();
})


// Edge Case Scenarios
// Empty domain

it('Edge Case Scenario : Empty Domain', function() {

    var businesArea='Test Business Area'
    var D_description1 ='Description for test case scenarios'
    var purpose1 ='Picklist For Validation'
    var Domain_name1 =''

    objBADataTest.emptydomain(businesArea,Domain_name1,  D_description1, purpose1);
});

//Domain input  less than minimum length

it('Edge Case Scenario :Domain input  less than minimum length', function() {

    var businesArea='Test Business Area'
    var D_description1 ='Description for test case scenarios'
    var purpose1 ='Picklist For Validation'
    var Domain_name1 ='A'

    objBADataTest.Edge_Case_Scenarios(businesArea,Domain_name1,  D_description1, purpose1);
});

it('Edge Case Scenario :Empty description and purpose', function() {

    var businesArea='Test Business Area'
    var D_description1 =''
    var purpose1 =''
    var Domain_name1 ='Day and date'

    objBADataTest.empty_desc_and_purpose(businesArea,Domain_name1,  D_description1, purpose1);
});

//Input start with Special Character 


it('Edge Case Scenario :Input start with Special Character', function() {

    var businesArea='Test Business Area'
    var D_description1 ='Description for test case scenarios'
    var purpose1 ='Picklist For Validation'
    var Domain_name1 ='@countries'

    objBADataTest.Edge_Case_Scenarios(businesArea,Domain_name1,  D_description1, purpose1);
});


//maximum length domain name 

it('Edge Case Scenario :maximum length domain name   ', function() {

    var businesArea='Test Business Area'
    var D_description1 ='Description for test case scenarios'
    var purpose1 ='Picklist For Validation'
    var Domain_name1 ='Connecting every person around the world through innovation education and technology for a better future  '

    objBADataTest.Edge_Case_Scenarios(businesArea,Domain_name1,  D_description1, purpose1);
  
});

// maximum length description 

it('Edge Case Scenario :maximum length domain description    ', function() {

    var businesArea='Test Business Area'
    var D_description1 ='Our platform is designed to foster global connections by bridging gaps in education, technology, and innovation. We strive to create a collaborative space where individuals, businesses, and communities can come together to share knowledge, resources, and ideas. By leveraging cutting-edge technology and promoting innovative thinking, we empower people from all walks of life to engage, learn, and grow in a constantly evolving digital landscape. Our mission is to inspire positive change and help shape a more inclusive, connected, and innovative future for everyone'
    var purpose1 =' pick list for validation'
    var Domain_name1 ='Day and date   '

    objBADataTest.Edge_Case_Scenarios(businesArea,Domain_name1,  D_description1, purpose1);
    
});

//maximum length Purpose 
it('Edge Case Scenario :maximum length Domain Purpose   ', function() {

    var businesArea='Test Business Area'
    var D_description1 ='picklist for validation'
    var purpose1 ='The purpose of our platform is to drive positive social and technological change on a global scale. Through the integration of advanced educational tools and innovative technologies, we aim to democratize access to resources that empower individuals and communities. Our mission is to create opportunities for collaboration and problem-solving, fostering a world where knowledge and innovation are accessible to all, paving the way for a more inclusive and sustainable future. We believe in the power of collective action and strive to bring about lasting, impactful change in societies across the globe'
    var Domain_name1 ='Day and date'

    objBADataTest.Edge_Case_Scenarios(businesArea, Domain_name1,  D_description1, purpose1);
   
});

it ('Delete Business Area Data ',()=>{

    objBADataTest.Delete_BAD();

})


})




