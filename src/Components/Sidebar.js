import logo from "../assets/logo.png";
import arrow from "../assets/down-arrow.png";
import { useState } from "react";
import Link from "next/link";
import { sidebarElement } from "@/Utils/SidebarElement";

const Sidebar = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleDropdownClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="sidebar">
      <Link href="/" className="logo inline-block">
        <img src={logo.src} alt="" />
      </Link>
      {sidebarElement.map((data, index) => (
        <div key={index}>
          <Link
            onClick={() => handleDropdownClick(index)}
            href="#"
            className={`link ${openIndex === index ? "active" : ""}`}
          >
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
                  href={`${subData?.path}`}
                >
                  <img src={subData.pic.srcf} alt="" />
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
