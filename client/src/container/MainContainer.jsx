import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import EditPost from "../screens/EditPost";
import Campsite from "../screens/Campsite";
import Main from "../screens/Main";
import PostDetail from "../screens/PostDetail";
import Profile from "../screens/Profile";

import { getAllBlogs, createBlog, deleteblog } from "../services/blogs";


export default function MainContainer({ currentUser }) {
  const [blogs, setBlogs] = useState([]);
  const [post, setPost] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const getBlogs = async () => {
      const blogData = await getAllBlogs();
      setBlogs(blogData);
    };
    getBlogs();
  }, []);

  const handleCreate = async (fromData) => {
    const blogData = await createBlog(fromData);
    setBlogs((prevState) => [...prevState, blogData]);
    history.push("/");
  };

  const handleDelete = async (id) => {
    await deleteblog(id);
    setBlogs((prevState) => prevState.filter((blog) => blog.id !== id));
  };

  

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Main
            blogs={blogs}
            handleCreate={handleCreate}
            handleDelete={handleDelete}
          />
        </Route>
        <Route exact path="/blogs/:id/edit">
          <EditPost />
        </Route>
        <Route path="/posts/:id">
          <PostDetail 
          currentUser={currentUser}
          />
        </Route>
        <Route path="/blogs/:id">
          <Campsite
            currentUser={currentUser}
          />
        </Route>
        <Route path="/users/:id">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}
