import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div id="navBar" className="space">
            <Link to="/">
                <button>
                    <span className="material-symbols-outlined">
                        settings_account_box
                    </span>
                </button>
            </Link>
            <Link to="/characterinfo">
                <button>
                    <span className="material-symbols-outlined">
                        account_box
                    </span>
                </button>
            </Link>
            <Link to="/bagofholding">
                <button>
                    <span className="material-symbols-outlined">backpack</span>
                </button>
            </Link>
            <Link to="/combat">
                <button>
                    <span className="material-symbols-outlined"> swords </span>
                </button>
            </Link>
            <Link to="/classinfo">
                <button>
                    <span className="material-symbols-outlined"> tune </span>
                </button>
            </Link>
        </div>
    );
};

export default NavBar;
