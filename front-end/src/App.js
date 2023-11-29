import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FeedPage from './FeedPage';
import ProfilePage from './ProfilePage';
import SideBar from './SideBar';
import UploadPage from './UploadPage.js';
import EditProfilePage from './EditProfilePage.js';
import Register from './Register.jsx';
import Login from './Login.jsx';

function App() {
  const [activeUser, setActiveUser] = useState(null);

  function logIn(user) {
    fetch("http://localhost:8080/login/login",{
      method: "post",
      headers: {"Content-Type": "application/json"
    },
    body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(result => {
      if (result.success) {
        alert(result.user_id);
      } else {
        alert("invalid login");
      }
    });
  };

  return (
    <>
      {activeUser == null ? 
        <Router>
          <Routes>
            <Route path="/" element={<Login logIn={logIn}/>} />
            <Route path="/signup" element={<Register logIn={logIn}/>} />
          </Routes>
        </Router>
        :
        <Router>
          <div>
            <SideBar />
              <Routes>
                  <Route path="/" element={<FeedPage />} />
                  <Route path="/explore" element={<FeedPage />} />
                  <Route path="/profile" element={<ProfilePage user={activeUser}/>} />
                  <Route path="/upload" element={<UploadPage />} />
                  <Route path="/edit" element={<EditProfilePage user={activeUser}/>} />
              </Routes>
          </div>
        </Router>
      }
    </>
  );
}

export default App;
