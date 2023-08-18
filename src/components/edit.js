import React from "react";


const edit = ({editFormDta,handleeditformchange }) =>{
    return (
        
         <tr>
                <td>  <input type = "text" name = "full Name" required  placeholder="Enter the Name " value={editFormDta.fullName} onChange={handleeditformchange}/> </td>
                 <td>  <input type = "text" name = "Description" required  placeholder="Enter the Descdiption " value = {editFormDta . Description} onChange={handleeditformchange}/></td>
                 <td> <input type = "text" name = "phoneNumber" required  placeholder="Enter the Phone " value={editFormDta.phoneNumber} onChange={handleeditformchange} /> </td>
                 <td>  <button type="Submit "> Save </button></td>
                 </tr>
        
    )
}

export default edit;