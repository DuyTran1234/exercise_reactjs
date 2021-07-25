import React from 'react';

function ChildCounter(props) {
    return <div>
        <h1>{props.dataParent}</h1>
        </div>;
}

export default ChildCounter;