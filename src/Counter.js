import React, { useState } from 'react';
import ChildCounter from './ChildCounter';

function Counter() {
    const[count, setCount] = useState(0);
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <ChildCounter dataParent={count} />
        </div>
    );
}

export default Counter; 