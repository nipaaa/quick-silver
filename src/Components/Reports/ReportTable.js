import React from "react";

const ReportTable = () => {
  const reports = [
    {
      name: "Aggressive Dogs",
      status: "No",
    },
    {
      name: "Balcony",
      status: "No",
    },
    {
      name: "Deck",
      status: "No",
    },
    {
      name: "Fencing",
      status: "Yes",
      comment: "Chain link fencing around dwelling front",
    },
    {
      name: "Foundation Cracks",
      status: "No",
      comment: "A couple of chain link gates in front of residence",
    },
    {
      name: "Gates",
      status: "Yes",
    },
    {
      name: "Gutter",
      status: "Yes",
    },
    {
      name: "Pool / Hut Tub",
      status: "No",
    },
    {
      name: "Potential Flooding",
      status: "No",
    },
    {
      name: "Railings",
      status: "No",
    },
    {
      name: "Trampoline",
      status: "No",
    },
    {
      name: "Trees",
      status: "No",
    },
    {
      name: "Trip / Fall Hazard",
      status: "No",
    },
    {
      name: "Wood Stove",
      status: "Yes",
    },
    {
      name: "Well Maintained",
      status: "Yes",
    },
  ];
  return (
    <div>
      <table className="fs_14">
        <thead>
          <tr className="text-left">
            <th>No</th>
            <th> </th>
            <th></th>
            <th>Liabilities and Hazards</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {reports.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.status}</td>
              <td className="border-r">Comments</td>
              <td className="bg-white border-b-0">{data?.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportTable;
