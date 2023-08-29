import BOHArmInv from "./BOHArmInv";
import BOHCoinPurse from "./BOHCoinPurse";
import BOHWeaponsInv from "./BOHWeaponsInv";
import BOHPotsNScrolls from "./BOHPotsNScrolls";
import BOHGeneralInv from "./BOHGeneralInv";
import "./BagOfHolding.css";

const BagOfHolding = () => {
    return (
        <div>
            <div className="row">
                <BOHArmInv />
                <BOHCoinPurse />
            </div>
            <div className="row">
                <div className="col">
                    <BOHWeaponsInv />
                    <BOHPotsNScrolls />
                </div>
                <BOHGeneralInv />
            </div>
        </div>
    );
};

export default BagOfHolding;
