'use client';
import { React, useState } from 'react';

function StatePractice() {

    const [numbers] = useState([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
    const [selectedNumber, setSelectedNumber] = useState(30);
    const pickRandomNumber = () => {
        const randomIndex = Math.floor(Math.random() * numbers.length);
        setSelectedNumber(numbers[randomIndex]);
    };

    return (
        <div className='practice'>
            <h1>Number generator</h1>
            <p>Testing out stateManagement in react.</p>
            <p>Current number: {selectedNumber}</p>
            <button onClick={pickRandomNumber}>Generate a number</button>
        </div>
    );
}

export default StatePractice;