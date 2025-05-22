import './Navbar.css';
function Navbar(){
    return(
        <header>
            <nav className="navbar">
                <h1>Job Board</h1>
                <div className="links">
                    <a href="/">Home</a>
                    <a href="/create">New Job</a>
                </div>
            </nav>
        </header>
        
    )
}
export default Navbar;