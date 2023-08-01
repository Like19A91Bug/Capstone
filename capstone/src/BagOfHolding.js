import BOHArmInv from "./BOHArmInv";
import BOHCoinPurse from "./BOHCoinPurse";
import BOHWeaponsInv from "./BOHWeaponsInv";
import BOHPotsNScrolls from "./BOHPotsNScrolls";

const BagOfHolding = () => {
    return (
        <div>
            <div className="row">
                <BOHArmInv />
                <BOHCoinPurse />
            </div>
            <div className="row">
                <BOHWeaponsInv />
                <BOHPotsNScrolls />
            </div>
        </div>
    );
};

export default BagOfHolding;
