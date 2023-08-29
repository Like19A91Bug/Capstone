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
        <div className="col space">
            <h3>Armor</h3>
            <div className="row">
                <div className="col-3">Armor</div>
                <div className="col">AC</div>
                <div className="col">DEX Bonus</div>
                <div className="col">STR Min</div>
                <div className="col">Stealth Dis</div>
                <div className="col">lbs</div>
                <div className="col">Cost</div>
                <div className="col">Qty</div>
            </div>
            <hr />
            <ArmorRow armor={armor} editMode={editMode} />
            <ArmorRow armor={armor} editMode={editMode} />
            <ArmorRow armor={armor} editMode={editMode} />
            <ArmorRow armor={armor} editMode={editMode} />
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
            <ArmorDropdown
                armor={armor}
                setSelectedArmor={setSelectedArmor}
                editMode={editMode}
                selectedArmor={selectedArmor}
            />
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
        return <div className="col-5">{selectedArmorData?.name}</div>;
    }
    return (
        <div className="col-5">
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
            <div className="col-1">{armorDetails.armor_class.base}</div>
            <div className="col-1">{armorDetails.armor_class.dex_bonus}</div>
            <div className="col-1">{armorDetails.str_minimum}</div>
            <div className="col">{armorDetails.stealth_disadvantage}</div>
            <div className="col">{armorDetails.weight}</div>
            <div className="col">
                {armorDetails.cost.quantity} {armorDetails.cost.unit}
            </div>
            <div className="col">
                <input className="textBox" type="number" />
            </div>
        </>
    );
};

export default BOHArmInv;
