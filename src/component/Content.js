import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from  "./Header.js";
import Contact from "./Contact.js";
import Galery from "./Galery.js";

class Content extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Header}/>
                <Route path="/galery" component={Galery}/>
                <Route path="/contact" component={Contact}/>
            </Switch>
        );
    }
}
export default Content;