import React from "react";

const Insured = () => {
  return (
    <div>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div>
            <label className="fs-6" htmlFor="date">
              Date:
            </label>
            <input
              type="date"
              name="date"
              id="date"
              placeholder="Enter your email address"
            />
          </div>
          <div>
            <label className="fs-6" htmlFor="date">
              Policy Holder:
            </label>
            <select>
              <option>Bent Oak Mutual</option>
              <option>Bent Oak Mutual</option>
            </select>
          </div>
          <div>
            <label className="fs-6" htmlFor="policyNo">
              Policy Number:
            </label>
            <input
              type="text"
              name="policyNo"
              id="policyNo"
              placeholder="HO-41321"
            />
          </div>
          <div>
            <label className="fs-6" htmlFor="Inspection">
              Inspection Type:
            </label>
            <select>
              <option>Dwelling</option>
              <option>Dwelling</option>
            </select>
          </div>
          <div>
            <label className="fs-6" htmlFor="assigned">
              Assigned To:
            </label>
            <select>
              <option>Jake Mangrove</option>
              <option>Jake Mangrove</option>
            </select>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div>
            <label className="fs-6" htmlFor="insured">
              Insured:
            </label>
            <input
              type="text"
              name="insured"
              id="insured"
              placeholder="James Smith"
            />
          </div>
          <div>
            <label className="fs-6" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              name="email"
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
              name="cell"
              id="cell"
              placeholder="(941) 807-2258"
            />
          </div>
          <div></div>
          <div>
            <label className="fs-6" htmlFor="address1">
              Address 01:
            </label>
            <input
              type="text"
              name="address1"
              id="address1"
              placeholder="2374 Highway K"
            />
          </div>
          <div>
            <label className="fs-6" htmlFor="address2">
              Address 02:
            </label>
            <input type="text" name="address2" id="address2" placeholder="" />
          </div>
          <div></div>
          <div></div>
          <div>
            <label className="fs-6" htmlFor="city">
              City:
            </label>
            <input type="text" name="city" id="city" placeholder="Hermann" />
          </div>
          <div>
            <label className="fs-6" htmlFor="state">
              State:
            </label>
            <select>
              <option>MO-Missouri </option>
              <option>MO-Missouri </option>
            </select>
          </div>
          <div>
            <label className="fs-6" htmlFor="zip">
              Zip code:
            </label>
            <input type="number" name="zip" id="zip" placeholder="zip" />
          </div>
        </div>

        <div className="flex gap-4 items-center btn_set">
          <button className="cancel_btn ">Cancel</button>
          <button className="search_btn">Search</button>
        </div>
      </form>
    </div>
  );
};

export default Insured;
