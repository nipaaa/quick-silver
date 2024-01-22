import React from "react";
import deleteIcon from "@/assets/deleteIcon.svg";

const datas = [
  {
    id: 1,
    companyName: "Quick Silver Systems",
    address: "3990 SR 64 E, Bradenton FL 34208",
    phone: "(941) 704-9940",
  },
  {
    id: 2,
    companyName: "TRI - Trusted Risk Inspections",
    address: "1287 State Hwy K, Branson, MO 29385",
    phone: "(314) 722-9309",
  },
  {
    id: 3,
    companyName: "Inspection R Us",
    address: "8193 Jackson Blvd, Jackson, MS. 29384",
    phone: "(442) 812-0987",
  },
  {
    id: 4,
    companyName: "AAA Inspections",
    address: "928748 Branch Road, Maryville, AZ 76385",
    phone: "(876) 344-6734",
  },
  {
    id: 5,
    companyName: "Smith Inspections Service",
    address: "84 a1988 Main Street West, Brandon, MO 29384 57",
    phone: "(674) 888-0192",
  },
];

const Entities = () => {
  return (
    <div className="mt-[30px] overflow-x-scroll no_scrollbar">
      <table className="fs_14">
        <thead>
          <tr className="text-left whitespace-nowrap">
            <th className="text-start">ID</th>
            <th className="text-start">Company Name </th>
            <th className="text-start">Address</th>
            <th className="text-start">Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td style={{ color: "#FF6B0D" }}>{data.companyName}</td>
              <td>{data.address}</td>
              <td className="whitespace-nowrap">{data.phone}</td>
              <td className="text-center">
                <button>
                  <img src={deleteIcon?.src} alt="" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="fs_14 table_result">Showing 5 to 5 of 5 entries</p>
    </div>
  );
};

export default Entities;
