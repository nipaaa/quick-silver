import React from "react";

const Property = () => {
  return (
    <div>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[60px]">
          <div>
            <label className="fs-6" htmlFor="details">
              <span>*</span> Property Details
            </label>
            <input
              type="text"
              name="details"
              id="details"
              placeholder="Dwelling  "
            />
          </div>
          <div>
            <label className="fs-6" htmlFor="year">
              <span>*</span> Year Built
            </label>
            <input
              type="number"
              name="year"
              id="year"
              placeholder="Dwelling  "
            />
          </div>
          <div className="col-span-2 border border-dashed border-[#FF6B0D]">
            <p className="font-semibold mb-5">Add ons:</p>
          </div>
          <div>
            <label className="fs-6" htmlFor="front">
              <span>*</span> Dwelling Front
            </label>
            <input
              type="text"
              name="front"
              id="front"
              placeholder="SE-Southeast"
            />
          </div>
          <div></div>
          <div>
            <label className="fs-6" htmlFor="occupied">
              Occupied:
            </label>
            <select>
              <option>Yes</option>
              <option>No </option>
            </select>
          </div>

          <div>
            <label className="fs-6" htmlFor="owner">
              Homeowner Present:
            </label>
            <select>
              <option>Yes</option>
              <option>No </option>
            </select>
          </div>

          <div>
            <label className="fs-6" htmlFor="siding">
              Siding Material:
            </label>
            <input
              type="text"
              name="siding"
              id="siding"
              placeholder="Hardboard/Similar"
            />
          </div>
          <div>
            <label className="fs-6" htmlFor="stories:">
              Stories:
            </label>
            <select>
              <option>15</option>
              <option>20</option>
            </select>
          </div>
          <div>
            <label className="fs-6" htmlFor="sq">
              SQ Feet:
            </label>
            <input type="number" name="sq" id="sq" placeholder="1.392" />
          </div>
          <div>
            <label className="fs-6" htmlFor="measure">
              Measured W/:
            </label>
            <select>
              <option>Zillow.com </option>
              <option>Zillow.com </option>
            </select>
          </div>

          <div>
            <label className="fs-6" htmlFor="roof">
              Roof Material:
            </label>
            <input type="text" name="roof" id="roof" placeholder="Metal" />
          </div>
          <div>
            <label className="fs-6" htmlFor="layer">
              Roof Layers:
            </label>
            <input type="number" name="layer" id="layer" placeholder="1" />
          </div>
        </div>

        <div className="flex gap-4 items-center btn_set">
          <button className="cancel_btn fs-6">Cancel</button>
          <button className="search_btn fs-6">Search</button>
        </div>
      </form>
    </div>
  );
};

export default Property;
