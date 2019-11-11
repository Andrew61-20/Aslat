import React from "react";

export default ({sumAll}) => {
    return (
        <div className='boxforres'>
           <ul className='resrows1'>
               <li>Subtotal</li>
               <li>{sumAll.toLocaleString('en-In')}.00</li>
            </ul>
            <ul className='resrows1'>
                <li>Shipping</li>
                <li>Free</li>
            </ul>
            <ul className='resrows2'>
               <li>Order total</li>
               <li>{sumAll.toLocaleString('en-In')}.00</li>
            </ul>
			<button className='check'>Checkout</button>
        </div>
    )
}
            
            
