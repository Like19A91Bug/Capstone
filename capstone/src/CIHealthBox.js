const CIHealthBox = () => {
    return (
        <div id="healthBox" className="row space">
            <div className="col">
                <div className="row">
                    <div className="col healthBoxText">
                        <h6>HP:</h6>
                    </div>
                    <div className="col text-center">
                        <h3>10</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col healthBoxText">
                        <p>temp:</p>
                    </div>
                    <div className="col healthBoxText text-center">
                        <p>10</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col healthBoxText text-end">
                        <h6>DMG:</h6>
                    </div>
                    <div className="col text-center">
                        <input id="damageTaken" type="text" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CIHealthBox;
