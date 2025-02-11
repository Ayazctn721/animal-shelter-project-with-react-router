import { Link } from "react-router";

function Navbar() {
    return (
        <nav className="navbar bg-primary  display-flex justify-content-between px-3 sticky-top" >
            <div className="container-fluid">
                <div>
                    <a className="navbar-brand" href="#">Happy Tails</a>
                </div>
                <div className="d-flex gap-2 ">
                    <Link className="text-white nav-link" to="/home">Home</Link>
                    <Link className="text-white nav-link" to="/adopt">Adopt</Link>
                    <Link className="text-white nav-link" to="/contact">Contact</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;