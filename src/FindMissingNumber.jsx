import React from 'react'


const FindMissingNumber = ({numbers}) => {

    const n = numbers.length
    const expectedSum = (n * (n + 1)) / 2
    const actualSum = numbers.reduce((acc, num) => acc + num, 0)

    const missingNumber = expectedSum - actualSum

    return <div>{missingNumber}</div>

}

export default FindMissingNumber