export default function Disarium() {
  const isDisarium = (num: number) => {
    const res = String(num)
      .split("")
        .reduce((total, value, index) => {
        total += Math.pow(+value, index + 1);
        return total;
      }, 0);
    return res === num;
  };

  const disarium = isDisarium(4);
  return (
    <div>
      <h3>Disarium</h3>
      <p>Result: {disarium ? "True" : "False"}</p>
    </div>
  );
}