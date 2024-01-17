import React from "react";

const ReferNewCompanyModal = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black opacity-50"></div>

      {/* Modal content */}
      <div className="relative max-w-[1004px] w-full  mx-auto my-6">
        {/* Modal body */}
        <div className="relative flex flex-col  bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none py-[56px]">
          {/* Header */}
          <h3 className="text-[28px] font-[700] text-center">
            {title ? title : "Modal Title"}
          </h3>
          <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <button
              className="p-1 ml-auto bg-transparent border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={onClose}
            >
              <span className="text-white">×</span>
            </button>
          </div>
          {/* Body */}
          <div className="relative p-6 flex-auto text-white">{children}</div>
          {/* Footer */}
          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button
              className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none active:bg-blue-600 hover:shadow-lg focus:outline-none"
              type="button"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferNewCompanyModal;
