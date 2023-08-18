import React from "react";


const edit = ({editFormDta,handleEditformchange,handleCancelClik }) =>{
    return (
        
         <tr>
                <td>  <input type = "text" name = "fullName" required  placeholder="Enter the Name " value={editFormDta.fullName} onChange={handleEditformchange}/> </td>
                 <td>  <input type = "text" name = "address" required  placeholder="Enter the Descdiption " value = {editFormDta . address} onChange={handleEditformchange}/></td>
                 <td> <input type = "text" name = "phoneNumber" required  placeholder="Enter the Phone " value={editFormDta.phoneNumber} onChange={handleEditformchange} /> </td>
                 <td>  <button type="Submit "> Save </button>
                  <button type = "button" onclik = {handleCancelClik}> Cancel </button>
                 </td>

                 </tr>
        
    )
}

export default edit;