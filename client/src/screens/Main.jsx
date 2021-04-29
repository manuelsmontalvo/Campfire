import "../css/main.css";

export default function Main({ blogs, handleCreate, handleDelete}) {
  

  return (
    <div className="blogs">
      <form className="create_form">
        <input
          maxLength="15"
          className="topic_input"
          placeholder="Topic..."
          type="text"
          name="topic"
          // value={}
          // onChange={}
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
          // value={}
          // onChange={}
        />
        <br />
        <button className="create_btn">Submit</button>
      </form>
      <div className="blog_container">
        {blogs.map((blog) => (
          <div className="blog_div">
            <p className="blog_topic">{blog.topic}</p>
            <p className="blog_desc">{blog.description}</p>
            <button className="delete_btn">Put Out</button>
          </div>
        ))}
      </div>
    </div>
  );
}
