import { useState } from "react";
// import "./signup.css";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="auth-wrapper">
      {/* Left Image Section */}
      <div className="auth-image"></div>

      {/* Right Form Section */}
      <div className="auth-form">
        <div className="top-nav">
          <span>Home</span>
          <span>Catalogue</span>
          <span>About Us</span>
          <span>Profile</span>
        </div>

        <h1>Welcome Back!</h1>
        <p className="sub-text">Already have an account? <span>Sign In</span></p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Sign Up</button>
        </form>

        <div className="or">OR</div>

        <div className="social-icons">
          <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" />
          <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" />
          <img src="https://cdn-icons-png.flaticon.com/512/179/179309.png" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
