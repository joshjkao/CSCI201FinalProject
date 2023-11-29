import React from "react";
import { Link } from "react-router-dom";
import { IoPaw } from "react-icons/io5";
import "./app.css"

function SideBar() {
    return (
        <div className="sidebar">
            <h2 className="title">
                <Link to="/">
                    <IoPaw/> petaByte
                </Link>
            </h2>
            <ul className="no-bullets">
                <li key={0}><Link to ="/" className="no-decor">Feed</Link></li>
                <li key={1}><Link to ="/explore" className="no-decor">Explore</Link></li>
                <li key={2}><Link to ="/profile" className="no-decor">Profile</Link></li>
                <li key={3}><Link to ="/upload" className="no-decor">Upload</Link></li>
                <li key={4}><Link to ="/edit" className="no-decor">Edit Profile</Link></li>
            </ul>
        </div>
    );
}

export default SideBar;
