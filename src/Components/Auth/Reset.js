import Link from "next/link";
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
        <div className="flex flex-wrap justify-end gap-2 items-center">
          <p className="dont">Don’t have any account?</p>{" "}
          <Link href="/" className="signUn_btn text-[20px] ">
            Sign In
          </Link>
        </div>
        <form>
          <h2 className="text-[32px]">Reset Password</h2>
          <p className=" subtitle">
            Enter a new Password and Confirm to reset your password
          </p>

          <div className="mb-4">
            <label htmlFor="password">
              <span>*</span> Password
            </label>
            <div className="relative">
              <input
                className="mb-2 p-5 h-[unset]"
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
                className="absolute "
                src={showPassword ? eye : eyeOff}
                alt=""
              />
            </div>
          </div>
          <div className="mb-5">
            <label htmlFor="password">
              <span>*</span> Confirm Password
            </label>
            <div className="relative">
              <input
                className="mb-2 p-5 h-[unset]"
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
                className="absolute "
                src={showConPassword ? eye : eyeOff}
                alt=""
              />
            </div>
          </div>

          <button className="signIn_btn text-[20px]">Reset Password</button>
        </form>
        <div></div>
      </div>
    </AuthLayout>
  );
};

export default Reset;
