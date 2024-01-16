import inspection from "../../assets/inspection-org.png";
import insured from "../../assets/insured-active.png";
import assign from "../../assets/assign.png";

const InspectionHeader = () => {
  const options = [
    {
      pic: inspection,
      title: "Inspection",
    },
    {
      pic: insured,
      title: "Insured: James Smith",
    },
    {
      pic: assign,
      title: "Assigned To: Jake Mangrove",
    },
  ];
  return (
    <div className="inspection_header">
      {options.map((data, index) => (
        <div className="flex items-center gap-2" key={index}>
          <img src={data.pic.src} alt="" />
          <p>{data.title}</p>
        </div>
      ))}
    </div>
  );
};

export default InspectionHeader;
