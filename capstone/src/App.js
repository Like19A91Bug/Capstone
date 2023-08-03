import "./App.css";
import Layout from "./Layout";
import CharacterInfo from "./CharacterInfo";
import BagOfHolding from "./BagOfHolding";
import Combat from "./Combat";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
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
