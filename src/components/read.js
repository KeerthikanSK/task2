// Read.js
import React from "react";

const Read = ({ Contact, handleEditclick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{Contact.fullName}</td>
      <td>{Contact.address}</td>
      <td>{Contact.phoneNumber}</td>
      <td>
        <button type="button" onClick={() => handleEditclick(Contact)}>
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
