import { useState } from "react";
import AuthLayout from "../../Layout/AuthLayout";
import "./Auth.css";
import { Link } from "react-router-dom";
import eyeOff from "../assets/eye-off.png";
import eye from "../assets/eye.png";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <AuthLayout>
      <div className="signIn">
        <div className="flex justify-end gap-2 items-center">
          <p className="dont">Don’t have any account?</p>{" "}
          <Link to="/sign-up" className="signUn_btn fs_20">
            Sign Up
          </Link>
        </div>
        <form>
          <h2 className="text-[32px] text-red-500">Sign Inkjdfgjkfdgb</h2>
          <p className="fs-6 subtitle ">To continue to the system</p>
          <div className="mb-4">
            <label className="fs-6" htmlFor="email">
              <span>*</span> Email Address
            </label>
            <input
              className="mb-2"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
            />
          </div>
          <div>
            <label className="fs-6" htmlFor="password">
              <span>*</span> Password
            </label>
            <div className="position-relative">
              <input
                className="mb-2"
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter your password"
              />
              <img
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  top: "50%",
                  transform: "translateY(-50%)",
                  right: "20px",
                  cursor: "pointer",
                }}
                className="position-absolute "
                src={showPassword ? eye.src : eyeOff.src}
                alt=""
              />
            </div>
            <div className="d-flex justify-content-between mb-5 gap-5 align-items-center">
              <p className="err_sms">Invalid Username or Password</p>
              <Link to="/forgot-password" className="forgot fs_14">
                Forgot password?
              </Link>
            </div>
          </div>
          <Link to="/dashboard">
            <button className="signIn_btn fs-5">Sign In</button>
          </Link>
        </form>
        <div></div>
      </div>
    </AuthLayout>
  );
};

export default SignIn;
