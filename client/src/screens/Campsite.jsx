import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneBlog } from "../services/blogs";
import { length } from '../services/interactionCount'
import { createPost } from "../services/posts";
import { togglePostLikes } from "../services/likes";
import "../css/campsite.css";

export default function Campsite({ currentUser }) {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [formData, setFormData] = useState({
    content: "",
  });
  const { content } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const makePost = async (formData) => {
    const postData = await createPost(formData);
    setPost(postData)
  }

  useEffect(() => {
    const fetchPost = async () => {
      const blogData = await getOneBlog(id);
      setPost(blogData);
    };
    fetchPost();
    // eslint-disable-next-line
  },[]);


  return (
    <div className="campsite">
      <div className="post_form">
        <div className="user_info">
          <img src={currentUser?.avatar} alt="hffhfhfhf" />
          <p>{currentUser?.username}</p>
        </div>

        <div className="form_div">
          <form
            className="campsite_form"
            onSubmit={(e) => {
              e.preventDefault();
              makePost({...formData, blog_id: id});
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
              value={content}
              onChange={handleChange}
            />
            <br />
            <button className="post_create_btn">Submit</button>
          </form>
        </div>
      </div>
      {post?.posts.map((post) => (
        <div className="post_div">
          <div className="post_user_info">
            <img src={post.user.avatar} alt="" />
            <p>{post.user.username}</p>
            <div className="interactions">
              <p>
                <a href={`/posts/${post.id}`}><button className='interactions_btn'>💬</button></a>
                {length(post.comments)}
              </p>
              <p>
                <button className='interactions_btn' onClick={()=>togglePostLikes(post.id)}>👍🏽</button>
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
