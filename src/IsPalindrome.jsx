import React from 'react';

let palindrome = 'omo';

const IsPalindrome = () => {
  let isPalindrome = true;

  for (let i = 0; i < palindrome.length / 2; i++) {
    if (palindrome[i] !== palindrome[palindrome.length - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }

  if (isPalindrome) {
    console.log('It is a palindrome');
  } else {
    console.log('It is not a palindrome');
  }
};

export default IsPalindrome;
