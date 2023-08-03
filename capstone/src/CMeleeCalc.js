const CMeleeCalc = () => {
    return (
        <div id="meleeCombat" class="col space">
            <h3>Melee Combat</h3>
            <div className="row">
                <div className="col-3">Weapon</div>
                <div className="col-1">DMG Roll</div>
                <div className="col-2">Type</div>
                <div className="col-2">Proficiency</div>
                <div className="col-2">Bonus</div>
            </div>
            <hr />
            <div className="row">
                <div className="col">
                    <p>Moon Sickle</p>
                </div>
                <div className="col-1">
                    <p>1d4</p>
                </div>
                <div className="col">
                    <p>Slashing</p>
                </div>
                <div className="col-1">
                    <p>5</p>
                </div>
                <div className="col">
                    <p>+1 weapon</p>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col">
                    <div className="row">To Hit</div>
                    <div className="row">
                        <div className="col">
                            <p>Weapon</p>
                            <p>Proficiency</p>
                            <p>Bonus</p>
                            <p>Stat</p>
                        </div>
                        <div className="col">
                            <p>d20</p>
                            <p>5</p>
                            <p>1</p>
                            <p>1</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="row">Damage</div>
                    <div className="row">
                        <div className="col">
                            <p>Weapon</p>
                            <p>Proficiency</p>
                            <p>Bonus</p>
                            <p>Stat</p>
                        </div>
                        <div className="col">
                            <p>1d4</p>
                            <p>5</p>
                            <p>1</p>
                            <p>1</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CMeleeCalc;
