import React from 'react';
import AboutOur from './AboutOur';
import Experiences from './Experiences';
import Footer from './Footer';
import MainSlider from './MainSlider';
import NavBar from './NavBar';
import Repair from './Repair';
import Services from './Services';

const HomePage = () => {
    return (
        <>
            <MainSlider></MainSlider>
            <NavBar></NavBar>
            <Services></Services>
            <Experiences></Experiences>
            <AboutOur></AboutOur>
            <Repair></Repair>
            <Footer></Footer>
        </>
    );
};

export default HomePage;