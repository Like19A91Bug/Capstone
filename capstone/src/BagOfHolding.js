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
                <div className="col">
                    <BOHWeaponsInv />
                    <BOHPotsNScrolls />
                </div>
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
                </div>
            </div>
        </div>
    );
};

export default BagOfHolding;
