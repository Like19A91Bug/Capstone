const BOHWeaponsInv = () => {
    return (
        <div id="weaponsInv" className="col statBackground">
            <h3>Weapons</h3>
            <h5>Simple Melee</h5>
            <div className="dropdown">
                <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Short Sword
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <a className="dropdown-item" href="#">
                            Action
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Another action
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Something else here
                        </a>
                    </li>
                </ul>
            </div>
            <h5>Martial Melee</h5>
            <div className="dropdown">
                <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Kukri
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <a className="dropdown-item" href="#">
                            Action
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Another action
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Something else here
                        </a>
                    </li>
                </ul>
            </div>
            <h5>Simple Ranged</h5>
            <div className="dropdown">
                <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Short Bow
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <a className="dropdown-item" href="#">
                            Action
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Another action
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Something else here
                        </a>
                    </li>
                </ul>
            </div>
            <h5>Martial Ranged</h5>
            <div className="dropdown">
                <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Compound Bow
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <a className="dropdown-item" href="#">
                            Action
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Another action
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Something else here
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default BOHWeaponsInv;
