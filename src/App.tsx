import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MapContainer from "./components/map-container";

function App() {
    return (
        <div className="App">
            <section id="header">
                <header className="major">
                    <h1>Wave Watchers</h1>
                    <p>Barrels Await, Wave Watchers Navigate.</p>
                </header>
                <div className="container">
                    <ul className="actions special">
                        <li>
                            <a href="#one" className="button primary scrolly">
                                Begin
                            </a>
                        </li>
                    </ul>
                </div>
            </section>

            <section id="one" className="main special">
                <div className="container">
                    <span className="image fit primary">
                        <img src="images/pic01.jpg" alt="" />
                    </span>
                    <div className="content">
                        <header className="major">
                            <h2>Who I am</h2>
                        </header>
                        <img src="./images/header1.png" alt="" />
                    </div>
                    <a href="#two" className="goto-next scrolly">
                        Next
                    </a>
                </div>
            </section>

            <section id="two" className="main special">
                <div className="container">
                    <span className="image fit primary">
                        <img src="images/pic02.jpg" alt="" />
                    </span>
                    <div className="content">
                        <header className="major">
                            <h2>Stuff I do</h2>
                        </header>
                        <p>
                            Consequat sed ultricies rutrum. Sed adipiscing eu
                            amet interdum lorem blandit vis ac commodo aliquet
                            vulputate.
                        </p>
                        <ul className="icons-grid">
                            <li>
                                <span className="icon solid major fa-camera-retro"></span>
                                <h3>Magna Etiam</h3>
                            </li>
                            <li>
                                <span className="icon solid major fa-pencil-alt"></span>
                                <h3>Lorem Ipsum</h3>
                            </li>
                            <li>
                                <span className="icon solid major fa-code"></span>
                                <h3>Nulla Tempus</h3>
                            </li>
                            <li>
                                <span className="icon solid major fa-coffee"></span>
                                <h3>Sed Feugiat</h3>
                            </li>
                        </ul>
                    </div>
                    <a href="#three" className="goto-next scrolly">
                        Next
                    </a>
                </div>
            </section>

            <section id="three" className="main special">
                <div className="container">
                    <span className="image fit primary">
                        <img src="images/pic03.jpg" alt="" />
                    </span>
                    <div className="content">
                        <header className="major">
                            <h2>One more thing</h2>
                        </header>
                        <p>
                            Aliquam ante ac id. Adipiscing interdum lorem
                            praesent fusce pellentesque arcu feugiat. Consequat
                            sed ultricies rutrum. Sed adipiscing eu amet
                            interdum lorem blandit vis ac commodo aliquet
                            integer vulputate phasellus lorem ipsum dolor lorem
                            magna consequat sed etiam adipiscing interdum.
                        </p>
                    </div>
                    <a href="#footer" className="goto-next scrolly">
                        Next
                    </a>
                </div>
            </section>

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
