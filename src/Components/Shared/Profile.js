import React from "react";
import profile from "../../assets/profile-big.png";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="max-w-[697px] w-full">
      <div className="text-center">
        <Image src={profile} alt="profile" height={101} width={101} />
        <p className="text-[28px] text-[#191E29] font-bold mb-[10px]">
          John Doe
        </p>
        <p className="text-[#BDBBBB] text-[18px] font-normal">
          john.doe@gmail.com
        </p>
      </div>
      <form>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
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
        </div>
      </form>
    </div>
  );
};

export default Profile;
