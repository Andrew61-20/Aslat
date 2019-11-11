import React from "react";

const  Header = () => {
    return (
        <div className="header">
            <p className="headername">BIGDATA</p>
            <ul className="nav">
                <li>
                    <img className="avatar" src={`../../images/avatar.png`} alt="" />
                </li>
                <li>
                    <img className="cart" src={`../../images/3.png`} alt="" />
                </li>
            </ul>
        </div>
    );
}

export default Header