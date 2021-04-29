import "../css/main.css";

export default function Main({ blogs }) {
  console.log(blogs[0]?.id)
  
  return (
    <div className="blogs">
      {blogs.map((blog) => (
        <div className="blog_div">
          <p className="blog_topic">{blog.topic}</p>
          <p className="blog_desc">{blog.description}</p>
        </div>
      ))}
    </div>
  );
}
