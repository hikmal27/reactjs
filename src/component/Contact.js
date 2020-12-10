import React, { Component } from "react";
import "../styles/styleContact.css";

class Contact extends Component {
    render() {
        return (
            <div className="container-contact">
                <div className="contact"> 
                    <div className="card">
                        <div className="child">
                            <h1>Contact Us</h1>
                            <form
                            >
                                <input type="text" name="email" placeholder="Work email"></input>
                                <input type="text" name="about" placeholder="What's this about?"></input>
                                <textarea type="text" name="email" placeholder="Go ahead, we're listening.."></textarea>
                                <input type="submit" className="button-submit" name="submit" value="Submit"></input>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Contact;