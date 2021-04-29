import "../css/signup.css"
import { useState } from 'react';

export default function SignUp(props) {
  const [formData, setFormData] = useState({
    username: '',
    email:'',
    password: '',
    avatar: ''
  })
  const { username, email, password, avatar} = formData;
  const {handleRegister} = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <form
      className="signup"
      onSubmit={(e) => {
      e.preventDefault();
      handleRegister(formData)
    }}>
      <h3>Sign-Up</h3>
      <input
          placeholder="Username..."
          type='text'
          name='username'
          value={username}
          onChange={handleChange}
        />
      <br />
      <input
          placeholder="Email..."
          type='text'
          name='email'
          value={email}
          onChange={handleChange}
        />
      <br />
      <input
          placeholder="Password..."
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
        />
      <br />
      <input
          placeholder="Img URL..."
          type='text'
          name='avatar'
          value={avatar}
          onChange={handleChange}
        />
      <br />
      <button className="submit_btn">Submit</button>
    </form>
  )
}
