import "./Home.css";
import APIURL from "./APIURL.js";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const Home = () => {
    const [adventurers, setAdventurers] = useState([]);

    const makeAPICall = async () => {
        const res = await fetch(`${APIURL}/adventurers`);
        const data = await res.json();
        setAdventurers(data.adventurers);
    };

    useEffect(() => {
        makeAPICall();
    }, []);

    return (
        <div className="row">
            <div className="col">
                <h1>Log In</h1>
                <div className="row logIn">
                    Username:{" "}
                    <input className="textInput" id="userName" type="text" />
                </div>
                <div className="row logIn">
                    Password:{" "}
                    <input className="textInput" id="passWord" type="text" />
                </div>
                <div>
                    <button className="profileButton">Log In</button>
                </div>
                <hr />
                <div className="accordion" id="newProfile">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="false"
                                aria-controls="collapseOne"
                            >
                                Create New Profile
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse"
                            data-bs-parent="#newProfile"
                        >
                            <div className="accordion-body">
                                <NewProfileForm />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion" id="createCharacter">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                Create New Adventurer
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            data-bs-parent="#createCharacter"
                        >
                            <div className="accordion-body">
                                <CreateCharacterForm
                                    updateSavedAdventurers={makeAPICall}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <hr />
                <SavedCharacter adventurers={adventurers} />
            </div>
        </div>
    );
};

export default Home;

const SavedCharacter = ({ adventurers }) => {
    const navigateTo = useNavigate();

    return (
        <div className="accordion accordion-flush">
            {adventurers.map((adventurer) => {
                const loadCharacter = () => {
                    navigateTo(`characterinfo/${adventurer.id}`);
                };
                return (
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
                                {adventurer.name} // {adventurer.class} //{" "}
                                {adventurer.subclass} // {adventurer.race} //{" "}
                                {adventurer.level}
                            </button>
                        </h2>
                        <div
                            id="flush-collapseOne"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body">
                                <button
                                    onClick={loadCharacter}
                                    className="profileButton"
                                >
                                    Load Adventurer
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
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
                <div className="userName">
                    <strong>Username: </strong>
                    <input type="text" name="username" />
                </div>
                <div className="passWord">
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
                </div>

                <button>Create</button>
            </form>
        </div>
    );
};

const CreateCharacterForm = ({ updateSavedAdventurers }) => {
    // const [selectedRace, setSelectedRace] = useState("race");
    const onSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch(`${APIURL}/newCharacter`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userID: window.localStorage.getItem("userID"),
                name: event.target.elements.name.value,
                race: event.target.elements.race.value,
                class: event.target.elements.class.value,
                subclass: event.target.elements.subclass.value,
                height: event.target.elements.height.value,
                weight: event.target.elements.weight.value,
                alignment: event.target.elements.alignment.value,
                str: event.target.elements.str.value,
                dex: event.target.elements.dex.value,
                con: event.target.elements.con.value,
                int: event.target.elements.int.value,
                wis: event.target.elements.wis.value,
                cha: event.target.elements.cha.value,
            }),
        });
        const data = await response.json();
        console.log(data);

        updateSavedAdventurers();
        // setSelectedRace
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
                    <select name="race">
                        <option>Select Race</option>
                        <option>Dragonborn</option>
                        <option>Dwarf</option>
                        <option>Elf</option>
                        <option>Gnome</option>
                        <option>Half-Elf</option>
                        <option>Half-Orc</option>
                        <option>Halfling</option>
                        <option>Human</option>
                        <option>Tiefling</option>
                    </select>
                    {/* <RaceDropdown name="race" /> */}
                </div>
                <div className="row">
                    <strong>Class: </strong>
                    <select name="class">
                        <option>Select Class</option>
                        <option>Fighter</option>
                    </select>
                    {/* <ClassDropdown name="class" /> */}
                </div>
                <div className="row">
                    <strong>Sub-class: </strong>
                    <select name="subclass">
                        <option>Select Sub-class</option>
                        <option>Champion</option>
                    </select>
                    {/* <SubClassDropdown name="subclass" /> */}
                </div>
                <div className="row">
                    <strong>Height: </strong>
                    <input name="height" type="number" />
                </div>
                <div className="row">
                    <strong>Weight: </strong>
                    <input name="weight" type="number" />
                </div>
                <div className="row">
                    <strong>Alignment: </strong>
                    <select name="alignment">
                        <option>Select Alignment</option>
                        <option>Chaotic Evil</option>
                        <option>Chaotic Good</option>
                        <option>Chaotic Neutral</option>
                        <option>Lawful Evil</option>
                        <option>Lawful Good</option>
                        <option>Lawful Neutral</option>
                        <option>Neutral</option>
                        <option>Neutral Evil</option>
                        <option>Neutral Good</option>
                    </select>
                    {/* <AlignmentDropdown name="alignment" /> */}
                </div>
                <hr />
                <div className="row">Roll for a d20 these values</div>
                <div className="row">
                    <strong>STR: </strong>
                    <input name="str" type="number" />
                </div>
                <div className="row">
                    <strong>DEX: </strong>
                    <input name="dex" type="number" />
                </div>
                <div className="row">
                    <strong>CON: </strong>
                    <input name="con" type="number" />
                </div>
                <div className="row">
                    <strong>INT: </strong>
                    <input name="int" type="number" />
                </div>
                <div className="row">
                    <strong>WIS: </strong>
                    <input name="wis" type="number" />
                </div>
                <div className="row">
                    <strong>CHA: </strong>
                    <input name="cha" type="number" />
                </div>
                <hr />

                <button>Begin your Adventure!</button>
            </form>
        </div>
    );
};

// const RaceDropdown = () => {
//     const [races, setRaces] = useState([]);

//     useEffect(() => {
//         const makeAPICall = async () => {
//             const response = await fetch(`https://www.dnd5eapi.co/api/races`);
//             const data = await response.json();
//             console.log(data.results);
//             setRaces(data.results);
//         };
//         makeAPICall();
//     }, []);
//     return (
//         <select onChange={{event} => setSelectedRace(event.target.value)}>
//             {races.map((races) => {
//                 return (
//                     <option key={races.index} value={race}>
//                         {races.name}
//                     </option>
//                 );
//             })}
//         </select>
//     );
// };

// const ClassDropdown = () => {
//     const [classes, setClasses] = useState([]);

//     useEffect(() => {
//         const makeAPICall = async () => {
//             const response = await fetch(`https://www.dnd5eapi.co/api/classes`);
//             const data = await response.json();
//             console.log(data.results);
//             setClasses(data.results);
//         };
//         makeAPICall();
//     }, []);
//     return (
//         <select>
//             {classes.map((classes) => {
//                 return (
//                     <option key={classes.index} value={classes.name}>
//                         {classes.name}
//                     </option>
//                 );
//             })}
//         </select>
//     );
// };

// const SubClassDropdown = () => {
//     const [subclasses, setSubClasses] = useState([]);

//     useEffect(() => {
//         const makeAPICall = async () => {
//             const response = await fetch(
//                 `https://www.dnd5eapi.co/api/subclasses`
//             );
//             const data = await response.json();
//             console.log(data.results);
//             setSubClasses(data.results);
//         };
//         makeAPICall();
//     }, []);
//     return (
//         <select>
//             {subclasses.map((subclasses) => {
//                 return (
//                     <option key={subclasses.index} value={subclasses.name}>
//                         {subclasses.name}
//                     </option>
//                 );
//             })}
//         </select>
//     );
// };

// const AlignmentDropdown = () => {
//     const [alignments, setAlignments] = useState([]);

//     useEffect(() => {
//         const makeAPICall = async () => {
//             const response = await fetch(
//                 `https://www.dnd5eapi.co/api/alignments`
//             );
//             const data = await response.json();
//             console.log(data.results);
//             setAlignments(data.results);
//         };
//         makeAPICall();
//     }, []);
//     return (
//         <select>
//             {alignments.map((alignments) => {
//                 return (
//                     <option key={alignments.index} value={alignments.name}>
//                         {alignments.name}
//                     </option>
//                 );
//             })}
//         </select>
//     );
// };
