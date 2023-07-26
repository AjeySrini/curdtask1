import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getprofile } from '../profile';


const Viewprofile = () => {

  const { userId } = useParams();

  const [profileData, setData] = useState({
   
      name: '',
      dateofBirth: '',
      imageurl: '',
      role: '',
      nationality:'',
      ranking: '',
    });

  const loadprofile = async () => {
    console.log('Loading profileid', userId);
      const response = await getprofile(userId);
    setData(response);
  }

  useEffect(() => {
    loadprofile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div
      style={{ padding: 10 ,
        margin: "20px 350px 20px 350px",
      border: '8px solid black' }}
    >
      <img
        src={profileData.imageurl}
        style={{
          width: '300px',
          height: '300px',
        }}
        alt='...profile'
      >
      </img>
      <h1>{profileData.username}</h1>
      <h3>DOB :  {profileData.dateofBirth}</h3>
      <h3>Role :  {profileData.role}</h3>
      <h3>{profileData.nationality}</h3>
      <h3>Ranking :{profileData.ranking}</h3>
    </div>
  )
}
export default Viewprofile;