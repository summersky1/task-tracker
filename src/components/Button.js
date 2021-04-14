import PropTypes from 'prop-types'

const Button = ({ color, text, onToggle }) => {
  return (
    <button style={{ backgroundColor: color }} className="btn" onClick={onToggle}>
      { text}
    </button>
  )
}

Button.defaultProps = {
  color: 'steelBlue'
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
}

export default Button
