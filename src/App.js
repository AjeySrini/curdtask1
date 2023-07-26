import './App.css';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import Addprofile from './Component/Addprofile';
import Editprofile from './Component/Editprofile';
import Dashboard from './Component/Dashboard';
import Deleteprofile from './Component/Deleteprofile';
import Viewprofile from './Component/Viewprofile';

import { useEffect } from 'react';
import Header from './Component/Header';

function App() {
  
  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      console.log(e.key)
      if (e.key === 'F5') {
        e.preventDefault();
        alert('Key pressed', e.key);
      } else {
        // alert('Key pressed', e);
      }
    })
  }, [])
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <header className='header'>
          <Link to="/Users"><i className="fa-solid fa-house-chimney"></i>Home</Link>&nbsp;&nbsp;
          <Link to="/Users/create-user"><i className="fa-solid fa-user-plus"></i>Add Profile</Link>&nbsp;&nbsp;
          <Link to="/users/edit-user"><i className="fa-solid fa-user-pen"></i>Edit Profile</Link>&nbsp;&nbsp;
          <Link to="/users/deleteprofile"> <i className="fa-solid fa-user-minus"></i> Delete Profile</Link>
        </header>
        <Routes>
        <Route index path="/" element={<Dashboard />} />
          <Route index path="/profile" element={<Dashboard />} />
          <Route path="Users" >
            <Route index element={<Dashboard />} />
            <Route path="create-user" element={<Addprofile />} />
            <Route path="edit-user" element={<Editprofile />} />
            <Route path="edit-profile" element={<Editprofile />} />
            <Route path=":userId" element={<Viewprofile />} /> 
            <Route path="deleteprofile" element={<Deleteprofile />} />
            </Route>
           <Route path="*" element={<h3>Page not found, please check url</h3>} />
           
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
