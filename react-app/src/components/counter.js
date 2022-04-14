import React, { useState } from "react";

export const Counter = (props) => {

    const [counter, setCounter] = useState(0);
    return (
        <button
        style = {{background: `rgb(100, ${counter}, 255)`}}
            onClick={() => {
                setCounter(counter + 10);
            }}
        >
            {counter}
        </button>
    );
};