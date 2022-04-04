import React, {useState} from 'react';

export const Task4 = () => {
    let [count, setCount] = useState(1)

    const increment = () => {
        setCount(++count)
    }
    const decrement = () => {
        setCount(0)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>0</button>
        </div>
    );
};

