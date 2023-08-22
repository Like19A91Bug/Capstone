import "./App.css";
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
                path: "/characterinfo",
                element: <CharacterInfo />,
            },
            {
                path: "/bagofholding",
                element: <BagOfHolding />,
            },
            {
                path: "/combat",
                element: <Combat />,
            },
            {
                path: "/classinfo",
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
