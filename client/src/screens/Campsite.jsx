import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneBlog } from "../services/blogs";
import {length} from '../services/interactionCount'
import "../css/campsite.css";

export default function Campsite({ currentUser }) {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const blogData = await getOneBlog(id);
      setPost(blogData);
    };
    fetchPost();
  }, []);
  console.log(post?.posts);

  // function length(obj) {
  //   return Object.keys(obj).length;
  // }

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
          </form>
            <button className="post_create_btn">Submit</button>
        </div>
      </div>
      {post?.posts.map((post) => (
        <div className="post_div">
          <div className="post_user_info">
            <img src={post.user.avatar} alt="" />
            <p>{post.user.username}</p>
            <div className="interactions">
              <p>
                <button className='interactions_btn'>💬</button>
                {length(post.comments)}
              </p>
              <p>
                <button className='interactions_btn'>👍🏽</button>
                {length(post.likes)}
              </p>
            </div>
          </div>
          <div className="post_info">
            <p>{post.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
