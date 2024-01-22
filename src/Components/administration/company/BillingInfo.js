import React, { useState } from "react";
import creditCard from "@/assets/creditCard.png";
import check from "@/assets/tickCheck.svg";
import unCheck from "@/assets/unTickCheck.svg";

const BillingInfo = ({ setActivePage }) => {
  const [checkedItems, setCheckItems] = useState([]);

  const handleCheck = (item) => {
    if (checkedItems.includes(item)) {
      const newItems = checkedItems.filter((i) => i !== item);
      setCheckItems(newItems);
    } else {
      setCheckItems((current) => [...current, item]);
    }
  };
  return (
    <div>
      <h4 className="font-[600] text-[#191E29] mb-[30px] px-[26px] pt-[26px]">
        Current Credits: 1,245
      </h4>
      <div className="bg-[#fafdff] px-[26px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-x-[80px] lg:gap-y-[16px]">
          <div>
            <label className="inputLabel">
              <span>*</span> Billing Name:
            </label>
            <input
              type=""
              name=""
              defaultValue="Quick Silver System. Inc"
              className="inputField"
            />
          </div>
          <div className=""></div>
          <div className="row-span-2"></div>
          <div>
            <label className="inputLabel">
              <span>*</span> Address 1:
            </label>
            <input
              type=""
              name=""
              defaultValue="2374 Highway K"
              className="inputField"
            />
          </div>
          <div>
            <label className="inputLabel">Address 2:</label>
            <input
              type=""
              name=""
              defaultValue="2374 Highway K"
              className="inputField"
            />
          </div>
          <div>
            <label className="inputLabel">
              <span>*</span> City:
            </label>
            <input
              type=""
              name=""
              defaultValue="Hermann"
              className="inputField"
            />
          </div>
          <div>
            <label className="inputLabel">
              <span>*</span> State:
            </label>
            <input
              type=""
              name=""
              defaultValue="MO-Missouri"
              className="inputField"
            />
          </div>
          <div>
            <label className="inputLabel">
              <span>*</span> Zip code:
            </label>
            <input
              type=""
              name=""
              defaultValue="65041"
              className="inputField"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <label className="inputLabel">
                <span>*</span> Card Number:
              </label>
              <input
                type=""
                name=""
                defaultValue="1234-1234-1294-1984"
                className="inputField"
              />
            </div>
            <div className="flex justify-between ">
              <div>
                <label className="inputLabel">
                  <span>*</span> Expiration Date (MM/YY):
                </label>
                <input
                  type=""
                  name=""
                  defaultValue="11/23"
                  className="inputField w-[85px]"
                />
              </div>
              <div>
                <label className="inputLabel">
                  <span>*</span> CVV:
                </label>
                <input
                  type=""
                  name=""
                  defaultValue="123"
                  className="inputField w-[85px]"
                />
              </div>
            </div>
          </div>
          <div>
            <img src={creditCard.src} alt="" className="mt-[19px]" />
          </div>
          <div className="row-span-2"></div>
        </div>

        <div className="mt-[25px] mb-[20px]">
          <label className="inputLabel">
            <span>*</span> Auto Refill:
          </label>

          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-[36px] h-[20px] bg-gray-200 peer-focus:outline-none    rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-[#FF6B0D] after:border-gray-300  after:rounded-full after:h-[16px] after:w-[16px] after:transition-all  peer-checked:bg-[#e0e7ee]"></div>
          </label>
        </div>
        <div>
          <label className="inputLabel">
            <span>*</span> Attempt Refill when Credits are at or below:
          </label>
          <input
            type=""
            name=""
            defaultValue="123"
            className="inputField w-[85px]"
          />
        </div>
        <div className="mt-[20px]">
          <label className="inputLabel">
            <span>*</span> Number of Credits to Purchase:
          </label>

          <div className="flex flex-col gap-[15px]">
            <div
              className="flex items-center gap-[10px]"
              onClick={() => handleCheck(1)}
            >
              {checkedItems.includes(1) ? (
                <img src={check.src} alt="" className="cursor-pointer" />
              ) : (
                <img src={unCheck.src} alt="" className="cursor-pointer" />
              )}
              <label className="inputLabel m-0">10 Credits - $4.00 each</label>
            </div>
            <div
              className="flex items-center gap-[10px]"
              onClick={() => handleCheck(2)}
            >
              {checkedItems.includes(2) ? (
                <img src={check.src} alt="" className="cursor-pointer" />
              ) : (
                <img src={unCheck.src} alt="" className="cursor-pointer" />
              )}
              <label className="inputLabel m-0">25 Credits - $3.30 each</label>
            </div>
            <div
              className="flex items-center gap-[10px]"
              onClick={() => handleCheck(3)}
            >
              {checkedItems.includes(3) ? (
                <img src={check.src} alt="" className="cursor-pointer" />
              ) : (
                <img src={unCheck.src} alt="" className="cursor-pointer" />
              )}
              <label className="inputLabel m-0">50 Credits - $2.50 each</label>
            </div>
            <div
              className="flex items-center gap-[10px]"
              onClick={() => handleCheck(4)}
            >
              {checkedItems.includes(4) ? (
                <img src={check.src} alt="" className="cursor-pointer" />
              ) : (
                <img src={unCheck.src} alt="" className="cursor-pointer" />
              )}
              <label className="inputLabel m-0">100 Credits - $2.00 each</label>
            </div>
          </div>

          <div className="mt-[24px]">
            <label className="inputLabel ">Subtotal: $200.00</label>
            <label className="inputLabel ">FL State Tax: $12.00</label>
            <label className="inputLabel ">Total Purchase: $212.00</label>
          </div>
        </div>
        <div className="flex gap-[41px] items-center mt-[40px] pb-[40px]">
          <button className="cancel_btn " onClick={() => setActivePage("main")}>
            Cancel
          </button>
          <button className="search_btn">Purchase Credits</button>
          <button className="search_btn" onClick={() => setActivePage("main")}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillingInfo;
