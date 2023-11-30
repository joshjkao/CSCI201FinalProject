import React, { useState, useEffect } from "react";
import {FaRegHeart, FaHeart, FaRegCommentAlt} from "react-icons/fa";
import "./feedpage.css";

function PostCard({content}) {
    const emptyUser = {
        userId: -1,
        username: "",
        password: "",
        email: "",
        profilePic: ""
    }

    const [user, setUser] = useState(emptyUser);
    const [comments, setComments] = useState([]);

    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(content.likes);

    const [commentBar, setCommentBar] = useState(false);
    const [commentMessage, setCommentMessage] = useState("");

    useEffect(() => {
        console.log(content);
        fetch("http://localhost:8080/login/user",{
            method: "post",
            headers: {"Content-Type": "application/json"
        },
        body: JSON.stringify(content.userId)
        })
        .then(result => result.json())
        .then(res => {
            setUser(res);
            console.log(res);
        });
        fetch("http://localhost:8080/comment/comment",{
            method: "post",
            headers: {"Content-Type": "application/json"
        },
        body: JSON.stringify(content.postId)
        })
        .then(result => result.json())
        .then(res => {
            setComments(res);
            console.log(res);
        });
    }, []);

    const handleLikeClick = () => {
        if (liked) {
            setLiked(false);
            setLikes(likes-1);
        } else {
            setLiked(true);
            setLikes(likes+1);
        }
    };

    const handleAddComment = () => {
        const newComment = {
            userId: 0,
            postId: content.postId,
            comment: commentMessage
        }
        fetch("http://localhost:8080/comment/post",{
            method: "post",
            headers: {"Content-Type": "application/json"
        },
        body: JSON.stringify(newComment)
        })
        .then(result => result.json())
        .then(res => {
            setComments(res);
            console.log(res);
            setCommentBar(false);
        });
    }

    const handleMessageChange = (e) => {
        setCommentMessage(e.target.value);
    }

    const handleCommentClick = () => {
        if (commentBar) setCommentBar(false);
        else setCommentBar(true);
    }

    return (
        <div className="card" id={content.postId} key={content.postId}>
            <div className="card-header">
                <img className="profile-photo" alt="" src={user.profilePic} />
                <span className="username-text">{user.username}</span>
            </div>
            <div>
            <img className="post-photo" alt="" src={content.postImage} />
            </div>
            <div className="card-button-tray">
                <button onClick={handleLikeClick} className="card-button">
                    {!liked ? <FaRegHeart className="button-icon unliked"/> : <FaHeart className="button-icon liked"/>}
                </button>
                <button onClick={handleCommentClick} className="card-button">
                    <FaRegCommentAlt className="button-icon unliked"/>
                </button>
                {commentBar ? 
                    <>
                        <input type="text" placeholder="Leave a comment..." onChange={handleMessageChange}></input>
                        <button onClick={handleAddComment}>add comment</button>
                    </>
                : null}
            </div>
            <div className="card-body">
                {likes} likes
            </div>
            <div className="card-body">
                <span className="username-text">{user.username}</span>
                <span>&nbsp;&nbsp;</span>
                <span>{content.caption}</span>
            </div>
            <div>
                {comments.map((comment, index) => (
                    <div className="comment-section">
                        <span className="username-text">
                            {/* {comment.username} */}
                            Anonymous
                            &nbsp;&nbsp;
                            </span>
                        <span>{comment.comment}</span>
                        <br />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PostCard;