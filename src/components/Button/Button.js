import React from "react";
import './Button.css';
import { Link } from 'react-router-dom';
const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];


const Button = ({
    Children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const chechButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const chechButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    return (
        <Link to='/sing-up' className="btn-mobile">
            <button className={`btn ${chechButtonStyle} ${chechButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {Children}
            </button>
        </Link>
    )
};
export default Button;