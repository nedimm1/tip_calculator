export default function Calculate({ myTip1, friendsTip1, bill1, total1 }) {
  return (
    <h2>
      You must pay {Number(bill1) + Number(total1)} ({bill1} + {total1} tip)
    </h2>
  );
}
