import React, { useState } from 'react';
import './EightBall.css';

const EightBall = (props) => {
    const [msg, setMsg] = useState('Think of a Question');
    const [color, setColor] = useState('black');

    const randomChoice = (arr) => {
        const idx = Math.floor(Math.random() * arr.length);
        return arr[idx];
    }

    const handleClick = () => {
        const { msg, color } = randomChoice(props.answers);
        setMsg(msg);
        setColor(color);
    }

    const restart = () => {
        setMsg('Think of a Question');
        setColor('black');
    }

    return (
        <div>
            <div className="EightBall" onClick={handleClick} style={{ backgroundColor: color }}>
                <p className="Eightball-text">{msg}</p>
            </div>
            <button className="Eightball-btn" onClick={restart}>Restart</button>
        </div>
    )
}

export default EightBall;