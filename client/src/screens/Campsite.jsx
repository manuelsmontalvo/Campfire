import React from 'react'

export default function Campsite() {
  return (
      <div className="campsite">
      <form
        className="campsite_form"
        onSubmit={(e) => {
          e.preventDefault();
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
        <button className="create_btn">Submit</button>
      </form>
    </div>
  )
}
