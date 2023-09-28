import "./App.css";
import "./NavBar.css";
import Layout from "./Layout";
import Home from "./Home";
import CharacterInfo from "./CharacterInfo";
import BagOfHolding from "./BagOfHolding";
import Combat from "./Combat";
import ClassInfo from "./ClassInfo";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/characterinfo/:id",
                element: <CharacterInfo />,
            },
            {
                path: "/bagofholding/:id",
                element: <BagOfHolding />,
            },
            {
                path: "/combat/:id",
                element: <Combat />,
            },
            {
                path: "/classinfo/:id",
                element: <ClassInfo />,
            },
        ],
    },
]);

function App() {
    return (
        <div className="App">
            <div className="container">
                <RouterProvider router={router} />
            </div>
        </div>
    );
}

export default App;
