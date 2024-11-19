export default function ReplaceString() {
    const array = ["ThTWm", "t36j", "qJKF", "2p0Bn", "IPtB", "UDUr", "cvGH", "rwhl", "bGfd6", "lgLEQ"]
    function replaceString(arr: string[], index: number, str: string) {
        arr[index] = str;
        return arr;
    }
    const replaced = replaceString(array, 5, "fCSs");
  return (
    <div>
      <h3>Replace String</h3>
      <p>Result: {JSON.stringify(replaced)}</p>
    </div>
  );
}
