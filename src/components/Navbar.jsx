
function Navbar() {
    return (
        <nav class="navbar bg-primary  display-flex justify-content-between px-3 sticky-top" >
            <div class="container-fluid">
                <div>
                    <a class="navbar-brand" href="#">Happy Tails</a>
                </div>
                <div class="d-flex">
                    <a className="navbar-brand" href="#">Home</a>
                    <a className="navbar-brand dis-link disabled" aria-disabled="true" href="#">Adopt</a>
                    <a className="navbar-brand dis-link disabled" aria-disabled="true" href="#">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
