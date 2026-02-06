import { useForm } from "react-hook-form";
import img from "../../assets/images/main-img.jpg";
import { loginAPI } from "../../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
const SignIn = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => {
    const payload = {
      email: data.email,
      password: data.password,
    };
    loginAPI(payload)
      .then((res) => {
        toast.success(res?.data?.message || "Signup Successful!");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message || "Signup Failed!");
      });
  };

  const handleClick = () => {
    navigate("/signup");
  };

  return (
    <div className="auth-wrapper">
      {/* Right Form Section */}
      <div className="auth-form">
        <h1 style={{ textAlign: "center" }}>SignIn to get started!</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <div className="input-group">
            <input
              style={{ marginBottom: "0px" }}
              className=""
              type="text"
              placeholder="Full Name"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Minimum 3 characters",
                },
              })}
            />
            {errors.name && <small>{errors.name.message}</small>}
          </div> */}

          <div className="input-group">
            <input
              style={{ marginBottom: "0px" }}
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && <small>{errors.email.message}</small>}
          </div>

          {/* <div className="input-group">
            <input
              style={{ marginBottom: "0px" }}
              type="number"
              placeholder="Age"
              {...register("age", {
                required: "Age is required",
                min: {
                  value: 10,
                  message: "Minimum age is 10",
                },
                max: {
                  value: 100,
                  message: "Maximum age is 100",
                },
              })}
            />
            {errors.age && <small>{errors.age.message}</small>}
          </div> */}

          <div className="input-group">
            <input
              style={{ marginBottom: "0px" }}
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters required",
                },
              })}
            />
            {errors.password && <small>{errors.password.message}</small>}
          </div>

          <button type="submit" className="mb-2">
            Sign In
          </button>
        </form>
        <p className="sub-text" style={{ textAlign: "center" }}>
          New here? <span onClick={handleClick}>Sign Up</span>
        </p>
        <p className="sub-text" style={{ textAlign: "center" }}>
          By signing in you are agree to our terms and conditions
        </p>
      </div>

      {/* Left Image Section */}
      <div className="auth-image">
        <img src={img} alt="bg-img" className="setImage" />
      </div>
    </div>
  );
};

export default SignIn;
