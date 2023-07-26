import React,{ useState } from "react";
import { createprofile } from "../profile";
const Addprofile = () => {

  const initialState = {
    username: '',
    dateofBirth: '',
    imageurl: '',
    role: '',
    nationality:'',
    ranking: '',
  }

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle the form submission, for example, by sending the data to a server or performing other actions.
    console.log('Form data:', formData);

    createprofile(formData);
    setFormData(initialState);
  };

  return (
    <div style={{
      textAlign: 'center',
      justifyContent: 'center',
      border: '1px solid black',
      margin: "20px 400px"      
    }}>
    <form onSubmit={handleSubmit} style={{ padding: '16px',
      backgroundcolor: "white"}}>
      <div style={{ padding: 4}}>
        <label htmlFor="username">Cricketer Name:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{ padding: 4 }}>
        <label htmlFor="dateofBirth">Date of Birth:</label>
        <input
          type="text"
          id="dateofBirth"
          name="dateofBirth"
          value={formData.dateofBirth}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{ padding: 4 }}>
        <label htmlFor="imageurl">Image URL:</label>
        <input
          type="text"
          id="imageurl"
          name="imageurl"
          value={formData.imageurl}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{ padding: 4 }}>
        <label htmlFor="role">Role :</label>
        <input
          type="text"
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{ padding: 4 }}>
        <label htmlFor="nationality">Nationality:</label>
        <input
          type="text"
          id="nationality"
          name="nationality"
          value={formData.nationality}
          onChange={handleChange}
          required
        />
      </div>
      <div style={{ padding: 4 }}>
        <label htmlFor="ranking">Ranking:</label>
        <input
          type="text"
          id="ranking"
          name="ranking"
          value={formData.ranking}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}



export default Addprofile;