import React,{useState} from "react";
import "./UploadPage.css";


const UploadPost = ({userId}) => {

  function newPost(post){
    fetch("http://localhost:8080/start/upload", {
      method:"post",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(post)
  
    }).then(()=>{
      console.log("New Post Uploaded")
      console.log(post)
    })
    };
    const [caption, setPostText] = useState("");
    const [postUrl, setSelectedImage] = useState("");

    const handleTextChange = (e) => {
      setPostText(e.target.value);
    };
  
    const handleUrlChange = (e) => {
      setSelectedImage(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      setPostText("");
      setSelectedImage("");
    };

    const handleUpload = () => {
      
      newPost({
        caption,
        postUrl,
        userId,
      });

    };
    return (
      <div className="upload-post-container">
        <h1>Upload a Post</h1>
        <form onSubmit={handleSubmit}>
          <div>
            
            <textarea
              id="postText"
              value={caption}
              onChange={handleTextChange}
              placeholder="Upload a new post here! "
            />
          </div>
          <div>
            <label>Upload Image URL:</label>
            <input
              id="url"
              value={postUrl}
              onChange={handleUrlChange}
              placeholder="Upload url here! "
            />
            
          </div>
          <button className="upload-button" onClick={handleUpload}>Post</button>
        </form>
      </div>
    );
  };
  
  export default UploadPost;