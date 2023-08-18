// Read.js
import React from "react";

const Read = ({ Contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{Contact.fullName}</td>
      <td>{Contact.address}</td>
      <td>{Contact.phoneNumber}</td>
      <td>
        <button type="button" onClick={() => handleEditClick(Contact)}>
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(Contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Read;
