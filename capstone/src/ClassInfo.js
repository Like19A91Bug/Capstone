import ClIFighterChart from "./ClIFighterChart";

const ClassInfo = () => {
    return (
        <>
            <div className="row">
                <ClIFighterChart />
                <div className="col-6">
                    <div className="row">
                        <h5>Hit Points</h5>
                        <span>
                            <strong>Hit Dice:</strong> 1d10 per Fighter Level
                        </span>
                        <span>
                            <strong>Hit Points at 1st Level:</strong> 10 +
                            Constitution Modifier
                        </span>
                        <span>
                            <strong>Hit Points at Higher Levels:</strong>
                            1d10(or 6) + Constitution Modifier per Fighter Level
                        </span>
                    </div>
                    <hr />
                    <div className="row">
                        <h5>Proficiencies</h5>
                        <span>
                            <strong>Armor:</strong> All Armor, Shields
                        </span>
                        <span>
                            <strong>Weapons:</strong> Simple Weapons, Martial
                            Weapons
                        </span>
                        <span>
                            <strong>Tools:</strong> None
                        </span>
                        <span>
                            <strong>Saving Throws:</strong> Strength,
                            Constitution
                        </span>
                        <span>
                            <strong>Skills:</strong> Choose two skills from:
                            <br />
                            <input type="checkbox" /> Acrobatics
                            <br />
                            <input type="checkbox" /> Animal Handling
                            <br />
                            <input type="checkbox" /> Athletics
                            <br />
                            <input type="checkbox" /> History
                            <br />
                            <input type="checkbox" /> Insight
                            <br />
                            <input type="checkbox" /> Intimidation
                            <br />
                            <input type="checkbox" /> Perception
                            <br />
                            <input type="checkbox" /> Survival
                        </span>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col"></div>
            </div>
        </>
    );
};

export default ClassInfo;
