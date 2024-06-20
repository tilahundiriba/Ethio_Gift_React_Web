import React from "react";
import '../App/App.css';
import Home from '../Home/Home.js';
import Cards from "../Card/Cards.js";
import Footer from "../Footer/Footer.js";
const HomeSection = () => {
    return (
        <>
            <Home />
            <Cards/>
            <Footer/>

        </>
    )
}
export default HomeSection;