import React from "react";

const Search = () => {
  return (
    <div className="search_form">
      <form>
        <div className="md:grid md:grid-cols-12 md:gap-5 flex flex-wrap items-center gap-4 mb-4">
          <div className="md:col-span-4 w-full">
            <label htmlFor="name">Enter the insured’s name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Type here..."
            />
          </div>
          <div className="md:col-span-4 w-full">
            <label htmlFor="assign">Assigned to</label>
            <select id="assign">
              <option selected disabled>
                Assigned to
              </option>
              <option value="">A</option>
              <option value="">B</option>
            </select>
          </div>
          <div className="md:col-span-4 w-full">
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
