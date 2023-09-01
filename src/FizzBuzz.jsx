import React from "react";

const FizzBuzz = (N) => {
  for (let number = 1; number <= N; number++) {
    let output = '';

    if (number % 3 === 0) {
      output += 'Fizz';
    }

    if (number % 5 === 0) {
      output += 'Buzz';
    }

    if (output === '') {
      output = number;
    }

    console.log(output);
  }
};

export default FizzBuzz;

FizzBuzz(30)
