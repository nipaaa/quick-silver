import React from "react";
import report1 from "../../assets/reportstep3.png";
import report2 from "../../assets/reportstep.png";

const StepThree = () => {
  return (
    <div>
      <table className="border mb-8">
        <thead>
          <tr>
            <th className="border-r">Photograph</th>
            <th>Front of House</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ verticalAlign: "top" }} className="items-start">
            <td className="bg-white border-r">
              <img className="w-full" src={report1.src} alt="" />
            </td>
            <td className="bg-white">Notes:</td>
          </tr>
        </tbody>
      </table>
      <table className="border mb-[71px]">
        <thead>
          <tr>
            <th className="border-r">Photograph</th>
            <th>Back of House</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ verticalAlign: "top" }} className="items-start">
            <td className="bg-white border-r">
              <img className="w-full" src={report2.src} alt="" />
            </td>
            <td className="bg-white">Notes:</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StepThree;
