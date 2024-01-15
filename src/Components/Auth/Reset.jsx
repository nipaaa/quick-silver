import { Link } from "react-router-dom";
import AuthLayout from "../../Layout/AuthLayout";
import eyeOff from "../../assets/eye-off.png";
import eye from "../../assets/eye.png";
import { useState } from "react";

const Reset = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setShowConPassword] = useState(false);
  return (
    <AuthLayout>
      <div className="signIn">
        <div className="d-flex justify-content-end gap-2 align-items-center">
          <p className="dont fs-6">Don’t have any account?</p>{" "}
          <Link to="/" className="signUn_btn fs_20">
            Sign In
          </Link>
        </div>
        <form>
          <h2 className="fs-2">Reset Password</h2>
          <p className="fs-6 subtitle">
            Enter a new Password and Confirm to reset your password
          </p>

          <div className="mb-4">
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
                src={showPassword ? eye : eyeOff}
                alt=""
              />
            </div>
          </div>
          <div className="mb-5">
            <label className="fs-6" htmlFor="password">
              <span>*</span> Confirm Password
            </label>
            <div className="position-relative">
              <input
                className="mb-2"
                type={showConPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Confirm your password"
              />
              <img
                onClick={() => setShowConPassword(!showConPassword)}
                style={{
                  top: "50%",
                  transform: "translateY(-50%)",
                  right: "20px",
                  cursor: "pointer",
                }}
                className="position-absolute "
                src={showConPassword ? eye : eyeOff}
                alt=""
              />
            </div>
          </div>
       

          <Link to="/reset_password">
            <button className="signIn_btn fs-5">Reset Password</button>
          </Link>
        </form>
        <div></div>
      </div>
    </AuthLayout>
  );
};

export default Reset;
