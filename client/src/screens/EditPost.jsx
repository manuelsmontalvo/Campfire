import React from 'react'
import '../css/editpost.css'
import {updateBlog} from "../services/blogs.js"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';



export default function EditPost() {
  const [formData, setFormData] = useState({
    topic: '',
    description: ''
  })
  const { topic, description} = formData;
  const { id } = useParams();

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleEdit = async (id, formData) => {
    const blogData = await updateBlog(id, formData);
    
    history.push('/')
  }




  return (
    <div className ="editdiv">
      <div class="containeredit">
       <form
        className="create_form"
        onSubmit={(e) => {
          e.preventDefault();
          handleEdit(id, formData)
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
      </div>
    </div>
  )
}
