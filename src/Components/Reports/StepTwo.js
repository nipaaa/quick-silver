import React from "react";

const StepTwo = () => {
  const details = [
    {
      name: "Big Machine Shed",
      size: "84 x 57",
    },
    {
      name: "Creak Bottom Bam",
      size: "48 x 28",
    },
    {
      name: "Hay Bam",
      size: "50 x 45",
      location: "South of Hwy K",
    },
    {
      name: "Hoop Building",
      size: "100 x 35",
    },
    {
      name: "Lower Field Shed",
      size: "40 x 20",
    },
    {
      name: "Machine Shed",
      size: "32 x 28",
    },
    {
      name: "Storage Farm House",
      size: "40 x 27",
    },
    {
      name: "Red & White Bam",
      size: "55 x 30",
    },
    {
      name: "Red Brick Garage",
      size: "33 x 21",
    },
    {
      name: "Reg Garage",
      size: "30 x 20",
    },
    {
      name: "Silver Machine Shed",
      size: "48 x 42",
    },
    {
      name: "Block Building",
      size: "28 x 32",
    },
  ];
  return (
    <div>
      <button className="bg-[#EBF6FD] font-medium text-[#191E29] p-4 w-full mb-[10px]">
        Outbuilding
      </button>
      <div className="overflow-x-scroll no_scrollbar">
        <table>
          <thead>
            <tr className="text-left">
              <th>Number</th>
              <th>Name</th>
              <th>Size</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {details.map((data, index) => (
              <tr key="index">
                <td>{index + 1}</td>
                <td className="whitespace-nowrap">{data.name}</td>
                <td className="whitespace-nowrap">{data.size}</td>
                <td>{data?.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <hr className="text-[#BDBBBB] my-[10px]" />
      <button className="bg-[#EBF6FD] font-medium text-[#191E29] p-4 w-full mb-2">
        Notes
      </button>
      <p className="text-sm font-normal text-[#191E29] mb-[60px]">
        Please see reference pictures for locations
      </p>
    </div>
  );
};

export default StepTwo;
