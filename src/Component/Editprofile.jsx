import React, { useEffect, useState } from "react";
import { getprofile ,updateProfile} from "../profile";
import { useSearchParams, useNavigate } from "react-router-dom";
const Editprofile = () => {

const initialState = {
  name: '',
  dateofBirth: '',
  imageurl: '',
  role: '',
  nationality:'',
  ranking: '',
}
const [params] = useSearchParams();

  const [formData, setFormData] = useState(initialState);

  const navigate = useNavigate();

  const loadprofile= async () => {
    console.log(params.get('id'));
    const response = await getprofile(params.get('id'));
    console.log(response);
    setFormData(response);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here, you can handle the form submission, for example, by sending the data to a server or performing other actions.
    console.log('Form data:', formData);
    await updateProfile(params.get('id'), formData);
    navigate('/users/' + params.get('id'));
  };

  useEffect(() => {
    loadprofile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);




return (
  <form onSubmit={handleSubmit} style={{ padding: '16px' }}>
    <div style={{ padding: 4}}>
      <label htmlFor="username">User Name:</label>
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
);
}
export default Editprofile;