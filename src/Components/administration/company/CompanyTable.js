import React, { useState } from "react";
import check from "@/assets/tickCheck.svg";
import unCheck from "@/assets/unTickCheck.svg";

const datas = [
  {
    id: 1,
    name: "Sean Pitcher",
    email: "spitcher@quicksilversystems.com",
    phone: "(941) 704-9940",
    role: "ADMINISTRATOR",
  },
  {
    id: 2,
    name: "Jason Maldoon",
    email: "jmaldoon@quicksilversystems.com",
    phone: "(314) 722-9309",
    role: "OFFICE ADMIN",
  },
  {
    id: 3,
    name: "Kim Jackson",
    email: "kjackson@quicksilversystems.com",
    phone: "(442) 812-0987",
    role: "OFFICE ADMIN",
  },
  {
    id: 4,
    name: "Brent Smith",
    email: "bsmith@quicksilversystems.com",
    phone: "(876) 344-6734",
    role: "CSR",
  },
  {
    id: 5,
    name: "Frank Moore",
    email: "fmoore@quicksilversystems.com",
    phone: "(674) 888-0192",
    role: "FIFLDADJUSTER",
  },
];

const CompanyTable = () => {
  const [checkedItems, setCheckItems] = useState([]);

  const handleCheck = (item) => {
    if (checkedItems.includes(item)) {
      const newItems = checkedItems.filter((i) => i !== item);
      setCheckItems(newItems);
    } else {
      setCheckItems((current) => [...current, item]);
    }
  };
  return (
    <div className="overflow-x-scroll no_scrollbar">
      <table className="fs_14">
        <thead>
          <tr className="whitespace-nowrap">
            <th className="text-start">ID</th>
            <th className="text-start">First Name - Last Name </th>
            <th className="text-start">Email</th>
            <th className="text-start">Phone</th>
            <th className="text-start">Role</th>
            <th>Disabled</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td style={{ color: "#FF6B0D" }}>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
              <td>{data.role}</td>
              <td className="text-center">
                {/* <input
                  type="checkbox"
                  className="h-[19px] w-[19px] cursor-pointer"
                  style={{ accentColor: "#ff6b0d", color: "#fff" }}
                /> */}
                <div
                  onClick={() => handleCheck(index)}
                  className="flex justify-center"
                >
                  {checkedItems.includes(index) ? (
                    <img src={check.src} alt="" className="cursor-pointer" />
                  ) : (
                    <img src={unCheck.src} alt="" className="cursor-pointer" />
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="fs_14 table_result">Showing 5 to 5 of 5 entries</p>
    </div>
  );
};

export default CompanyTable;
