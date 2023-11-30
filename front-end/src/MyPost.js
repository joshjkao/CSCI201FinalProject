import React, { useState } from "react";
import "./ProfilePage.css";

function MyPost({ user, posts }) {
  return (
    
    <div className="whole"> 
      <div className="head">
        <img src={user.profilePic} className="profileimage" alt="Profile" />
      </div>

      <div className="follow">
          <div className="followers">Followers: 12</div>
          <div className="following">Following: 13</div>
          <div className="info-box">
            <span>{user.username}</span>
            <br />
            <br />
            {/* <span>{user.bio}</span> */}
          </div>
      </div>

      {/* <div className="editbutton">
          <button style={{ height: '40px', width: '80px' }}>✏️ </button>
      </div> */}

      {/* <div>
        <img className="post-pic" src={user.post.pic}  alt="Post"/>
        <p className="post-likes">👍: {user.post.likes}</p>
        <p className="post-caption">{user.post.caption}</p>
      </div> */}

      <div>
        {posts.map((post, index) => (
          <div key={index}>
            <text className="divider">++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
              <div className="like">
                    <p>&nbsp;&nbsp;👍 {post.likes}</p>
              </div>
            </text>

            <img className="post-pic" src={post.postImage} alt={`Post ${index + 1}`} />

            <br />  <br />
              <div className="post-pox">
                <p className="post-caption">&nbsp;&nbsp;&nbsp;{post.caption}</p>
              </div>
              {/* <div className="like">
                  <p className="post-likes">👍 {post.likes}</p>
              </div> */}
              <br />  <br />
            
          </div>
        ))}
      </div>

      

    </div>

  );
}

export default MyPost;
