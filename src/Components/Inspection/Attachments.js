import React from "react";

const Attachments = () => {
  const details = [
    {
      attachmentType: "Photograph",
      location: "Front of House",
    },
    {
      attachmentType: "Photograph",
      location: "Back of House",
    },
    {
      attachmentType: "Outbuildings",
      note: "1 thought 6 and 7 through 12",
      location: "1-6 & 12",
    },
    {
      attachmentType: "Outbuildings",
      note: "1 thought 6 and 7 through 12",
      location: "1-6 Detail",
    },
  ];
  return (
    <div>
      <table className="fs_14">
        <thead>
          <tr>
            <th> </th>
            <th className="text-left">Attachment Type </th>
            <th className="text-left">Description / Notes </th>
            <th className="text-left">Location </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {details.map((data, index) => (
            <tr key={index}>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                >
                  <path
                    d="M1.58301 4.74992C1.58301 4.53996 1.66642 4.33859 1.81488 4.19013C1.96335 4.04166 2.16471 3.95825 2.37467 3.95825H16.6247C16.8346 3.95825 17.036 4.04166 17.1845 4.19013C17.3329 4.33859 17.4163 4.53996 17.4163 4.74992C17.4163 4.95988 17.3329 5.16124 17.1845 5.30971C17.036 5.45818 16.8346 5.54159 16.6247 5.54159H2.37467C2.16471 5.54159 1.96335 5.45818 1.81488 5.30971C1.66642 5.16124 1.58301 4.95988 1.58301 4.74992ZM1.58301 9.52525C1.58301 9.31529 1.66642 9.11392 1.81488 8.96546C1.96335 8.81699 2.16471 8.73358 2.37467 8.73358H16.6247C16.8346 8.73358 17.036 8.81699 17.1845 8.96546C17.3329 9.11392 17.4163 9.31529 17.4163 9.52525C17.4163 9.73521 17.3329 9.93658 17.1845 10.085C17.036 10.2335 16.8346 10.3169 16.6247 10.3169H2.37467C2.16471 10.3169 1.96335 10.2335 1.81488 10.085C1.66642 9.93658 1.58301 9.73521 1.58301 9.52525ZM2.37467 13.5089C2.16471 13.5089 1.96335 13.5923 1.81488 13.7408C1.66642 13.8893 1.58301 14.0906 1.58301 14.3006C1.58301 14.5105 1.66642 14.7119 1.81488 14.8604C1.96335 15.0088 2.16471 15.0923 2.37467 15.0923H16.6247C16.8346 15.0923 17.036 15.0088 17.1845 14.8604C17.3329 14.7119 17.4163 14.5105 17.4163 14.3006C17.4163 14.0906 17.3329 13.8893 17.1845 13.7408C17.036 13.5923 16.8346 13.5089 16.6247 13.5089H2.37467Z"
                    fill="#1E4C5A"
                  />
                </svg>
              </td>
              <td style={{ color: "#FF6B0D" }}>{data.attachmentType}</td>
              <td>{data.note ? data.note : "-"}</td>
              <td>{data.location}</td>
              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <path
                    d="M4.95801 14.875C4.56842 14.875 4.2348 14.7362 3.95713 14.4585C3.67947 14.1808 3.54087 13.8474 3.54134 13.4583V4.25H2.83301V2.83333H6.37467V2.125H10.6247V2.83333H14.1663V4.25H13.458V13.4583C13.458 13.8479 13.3192 14.1815 13.0415 14.4592C12.7638 14.7369 12.4305 14.8755 12.0413 14.875H4.95801ZM12.0413 4.25H4.95801V13.4583H12.0413V4.25ZM6.37467 12.0417H7.79134V5.66667H6.37467V12.0417ZM9.20801 12.0417H10.6247V5.66667H9.20801V12.0417Z"
                    fill="#FF8B48"
                  />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="bg-white mb-[30px] px-[22px] py-[31px] flex gap-3 justify-between items-center">
        <p className="text-[#191E29] text-sm font-normal">
          Showing 5 to 5 of 5 entries
        </p>
        <button className="search_btn">Add New</button>
      </div>
    </div>
  );
};

export default Attachments;
