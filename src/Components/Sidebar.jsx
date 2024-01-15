import { Link } from "react-router-dom";
import { sidebarElement } from "../../Utils/SidebarElement";
import logo from "../../assets/logo.png";
import arrow from "../../assets/down-arrow.png";
import "./Dashboard.css";
import { useState } from "react";

const Sidebar = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleDropdownClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="sidebar">
      <Link to="/" className="logo d-inline-block">
        <img src={logo} alt="" />
      </Link>
      {sidebarElement.map((data, index) => (
        <div key={index}>
          <Link
            onClick={() => handleDropdownClick(index)}
            to="#"
            className={`link fs-6 ${openIndex === index ? "active" : ""}`}
          >
            <div className="d-flex align-items-center gap-3">
              <img src={data.pic} alt="" />
              <p>{data.title}</p>
            </div>
            {data.dropdown && <img className={openIndex === index && "arrow"} src={arrow} alt="" />}
          </Link>
          {openIndex === index &&
            data.subtitle?.map((subData, subIndex) => (
              <div key={subIndex}>
                <Link
                  className="subLink d-flex align-items-center gap-3 fs-6"
                  to={subData?.path}
                >
                  <img src={subData.pic} alt="" />
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
