import { inspectionResult } from "@/Utils/SidebarElement";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import home from "../../assets/home-icon.png";
import car from "../../assets/car.png";

import { useDispatch, useSelector } from "react-redux";
import { setType } from "@/features/Inspection/inspectionSlice";
import { useGetAllinsuranceQuery } from "@/features/Inspection/inspectionApi";
import { formateDate } from "@/Utils/FormateDate";

const Results = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const Router = useRouter();
  const handleNavigate = (type) => {
    setType(type);
    dispatch(setType(type));
    Router.push("/dashboard/edit-inspection");
  };

  const { data, isLoading } = useGetAllinsuranceQuery(user?.id);

  console.log("fff", data);

  return (
    <div>
      <h2
        style={{ color: "#191E29", fontWeight: "600" }}
        className="fs-4 mb-4 text-center"
      >
        Results
      </h2>
      <div className="overflow-x-auto no_scrollbar">
        <table className="fs_14">
          <thead>
            <tr className="text-left">
              <th>Insured </th>
              <th>Type </th>
              <th>Assigned To</th>
              <th>Due Date</th>
              <th className="text-center">Status Updates</th>
              <th className="text-center">Attachment</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data?.length > 0 &&
              data?.map((data, index) => (
                <tr
                  onClick={() => handleNavigate(data.type)}
                  className="cursor-pointer"
                  key={index}
                >
                  <td style={{ color: "#FF6B0D" }}>
                    <p>{data.Insured}</p>
                  </td>
                  <td>
                    <img
                      src={data.Type === "Property" ? home.src : car.src}
                      alt=""
                    />
                  </td>
                  <td>{data.AssignedTo}</td>
                  <td>{formateDate(data.Date)}</td>
                  <td className="text-center">{data.statusUpdate} </td>
                  <td className="text-center">{data.attachment}</td>
                  <td className="capitalize">{data.Status}</td>
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
