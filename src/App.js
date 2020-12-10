import React, { Component } from "react";
import Navbar from "./component/Navbar.js";
import Content from "./component/Content.js";
import Footer from "./component/Footer.js";
import "./App.css";

class App extends Component {
    render() {
        return (
            <section className="container">
                <Navbar />
                <Content />
                <Footer />
            </section>
        );
    }
}
export default App;