import React from "react";

const Overview = () => {
  return (
    <div className="mt-4">
      <div className="flex justify-between items-center">
        <h2 className="font-medium">Overview</h2>
        <div className="bg-white border border-[#D9D9D] px-2 py-1">
          <select name="date" id="date" className="text-sm">
            <option value="1">Last Month</option>
            <option value="2">Last week</option>
            <option value="3">Last 24h</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 text-left mt-4">
        <div className="bg-white rounded-lg p-5 shadow-sm">
          <p className="text-[#4D4D4D]">Online orders</p>
          <p className="text-3xl font-medium">231</p>
        </div>
        <div className="bg-white rounded-lg p-5 shadow-sm">
          <p className="text-[#4D4D4D]">Amount Received</p>
          <p className="text-3xl font-medium">₹23,92,312.19</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
