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
                        <p className="p-animasi">| Web Developer |</p>
                    </div>
                    <div className="content">
                        <p>Saya adalah seorang Web Developer yang kreatif dan terbiasa dengan mencari sesuatu hal yang baru. Selama satu tahun bekerja saya berperan untuk meningkatkan skill dan kemampuan saya untuk membuat program. Kreativitas yang saya lakukan juga berperan penting dalam meningkatkan keterampilan kepemimpinan sehingga saya bisa mencari solusi saat ada larangan.</p>
                    </div>
                </div>
            </section>
        );
    }
}
export default Header;