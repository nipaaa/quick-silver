import React from "react";
import "./Inspection.css";

const Property = () => {
  return (
    <div>
      <form>
        <div className="row g-5">
          <div className="col-md-6 col-lg-3">
            <label className="fs-6" htmlFor="details">
              Property Details
            </label>
            <input
              type="text"
              name="details"
              id="details"
              placeholder="Dwelling  "
            />
          </div>
          <div className="col-md-6 col-lg-3">
            <label className="fs-6" htmlFor="year">
              Year Built
            </label>
            <input
              type="number"
              name="year"
              id="year"
              placeholder="Dwelling  "
            />
          </div>
          <div className="col-md-6 col-lg-3">
            <label className="fs-6" htmlFor="front">
              Dwelling Front
            </label>
            <input
              type="text"
              name="front"
              id="front"
              placeholder="SE-Southeast"
            />
          </div>
          <div className="col-md-6 col-lg-3"></div>
          <div className="col-md-6 col-lg-3">
            <label className="fs-6" htmlFor="occupied">
              Occupied:
            </label>
            <select>
              <option>Yes</option>
              <option>No </option>
            </select>
          </div>

          <div className="col-md-6 col-lg-3">
            <label className="fs-6" htmlFor="owner">
              Homeowner Present:
            </label>
            <select>
              <option>Yes</option>
              <option>No </option>
            </select>
          </div>

          <div className="col-md-6 col-lg-3">
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
          <div className="col-md-6 col-lg-3">
            <label className="fs-6" htmlFor="stories:">
              Stories:
            </label>
            <select>
              <option>15</option>
              <option>20</option>
            </select>
          </div>
          <div className="col-md-6 col-lg-3">
            <label className="fs-6" htmlFor="sq">
              SQ Feet:
            </label>
            <input type="number" name="sq" id="sq" placeholder="1.392" />
          </div>
          <div className="col-md-6 col-lg-3">
            <label className="fs-6" htmlFor="measure">
              Measured W/:
            </label>
            <select>
              <option>Zillow.com </option>
              <option>Zillow.com </option>
            </select>
          </div>

          <div className="col-md-6 col-lg-3">
            <label className="fs-6" htmlFor="roof">
              Roof Material:
            </label>
            <input type="text" name="roof" id="roof" placeholder="Metal" />
          </div>
          <div className="col-md-6 col-lg-3">
            <label className="fs-6" htmlFor="layer">
              Roof Layers:
            </label>
            <input type="number" name="layer" id="layer" placeholder="1" />
          </div>
        </div>

        <div className="d-flex gap-4 align-items-center btn_set">
          <button className="cancel_btn fs-6">Cancel</button>
          <button className="search_btn fs-6">Search</button>
        </div>
      </form>
    </div>
  );
};

export default Property;
