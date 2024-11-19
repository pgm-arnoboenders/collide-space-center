export default function ReverseString() {
  function reverseString(str: string) {
    return str.split("").reverse().join("");
  }
  const reversed = reverseString(
    "iEgCs4tIs3CDx1IsljrelJDaore0l2vphhrg7pDiYk4BiyPnxPoiv9fmVKs0gh8maUQSXy1qC9ud9rIpzpeBsaA5uZFqb0KBysdyX9l0IQOeXhFJo"
  );
  return (
    <div>
      <h3>Reverse String</h3>
      <p>Result: {reversed}</p>
    </div>
  );
}
