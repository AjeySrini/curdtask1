import React from "react";
import { deleteprofile } from "../profile";


const Deleteprofile = () => {


const handleSubmit = () => {
  const data = document.getElementById("userIddelete").value;
  console.log('Delete user ID:', data);

  deleteprofile(data);
};

  return (
    <div>
      <div style={{ padding: 4 }}>
        <label htmlFor="userId">UserID to Delete:</label>
        <input
          type="text"
          id="userIddelete"
          name="userIddelete"
          required
        />
      </div>

      <button type="submit" onClick={handleSubmit} >Delete</button>
      </div>
  );
}

export default Deleteprofile;