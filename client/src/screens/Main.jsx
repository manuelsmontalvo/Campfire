import "../css/main.css";
import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Main({ blogs, handleCreate, handleDelete }) {
  const [formData, setFormData] = useState({
    topic: "",
    description: "",
  });
  const { topic, description } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="blogs">
      <form
        className="create_form"
        onSubmit={(e) => {
          e.preventDefault();
          handleCreate(formData);
        }}
      >
        <input
          maxLength="15"
          className="topic_input"
          placeholder="Topic..."
          type="text"
          name="topic"
          value={topic}
          onChange={handleChange}
        />
        <br />
        <textarea
          rows="20"
          cols="50"
          maxLength="100"
          className="description_input"
          placeholder="description..."
          type="text"
          name="description"
          value={description}
          onChange={handleChange}
        />
        <br />
        <button className="create_btn">Submit</button>
      </form>
      <div className="blog_container">
        {blogs.map((blog) => (
              <Link to='/blogs/:id'>
          <div className="blog_div">
              <p className="blog_topic">{blog.topic}</p>
              <p className="blog_desc">{blog.description}</p>
              <button
                className="delete_btn"
                onClick={(e) => handleDelete(blog.id)}
                >
                Put Out
              </button>
            </div>
                </Link>
        ))}
      </div>
    </div>
  );
}
