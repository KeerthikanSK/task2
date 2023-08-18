
import React, {Fragment, useState} from "react";
import "./App.css";
import data  from "./components/data.json";
import read from "./components/read";
import edit from "./components/edit";


function Table(){
   const[ Contacts , setContacts] =useState(data);
   const[ addFormData , setAddFormData ] = useState({
    fullName:'',
    Description:'',
    phoneNumber:'',
   });

   const[editformData , seteditformData] = useState({
    fullName:'',
    Description:'',
    phoneNumber:'',
   })

   const[editContactId ,setEditContactId] = useState(null);



   const handelAddFormChange = (event) => {
    event.preventDefault();


    const fieldName = event.target.getAttribute('name');
    const filedvalue = event.target.value;


    const newFormData = {...addFormData};

    newFormData[fieldName] = filedvalue;

    setAddFormData(newFormData);

   };


   const handeleditformchange  = ( event ) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name ");
    const filedvalue = event. target.value;

    const newFormData ={...editformData};
    newFormData[fieldName] = filedvalue;

   }

   const handelAddFormsubmit =(event) =>{
      event.preventDefault();

      const newContact = {
       
        fullName:addFormData.fullName,
        Description:addFormData.Description,
        phoneNumber: addFormData.phoneNumber,
      };


      const newContacts = [ ...Contacts.newContact]
      setContacts(newContacts);

    };
      const handelAddFormsubmit =() => {
        Event.preventDefault();


        const editedcontact = {
            id: editContactId,
            fullName: editformData.fullName,
            Description: editformData.Description,
            phoneNumber: editformData.phoneNumber,
        }
        

        const newContacts = [... Contacts];
        const index = Contacts.findIndex((Contacts) = > Contact.id = editContactId );
       newContacts[index] = editedcontact;
       setContacts(newContacts);
       setEditContactId(null);
      };

      const handleeditclick = (event , Contact)=> {
        event.preventDefault();
        setEditContactId(Contact.id);


        const formvalues = {
            fullName : Contact.fullName,
            Description : Contact.Description,
            phoneNumber : Contact.phoneNumber,
        }
        seteditformData(formvalues);
      }

   };
    return(
        <div className="table">
            <div>
            
            </div>
            <form onSubmit={handleeditformsubmit}>   
            <table>
                <thead>
                    <tr>
                    <th>full Name</th>
                    <th>Description</th>
                    <th>phoneNumber</th>
                    <th > Actions</th>
                    </tr>
                    </thead>
            <tbody>
                {Contacts.map ((Contact)=> (
                 <Fragment>
                    { editContactId === Contact.id ? (<edit editformData ={editformData} handeleditformchange = {handeleditformchange} /> ):(
                    <read Contact = {Contacts}
                     handleeditclick = {handleeditclick} />
                    )}           
                
                  
                

                 </Fragment>   
                 
                ))}
                
            </tbody>
          
</table>
</form>
                 <h2> ADD CONTACT </h2>
                 <form onSubmit={handelAddFormsubmit}>
                    <input type = "text" name = "full Name" required  placeholder="Enter the Name " onChange={handelAddFormChange} />
                    <input type = "text" name = "Description" required  placeholder="Enter the Descdiption " onChange={handelAddFormChange} />
                    <input type = "text" name = "phoneNumber" required  placeholder="Enter the Phone " onChange={handelAddFormChange}/>
                    <button type="submit"> ADD </button>
                 </form>
</div>
    )}

export default Table;







     
    
  
