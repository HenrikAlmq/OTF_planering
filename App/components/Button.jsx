import propTypes from "prop-types"
import react from "react"


const Button = ({ color, text, onClick }) => {
    
    return (
        <button onClick={onClick} style={{ backgroundColor: color }}
            className="btn">
            {text}
        </button>
    )
}

Button.propTypes = {
    color: propTypes.string,
    text: propTypes.string,
    onClick: propTypes.func
}

export default Button