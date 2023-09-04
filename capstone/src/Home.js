import "./Home.css";
import APIURL from "./APIURL.js";
import { useState } from "react";

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
                <div>
                    <button className="profileButton">Log In</button>
                </div>
                <hr />
                <div class="accordion" id="newProfile">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button
                                class="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                Create New Profile
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            class="accordion-collapse collapse show"
                            data-bs-parent="#newProfile"
                        >
                            <div class="accordion-body">
                                <NewProfileForm />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion" id="createCharacter">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button
                                class="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="true"
                                aria-controls="collapseTwo"
                            >
                                Create New Adventurer
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            class="accordion-collapse collapse show"
                            data-bs-parent="#createCharacter"
                        >
                            <div class="accordion-body">
                                <CreateCharacterForm />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div id="logIn" className="row">
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
                                    aria-expanded="true"
                                    aria-controls="flush-collapseOne"
                                >
                                    Create New Profile
                                </button>
                            </h2>
                            <div
                                id="flush-collapseOne"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample"
                            >
                                <div className="accordion-body">
                                    <NewProfileForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row  accordion-group">
                    <div
                        className="accordion accordion-flush"
                        id="accordionFlushExample2"
                    >
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse2"
                                    data-bs-target="#flush-collapseTwo"
                                    aria-expanded="true"
                                    aria-controls="flush-collapseTwo"
                                >
                                    Create New Adventurer
                                </button>
                            </h2>
                            <div
                                id="flush-collapseOne"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample2"
                            >
                                <div className="accordion-body">
                                    <CreateCharacterForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <hr />
                <SavedCharacter />
            </div>
        </div>
    );
};

export default Home;

const SavedCharacter = () => {
    return (
        <div className="accordion accordion-flush">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="true"
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
                        <button className="profileButton">
                            Load Adventurer
                        </button>

                        <button className="profileButton">
                            Edit Adventurer
                        </button>
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
                        <code>.accordion-flush</code> class. This is the second
                        item's accordion body. Let's imagine this being filled
                        with some actual content.
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
                        <code>.accordion-flush</code> class. This is the third
                        item's accordion body. Nothing more exciting happening
                        here in terms of content, but just filling up the space
                        to make it look, at least at first glance, a bit more
                        representative of how this would look in a real-world
                        application.
                    </div>
                </div>
            </div>
        </div>
    );
};

const NewProfileForm = () => {
    const [passwordType, setPasswordType] = useState("password");
    const onSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch(`${APIURL}/homebrew`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: event.target.elements.username.value,
                password: event.target.elements.password.value,
            }),
        });

        const data = await response.json();
        console.log(data);

        window.localStorage.setItem("userID", data.userID);
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <strong>Username: </strong>
                <input type="text" name="username" />
                <strong>Password: </strong>
                <input
                    type={passwordType}
                    name="password"
                    onMouseEnter={() => {
                        setPasswordType("text");
                    }}
                    onMouseLeave={() => {
                        setPasswordType("password");
                    }}
                />
                <button>Create</button>
            </form>
        </div>
    );
};

const CreateCharacterForm = () => {
    const onSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch(`${APIURL}/newCharacter`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userID: window.localStorage.getItem("userID"),
                name: event.target.elements.name.value,
            }),
        });
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="row">
                    <strong>Name: </strong>
                    <input type="text" name="name" />
                </div>
                <div className="row">
                    <strong>Race: </strong>
                    <select>
                        <option>mapped races</option>
                        <option>Human</option>
                    </select>
                </div>
                <div className="row">
                    <strong>Class: </strong>
                    <select>
                        <option>mapped classes</option>
                        <option>Fighter</option>
                    </select>
                </div>
                <div className="row">
                    <strong>Sub-class: </strong>
                    <select>
                        <option>mapped sub-classes</option>
                        <option>Champion</option>
                    </select>
                </div>
                <div className="row">
                    <strong>Height: </strong>
                    <input type="number" />
                </div>
                <div className="row">
                    <strong>Weight: </strong>
                    <input type="number" />
                </div>
                <div className="row">
                    <strong>Alignment: </strong>
                    <select>
                        <option>mapped alignments</option>
                    </select>
                </div>
                <hr />
                <div className="row">Roll for a d20 these values</div>
                <div className="row">
                    <strong>STR: </strong>
                    <input type="number" />
                </div>
                <div className="row">
                    <strong>DEX: </strong>
                    <input type="number" />
                </div>
                <div className="row">
                    <strong>CON: </strong>
                    <input type="number" />
                </div>
                <div className="row">
                    <strong>INT: </strong>
                    <input type="number" />
                </div>
                <div className="row">
                    <strong>WIS: </strong>
                    <input type="number" />
                </div>
                <div className="row">
                    <strong>CHA: </strong>
                    <input type="number" />
                </div>
                <hr />
                <button>Begin your Adventure!</button>
            </form>
        </div>
    );
};
