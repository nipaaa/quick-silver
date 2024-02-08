import { useAddInsuredMutation } from "@/features/Inspection/inspectionApi";
import { setNewInsuredId } from "@/features/Inspection/inspectionSlice";
import { useGetFieldAdjusterQuery } from "@/features/auth/authApi";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

const NewInsured = ({ setActiveTab }) => {
  const { user } = useSelector((state) => state.auth);
  const { type } = useSelector((state) => state.inspection);

  const dispatch = useDispatch();

  const { data } = useGetFieldAdjusterQuery(user?.companyId);
  const [addInsured, { isLoading }] = useAddInsuredMutation();

  const today = new Date();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const companyId = user?.companyId;
    const Date = form.Date.value;
    const PolicyHolder = form.PolicyHolder.value;
    const PolicyNumber = form.PolicyNumber.value;
    const InspectionType = form.InspectionType.value;
    const AssignedTo = form.AssignedTo.value;
    const Insured = form.Insured.value;
    const Email = form.Email.value;
    const CellPhone = form.CellPhone.value;
    const Address01 = form.Address01.value;
    const Address02 = form.Address02.value;
    const City = form.City.value;
    const State = form.State.value;
    const ZipCode = form.ZipCode.value;
    const Type = type;

    const formdData = {
      companyId,
      Date,
      PolicyHolder,
      PolicyNumber,
      InspectionType,
      AssignedTo,
      Insured,
      Email,
      CellPhone,
      Address01,
      Address02,
      City,
      State,
      ZipCode,
      Type,
    };

    try {
      const res = await addInsured(formdData);
      if (res?.error?.error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${res?.error?.error}`,
        });
      }
      if (res?.error?.data?.message) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${res?.error?.data?.message}`,
        });
      }
      if (res?.data?.success) {
        dispatch(setNewInsuredId(res?.data?.data?.id));
        setActiveTab(type);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error?.message}`,
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-[60px] items-end">
          <div>
            <label className="fs-6" htmlFor="date">
              <span>*</span> Due Date:
            </label>
            <input
              type="date"
              name="Date"
              id="date"
              value={today.toISOString().split("T")[0]}
              placeholder="Enter your email address"
              required
            />
          </div>
          <div>
            <label className="fs-6" htmlFor="date">
              <span>*</span> Policy Holder:
            </label>
            <select required name="PolicyHolder">
              <option value={"Bent Oak"}>Bent Oak</option>
              <option value={"Oak Mutual"}>Oak Mutual</option>
            </select>
          </div>
          <div>
            <label className="fs-6" htmlFor="policyNo">
              <span>*</span> Policy Number:
            </label>
            <input
              type="text"
              name="PolicyNumber"
              id="policyNo"
              placeholder="HO-41321"
              required
            />
          </div>
          <div>
            <label className="fs-6" htmlFor="Inspection">
              <span>*</span> Inspection Type:
            </label>
            <select name="InspectionType" required>
              <option value={"Dwelling"}>Dwelling</option>
              <option value={"Dwelling"}>Dwelling</option>
            </select>
          </div>
          <div>
            <label className="fs-6" htmlFor="assigned">
              Assigned To:
            </label>
            <select required name="AssignedTo">
              <option>Jake Mangrove</option>
              <option>Jake Mangrove</option>
            </select>
          </div>

          <div></div>
          <div></div>
          <div></div>
          <div>
            <label className="fs-6" htmlFor="insured">
              <span>*</span> Insured:
            </label>
            <input
              type="text"
              name="Insured"
              id="insured"
              placeholder="James Smith"
              required
            />
          </div>
          <div>
            <label className="fs-6" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              name="Email"
              id="email"
              placeholder="jsmith@gmail.com"
            />
          </div>
          <div>
            <label className="fs-6" htmlFor="cell">
              Cell Phone:
            </label>
            <input
              type="tel"
              name="CellPhone"
              id="cell"
              placeholder="(941) 807-2258"
              required
            />
          </div>
          <div></div>
          <div>
            <label className="fs-6" htmlFor="address1">
              <span>*</span> Address 01:
            </label>
            <input
              type="text"
              name="Address01"
              id="address1"
              placeholder="2374 Highway K"
              required
            />
          </div>
          <div>
            <label className="fs-6" htmlFor="address2">
              Address 02:
            </label>
            <input
              type="text"
              name="Address02"
              id="address2"
              placeholder=""
              required
            />
          </div>
          <div></div>
          <div></div>
          <div>
            <label className="fs-6" htmlFor="city">
              <span>*</span> City:
            </label>
            <input
              type="text"
              name="City"
              id="city"
              placeholder="Hermann"
              required
            />
          </div>
          <div>
            <label className="fs-6" htmlFor="state">
              <span>*</span> State:
            </label>
            <select required name="State">
              <option>MO-Missouri </option>
              <option>MO-Missouri </option>
            </select>
          </div>
          <div>
            <label className="fs-6" htmlFor="zip">
              <span>*</span> Zip code:
            </label>
            <input
              type="number"
              name="ZipCode"
              id="zip"
              placeholder="zip"
              required
            />
          </div>
        </div>

        <div className="flex gap-4 items-center btn_set">
          <button className="cancel_btn " type="button">
            Cancel
          </button>
          <button className="search_btn" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewInsured;
