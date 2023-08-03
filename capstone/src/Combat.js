import CMeleeCalc from "./CMeleeCalc";
import CRangedCalc from "./CRangedCalc";

const Combat = () => {
    return (
        <>
            <div class="row">
                <CMeleeCalc />
            </div>
            <div className="row">
                <CRangedCalc />
            </div>
            <div id="castingRolls" class="row">
                <h4>Spells</h4>
                <div class="col">
                    <div class="row">
                        <h5>Cantrips</h5>
                    </div>
                    <div class="row">
                        Dropdowns for available cantrips (number of dropdowns
                        may be set or vary due to level and how many available)
                    </div>
                </div>
                <div class="col">
                    <div class="row">
                        <h5>Spells Known</h5>
                    </div>
                    <div class="row">dropdowns for spells known/readied</div>
                </div>
                <div class="col">
                    <div class="row">
                        <h5>Invocations</h5>
                    </div>
                    <div class="row">
                        dropdowns for invocations known by warlocks (possibly
                        only visible if playing a warlock)
                    </div>
                </div>
            </div>
        </>
    );
};

export default Combat;
