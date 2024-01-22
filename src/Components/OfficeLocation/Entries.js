import { officeEntries } from "@/Utils/SidebarElement";

const Entries = () => {
  return (
    <div className="office_entries overflow-x-auto no_scrollbar">
      <table className="fs_14">
        <thead>
          <tr className="text-left whitespace-nowrap">
            <th>Entry Date</th>
            <th>Due Date</th>
            <th>Assigned To</th>
            <th>Insured</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {officeEntries.map((data, index) => (
            <tr key={index}>
              <td className="dot">{data.entryDate}</td>
              <td>{data.dueDate}</td>
              <td>{data.assigned}</td>
              <td>{data.insured} </td>
              <td>{data.address}</td>
              <td className="whitespace-nowrap">{data.phone}</td>
              <td>{data.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="fs_14 table_result">Showing 5 to 5 of 5 entries</p>
    </div>
  );
};

export default Entries;
