import { useEffect, useState } from "react";

const BOHWeaponsInv = () => {
    const [weapon, setWeapon] = useState([]);
    const [editMode, setEditMode] = useState(false);
    useEffect(() => {
        const makeAPICall = async () => {
            const response = await fetch(
                `https://www.dnd5eapi.co/api/equipment-categories/weapon`
            );
            const data = await response.json();
            // console.log(data.equipment);
            setWeapon(data.equipment);
        };
        makeAPICall();
        console.log("API Call running");
    }, []);
    return (
        <div id="weaponsInv" className="col space">
            <h3>Weapons</h3>
            <div className="row">
                <div className="col-3">Weapon</div>
                <div className="col">Category Range</div>
                <div className="col">Damage</div>
                <div className="col">DMG Type</div>
                <div className="col">Range</div>
                <div className="col">lbs</div>
                <div className="col">Properties</div>
                <div className="col">Qty</div>
            </div>
            <hr />
            <h5>Simple Melee</h5>
            <WeaponRow weapon={weapon} editMode={editMode} />
            <h5>Martial Melee</h5>
            <WeaponRow weapon={weapon} editMode={editMode} />
            <h5>Simple Ranged</h5>
            <WeaponRow weapon={weapon} editMode={editMode} />
            <h5>Martial Ranged</h5>
            <WeaponRow weapon={weapon} editMode={editMode} />
            {editMode ? (
                <button
                    onClick={(event) => {
                        setEditMode(!editMode);
                    }}
                >
                    Save
                </button>
            ) : (
                <button
                    onClick={(event) => {
                        setEditMode(!editMode);
                    }}
                >
                    Edit
                </button>
            )}
        </div>
    );
};

const WeaponRow = ({ weapon, editMode }) => {
    const [selectedWeapon, setSelectedWeapon] = useState();
    return (
        <div className="row">
            <WeaponDropdown
                weapon={weapon}
                setSelectedWeapon={setSelectedWeapon}
                editMode={editMode}
                selectedWeapon={selectedWeapon}
            />
            <WeaponStats selectedWeapon={selectedWeapon} />
            <div className="col">
                <input className="textBox" type="number" />
            </div>
        </div>
    );
};

const WeaponDropdown = ({
    weapon,
    setSelectedWeapon,
    editMode,
    selectedWeapon,
}) => {
    const selectedWeaponData = weapon.find(
        (weapon) => weapon.url === selectedWeapon
    );

    console.log(selectedWeapon, selectedWeaponData);

    if (!editMode) {
        return <div className="col-5">{selectedWeaponData?.name}</div>;
    }
    return (
        <div className="col-5">
            <select>
                onChange=
                {(event) => {
                    setSelectedWeapon(event.target.value);
                }}
                <option>Select Weapon</option>
                {weapon.map((weapon) => {
                    // console.log(weapon);
                    return (
                        <option key={weapon.index} content={weapon.url}>
                            {weapon.name}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

const WeaponStats = ({ selectedWeapon }) => {
    const [weaponDetails, setWeaponDetails] = useState();
    useEffect(() => {
        const makeAPICall = async () => {
            const response = await fetch(
                `https://www.dnd5eapi.co${selectedWeapon}`
            );
            const data = await response.json();
            setWeaponDetails(data);
            console.log(data);
        };
        if (selectedWeapon) {
            makeAPICall();
        }
    }, [selectedWeapon]);

    if (!selectedWeapon) {
        return <div>Press "Edit" and make a selection in dropdown</div>;
    }
    if (!weaponDetails) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <div className="col-1">{weaponDetails.category_range}</div>
            <div className="col-1">{weaponDetails.damage.damage_dice}</div>
            <div className="col-1">{weaponDetails.damage.damage_dice}</div>
            <div className="col">{weaponDetails.range.normal}</div>
            <div className="col">{weaponDetails.weight}</div>
            <div className="col">
                {weaponDetails.cost.quantity} {weaponDetails.cost.unit}
            </div>
        </>
    );
};

export default BOHWeaponsInv;
