import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import EditPost from '../screens/EditPost';
import Campsite from '../screens/Campsite';
import Main from '../screens/Main';
import PostDetail from '../screens/PostDetail';
import Profile from '../screens/Profile';

import {getAllBlogs} from '../services/blogs'

export default function MainContainer() {
const [blogs, setBlogs] = useState([])

useEffect(() => {
  const getBlogs = async () => {
    const blogData = await getAllBlogs();
    setBlogs(blogData);
  }
  getBlogs()
}, [])

  return (
    <div>
      <Switch>
        <Route path='/'>
          <Main blogs={blogs}/>
      </Route>
        <Route path='/posts/:id/edit'>
          <EditPost/>
      </Route>
        <Route path='/posts/:id'>
          <PostDetail/>
      </Route>
        <Route path='/blogs/:id'>
        <Campsite/>
      </Route>
        <Route path='/users/:id'>
        <Profile/>
      </Route>
    </Switch>
    </div>
  )
}
