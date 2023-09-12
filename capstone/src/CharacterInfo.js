import CICharacterInfo from "./CICharacterInfo";
import CILevelBox from "./CILevelBox";
import CICharacterStats from "./CICharacterStats";
import CISkills from "./CISkills";
import CISaves from "./CISaves";
import CIInspProfPass from "./CIInspProfPass";
import CIHealthBox from "./CIHealthBox";
import CIFeats from "./CIFeats";
import CIEquipped from "./CIEquipped";
import CIQAInv from "./CIQAInv";
import "./CharacterInfo.css";
import { useEffect, useState } from "react";
const CharacterInfo = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        // 8B Make an async function
        const makeAPICall = async () => {
            // 8C Make API Call to tasks endpoint in backend
            const response = await fetch(`http://localhost:3080/homebrew`);
            // 12 Parse the json in the response
            const data = await response.json();
            console.log(data);
            // 13 Set the data from 11 in the backend into our state from 7
            setData(data);
        };
        makeAPICall();
    }, []);

    return (
        <div className="row">
            <div className="row">
                <CICharacterInfo />
            </div>
            <div className="row">
                <CICharacterStats />
                <div id="skills" className="col">
                    <CISkills />
                </div>
                <div className="col">
                    <CISaves />
                    <CIInspProfPass />
                    <CILevelBox />
                    <CIHealthBox />
                </div>
            </div>
            <div className="row">
                <CIFeats />
                <CIEquipped />
                <CIQAInv />
            </div>
        </div>
    );
};

export default CharacterInfo;
