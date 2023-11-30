import React, {useState, useEffect} from "react";

import PostCard from "./PostCard";
import "./feedpage.css";

function FeedPage() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/start/display", {
            method: "get",
            headers: { "Content-Type": "application/json" },
        })
        .then(result => result.json())
        .then(data => setData(data));
    }, []);

    return (
        <>
            <div className="card-list">
                {data.map((content) => (
                    <PostCard content={content} />
                ))}
            </div>
        </>
    );
}

export default FeedPage;