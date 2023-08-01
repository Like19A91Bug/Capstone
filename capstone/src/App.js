import "./App.css";
import Layout from "./Layout";
import CharacterInfo from "./CharacterInfo";
import BagOfHolding from "./BagOfHolding";
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
                path: "/BagOfHolding",
                element: <BagOfHolding />,
            },
        ],
    },
]);

function App() {
    return (
        <div className="App">
            <div className="container">
                <div className="row">
                    <RouterProvider router={router} />
                </div>
            </div>
        </div>
    );
}

export default App;
