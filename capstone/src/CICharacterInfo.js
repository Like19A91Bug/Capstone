const CICharacterInfo = () => {
    return (
        <div id="characterInfo" className="col space">
            <div className="row">
                <div className="col">
                    <table class="table">
                        <tbody>
                            <tr>
                                <th>Name:</th>
                                <td>Demo</td>
                            </tr>
                            <tr>
                                <th>Race:</th>
                                <td>Human</td>
                            </tr>
                            <tr>
                                <th>Size:</th>
                                <td>Medium</td>
                            </tr>
                            <tr>
                                <th>Speed:</th>
                                <td>30mph</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col">
                    <table class="table">
                        <tbody>
                            <tr>
                                <th>Class:</th>
                                <td>Fighter</td>
                            </tr>
                            <tr>
                                <th>Sub-class:</th>
                                <td>Champion</td>
                            </tr>
                            <tr>
                                <th>Alignment:</th>
                                <td>Lawful Good</td>
                            </tr>
                            <tr>
                                <th>Height:</th>
                                <td>6ft</td>
                            </tr>
                            <tr>
                                <th>Weight:</th>
                                <td>200lbs</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* <div className="col">
                    <h6></h6>
                    <h6></h6>
                    <h6></h6>
                    <h6></h6>
                    <h6></h6>
                </div> */}
            </div>
        </div>
    );
};

export default CICharacterInfo;
