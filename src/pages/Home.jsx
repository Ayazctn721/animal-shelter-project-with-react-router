import { Link, Outlet } from "react-router"

function Home() {
    return (
        <div className="hero-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className="fw-bold mb-1">Find Your Perfect </h1>
                        <h1 className="fw-bold text-primary my-1">Companion</h1>
                        <p className="lead">
                            Every pet in our shelter has a story and is waiting for a loving forever home.
                            Start your journey of pet adoption today.
                        </p>
                        <div className="mt-3">
                            <Link to="/adopt" className="btn btn-primary">Go to Adopt</Link>
                            <Link to="/contact" className="btn btn-outline-primary">Go to Contact</Link>
                        </div>
                        <div className="mt-4 d-flex gap-4">
                            <div>
                                <h4 className="fw-bold mb-0">50+</h4>
                                <small>Pets Available</small>
                            </div>
                            <div>
                                <h4 className="fw-bold mb-0">200+</h4>
                                <small>Happy Adoptions</small>
                            </div>
                            <div>
                                <h4 className="fw-bold mb-0">15+</h4>
                                <small>Years of Service</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src="./src/assets/animals.png" alt="Pets" className="img-fluid rounded-3" />
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Home
