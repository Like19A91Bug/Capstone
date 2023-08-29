import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div className="row">
                <NavBar />
            </div>

            <Outlet />
        </>
    );
};

export default Layout;
