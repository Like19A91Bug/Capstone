const CIInspProfPass = () => {
    return (
        <div id="inspProfPass" className="row space">
            <div className="col">
                <div className="row">
                    <div className="col">Inspiration</div>
                    <div className="col">
                        <input id="inspirationTextbox" type="text" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">Proficiency Bonus</div>
                    <div className="col">5</div>
                </div>
                <div className="row">
                    <div className="col">Passive Wisdom</div>
                    <div className="col">14</div>
                </div>
            </div>
        </div>
    );
};

export default CIInspProfPass;
