import Button from "./Button"
import propTypes from "prop-types"

const Header = ({ title }) => {

  return (
    <div>
        <h1>{title}</h1>
    </div>
  )
}

Header.propTypes = {
  title: propTypes.string
}

export default Header