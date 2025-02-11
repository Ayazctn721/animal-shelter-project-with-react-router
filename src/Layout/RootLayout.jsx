import Footer from "./Footer"
import Navbar from "./Navbar"
import { Outlet } from "react-router"

function RootLayout() {
    return (
        <div className="min-vh-100 d-flex flex-column">
            <Navbar />
            <div className="flex-grow-1">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default RootLayout
