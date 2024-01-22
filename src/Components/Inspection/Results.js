import { inspectionResult } from "@/Utils/SidebarElement";
import { useRouter } from "next/router";
import React from "react";

const Results = () => {

  const Router = useRouter()
  const handleNavigate = () => {
    Router.push("/dashboard/edit-inspection");
  };

  return (
    <div className="o">
      <h2
        style={{ color: "#191E29", fontWeight: "600" }}
        className="fs-4 mb-4 text-center">
        Results
      </h2>
      <div className="overflow-x-auto no_scrollbar">
        <table className="fs_14">
          <thead>
            <tr className="text-left">
              <th>Insured </th>
              <th>Assigned To</th>
              <th>Due Date</th>
              <th className="text-center">Status Updates</th>
              <th className="text-center">Attachment</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {inspectionResult.map((data, index) => (
              <tr key={index}>
                <td style={{ color: "#FF6B0D" }}>
                  <p onClick={handleNavigate} className="cursor-pointer">
                  {data.insured}
                  </p>
                </td>
                <td>{data.assigned}</td>
                <td>{data.DueDate}</td>
                <td className="text-center">{data.statusUpdate} </td>
                <td className="text-center">{data.attachment}</td>
                <td>{data.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="fs_14 table_result">Showing 5 to 5 of 5 entries</p>
      </div>
    </div>
  );
};

export default Results;
