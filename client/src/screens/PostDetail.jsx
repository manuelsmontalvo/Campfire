// import React from 'react'
// import {getPost} from "../services/posts"
// import {createComment} from "../services/comments"
// import { length } from '../services/interactionCount'
// import { togglePostLikes } from "../services/likes";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import '../css/postdetail.css'

export default function PostDetail({currentUser}) {
  // const { id } = useParams();
  // const [comment, setComment] = useState(null);
  // const [formData, setFormData] = useState({
  //   content: ""
  // });
  // const [post, setPost] = useState(null);

  // const { content } = formData;

  // useEffect(() => {
  //   const fetchPost = async (id) => {
  //     const postData = await getPost(id);
  //     setPost(postData);
  //   };
  //   fetchPost();
  // }, []);

  // const makeComment = async (formData) => {
  //   const commentData = await createComment(formData);
  //   setComment(commentData)
  // }

  // console.log(post)

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  // return (
  //   <div className= "postDetail">
  //      <div className="post_detail_div">
  //         <div className="post_user_info">
  //           <img src={post?.user?.avatar} alt="" />
  //           <p>{post?.user?.username}</p>
  //           <div className="post_detail_interactions">
  //             <p>
  //               <a href="" ><button className='post_interactions_btn'>💬</button></a>
  //               {}
  //             </p>
  //             <p>
  //               <button className='post_interactions_btn' >👍🏽</button>
                
  //             </p>
  //           </div>
  //         </div>
  //         <div className="">
  //           <p></p>
  //         </div>
  //       </div>

  //     <div className="comment_form">
  //       <div className="user_info">
  //         <img src={currentUser?.avatar} alt="profile picture" />
  //         <p>{currentUser?.username}</p>
  //       </div>

  //       <div className="form_div">
  //         <form
  //           onSubmit={(e) => {
  //             e.preventDefault();
  //             makeComment({...formData, post_id: id})
  //           }}
  //         >
  //           <textarea
  //             rows="20"
  //             cols="50"
  //             maxLength="100"
  //             className=""
  //             placeholder="Comment..."
  //             type="text"
  //             name="content"
  //             value={content}
  //             onChange={handleChange}
  //           />
  //           <br />
  //           <button className="comment_create_btn">Submit</button>
  //         </form>
  //       </div>
  //     </div>
  //     <div>
  //       {post?.comments.map((comment) => (
  //       <div className="comment_div">
  //         <div className="user_info">
  //           <img src={post.user.avatar} alt="" />
  //           <p>{post.user.username}</p>
  //           <div className="interactions">
  //             <p>
  //               <a href={`/posts/${post.id}`}><button className='interactions_btn'>💬</button></a>
  //               {length(post.comments)}
  //             </p>
  //             <p>
  //               <button className='interactions_btn' onClick={()=>togglePostLikes(post.id)}>👍🏽</button>
  //               {length(post.likes)}
  //             </p>
  //           </div>
  //         </div>
  //         <div className="post_info">
  //           <p>{post.content}</p>
  //         </div>
  //       </div>
  //       ))}

  //     </div>

  //   </div>
  // )
}
