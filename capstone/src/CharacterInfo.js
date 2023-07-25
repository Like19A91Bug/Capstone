import CICharacterInfo from "./CICharacterInfo";
import CILevelBox from "./CILevelBox";
import CICharacterStats from "./CICharacterStats";
import CISkills from "./CISkills";
import CISaves from "./CISaves";
import CIInspProfPass from "./CIInspProfPass";
import CIHealthBox from "./CIHealthBox";

const CharacterInfo = () => {
    return (
        <div className="row">
            <div className="row">
                <CICharacterInfo />
            </div>
            <div className="row">
                <CICharacterStats />
                <div className="col-3">
                    <CISkills />
                </div>
                <div className="col-5">
                    <CISaves />
                    <div className="row blankSpaceOne"></div>
                    <CIInspProfPass />
                    <CILevelBox />
                    <CIHealthBox />
                </div>
            </div>
        </div>
    );
};

export default CharacterInfo;
