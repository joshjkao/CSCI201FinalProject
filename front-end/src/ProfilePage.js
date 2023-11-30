import React, {useState, useEffect} from "react";

import MyPost from "./MyPost";

function ProfilePage({userID}) {
  const emptyUser = {
    userId: -1,
    username: "",
    password: "",
    email: "",
    profilePic: ""
  }

  const [user, setUser] = useState(emptyUser);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/login/user",{
      method: "post",
      headers: {"Content-Type": "application/json"
    },
    body: JSON.stringify(userID)
    })
    .then(result => result.json())
    .then(res => {
      setUser(res);
      console.log(res);
    });
    fetch("http://localhost:8080/start/userposts",{
      method: "post",
      headers: {"Content-Type": "application/json"
    },
    body: JSON.stringify(userID)
    })
    .then(result => result.json())
    .then(res => {
      console.log(res);
      setPosts(res);
    });
  }, []);

  return (
    <div>
      {/* {data.map((user)=>( */}
          <MyPost user={user} posts={posts} />
        {/* ))} */}
    </div>
  );
}

export default ProfilePage;
