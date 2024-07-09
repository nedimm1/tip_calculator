import React from "react";

export default function Bill({ bill1, sBill1 }) {
  function handleBill(e) {
    sBill1(e.target.value);
  }

  return (
    <div>
      <p>How much was the bill:</p>
      <input value={bill1} onChange={handleBill}></input>
    </div>
  );
}
