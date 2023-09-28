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
import { useParams } from "react-router-dom";
const CharacterInfo = () => {
    const [data, setData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        // 8B Make an async function
        const makeAPICall = async () => {
            // 8C Make API Call to tasks endpoint in backend
            const response = await fetch(
                `http://localhost:3080/newcharacters/${id}`
            );
            // 12 Parse the json in the response
            const data = await response.json();
            console.log(data.character);
            // 13 Set the data from 11 in the backend into our state from 7
            setData(data.character);
        };
        makeAPICall();
    }, []);

    if (!data) {
        return <div>Loading</div>;
    }

    return (
        <div className="row">
            <div className="row">
                <CICharacterInfo data={data} setData={setData} />
            </div>
            <div className="row">
                <CICharacterStats data={data} setData={setData} />
                <div id="skills" className="col">
                    <CISkills data={data} setData={setData} />
                </div>
                <div className="col">
                    <CISaves data={data} setData={setData} />
                    <CIInspProfPass data={data} setData={setData} />
                    <CILevelBox data={data} setData={setData} />
                    <CIHealthBox data={data} setData={setData} />
                </div>
            </div>
            <div className="row">
                <CIFeats data={data} setData={setData} />
                <CIEquipped data={data} setData={setData} />
                <CIQAInv data={data} setData={setData} />
            </div>
        </div>
    );
};

export default CharacterInfo;
