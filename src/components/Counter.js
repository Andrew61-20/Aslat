import React from "react";
export default ({onDecrement, onIncrement, onValue}) => {
    return (
        <div className='boxforcounter'> 
            <button className='boxforDecr' onClick={onDecrement}>-</button>
            <div className='boxforNum'>
                {onValue}
            </div>
            <button className='boxforIncr' onClick={onIncrement}>+</button>
        </div> )
    }
