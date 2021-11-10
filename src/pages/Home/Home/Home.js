import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import Services from '../../../Shared/Services/Services';
import Apointment from '../Apointment/Apointment';
import Banner from '../Banner/Banner';
import ContuctUs from '../ContuctUs/ContuctUs';
import Exeptional from '../Exeptional/Exeptional';
import Footer from '../Footer/Footer';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Services />
            <Exeptional />
            <Apointment />
            <Testimonial/>
            <ContuctUs></ContuctUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;