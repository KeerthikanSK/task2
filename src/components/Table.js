import React from "react";
import React, {useState} from "react";
import data  from "./data.json"



function Table(){
    const [data, setData] = useState(data)
    const [ editstate, seteditstate ]= usestate(false)
    return(
        <div className="table">
            <div>
                <AddMember setData={setData}/>
            </div>
            <table>
                <head>
                    <th>full Name</th>
                    <th>Description</th>
                    <th>phoneNumber</th>
                    <th > Action</th>
                </head>
                {
                    data.map((current)=> (
                        editstate === current.id? <EditMember/>:
                        <tr>
                            <td>
                                {current.Name}
                            </td>
                            <td>
                                {current.Description}
                            </td>
                            <td>
                                {current.phoneNumber}
                            </td>
                            <td> <button className="edit" onClick={handeledit}>EDIT</button>
                            <button className="delete">DELETE</button>
                            </td>
                        </tr>

                    ))
                }
            </table>

        </div>
    )
}
function handeledit(id){
    seteditstate(id)
}

function EditMember(current){
    return(
        <tr>
            <td>
            <input type="text" value={current.name} name="name" placeholder="Enter the Name" />
            </td>
            <td>
            <input type="text" value={current.Description} name="name" placeholder="Enter the Desription " />
            </td>
            <td>
            <input type="text"  value={current.phoneNumber}     name="name" placeholder="Enter the phonenumber" />
            </td>
            <td> <button type="submit">Update</button> </td>
        </tr>
    )
}


function AddMember (setData){
    const nameRef = useRef()
    const DescriptionRef = useRef()
    const phoneNumberRef = useRef()


    function handleValues(event) {
        eventpreventDefault();
        const name = Event.target.elements.name.value;
        const Description = Event.target.elements.Description.value;
        const phoneNumber = Event.target.elements.phoneNumber.value;
        const newmember ={
            id: 4,
            name,
            Description,
            phoneNumber,
        }
        setData(predata => prevdata.contact(newmember))
        nameRef. current.value = ""
        DescriptionRef. current.value = ""
        phoneNumberRef. current.value = ""
    }
    return(
        <form className="addform" onSubmit={handleValues}> 
            <input type="text" name="name" placeholder="Enter the Name" ref={nameRef}/>
            <input type="text" name="name" placeholder="Enter the Desription " ref={DescriptionRef}/>
            <input type="text" name="name" placeholder="Enter the phonenumber" ref={phoneNumberRef}/>
            <button>ADD</button>
        </form>
    )
}
export default Table;

