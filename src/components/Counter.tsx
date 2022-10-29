import React, {useState} from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
    const [value, setValue] = useState(0)
    return (
        <div className={classes.btn}>
            <h1>{value}</h1>
            <button onClick={() => setValue(value+1)}>increment</button>
        </div>
    );
};

