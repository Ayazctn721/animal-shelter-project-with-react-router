import { createBrowserRouter } from "react-router";
import RootLayout from "./Layout/RootLayout";
import Contact from "./pages/Contact";
import Adopt from "./pages/Adopt";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/home",
                element: <Home />,
                errorElement: <ErrorPage />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/adopt",
                element: <Adopt />
            }
        ]
    }

]);

export default router