import React, { useState, useRef } from "react";
import data from "./data.json";

function Table() {
  const [membersData, setMembersData] = useState(data);
  const [editState, setEditState] = useState(null);

  function handleEdit(id) {
    setEditState(id);
  }

  function handleUpdate(updatedData) {
    const updatedMembersData = membersData.map((member) =>
      member.id === updatedData.id ? updatedData : member
    );
    setMembersData(updatedMembersData);
    setEditState(null);
  }

  const [Contacts, setContacts] = useState([
    // Your array of contacts here
  ]);

  const handleEditclick = (contact) => {
    // Implement your edit click logic here
    console.log("Edit clicked for:", contact);
  };

  const handleDeleteClick = (contactId) => {
    // Implement your delete click logic here
    console.log("Delete clicked for contact ID:", contactId);
  };

  return (
    <div className="table">
      <div>
        <AddMember setMembersData={setMembersData} membersData={membersData} />
      </div>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Description</th>
            <th>Phone Number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {membersData.map((current) =>
            editState === current.id ? (
              <EditMember
                key={current.id}
                current={current}
                onUpdate={handleUpdate}
              />
            ) : (
              <tr key={current.id}>
                <td>{current.Name}</td>
                <td>{current.Description}</td>
                <td>{current.phoneNumber}</td>
                <td>
                  <button
                    className="edit"
                    onClick={() => handleEdit(current.id)}
                  >
                    EDIT
                  </button>
                  <button className="delete">DELETE</button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

function EditMember({ current, onUpdate }) {
  const nameRef = useRef();
  const descriptionRef = useRef();
  const phoneNumberRef = useRef();

  function handleUpdateClick() {
    const updatedData = {
      id: current.id,
      name: nameRef.current.value,
      Description: descriptionRef.current.value,
      phoneNumber: phoneNumberRef.current.value,
    };
    onUpdate(updatedData);
  }

  return (
    <tr>
      <td>
        <input
          type="text"
          defaultValue={current.name}
          ref={nameRef}
          placeholder="Enter the Name"
        />
      </td>
      <td>
        <input
          type="text"
          defaultValue={current.Description}
          ref={descriptionRef}
          placeholder="Enter the Description"
        />
      </td>
      <td>
        <input
          type="text"
          defaultValue={current.phoneNumber}
          ref={phoneNumberRef}
          placeholder="Enter the phonenumber"
        />
      </td>
      <td>
        <button onClick={handleUpdateClick}>Update</button>
      </td>
    </tr>
  );
}

function AddMember({ setMembersData, membersData }) {
  const nameRef = useRef();
  const descriptionRef = useRef();
  const phoneNumberRef = useRef();

  function handleValues(event) {
    event.preventDefault();
    const name = nameRef.current.value;
    const Description = descriptionRef.current.value;
    const phoneNumber = phoneNumberRef.current.value;
    const newMember = {
      id: membersData.length + 1, // Generate a unique ID here
      name,
      Description,
      phoneNumber,
    };
    setMembersData((prevData) => [...prevData, newMember]);
    nameRef.current.value = "";
    descriptionRef.current.value = "";
    phoneNumberRef.current.value = "";
  }

  return (
    <form className="addform" onSubmit={handleValues}>
      <input
        type="text"
        name="name"
        placeholder="Enter the Name"
        ref={nameRef}
      />
      <input
        type="text"
        name="Description"
        placeholder="Enter the Description"
        ref={descriptionRef}
      />
      <input
        type="text"
        name="phoneNumber"
        placeholder="Enter the phonenumber"
        ref={phoneNumberRef}
      />
      <button>ADD</button>
    </form>
  );
}

export default Table;
