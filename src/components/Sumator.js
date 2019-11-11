import React from "react";

export default ({onValue}) => {
    const res = onValue*800
    return (
        <div className='boxforgoodres'>
            <p className='bigstring'>${res.toLocaleString('en-In')}.00</p>
            <p className='smallstring'>({onValue}x800.00)</p>
        </div>
    )
}
