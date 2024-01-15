import { Link } from "react-router-dom";
import AuthLayout from "../../Layout/AuthLayout";

const Forgot = () => {
  return (
    <AuthLayout>
      <div className="signIn">
        <div className="d-flex justify-content-end gap-2 align-items-center">
          <p className="dont fs-6">Don’t have any account?</p>{" "}
          <Link to="/sign-up" className="signUn_btn fs_20">
            Sign Up
          </Link>
        </div>
        <form>
          <h2 className="fs-2">Forgot Password </h2>
          <p className="fs-6 subtitle">
            Enter your email and a password reset will be sent to you
          </p>
          <div className="mb-2">
            <label className="fs-6" htmlFor="email">
              <span>*</span> Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
            />
          </div>
          <p className="err_sms mb-5">Invalid Email Address</p>

          <Link to="/reset_password">
            <button className="signIn_btn fs-5">Reset Password</button>
          </Link>
        </form>
        <div></div>
      </div>
    </AuthLayout>
  );
};

export default Forgot;
