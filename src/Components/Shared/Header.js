import Link from "next/link";
import { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import dot from "../../assets/dot.png";
import arrow from "../../assets/green-arrow.png";
import manage from "../../assets/manage.png";
import profile from "../../assets/profile.png";
import signOut from "../../assets/sign-out.png";

const Header = ({ handleSidebar }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="header flex md:flex-none flex-wrap md:flex-nowrap gap-4 md:gap-0">
      <div className="header_title flex items-center flex-wrap gap-4">
        <h2 className="text-[28px] font-bold">Office Dashboard</h2>
        <button onClick={handleSidebar} className="block md:hidden">
          <IoReorderThreeOutline className="text-xl font-bold" />
        </button>
      </div>
      <div className="flex flex-wrap md:flex-nowrap items-center gap-5 relative">
        <input type="search" placeholder="Search" />
        <div
          onClick={() => setShow(!show)}
          className="flex items-center gap-2 w-full profile cursor-pointer ">
          <img
            height={40}
            width={40}
            className="rounded-full"
            src={profile.src}
            alt=""
          />
          <p className="name">John Doe</p>
          <img src={arrow.src} alt="" />
        </div>

        {show && (
          <div className="flex items-start absolute gap-4 justify-between profile_box top-[110px] md:top-[50px] right-[0px] md:right-[30px] md:width-[496px] height-[100%] fs_18 z-10">
            <div className="flex flex-wrap items-start gap-4 ">
              <img
                height={59}
                width={59}
                className="rounded-full"
                src={profile.src}
                alt=""
              />
              <div>
                <div>
                  <p className="name ">John Doe</p>
                  <p className="email ">john.doe@gmail.com</p>
                </div>
                <Link
                  style={{ display: "flex" }}
                  className="  items-center gap-3 "
                  href="#">
                  <img src={manage.src} alt="" />
                  Manage account
                </Link>
                <Link
                  style={{ display: "flex" }}
                  className="  items-center gap-3"
                  href="#">
                  <img src={signOut.src} alt="" />
                  Sign Out
                </Link>
              </div>
            </div>
            <img src={dot.src} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
