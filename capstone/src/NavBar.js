import { Link, useParams } from "react-router-dom";

const NavBar = () => {
    const { id } = useParams();
    return (
        <div id="navBar" className="space">
            <Link to="/">
                <button>
                    <span className="material-symbols-outlined">
                        settings_account_box
                    </span>
                </button>
            </Link>
            <Link to="/characterinfo/:id">
                <button>
                    <span className="material-symbols-outlined">
                        account_box
                    </span>
                </button>
            </Link>
            <Link to="/bagofholding/:id">
                <button>
                    <span className="material-symbols-outlined">backpack</span>
                </button>
            </Link>
            <Link to="/combat/:id">
                <button>
                    <span className="material-symbols-outlined"> swords </span>
                </button>
            </Link>
            <Link to="/classinfo/:id">
                <button>
                    <span className="material-symbols-outlined"> tune </span>
                </button>
            </Link>
        </div>
    );
};

export default NavBar;
