import React, { useRef, useState } from "react";
import pic from "../../../assets/attachment-add.png";

const AttachmentAdd = ({ onSave, onClose }) => {
  const fileRef = useRef();
  const [attachment, setAttachment] = useState({ src: null });

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        setAttachment({ src: event.target.result });
      };

      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-12">
      <div>
        <img
          className="w-full rounded-lg mb-[30px]"
          src={attachment.src ? attachment.src : pic.src}
          alt=""
        />

        <div className=" flex gap-5 justify-center text-[#FF6B0D]  font-semibold">
          <input
            className="hidden"
            onChange={handleFileChange}
            ref={fileRef}
            type="file"
          />
          <button
            onClick={() => fileRef.current.click()}
            className="rounded-[12px] p-4 w-[140px]"
            style={{ border: "1px solid #FF6B0D" }}
          >
            Upload
          </button>
          <a
            href={attachment.src}
            download
            className="rounded-[12px] p-4 w-[140px] text-center"
            style={{ border: "1px solid #FF6B0D" }}
          >
            Download
          </a>
        </div>
      </div>
      <div>
        <div>
          <div className="flex items-center gap-[10px] justify-between mb-4">
            <label className="whitespace-nowrap mb-0 w-32 flex-shrink-0">
              Upload Date:
            </label>
            <input
              type="text"
              className="h-[55px] "
              value="12.30.35 PM 10/10/2023"
            />
          </div>
          <div className="flex items-center gap-[10px] justify-between mb-4">
            <label className="whitespace-nowrap mb-0 w-32 flex-shrink-0">
              Uploaded By:
            </label>
            <input type="text" className="h-[55px]" value="James Smith" />
          </div>
          <div className="flex items-center justify-between gap-[10px] mb-4">
            <label className="whitespace-nowrap mb-0 w-32 flex-shrink-0">
              Attachment Type:
            </label>
            <select className="h-[55px] ">
              <option>Photography</option>
              <option>File</option>
            </select>
          </div>
          <div className="flex items-center gap-[10px] justify-between mb-4">
            <label className="whitespace-nowrap mb-0 w-32 flex-shrink-0">
              Location:
            </label>
            <input
              type="text"
              className="h-[55px] "
              value="NW - Front of house"
            />
          </div>
        </div>
        <div className="border border-[#EEE] p-5 mb-[30px] ">
          <p className="text-[#191E29] font-normal ">
            <span className="text-[#FF6B0D]">Notes:</span> Please see reference
            pictures for locations. Lorem Lorem Lorem Ipsum Lorem Lorem Ipsum
            Lorem Lorem.
          </p>
        </div>

        <div className="flex items-center justify-end gap-[20px]">
          <button
            className="cancel_btn w-[140px]"
            type="button"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="search_btn min-w-[140px]"
            type="button"
            onClick={onSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttachmentAdd;
