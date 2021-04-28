import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/login.css"

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      className="signin"
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);
      }}
    >
      <h3>Sign-In</h3>
      <input
        placeholder="Username..."
        type="text"
        name="username"
        value={username}
        onChange={handleChange}
      />
      <br />
      <input
        placeholder="Password..."
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <br />
      <button className="submit_btn">Submit</button>
      <br />
      <Link className="signup_btn" to="/signup">
        signup
      </Link>
    </form>
  );
}
