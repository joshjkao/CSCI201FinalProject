import React, { useState } from "react";
import {FaRegHeart, FaHeart, FaRegCommentAlt} from "react-icons/fa";
import "./feedpage.css";

function PostCard({content}) {

    const [liked, setLiked] = useState(content.liked);
    const [likes, setLikes] = useState(content.likes);

    const [commentBar, setCommentBar] = useState(false);

    const handleLikeClick = () => {
        if (liked) {
            setLiked(false);
            setLikes(likes-1);
        } else {
            setLiked(true);
            setLikes(likes+1);
        }
    };

    const handleCommentClick = () => {
        if (commentBar) setCommentBar(false);
        else setCommentBar(true);
    }

    return (
        <div className="card" id={content.id} key={content.id}>
            <div className="card-header">
                <img className="profile-photo" alt="" src={content.pfp} />
                <span className="username-text">{content.username}</span>
            </div>
            <div>
            <img className="post-photo" alt="" src={content.pic} />
            </div>
            <div className="card-button-tray">
                <button onClick={handleLikeClick} className="card-button">
                    {liked ? <FaRegHeart className="button-icon unliked"/> : <FaHeart className="button-icon liked"/>}
                </button>
                <button onClick={handleCommentClick} className="card-button">
                    <FaRegCommentAlt className="button-icon unliked"/>
                </button>
                {commentBar ? 
                    <form className="comment-form">
                        <input type="text" placeholder="Leave a comment..."></input>
                    </form>
                : null}
            </div>
            <div className="card-body">
                {likes} likes
            </div>
            <div className="card-body">
                <span className="username-text">{content.username}</span>
                <span>&nbsp;&nbsp;</span>
                <span>{content.caption}</span>
            </div>
            <div>
                {content.comments.map((comment, index) => (
                    <div className="comment-section">
                        <span className="username-text">{comment.username}&nbsp;&nbsp;</span>
                        <span>{comment.message}</span>
                        <br />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PostCard;