import React, { useEffect, useState } from "react";
import { getprofiles,deleteprofile} from "../profile";
import { Link } from "react-router-dom";

const Dashboard = () => {

  const [profiles, setprofiles] = useState([]);

  const loadprofiles = async () => {
    const response = await getprofiles();
    setprofiles(response);
  }

  const removeFromUi = async (profileId) => {
    await deleteprofile(profileId);
    const newUser = profiles.filter(({ id }) => profileId !== id);
    setprofiles(newUser);
  }


  useEffect(() => {
    loadprofiles();
  }, [])

  return (
    <div  style={{ display:"flex",flexDirection:"row",width:"250px"}} >
      {profiles.map((profile) => (
        <div key={profile.id} style={{ margin: 10, border: '1px solid', position: 'relative'  }}>
            
            <img
              src={profile.imageurl}
              alt={profile.username}
              style={{ height: '250px', width: '200px' }}
            />
            <Link to={`/Users/${profile.id}`} style={{ textDecoration: 'none', color: 'black' }}>
          
            <div style={{ padding: 4 }}>
              <h3>{profile.username}</h3>
              <p>Date of Birth: {profile.dateofBirth}</p>
              <p>role: {profile.role}</p>
              <p>Profile Id:{profile.id}</p>
                          
            </div>
          </Link>
          <Link to={`/users/edit-user?id=${profile.id}`} style={{ textDecoration: 'none', color: 'white' }}>
            <i
              className="fa-solid fa-pen-to-square fa-lg"
              style={{
                color: "red",
                left:5 ,
                margin:"6px 6px",
                padding:"5px"
                
              }}
            ></i>
          </Link>
          <i className="fa-solid fa-trash-can fa-lg" style={{
            color: "#red",           
            cursor: 'pointer',
            margin:"6px 6px",
            padding:"5px"
          }}
            onClick={() => removeFromUi(profile.id)}
          ></i>
        </div>
      ))}
    </div>
  );
};


export default Dashboard;