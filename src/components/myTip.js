export default function MyTip({ myTip1, sMyTip1 }) {
  function handleMyTip(e) {
    sMyTip1(e.target.value);
  }

  return (
    <div>
      <label htmlFor="dropdown">How did you like the service:</label>
      <select
        id="dropdown"
        name="options"
        value={myTip1}
        onChange={handleMyTip}
      >
        <option value=""></option>
        <option value="0">dissatisfied (0%)</option>
        <option value="5">it was ok (5%)</option>
        <option value="10">it was good (10%)</option>
        <option value="20">it was fantastic (20%)</option>
      </select>
    </div>
  );
}
