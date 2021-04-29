import "../css/main.css";

export default function Main({ blogs }) {
  console.log(blogs);
  
  return (
    <div>
      {blogs.map(blog => {
        <div className="blog_div">
          <p>{blog.topic}</p>
          <p>{blog.description}</p>
        </div>;
      })}
    </div>
  );
}
