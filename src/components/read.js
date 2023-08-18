import React from "react";


const read = ({Contact, handleeditclick}) =>{
    return (
        
         <tr>
                <td> {Contact.fullName } </td>
                 <td> {Contact . Description} </td>
                 <td> {Contact .phoneNumber} </td>
                 <td> <button  type="button" onclick = {(Event) => handleeditclick(event ,Contact)}  >Edit</button>       </td>
                 </tr>
        
    )
}

export default read;