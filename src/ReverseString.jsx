import React from "react";


const ReverseString = () => {
    let OriginalString = 'programming';
    let ReversedString = OriginalString.split('').reverse().join('');


    return(
        <div>
            <p>this is the original string: {OriginalString}</p>
            <p>this is the reversed string: {ReversedString}</p>
        </div>
    )
}

export default ReverseString;