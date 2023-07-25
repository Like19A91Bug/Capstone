const CILevelBox = () => {
    return (
        <div id="levelBox" className="col space">
            <div className="row">
                <div className="col">Exp:</div>
                <div id="expInput" className="col">
                    <input type="text" />
                </div>
            </div>
            <div className="row">
                <div className="col"></div>
                <div id="currentLvl" className="col">
                    <h1>15</h1>
                </div>
                <div className="col"></div>
            </div>
            <div className="row">
                <div className="col">Level</div>
            </div>
        </div>
    );
};

export default CILevelBox;
