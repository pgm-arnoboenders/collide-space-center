import React from "react";

interface FindNthPerfectNumberProps {
  nthElement: number;
}

// Check if a number is prime
const isPrime = (num: number): boolean => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// Find the nth perfect number using Mersenne primes
const findNthPerfectNumber = (nthElement: number): number => {
  if (nthElement <= 0) {
    throw new Error("nthElement must be a positive integer.");
  }

  let count = 0;
  let exponent = 2;

  while (true) {
    const mersenne = Math.pow(2, exponent) - 1;
    if (isPrime(mersenne)) {
      count++;
      if (count === nthElement) {
        return Math.pow(2, exponent - 1) * mersenne;
      }
    }
    exponent++;
  }
};

const FindNthPerfectNumber: React.FC<FindNthPerfectNumberProps> = ({
  nthElement,
}) => {
  let perfectNumber;
  try {
    perfectNumber = findNthPerfectNumber(nthElement);
  } catch (error: any) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h3>Perfect Number</h3>
      <p>
        The {nthElement} perfect number is: {perfectNumber}
      </p>
    </div>
  );
};

export default FindNthPerfectNumber;
