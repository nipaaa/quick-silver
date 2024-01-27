import React from "react";
import Link from "next/link";
import { useState } from "react";
import eyeOff from "../../assets/eye-off.png";
import eye from "../../assets/eye.png";
import { useRouter } from "next/router";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { push } = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setErrorMessage("");

    if (!validateEmail(email)) {
      setErrorMessage("Invalid email address");
      return;
    }

    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters");
      return;
    }

    const data = {
      email,
      password,
    };
    console.log(data);

    push("/dashboard");
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="signIn">
      <div className="flex flex-wrap justify-end gap-2 items-center">
        <p className="dont">Don’t have any account?</p>{" "}
        <Link href="/sign-up" className="signUn_btn text-[20px]">
          Sign Up
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <h2 className="text-[32px]">Sign In</h2>
        <p className="fs-6 subtitle">To continue to the system</p>
        <div className="mb-4">
          <label className="fs-6" htmlFor="email">
            <span>*</span> Email Address
          </label>
          <input
            className="mb-2 p-5 h-[unset]"
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
              src={showPassword ? eye.src : eyeOff.src}
              alt=""
            />
          </div>
          <div className="flex flex-wrap justify-between mb-5 gap-5 items-center">
            <p className="err_sms">{errorMessage}</p>
            <Link href="/forgot-password" className="forgot fs_14">
              Forgot password?
            </Link>
          </div>
        </div>

        <button className="signIn_btn text-[20px]">Sign In</button>
      </form>
      <div></div>
    </div>
  );
};

export default SignIn;
