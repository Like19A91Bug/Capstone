import { useState, useEffect } from "react";

const BOHArmInv = () => {
    const [armor, setArmor] = useState([]);
    const [editMode, setEditMode] = useState(false);
    useEffect(() => {
        const makeAPICall = async () => {
            const response = await fetch(
                `https://www.dnd5eapi.co/api/equipment-categories/armor`
            );
            const data = await response.json();
            // console.log(data.equipment);
            setArmor(data.equipment);
        };
        makeAPICall();
        // console.log("API Call running");
    }, []);

    return (
        <div className="col">
            <h3>Armor</h3>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Armor</th>
                        <th scope="col">AC</th>
                        <th scope="col">DEX Bonus</th>
                        <th scope="col">STR Min</th>
                        <th scope="col">Stealth Dis</th>
                        <th scope="col">lbs</th>
                        <th scope="col">Cost</th>
                        <th scope="col">Qty</th>
                    </tr>
                </thead>
                <tbody>
                    <ArmorRow armor={armor} editMode={editMode} />
                </tbody>
            </table>

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

const ArmorRow = ({ armor, editMode }) => {
    const [selectedArmor, setSelectedArmor] = useState();
    return (
        <div className="row">
            <td>
                <ArmorDropdown
                    armor={armor}
                    setSelectedArmor={setSelectedArmor}
                    editMode={editMode}
                    selectedArmor={selectedArmor}
                />
            </td>

            <ArmorStats selectedArmor={selectedArmor} />
        </div>
    );
};

const ArmorDropdown = ({
    armor,
    setSelectedArmor,
    editMode,
    selectedArmor,
}) => {
    const selectedArmorData = armor.find(
        (armor) => armor.url === selectedArmor
    );

    console.log(selectedArmor, selectedArmorData);

    if (!editMode) {
        return <div className="col">{selectedArmorData?.name}</div>;
    }
    return (
        <div className="col">
            <select
                onChange={(event) => {
                    setSelectedArmor(event.target.value);
                }}
            >
                <option>Select Armor</option>
                {armor.map((armor) => {
                    console.log(armor.index);
                    return (
                        <option key={armor.index} value={armor.url}>
                            {armor.name}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

const ArmorStats = ({ selectedArmor }) => {
    const [armorDetails, setArmorDetails] = useState();
    useEffect(() => {
        const makeAPICall = async () => {
            const response = await fetch(
                `https://www.dnd5eapi.co${selectedArmor}`
            );
            const data = await response.json();
            setArmorDetails(data);
        };
        if (selectedArmor) {
            makeAPICall();
        }
    }, [selectedArmor]);

    if (!selectedArmor) {
        return <div>Press "Edit" and make a selection in dropdown</div>;
    }
    if (!armorDetails) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <tr>
                <td>{armorDetails.armor_class.base}</td>
                <td>{armorDetails.armor_class.dex_bonus}</td>
                <td>{armorDetails.str_minimum}</td>
                <td>{armorDetails.stealth_disadvantage}</td>
                <td>{armorDetails.weight}</td>
                <td>
                    {armorDetails.cost.quantity}
                    {armorDetails.cost.unit}
                </td>
                <td>
                    <input className="textBox" type="number" />
                </td>
            </tr>
            {/* <div className="col-1">{armorDetails.armor_class.base}</div>
            <div className="col-1">{armorDetails.armor_class.dex_bonus}</div>
            <div className="col-1">{armorDetails.str_minimum}</div>
            <div className="col">{armorDetails.stealth_disadvantage}</div>
            <div className="col">{armorDetails.weight}</div>
            <div className="col">
                {armorDetails.cost.quantity} {armorDetails.cost.unit}
            </div>
            <div className="col">
                <input className="textBox" type="number" />
            </div> */}
        </>
    );
};

export default BOHArmInv;
