import React, { Fragment, useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./components/data.json";
import Read from "./components/read";
import Edit from "./components/edit";

 

function Table() {
  const [Contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
  });

 

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
  });

 

  const [editContactId, setEditContactId] = useState(null);

 

  const handleAddFormChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

 

  const handleEditFormChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };

 

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
    };
    const newContacts = [...Contacts, newContact];
    setContacts(newContacts);
    setAddFormData({
      fullName: "",
      address: "",
      phoneNumber: "",
    });
  };

 

  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editedContact = {
      id: editContactId,
      Name: editFormData.Name,
      Address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
    };
    const newContacts = Contacts.map((contact) =>
      contact.id === editContactId ? editedContact : contact
    );
    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);
    setEditFormData({
      fullName: contact.Name,
      address: contact.Address,
      phoneNumber: contact.phoneNumber,
    });
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = Contacts.filter((contact) => contact.id !== contactId);
    setContacts(newContacts);
  };

  return (
    <div className="detail">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Contacts.map((contact) => (
            <Fragment key={contact.id}>
              {editContactId === contact.id ? (
                <Edit
                  editFormData={editFormData}
                  handleEditFormChange={handleEditFormChange}
                  handleEditFormSubmit={handleEditFormSubmit}
                  handleCancelClick={handleCancelClick}
                />
              ) : (
                <Read
                  Contact={contact}
                  handleEditClick={(event) => handleEditClick(event, contact)}
                  handleDeleteClick={() => handleDeleteClick(contact.id)}
                />
              )}
            </Fragment>
          ))}
        </tbody>
      </table>

      <h2>ADD CONTACT</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="fullName"
          required
          placeholder="Enter the Name"
          value={addFormData.fullName}
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="address"
          required
          placeholder="Enter the Description"
          value={addFormData.address}
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="phoneNumber"
          required
          placeholder="Enter the Phone"
          value={addFormData.phoneNumber}
          onChange={handleAddFormChange}
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}

 

export default Table;







     
    
  
