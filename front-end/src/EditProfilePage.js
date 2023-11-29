import React from "react";
import "./editprofilepage.css";

export const EditProfilePage = ({user}) => {
  return (
    <div className="edit-profile-container">
        <div className="picture-container">
            <img src={user.profile_picture} className="edit-picture" alt=""></img>
            <input type="file" id="image" accept="image/*"/>
            <span className="edit-picture-button">Edit</span>
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
            <button className="edit-button">Save Changes</button>
        </div>
    </div>
  );
};


export default EditProfilePage;