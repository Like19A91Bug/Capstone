import { useState, useEffect } from "react";

const BOHArmInv = () => {
    return (
        <div className="col space">
            <h3>Armor</h3>
            <div className="row">
                <div className="col-3">Armor</div>
                <div className="col-1">AC</div>
                <div className="col-2">DEX Bonus</div>
                <div className="col-1">STR Min</div>
                <div className="col-1">Stealth Dis</div>
                <div className="col-1">lbs</div>
                <div className="col-1">Cost</div>
                <div className="col-1">Qty</div>
            </div>
            <hr />
            <div className="row">
                <ArmorDropdown />
                <div className="col-1">11</div>
                <div className="col-2">TRUE</div>
                <div className="col-1">0</div>
                <div className="col-1">TRUE</div>
                <div className="col-1">8</div>
                <div className="col-1">5gp</div>
                <div className="col-1">
                    <input className="textBox" type="number" />
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <ArmorDropdown />
                </div>
                <div className="col-1">AC</div>
                <div className="col-2">DEX Bonus</div>
                <div className="col-1">STR Min</div>
                <div className="col-1">Stealth Dis</div>
                <div className="col-1">lbs</div>
                <div className="col-1">Cost</div>
                <div className="col-1">
                    <input className="textBox" type="number" />
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <ArmorDropdown />
                </div>
                <div className="col-1">AC</div>
                <div className="col-2">DEX Bonus</div>
                <div className="col-1">STR Min</div>
                <div className="col-1">Stealth Dis</div>
                <div className="col-1">lbs</div>
                <div className="col-1">Cost</div>
                <div className="col-1">
                    <input className="textBox" type="number" />
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <ArmorDropdown />
                </div>
                <div className="col-1">AC</div>
                <div className="col-2">DEX Bonus</div>
                <div className="col-1">STR Min</div>
                <div className="col-1">Stealth Dis</div>
                <div className="col-1">lbs</div>
                <div className="col-1">Cost</div>
                <div className="col-1">
                    <input className="textBox" type="number" />
                </div>
            </div>
        </div>
    );
};

const ArmorDropdown = () => {
    const [equipments, setEquipments] = useState();
    useEffect(() => {
        const makeAPICall = async () => {
            const response = await fetch(
                `https://www.dnd5eapi.co/api/equipment-categories/armor`
            );
            const data = await response.json();
            setEquipments(data.equipment);
            console.log(equipments);
        };
        makeAPICall();
        console.log("API Call running");
    }, []);
    return (
        // <>
        // {(equipments}).map((equipment))
        //     <option>Armor</option>
        // </>
        <div className="col-3">
            <select>
                {/* {equipments.map((equipment) => {
                    return <li key={equipment.name}>{equipment.name}</li>;
                })} */}
            </select>
        </div>
    );
};

export default BOHArmInv;
