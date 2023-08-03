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

const CharacterInfo = () => {
    return (
        <div className="row">
            <div className="row">
                <CICharacterInfo />
            </div>
            <div className="row">
                <CICharacterStats />
                <div className="col">
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
