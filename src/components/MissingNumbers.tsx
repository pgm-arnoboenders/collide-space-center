export default function MissingNumbers() {
  const arr = [
    1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584,
    4181,
  ];
  const lastIndex = arr[arr.length - 1];
  const secondLastIndex = arr[arr.length - 2];

  const sum = lastIndex + secondLastIndex;
  return (
    <div>
      <h3>Missing Numbers</h3>
      <p>
        Sum of {arr[arr.length - 1]} and {arr[arr.length - 2]}
      </p>
      <p>Sum of last two indexes is: {sum}</p>
    </div>
  );
}
