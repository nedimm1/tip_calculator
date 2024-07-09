export default function FriendsTip({ FriendsTip1, sFriendsTip1 }) {
  function handleFriendsTip(e) {
    sFriendsTip1(e.target.value);
  }

  return (
    <div>
      <label htmlFor="dropdown">How did your friends like the service:</label>
      <select
        id="dropdown"
        name="options"
        value={FriendsTip1}
        onChange={handleFriendsTip}
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
