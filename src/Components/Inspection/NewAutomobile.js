import React from "react";
import check from "../../assets/tickCheck.svg";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useAddAutomobileMutation } from "@/features/Inspection/inspectionApi";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

const NewAutomobile = () => {
  const { newInsuredId } = useSelector((state) => state.inspection);

  const [addAutomobile, { isLoading }] = useAddAutomobileMutation();

  const { push } = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const InsurerId = newInsuredId;
    const YearBuilt = form.YearBuilt.value;
    const Manufacturer = form.Manufacturer.value;
    const Model = form.Model.value;
    const Color = form.Color.value;

    const formdData = {
      InsurerId,
      Manufacturer,
      YearBuilt,
      Model,
      Color,
    };

    try {
      const res = await addAutomobile(formdData);
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
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-[60px]">
          <div>
            <label className="fs-6" htmlFor="details">
              <span>*</span> Year Built
            </label>
            <input
              type="number"
              placeholder="1998  "
              name="YearBuilt"
              required
            />
          </div>
          <div>
            <label className="fs-6" htmlFor="year">
              <span>*</span> Manufacturer
            </label>
            <input
              type="text"
              placeholder="German automaker  "
              name="Manufacturer"
              required
            />
          </div>

          <div>
            <label className="fs-6" htmlFor="front">
              <span>*</span> Model:
            </label>
            <input type="text" placeholder="BMW" name="Model" required />
          </div>
          <div>
            <label className="fs-6" htmlFor="front">
              <span>*</span> Color
            </label>
            <input type="text" placeholder="Black" name="Color" required />
          </div>

          <div className="lg:col-span-2 border border-dashed border-[#FF6B0D] p-5 mb-4">
            <p className="font-semibold mb-5">Add ons:</p>
            <div className="flex items-center gap-4 mb-4">
              <Image src={check} height={19} width={19} alt="check" />
              <p className="text-[#191E29] font-normal">Carfax Addon</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-[56px]">
          <div className="flex gap-4 items-center btn_set">
            <button className="cancel_btn fs-6" type="button">
              Cancel
            </button>
            <button className="search_btn fs-6 w-[140px]" type="submit">
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

export default NewAutomobile;
