import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MapContainer from "./components/map-container";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h2>Barrels Await, Wave Watchers Navigate.</h2>
                <h1>Wave Watchers</h1>
                <div id="header_image">
                    <img src="/header.png" alt="people surfing" />
                </div>
                <div id="blank_space">
                    <h2>Enter your location</h2>
                    <form action="" method="post">
                        <label>City:</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            placeholder="Enter your city"
                            required
                        />

                        <label>Country:</label>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            placeholder="Enter your country"
                            required
                        />

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </header>
            {/* <MapContainer
                markerPosition={{
                    lat: 30.393181,
                    lng: -86.583309,
                }}
            /> */}
        </div>
    );
}

export default App;
