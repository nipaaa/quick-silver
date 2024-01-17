import React from "react";

const Actions = () => {
  return (
    <div>
      <div>
        <button className="text-medium text-[#191E29] bg-[#EBF6FD] p-4 max-w-[268px] w-full mb-[30px]">
          Product Inspection Report
        </button>
        <div className="flex gap-[49px] items-center mb-5">
          <button className="text-medium text-[#191E29] bg-[#EBF6FD] p-4 max-w-[268px] w-full">
            SMS Message Insured
          </button>
          <button className="text-medium text-[#191E29] bg-[#EBF6FD] p-4 max-w-[268px] w-full">
            Email Insured
          </button>
        </div>
      </div>
      <div className="border border-dashed border-[#FF6B0D] p-5 mb-[30px]">
        <p>
          <span className="text-[#FF6B0D]"> Message: </span>
          Please see reference pictures for locations. Lorem Ipsum Lorem Lorem
          Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem
          Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem. Lorem Ipsum
          Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem
          Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem Ipsum Lorem.
        </p>
      </div>
      <div className="flex gap-4 items-center btn_set">
        <button className="cancel_btn fs-6">Cancel</button>
        <button className="search_btn fs-6">Send</button>
      </div>
    </div>
  );
};

export default Actions;
