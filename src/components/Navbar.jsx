import {Link} from 'react-router-dom';

const Navbar = () => {

    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/portfolio'>Portfolio</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/projects'>Projects</Link>
        </nav>
    )
}

export default Navbar