import React, { useState } from "react";
import profile from "../../../assets/profile-big.png";
import eyeOff from "../../../assets/eye-off.png";
import eye from "../../../assets/eye.png";
import Image from "next/image";

const Profile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setShowConPassword] = useState(false);
  return (
    <div className="max-w-[697px] w-full p-2 m-2">
      <div className="flex flex-col justify-center items-center mb-10">
        <Image src={profile} alt="profile" height={101} width={101} />
        <p className="text-[28px] text-[#191E29] font-bold mb-[10px]">
          John Doe
        </p>
        <p className="text-[#BDBBBB] text-[18px] font-normal">
          john.doe@gmail.com
        </p>
      </div>
      <form>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
          <div>
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
          <div>
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
          <div>
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
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <label htmlFor="password">
              <span>*</span> Password
            </label>
            <div className="relative">
              <input
                className="p-5 h-[unset]"
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
          </div>
          <div>
            <label htmlFor="password">
              <span>*</span> Confirm Password
            </label>
            <div className="relative">
              <input
                className="p-5 h-[unset]"
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
                src={showConPassword ? eye.src : eyeOff.src}
                alt=""
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
