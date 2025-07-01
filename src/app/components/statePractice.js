import { React, useState } from 'react';


const [number, setNumber] = useState(30);
const handleClick = () => {
    setNumber(40);
}
function statePractice() {
    return (
        <div className='practice'>
            <h1>Number generator</h1>
            <p>Testing out stateManagement in react.</p>
            <p>{number}</p>
            <button onClick={handleClick}>Generate a number</button>
        </div>
    );
}

export default statePractice;