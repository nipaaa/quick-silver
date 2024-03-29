import React from "react";

const InspectionTable = () => {
  return (
    <div className="overflow-x-auto no_scrollbar">
      <table className="fs_14">
        <thead>
          <tr className="text-left whitespace-nowrap">
            <th>Date Created </th>
            <th>Modified </th>
            <th>Email </th>
            <th>Phone</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10/29/2023</td>
            <td>11/3/2023</td>
            <td>jsmith@gmail.com</td>
            <td>jsmith@gmail.com</td>
            <td>Assigned</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InspectionTable;
