import React from "react";

const Search = () => {
  return (
    <div className="search_form">
      <form>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-full">
            <label htmlFor="name">Enter the insured’s name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Type here..."
            />
          </div>
          <div className="w-full">
            <label htmlFor="assign">Assigned to</label>
            <select id="assign">
              <option selected disabled>
                Assigned to
              </option>
              <option value="">A</option>
              <option value="">B</option>
            </select>
          </div>
          <div className="w-full">
            <label htmlFor="status">Status</label>
            <select id="assign">
              <option selected disabled>
                Status
              </option>
              <option value="">Status A</option>
              <option value="">Status B</option>
            </select>
          </div>
        </div>
        <button>Search</button>
      </form>
    </div>
  );
};

export default Search;
