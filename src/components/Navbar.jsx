import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <h1>Jobify</h1>
            <ul className="links">
                <li><a href="/home">Home</a></li>
                <li><a href="/create">New Job</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/profile">Profile</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;