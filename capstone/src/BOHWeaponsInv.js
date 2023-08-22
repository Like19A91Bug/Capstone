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
            <h5>Simple Melee</h5>
            <WeaponDropdown />
            <h5>Martial Melee</h5>
            <WeaponDropdown />
            <h5>Simple Ranged</h5>
            <WeaponDropdown />
            <h5>Martial Ranged</h5>
            <WeaponDropdown />
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
                        <option key={weapon.index} content={weapon.name}>
                            {weapon.name}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default BOHWeaponsInv;
