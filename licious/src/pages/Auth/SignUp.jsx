import { useForm } from "react-hook-form";
import img from "../../assets/images/main-img.jpg";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Signup Successful!");
  };

  return (
    <div className="auth-wrapper">
      {/* Left Image Section */}
      <div className="auth-image">
        <img src={img} alt="bg-img" className="setImage" />
      </div>

      {/* Right Form Section */}
      <div className="auth-form">
        <h1 style={{ textAlign: "center" }}>Welcome Back!</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
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
          </div>

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

          <div className="input-group">
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
          </div>

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

          <button type="submit">Sign Up</button>
        </form>
        <p className="sub-text" style={{ textAlign: "center" }}>
          Already have an account? <span>Sign In</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
