import React from "react";
import "./calrow.css";
const CalRow = () => {
  return (
    <div className="calrow">
      <div className="cal">
        <div>
          <h1>00%</h1>
          <p>Conversion Fee</p>
        </div>
        <div>
          <h1>500 Mn+</h1>
          <p>Lifetime Volume Traded</p>
        </div>
        <div>
          <h1>250+</h1> <p>Total Tradable Pairs</p>
        </div>
        <div>
          <h1>15,000+</h1> <p>Traders</p>
        </div>
      </div>
    </div>
  );
};

export default CalRow;
