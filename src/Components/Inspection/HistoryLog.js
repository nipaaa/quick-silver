import React from "react";
import history from "../../assets/inspection-history.png";
import search from "../../assets/search.png";
import Image from "next/image";

const HistoryLog = () => {
  const details = [
    {
      date: "10/15/2023",
      time: "5:15:00 PM",
      user: "Jen Miller",
      phone: "9414445566",
      email: "Jmiller@insurance.com",
      description:
        "Inspection Created. Entry Date: 10/15/2023; Insured: James Smith; Assigned: Jake Mangrove; Due Date: 10/20/2023; Inspection Type: Dwelling; Address 1: 2374 Hwy; Address 2: null",
    },
    {
      date: "10/15/2023",
      time: "5:15:00 PM",
      user: "Jen Miller",
      phone: "9414445566",
      email: "Jmiller@insurance.com",
      description: "Inspection Update. Address 1: 2374 Hwy K",
    },
    {
      date: "10/15/2023",
      time: "5:15:00 PM",
      user: "Jen Miller",
      phone: "9414445566",
      email: "Jmiller@insurance.com",
      description:
        "Inspection Update. Property Type: Dwelling; Year Built: 1964; Occupied: Yes; Homeowner Present: Yes; Stories: 1.5; Fence: Yes",
    },
    {
      date: "10/15/2023",
      time: "5:15:00 PM",
      user: "Jen Miller",
      phone: "9414445566",
      email: "Jmiller@insurance.com",
      description:
        "Inspection Update. Liability Aggressive Dogs: Yes; Liability Gate: Yes",
    },

    {
      date: "10/15/2023",
      time: "5:15:00 PM",
      user: "Jake Mangrove",
      phone: "9414445566",
      email: "Jmangrove@insurance.com",
      description:
        "SMS Message. Insured Cell (941) 807-2258; Message: Thank you for using TRI - Trust Risk Inspections.  Our Inspector James Smith will be arriving shortly.  Please, put away",
    },
  ];
  return (
    <div className="bg-white border border-[#EEE] p-5">
      <div className="flex justify-between items-center gap-4 mb-5">
        <div className="flex items-center gap-2">
          <Image src={history} width={16} height={16} alt="history" />
          <p className="font-medium text-[#191E29]">Inspection History</p>
        </div>
        <div className="relative">
          <input type="search" className="pl-6" />
          <Image
            style={{ top: "50%", left: "10px", transform: "translateY(-50%)" }}
            className="absolute"
            src={search}
            alt="search"
          />
        </div>
      </div>

      <div className="border border-[#EEE]">
        <table>
          <thead>
            <tr className="text-left">
              <th className="whitespace-nowrap">Event Date</th>
              <th>User</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Event Description</th>
            </tr>
          </thead>
          <tbody>
            {details.map((data, index) => (
              <tr className="text-xs font-normal" key={index}>
                <td>
                  {data.date} <br />
                  {data.time}
                </td>
                <td className="whitespace-nowrap">{data.user}</td>
                <td>{data.phone}</td>
                <td>{data.email}</td>
                <td>{data.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="bg-white px-[22px] py-[31px] flex gap-3 justify-between items-center">
          <p className="text-[#191E29] text-sm font-normal">
            Showing 5 to 5 of 5 entries
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistoryLog;
