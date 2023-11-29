import React,{useState} from "react";
import "./UploadPage.css";


const UploadPost = () => {
    const [postText, setPostText] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
  
    const handleTextChange = (e) => {
      setPostText(e.target.value);
    };
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      setSelectedImage(file);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      setPostText("");
      setSelectedImage(null);
    };
  
    return (
      <div className="upload-post-container">
        <h1>Upload a Post</h1>
        <form onSubmit={handleSubmit}>
          <div>
            
            <textarea
              id="postText"
              value={postText}
              onChange={handleTextChange}
              placeholder="Upload a new post for your dog here! "
            />
          </div>
          <div>
            <label htmlFor="image">Select Image:</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <button className="upload-button"type="submit">Post</button>
        </form>
      </div>
    );
  };
  
  export default UploadPost;