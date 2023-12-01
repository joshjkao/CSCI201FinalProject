import React, {useState, useEffect} from "react";
import "./editprofilepage.css";

export const EditProfilePage = ({userId}) => {

    const emptyUser = {
        userId: -1,
        username: "",
        password: "",
        email: "",
        profilePic: ""
      }

    const [user, setUser] = useState(emptyUser);
    const [imageUrl, setImageUrl] = useState("");

    const handleUrlChange = (e) => {
        setImageUrl(e.target.value);
    }

    const handleSaveChanges = () => {
        const request = {userId, imageUrl};
        console.log(request);
        fetch("http://localhost:8080/login/update",{
          method: "post",
          headers: {"Content-Type": "application/json"
        },
        body: JSON.stringify(request)
        })
        .then(() => {
            fetch("http://localhost:8080/login/user",{
                method: "post",
                headers: {"Content-Type": "application/json"
            },
            body: JSON.stringify(userId)
            })
            .then(result => result.json())
            .then(res => {
            setUser(res);
            console.log(res);
            });
        });
    }

    useEffect(() => {
        fetch("http://localhost:8080/login/user",{
          method: "post",
          headers: {"Content-Type": "application/json"
        },
        body: JSON.stringify(userId)
        })
        .then(result => result.json())
        .then(res => {
          setUser(res);
          console.log(res);
        });
      }, []);

  return (
    <div className="edit-profile-container">
        <div className="picture-container">
            <img src={user.profilePic} className="edit-picture" alt=""></img>
        </div>
        <div className="input-field-container">
            <span>Username</span>
            <div className="input-field">
                <input type="text" defaultValue={user.username} className="edit-input"></input>
            </div>
        </div>
        <div className="input-field-container">
            <span>Email</span>
            <div className="input-field">
                <input type="text" defaultValue={user.email} className="edit-input"></input>
            </div>
        </div>
        <div className="input-field-container">
            <span>Change Profile Picture</span>
            <div className="input-field">
                <input type="text" className="edit-input" onChange={handleUrlChange}></input>
            </div>
        </div>
        <div className="input-field-container">
            <span>Change Password</span>
            <div className="input-field">
                <input type="text" className="edit-input"></input>
            </div>
        </div>
        <div className="input-field-container">
            <span>Confirm Password</span>
            <div className="input-field">
                <input type="text" className="edit-input"></input>
            </div>
        </div>
        <div className="edit-button-container">
            <button className="edit-button" onClick={handleSaveChanges}>Save Changes</button>
        </div>
    </div>
  );
};


export default EditProfilePage;