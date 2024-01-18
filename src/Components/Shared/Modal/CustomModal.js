import React from "react";

const CustomModal = ({
  isOpen,
  onClose,
  children,
  title,
  submitTitle,
  onSave,
}) => {
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
            {title ? title : ""}
          </h3>

          <div className="relative py-[38px] flex justify-center ">
            {children}
          </div>
          {/* Footer */}
          <div className="flex items-center justify-center gap-[20px]">
            <button className="cancel_btn " type="button" onClick={onClose}>
              Cancel
            </button>
            <button className="search_btn" type="button" onClick={onSave}>
              {submitTitle}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
