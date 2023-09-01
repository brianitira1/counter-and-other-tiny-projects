import React from "react";

const nums = [2, 4, 7, 9];
const target = 16;

const TargetSum = () => {
  const pairs = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        pairs.push(`${nums[i]}, ${nums[j]}`);
      }
    }
  }

  return (
    <div>
      {pairs.map((pair, index) => (
        <p key={index}>{pair}</p>
      ))}
    </div>
  );
};

export default TargetSum;



