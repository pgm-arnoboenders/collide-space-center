export default function PrimeNumber() {
  const start = 23175;
  const end = 23275;
  function isPrime(num: number) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  const primes: number[] = [];

  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return (
    <div>
      <h3>Prime Numbers</h3>
      <p>
        Prime numbers between {start} and {end} are:
      </p>

      <p>
        {primes.map((prime) => (
          <span key={prime}>{prime}, </span>
        ))}
      </p>
    </div>
  );
}
