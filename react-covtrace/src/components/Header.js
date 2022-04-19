import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const Header = ({ title }) => {
    return (
        <header className='header'>
            <h1 className='header-home'><Link to="/">{title}</Link></h1>
            <div>
                <Link className='btn' to="/">Home</Link>
                <Link className='btn' to="/info">Info</Link>
                <Link className='btn' to="/login">Login</Link>
                <Link className='btn' to="/register">Register</Link>
                <Link className='btn' to="/admin">Admin</Link>
            </div>
        </header>
    )
}

Header.defaultProps = {
    title: 'CovTrace'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
