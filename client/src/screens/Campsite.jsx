import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneBlog } from "../services/blogs";
import "../css/campsite.css";

export default function Campsite({ currentUser }) {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  console.log(currentUser);

  useEffect(() => {
    const fetchPost = async () => {
      const blogData = await getOneBlog(id);
      setPost(blogData);
    };
    fetchPost();
  }, []);
  console.log(post?.posts);

  return (
    <div className="campsite">

      <div className="post_form">

        <div className="user_info">
          <img src={currentUser?.avatar} alt="profile picture" />
          <p>{currentUser?.username}</p>
        </div>

        <div className="form_div">
          <form
            className="campsite_form"
            onSubmit={(e) => {
              e.preventDefault();
              getOneBlog();
            }}
          >
            <textarea
              rows="20"
              cols="50"
              maxLength="100"
              className="post_input"
              placeholder="Post..."
              type="text"
              name="content"
              // value={content}
              // onChange={}
            />
            <br />
            <button className="post_create_btn">Submit</button>
          </form>
        </div>

      </div>
      {post?.posts.map(post => (
        <div className="post_div">
          
        </div>
      ))}

    </div>
  );
}
