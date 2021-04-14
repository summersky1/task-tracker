import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onToggle, showAdd }) => {
  return (
    <header className="header">
      <h2>{title}</h2>
      <Button
        color={showAdd ? 'Red' : 'Green'}
        text={showAdd ? 'Close' : 'Add'}
        onToggle={onToggle}
      />
    </header>
  )
}

Header.defaultProps = {
  title: "Task Tracker"
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
