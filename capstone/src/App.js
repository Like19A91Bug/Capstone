import "./App.css";
import Layout from "./Layout";
import CharacterInfo from "./CharacterInfo";

function App() {
    return (
        <div className="App">
            <div className="container">
                <div className="row">
                    <Layout />
                </div>
                <div className="row">
                    <CharacterInfo />
                    {/* plan to have this change out based on what is selected ideally. if not then plan b */}
                </div>
            </div>
        </div>
    );
}

export default App;
