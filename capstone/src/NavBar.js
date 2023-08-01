const NavBar = () => {
    return (
        <div id="navBar" className="col space">
            <button>
                <span className="material-symbols-outlined">
                    settings_account_box
                </span>
            </button>
            <button>
                <span className="material-symbols-outlined">account_box</span>
            </button>
            <button>
                <span className="material-symbols-outlined">backpack</span>
            </button>
            <button>
                <span className="material-symbols-outlined"> swords </span>
            </button>
            <button>
                <span className="material-symbols-outlined"> tune </span>
            </button>
        </div>
    );
};

export default NavBar;
