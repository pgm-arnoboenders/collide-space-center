export default function Hashmap() {
  function getValueFromMap(map: { [key: string]: any }, key: number) {
    return map[key];
  }

  const sampleMap = {
    1: "pFoNB",
    2: "9mFz",
    3: "mbyg7",
    4: "REFJ",
    5: "n23V",
  };

  const value = getValueFromMap(sampleMap, 3);
  return (
    <div>
      <h3>Hashmap</h3>
      <p>Result: {value}</p>
    </div>
  );
}
