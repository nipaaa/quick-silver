import React from "react";
import check from "../../assets/tickCheck.svg";
import Image from "next/image";
import { useAddPropertyMutation } from "@/features/Inspection/inspectionApi";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const NewProperty = () => {
  const { newInsuredId } = useSelector((state) => state.inspection);

  const [addProperty, { isLoading }] = useAddPropertyMutation();

  const { push } = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const InsurerId = newInsuredId;
    const PropertyDetails = form.PropertyDetails.value;
    const YearBuilt = form.YearBuilt.value;
    const Occupied = form.Occupied.value;
    const HomeownerPresent = form.HomeownerPresent.value;

    const formdData = {
      InsurerId,
      PropertyDetails,
      YearBuilt,
      Occupied,
      HomeownerPresent,
    };

    try {
      const res = await addProperty(formdData);
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
        push("/dashboard/inspection/search");
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
    <div className="max-w-[509px] w-full">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-[60px] mb-[30px]">
          <div>
            <label className="fs-6" htmlFor="details">
              <span>*</span> Property Details
            </label>
            <input
              type="text"
              name="PropertyDetails"
              id="details"
              placeholder="Dwelling  "
              required
            />
          </div>
          <div>
            <label className="fs-6" htmlFor="year">
              <span>*</span> Year Built
            </label>
            <input
              type="number"
              name="YearBuilt"
              id="year"
              placeholder="Dwelling  "
              required
            />
          </div>
        </div>
        <div className="col-span-2 border border-dashed border-[#FF6B0D] p-5 mb-[30px]">
          <p className="font-semibold mb-5">Add ons:</p>
          <div className="flex items-center gap-4 mb-4">
            <Image src={check} height={19} width={19} alt="check" />
            <p className="text-[#191E29] font-normal">Detailed Roof Adder</p>
          </div>
          <div className="flex items-center gap-4">
            <Image src={check} height={19} width={19} alt="check" />
            <p className="text-[#191E29] font-normal">Outbuilding Adder</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-[60px] mb-[30px]">
          <div>
            <label className="fs-6" htmlFor="occupied">
              <span>*</span> Occupied:
            </label>
            <select name="Occupied">
              <option value={"Yes"}>Yes</option>
              <option value={"No"}>No </option>
            </select>
          </div>
          <div>
            <label className="fs-6" htmlFor="owner">
              <span>*</span> Homeowner Present:
            </label>
            <select name="HomeownerPresent">
              <option value={"Yes"}>Yes</option>
              <option value={"No"}>No </option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 justify-between">
          <div className="flex flex-wrap gap-4 items-center btn_set">
            <button
              className="cancel_btn fs-6"
              button="button"
              onClick={() => push("/dashboard/inspection/search")}
            >
              Cancel
            </button>
            <button className="search_btn fs-6" button="submit">
              Save
            </button>
          </div>
          <button className="search_btn fs-6" type="button">
            Send Assignment
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewProperty;
