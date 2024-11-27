import { DataSetup} from "../classes/DataSetupTest"
import { TestBase } from "../classes/TestBase"

//var blnUsersopened: Boolean=false;

//create Datasetup Object
const objDataSetupTest:DataSetup= new DataSetup();


//first check schema section is accessible to access Dataset
it(' Open Schema',()=>{
    objDataSetupTest.openSchema();
    

})

describe(' DATASET UP ACTIVITIES',()=>{

    beforeEach(()=>{
        
        objDataSetupTest.openSchema();
    
    })

// Open New data set window

    it.skip('Open New dataset window',()=>{

        objDataSetupTest.open_new_dataset_window();

    })

//save dataset container

    it.skip('Save Dataset container',()=>{

        objDataSetupTest.save_data_set();

    })

   // Add Data Manually
    it.skip('Add Data Manually',()=>{

        objDataSetupTest.add_dataset_record_manually();

    })

// Edit Dataset
    it.skip('Edit Dataset',()=>{

        objDataSetupTest.Edit_DataSet();

    })


//// drag and drop a file and replace existing data


it.skip(' drag and drop a file and replace existing data',()=>{

    objDataSetupTest.Drag_and_drop_file_and_replace_existing_data();

})


it('browse a csv file ',()=>{

    objDataSetupTest.browse_a_csv_file();

})


})