import { DataSet } from "../classes/DataSet";
import { TestBase } from "../classes/TestBase"

//var blnUsersopened: Boolean=false;

//create Dataset Object
const objDataSetupTest:DataSet= new DataSet();



it(' create Schema',()=>{
    objDataSetupTest.createSchema();
    

})

describe(' DATASET ACTIVITIES',()=>{

    beforeEach(()=>{
        
        objDataSetupTest.select_schema();
        
    })

// Open New data set window

    it('Open New dataset window',()=>{

        objDataSetupTest.open_new_dataset_window();

    })

    //save dataset container

    it('Save Dataset container',()=>{

        objDataSetupTest.save_data_set();

    })

   // Add Data Manually
   /* it('Add Data Manually',()=>{

        objDataSetupTest.add_dataset_record_manually();

    })*/

    //  drag and drop a file and replace existing data
    it(' drag and drop a file and replace existing data',()=>{

        objDataSetupTest.Drag_and_drop_file_and_replace_existing_data();

    })

   //Edit Dataset
      it('Edit Dataset',()=>{

            objDataSetupTest.Edit_DataSet();

    })

    //browse a csv file    
       /* it.skip('browse a csv file ',()=>{

        objDataSetupTest.browse_a_csv_file();

    })*/

    

    //empty consent box
    it.skip('Empty Consent box ',()=>{

        objDataSetupTest.empty_consent_textbox();

    })

    //unchecked consent box
    it('unchecked Consent box ',()=>{

        objDataSetupTest.uncheck_consent_box();

    })

    //verify data
    it('Verify data ',()=>{

        objDataSetupTest.verify_data();

    })

    //Delete Data set
    it('Delete Data Set',()=>{

        objDataSetupTest.delete_dataset();

    })

     //Delete schema
     it('Delete schema',()=>{

        objDataSetupTest.DeleteSchema();

    })

    })
