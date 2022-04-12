import React, { useState } from "react";

export const Counter = (props) => {

    const [counter, setCounter] = useState(props.defaultValue || 0);
    return (
        <button
            onClick={() => {
                setCounter((currentValue) => {
                    props.onMyChange(currentValue + props.step);
                    return currentValue + props.step;
                });
            }}
        >
            {counter}
        </button>
    );
};