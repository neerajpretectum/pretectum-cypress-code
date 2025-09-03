import { BusinessAreaExtendedTest } from "../classes/BusinessAreaExtended";

// Global viewport setup for all tests
beforeEach(() => {
  cy.viewport(2000, 1000);
});

const objBAExtendedTest: BusinessAreaExtendedTest= new BusinessAreaExtendedTest();

 describe ('VERIFICATION', () =>
    {
       
      it(" Buisness Area is not visible to unassigned user",()=>{

         objBAExtendedTest.addBusinessArea(objBAExtendedTest.strBusinessAreaName1);
         objBAExtendedTest.verify_BA_not_visible();
      
      })

    it("Create Role and Add User",()=>{

         objBAExtendedTest.CreateRole();
         
      })

      it(" Business Area user access with all permissions enabled",()=>{

         objBAExtendedTest.addBusinessArea(objBAExtendedTest.strBAN2);
         objBAExtendedTest.add_user(); 
         objBAExtendedTest.verify_all_permissions();
      
      })

      it(" Delete Role",()=>{

         objBAExtendedTest.del_Role();
      
      })


       it(" Business Area user access with ACTIVE and VIEW permissions enabled",()=>{

         objBAExtendedTest.verify_Permission_View_Active();
      
      })

      it(" Business Area user access with  ACTIVE permission enabled",()=>{

        
         objBAExtendedTest.verify_permission_VIEW();
      
      })

    })

   
 describe ('BUSINESS AREA EDGE CASE SCENARIOS', () =>
    {
      
       beforeEach(()=>
        {                    
                objBAExtendedTest.OpenBusinessArea();
         
        });
      
      it("BA Name Input shorter than minimum length",()=>{

         objBAExtendedTest.add_BA('B', 'Description');
         cy.get('.ant-form-item-explain-error > .ant-row > .ant-col',{timeout:20000})
        
      })

      it("BA Name Input Greater than maximum length",()=>{

         objBAExtendedTest.add_BA('Global Enterprise Business Solutions And Strategic Operations Management Division For Innovative Market Expansion And Sustainable Development With Integrated Technology Infrastructure Optimization And Collaborative Partnership Ecosystem Enhancement Across Multi Regional And Cross Functional Teams Focusing On Customer Centric Value Creation Through Data Driven Insights And Process Automation Leveraging Cloud Computing Artificial Intelligence And Blockchain For Next Generation Digital Transformation Initiatives In Emerging And Established Markets Worldwide For Long Term Competitive Advantage', 'Description');
         cy.get('.ant-form-item-explain-error > .ant-row > .ant-col',{timeout:20000})
        
      })

      it("BA Name Input Contains special Character",()=>{

         objBAExtendedTest.add_BA('Test@BA','Description' );
         cy.get('.ant-form-item-explain-error > .ant-row > .ant-col',{timeout:20000})
        
      })

      it("Empty BA Name",()=>{

         objBAExtendedTest.empty_BA('','Description');
         cy.get('.ant-form-item-explain-error > .ant-row > .ant-col',{timeout:20000})
        
      })

      it("BA Description Greater than maximum length",()=>{

         objBAExtendedTest.empty_BA('Test1_Business Area ','This Business Area is responsible for coordinating global initiatives across multiple regions, focusing on innovation, operational excellence, and customer engagement through advanced analytics, strategic planning, and technology-driven process improvements. The team works closely with cross-functional departments to deliver value-added solutions, streamline workflows, and drive sustainable growth through efficient resource allocation and data-informed decision making.');
         cy.get('.ant-form-item-explain-error > .ant-row > .ant-col',{timeout:20000})
        
      })


       it("Delete Business Area",()=>{

         objBAExtendedTest.delete_BA();
        
      })

    })