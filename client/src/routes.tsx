import { createBrowserRouter } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";

export default createBrowserRouter([
    {
        path: '/',
        element: <Homepage />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    }
])