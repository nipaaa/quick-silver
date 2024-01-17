import React from "react";
import Image from "next/image";
import check from "../../assets/tickCheck.svg";

const Hazards = () => {
  const options = [
    "Aggressive Dogs",
    "Balcony",
    "Deck",
    "Fencing",
    "Foundation Cracks",
    "Gate",
  ];
  return (
    <div>
      <div className="border border-dashed border-[#FF6B0D] p-5 mb-[30px]">
        <p className="font-semibold mb-5">Liabilities & Hazards:</p>
        <div className="grid grid-cols-4 ">
          <div className="flex flex-col gap-4">
            {options.map((option, index) => (
              <div key={index} className="flex items-center gap-4">
                <Image src={check} height={19} width={19} alt="check" />
                <p className="text-[#191E29] font-normal">{option}</p>
              </div>
            ))}
          </div>

          <div className="col-span-2">
            <div className="h-full flex flex-col justify-between">
              <div className="flex items-center gap-4">
                <label className="mb-0">Comments:</label>
                <input type="text" placeholder="Pair of German Shepherds" />
              </div>
              <div className="flex items-center gap-4">
                <label className="mb-0">Comments:</label>
                <input
                  type="text"
                  placeholder="A Couple of chain link gate in front of residence"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border border-[#EEE] pl-5 pt-5 pr-10 pb-10">
        <p className="font-normal">
          <span className="text-[#FF6B0D] ">Notes:</span> Property appeared to
          be well maintained.  Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum
          Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem
          Ipsum Lorem Lorem Ipsum Lorem.
        </p>
      </div>
      <div className="flex gap-4 items-center btn_set">
        <button className="cancel_btn fs-6">Cancel</button>
        <button className="search_btn fs-6">Save</button>
      </div>
    </div>
  );
};

export default Hazards;
