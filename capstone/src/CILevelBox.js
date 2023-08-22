const CILevelBox = () => {
    return (
        <div id="levelBox" className="col">
            <div className="row">
                <div className="col">
                    Exp: <input id="expInput" type="number" />
                </div>
            </div>
            <div className="row">
                <div id="currentLvl" className="col">
                    <h1>15</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h4>Level</h4>
                </div>
            </div>
        </div>
    );
};

export default CILevelBox;
