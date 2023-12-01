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
  const [activeUserId, setActiveUserId] = useState(null);

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
        setActiveUserId(result.user_id);
      } else {
        alert(result.message);
      }
    });
  };

  return (
    <>
      {activeUserId == null ? 
        <Router>
          <Routes>
            <Route path="/" element={<Login logIn={logIn}/>} />
            <Route path="/signup" element={<Register />} />
          </Routes>
        </Router>
        :
        <Router>
          <div>
            <SideBar />
              <Routes>
                  <Route path="/" element={<FeedPage />} />
                  <Route path="/explore" element={<FeedPage />} />
                  <Route path="/profile" element={<ProfilePage userId={activeUserId}/>} />
                  <Route path="/upload" element={<UploadPage userId={activeUserId}/>} />
                  <Route path="/edit" element={<EditProfilePage userId={activeUserId}/>} />
              </Routes>
          </div>
        </Router>
      }
    </>
  );
}

export default App;
