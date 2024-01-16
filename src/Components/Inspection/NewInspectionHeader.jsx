import inspection from "../../../assets/inspection-org.png";
import insured from "../../../assets/insured.png";
import assign from "../../../assets/assign.png";
import './Inspection.css'

const NewInspectionHeader = () => {
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
        <div className="d-flex align-items-center gap-2" key={index}>
          <img src={data.pic} alt="" />
          <p>{data.title}</p>
        </div>
      ))}
    </div>
  );
};

export default NewInspectionHeader;
