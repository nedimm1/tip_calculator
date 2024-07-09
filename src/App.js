import "./App.css";
import { useState } from "react";
import MyTip from "./components/myTip";
import FriendsTip from "./components/friendsTip";
import Bill from "./components/bill";

function App() {
  const [bill, sBill] = useState("");
  const [myTip, sMyTip] = useState("");
  const [friendsTip, setFriendsTip] = useState("");
  const [total, sTotal] = useState("");

  function handleMyTipChange(tip) {
    sMyTip(tip);
  }

  function handleFriendsTipChange(tip) {
    setFriendsTip(tip);
  }

  function calculate() {
    let tip1 = (Number(myTip) / 100) * Number(bill);
    let tip2 = (Number(friendsTip) / 100) * Number(bill);

    let totalTip = tip1 + tip2;
    let average = totalTip / 2;

    sTotal(average.toFixed());
  }

  function reset() {
    sBill("");
    sMyTip("");
    setFriendsTip("");
    sTotal("");
  }

  return (
    <div>
      <Bill bill1={bill} sBill1={sBill}></Bill>
      <MyTip myTip1={myTip} sMyTip1={handleMyTipChange}></MyTip>
      <FriendsTip
        FriendsTip1={friendsTip}
        sFriendsTip1={handleFriendsTipChange}
      ></FriendsTip>

      <button onClick={calculate}>calculate</button>
      <h2>
        you must pay {Number(bill) + total}({bill} + {total} tip)
      </h2>

      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
