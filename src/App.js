import "./App.css";
import { useState } from "react";
import MyTip from "./components/myTip";
import FriendsTip from "./components/friendsTip";
import Bill from "./components/bill";
import Calculate from "./components/calculate";

function App() {
  const [bill, sBill] = useState("");
  const [myTip, sMyTip] = useState("");
  const [friendsTip, setFriendsTip] = useState("");
  const [total, sTotal] = useState(null);

  function handleMyTipChange(tip) {
    sMyTip(tip);
  }

  function handleFriendsTipChange(tip) {
    setFriendsTip(tip);
  }

  function calculateTotal() {
    const tip1 = (Number(myTip) / 100) * Number(bill);
    const tip2 = (Number(friendsTip) / 100) * Number(bill);
    const totalTip = tip1 + tip2;
    const average = totalTip / 2;
    sTotal(average.toFixed());
  }

  function reset() {
    sBill("");
    sMyTip("");
    setFriendsTip("");
    sTotal(null);
  }

  return (
    <div>
      <Bill bill1={bill} sBill1={sBill}></Bill>
      <MyTip myTip1={myTip} sMyTip1={handleMyTipChange}></MyTip>
      <FriendsTip
        FriendsTip1={friendsTip}
        sFriendsTip1={handleFriendsTipChange}
      ></FriendsTip>

      <button onClick={calculateTotal}>Calculate</button>
      <button onClick={reset}>Reset</button>

      {total !== null && (
        <Calculate
          myTip1={myTip}
          friendsTip1={friendsTip}
          bill1={bill}
          total1={total}
        />
      )}
    </div>
  );
}

export default App;
