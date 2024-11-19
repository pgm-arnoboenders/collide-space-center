export default function StringToHex() {
  function d2h(d: number) {
    return d.toString(16);
  }
  function stringToHex(tmp: string) {
    var str = "",
      i = 0,
      tmp_len = tmp.length,
      c;

    for (; i < tmp_len; i += 1) {
      c = tmp.charCodeAt(i);
      str += d2h(c) + " ";
    }
    return str;
  }
  const hex = stringToHex("DTILlfTsqOWfUldiv9UR");
  return (
    <div>
      <h3>String to Hex</h3>
      <p>Result: {hex}</p>
    </div>
  );
}
