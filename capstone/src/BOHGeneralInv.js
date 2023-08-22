import { useEffect, useState } from "react";

const BOHGeneralInv = () => {
    const [gear, setGear] = useState([]);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        const makeAPICall = async () => {
            const response = await fetch(
                `https://www.dnd5eapi.co/api/equipment-categories/standard-gear`
            );
            const data = await response.json();
            // console.log(data.equipment);
            setGear(data.equipment);
        };
        makeAPICall();
        console.log("API Call running");
    }, []);
    return (
        <>
            <div className="col space">
                <div className="row">
                    <h3>General Inventory</h3>
                </div>

                <div className="row">
                    <div className="col">Item</div>
                    <div className="col">Description</div>
                    <div className="col">Qty.</div>
                </div>
                <hr />
                <GeneralInvRow gear={gear} editMode={editMode} />
                <GeneralInvRow gear={gear} editMode={editMode} />
                <GeneralInvRow gear={gear} editMode={editMode} />
                <GeneralInvRow gear={gear} editMode={editMode} />
                <GeneralInvRow gear={gear} editMode={editMode} />
                <GeneralInvRow gear={gear} editMode={editMode} />
                <GeneralInvRow gear={gear} editMode={editMode} />
                <GeneralInvRow gear={gear} editMode={editMode} />
                <GeneralInvRow gear={gear} editMode={editMode} />
                <GeneralInvRow gear={gear} editMode={editMode} />
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
        </>
    );
};

export default BOHGeneralInv;

const GeneralInvRow = ({ gear, editMode }) => {
    const [selectedGear, setSelectedGear] = useState();
    return (
        <div className="Row">
            <GeneralInvDropdown
                gear={gear}
                setSelectedGear={setSelectedGear}
                selectedGear={selectedGear}
                editMode={editMode}
            />
            <GearStats />
        </div>
    );
};

const GeneralInvDropdown = ({
    gear,
    setSelectedGear,
    selectedGear,
    editMode,
}) => {
    const selectedGearData = gear.find((gear) => gear.url === selectedGear);
    // console.log(selectedGear, selectedGearData);
    if (!editMode) {
        return <div className="col-5">{selectedGearData?.name}</div>;
    }
    return (
        <select
            onChange={(event) => {
                setSelectedGear(event.target.value);
            }}
        >
            <option>Select Item</option>
            {gear.map((gear) => {
                // console.log(gear);
                if (!editMode) {
                    return (
                        <div className="col-5">{selectedGearData?.name}</div>
                    );
                }
                return (
                    <option key={gear.index} value={gear.url}>
                        {gear.name}
                    </option>
                );
            })}
        </select>
    );
};

const GearStats = ({ selectedGear }) => {
    const [gearDetails, setGearDetails] = useState();
    useEffect(() => {
        const makeAPICall = async () => {
            const response = await fetch(
                `https://www.dnd5eapi.co${selectedGear}`
            );
            const data = await response.json();
            setGearDetails(data);
        };
        if (selectedGear) {
            makeAPICall();
            console.log(selectedGear);
        }
    }, [selectedGear]);

    if (!selectedGear) {
        return <div>Press "Edit" and make a selection in dropdown</div>;
    }
    if (!gearDetails) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <div className="col"></div>
        </>
    );
};
