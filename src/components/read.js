import React from "react";


const read = ({Contact, handleEditclick,handleDeleteClick}) =>{
    return (
        
         <tr>
                <td> {Contact.fullName } </td>
                 <td> {Contact . address} </td>
                 <td> {Contact .phoneNumber} </td>
                 <td> <button  type="button" onclick = {(Event) => handleEditclick(event ,Contact)}  >Edit</button>  
                 <button type = "button"  onclick= {()=> handleDeleteClick={Contact.id}}> Delete</button>
                 
                      </td>
                 </tr>
        
    )
}

export default read;