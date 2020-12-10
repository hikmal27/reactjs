import React, { Component } from "react";
import Profil from "../images/g1.jpg";
import "../styles/styleHeader.css";

class Header extends Component {
    render() {
        return (
            <section className="header">
                <div className="bungkus">
                    <div className="poto-profil">
                        <img src={Profil} className="img-animasi" alt="fotoprofil"/>
                    </div>
                    <div className="deskripsi">
                        <h1 className="h1-animasi">Hikmal Maulana Ramadhan</h1>
                        <p className="p-animasi">| Front-End Developer |</p>
                    </div>
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam recusandae amet ullam porro adipisci fuga totam similique neque, ratione dignissimos saepe tempora itaque consectetur, repellendus earum. Dolorem, sit at rem quisquam exercitationem sequi natus earum quibusdam! Vero, voluptas voluptates provident ipsum quibusdam cupiditate ullam id porro deserunt, distinctio nesciunt expedita!</p>
                    </div>
                </div>
            </section>
        );
    }
}
export default Header;