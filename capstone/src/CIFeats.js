import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import APIURL from "./APIURL";

const CIFeats = ({ data, setData }) => {
    const [featsOptions, setFeatsOptions] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const makeAPICall = async () => {
            const response = await fetch(
                `https://www.dnd5eapi.co/api/features`
            );
            const data = await response.json();
            setFeatsOptions(data.results);
            console.log(data);
        };
        makeAPICall();
    }, []);

    const addFeat = () => {
        setData({ ...data, feats: [...data.feats, {}] });
    };

    const save = async (event) => {
        event.preventDefault();

        const res = await fetch(`${APIURL}/feats`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ feats: data.feats, characterID: id }),
        });

        setEditMode(false);
    };

    if (!data.feats) {
        return <div>Loading</div>;
    }

    return (
        <div id="featsBox" className="col space">
            <div className="row">Feats</div>
            <div className="row">
                <div className="col">
                    {editMode ? (
                        <div>
                            {data.feats.map((feat, index) => {
                                return (
                                    <FeatsDropdown
                                        featsOptions={featsOptions}
                                        index={index}
                                        data={data}
                                        setData={setData}
                                    />
                                );
                            })}
                            <div className="row">
                                <div className="col">
                                    <button
                                        className="btn featsButton"
                                        onClick={addFeat}
                                    >
                                        Add
                                    </button>
                                </div>
                                <div className="col">
                                    <button
                                        className="btn featsButton"
                                        onClick={save}
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>
                            {data.feats.map((feat) => {
                                return <p key={feat.id}>{feat.name}</p>;
                            })}

                            <div>
                                <button
                                    onClick={() => {
                                        setEditMode(true);
                                    }}
                                >
                                    Edit
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const FeatsDropdown = ({ featsOptions, data, setData, index }) => {
    if (!featsOptions) {
        return <div>Loading</div>;
    }

    const feat = data.feats[index];

    const updateFeat = (event) => {
        const feats = [...data.feats];
        feats[index].name = event.target.value;
        setData({ ...data, feats });
    };

    return (
        <div className="row">
            {/* If in edit mode, Display dropdown and save button */}
            <select value={feat.name} onChange={updateFeat}>
                <option />
                {featsOptions.map((feats, index) => {
                    // console.log(feats.index);
                    return <option key={index}>{feats.name}</option>;
                })}
            </select>
        </div>
    );
};

export default CIFeats;
