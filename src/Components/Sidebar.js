import logo from "../assets/logo.png";
import arrow from "../assets/down-arrow.png";
import { useState } from "react";
import Link from "next/link";
import { sidebarElement } from "@/Utils/SidebarElement";
import { usePathname } from "next/navigation";
import { IoMdClose } from "react-icons/io";

const Sidebar = ({ showSideBar, handleSidebar }) => {
  console.log("sidebar open: ", showSideBar);
  const [openIndex, setOpenIndex] = useState(null);

  const handleDropdownClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const pathname = usePathname();
  return (
    <div
      className={`sidebar ${
        showSideBar ? "fixed" : "hidden"
      } z-10 md:z-0 md:block`}>
      <div className={"logo flex items-center justify-between"}>
        <Link href="/" className="inline-block">
          <img src={logo.src} alt="" />
        </Link>
        <button onClick={handleSidebar}>
          <IoMdClose className="text-white" />
        </button>
      </div>

      {sidebarElement.map((data, index) => (
        <div key={index}>
          <Link
            onClick={() => handleDropdownClick(index)}
            href={data?.path ? data?.path : "#"}
            className={`link ${pathname === data?.path ? "active" : ""}`}>
            <div className="flex items-center gap-3">
              <img src={data.pic.src} alt="" />
              <p>{data.title}</p>
            </div>
            {data.dropdown && (
              <img
                className={openIndex === index && "arrow"}
                src={arrow.src}
                alt=""
              />
            )}
          </Link>
          {openIndex === index &&
            data.subtitle?.map((subData, subIndex) => (
              <div key={subIndex}>
                <Link
                  className="subLink flex items-center gap-3"
                  href={`${subData?.path}`}>
                  <img src={subData.pic.src} alt="" />
                  <p>{subData.title}</p>
                </Link>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
