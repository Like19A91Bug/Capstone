import "./Home.css";

const Home = () => {
    return (
        <div className="row">
            <div className="col">
                <h1>Log In</h1>
                <div className="row">
                    Username: <input id="userName" type="text" />
                </div>
                <div className="row">
                    Password: <input id="passWord" type="text" />
                </div>
                <hr />
                <div id="logIn" className="row">
                    <div>
                        <button className="profileButton">Log In</button>
                    </div>
                    <div>
                        <button className="profileButton">
                            Create New Profile
                        </button>
                    </div>
                </div>
                <hr />
                <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                >
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne"
                                aria-expanded="false"
                                aria-controls="flush-collapseOne"
                            >
                                Finnan Tumbleweed // Druid Artificer // 19 // 🟢
                            </button>
                        </h2>
                        <div
                            id="flush-collapseOne"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">
                                Placeholder content for this accordion, which is
                                intended to demonstrate the
                                <code>.accordion-flush</code> class. This is the
                                first item's accordion body.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseTwo"
                                aria-expanded="false"
                                aria-controls="flush-collapseTwo"
                            >
                                Accordion Item #2
                            </button>
                        </h2>
                        <div
                            id="flush-collapseTwo"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">
                                Placeholder content for this accordion, which is
                                intended to demonstrate the
                                <code>.accordion-flush</code> class. This is the
                                second item's accordion body. Let's imagine this
                                being filled with some actual content.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseThree"
                                aria-expanded="false"
                                aria-controls="flush-collapseThree"
                            >
                                Accordion Item #3
                            </button>
                        </h2>
                        <div
                            id="flush-collapseThree"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">
                                Placeholder content for this accordion, which is
                                intended to demonstrate the
                                <code>.accordion-flush</code> class. This is the
                                third item's accordion body. Nothing more
                                exciting happening here in terms of content, but
                                just filling up the space to make it look, at
                                least at first glance, a bit more representative
                                of how this would look in a real-world
                                application.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <button className="profileButton">
                        Create New Adventurer
                    </button>
                </div>
                <div className="row">
                    <button className="profileButton">Load Adventurer</button>
                </div>
                <div className="row">
                    <button className="profileButton">Edit Adventurer</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
