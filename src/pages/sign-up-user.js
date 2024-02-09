import AuthLayout from "@/Layout/AuthLayout";
import Link from "next/link";
import React, { useState } from "react";
import eyeOff from "@/assets/eye-off.png";
import eye from "@/assets/eye.png";

const SignUpUserPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setShowConPassword] = useState(false);
  return (
    <AuthLayout>
      <div className="signIn">
        <div className="flex flex-wrap justify-end gap-2 items-center">
          <p className="dont">Already have any account?</p>{" "}
          <Link href="/" className="signUn_btn text-[20px]">
            Sign In
          </Link>
        </div>
        <form>
          <h2 className="text-[32px]">Sign Up</h2>
          <p className="fs-6 subtitle">To prepare to log into the system</p>
          <div className="mb-2">
            <label className="fs-6" htmlFor="email">
              <span>*</span> Referral ID
            </label>
            <input
              className="p-5 h-[unset]"
              type="text"
              name="referralId"
              id="referralId"
              placeholder="Paste your referral ID or enter None if you were not refered"
            />
          </div>

          <div className="mb-2">
            <label className="fs-6" htmlFor="fname">
              <span>*</span> First name
            </label>
            <input
              className="p-5 h-[unset]"
              type="text"
              name="fname"
              id="fname"
              placeholder="Enter your  first name"
            />
          </div>
          <div className="mb-2">
            <label className="fs-6" htmlFor="email">
              <span>*</span> Last name
            </label>
            <input
              className="p-5 h-[unset]"
              type="text"
              name="lname"
              id="lname"
              placeholder="Enter your last name"
            />
          </div>

          <div className="mb-4">
            <label className="fs-6" htmlFor="cname">
              <span>*</span> Company name
            </label>
            <input
              className="p-5 h-[unset]"
              type="text"
              name="cname"
              id="cname"
              placeholder="Enter your company name"
            />
          </div>
          <div className="mb-4">
            <label className="fs-6" htmlFor="semail">
              <span>*</span> Email address
            </label>
            <input
              className="p-5 h-[unset]"
              type="email"
              name="email"
              id="semail"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-4">
            <label className="fs-6" htmlFor="cell">
              <span>*</span> Cell phone number
            </label>
            <input
              className="p-5 h-[unset]"
              type="tel"
              name="cell"
              id="cell"
              placeholder="Enter your cell phone number"
            />
          </div>
          <div className="mb-4">
            <label className="fs-6" htmlFor="password">
              <span>*</span> Password
            </label>
            <div className="position-relative">
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
                className="position-absolute "
                src={showPassword ? eye : eyeOff}
                alt=""
              />
            </div>
          </div>
          <div className="mb-2">
            <label className="fs-6" htmlFor="cpassword">
              <span>*</span> Confirm Password
            </label>
            <div className="position-relative">
              <input
                className="mb-2 p-5 h-[unset]"
                type={showConPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter your password"
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
          <p className="err_sms mb-5">
            Email already exists in the system you must enter the Referral ID or
            contact customer service at (800) 123-1234
          </p>
          <Link href="/dashboard">
            <button className="signIn_btn fs-5 mb-5">Create account </button>
          </Link>
        </form>
        <div></div>
      </div>
    </AuthLayout>
  );
};

export default SignUpUserPage;
