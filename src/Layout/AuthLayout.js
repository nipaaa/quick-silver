import React from "react";
import logo from "../assets/logo.png";
import girl from "../assets/girl.png";

const AuthLayout = ({ children }) => {
  return (
    <div className="auth ">
      <div className="grid lg:grid-cols-2 m-0 h-full">
        <div className=" right_side flex flex-col items-start justify-between">
          <img src={logo.src} alt="" />
          <div className="flex justify-center w-full">
            <img className="" src={girl.src} alt="" />
          </div>
          <div></div>
        </div>
        <div style={{ overflowY: "scroll" }} className="no_scrollbar left_side  h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
