import React, { useEffect, useState } from 'react'


/**
 * The input below is going to be the ui for a search input that queries the database
 * 
 * Step 1 - Create a custom hook
 * Create a useDebounce() hook that allows you to debounce the input value. 
 * The implementation should look something like
 * const debouncedValue = useDebounce(value, 100); where the number is the delay in milliseconds.
 */


export const Question2 = () => {
    const [text, setText] = useState("");

    return (
        <div>
            <h2>Debounce Hook Tester</h2>
            <input 
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='Type something here...'
                style={{marginRight: "10px"}}
            />
            <p>Debounced Value: </p>
        </div>
    ) 
}

export default Question2