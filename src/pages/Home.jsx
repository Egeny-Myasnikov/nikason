import React, { useRef } from 'react';
import AdvantageBlock from '../components/AdvantageBlock';
import CatalogBlock from '../components/CatalogBlock';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroBlock from '../components/HeroBlock';
import VideoBlock from '../components/VideoBlock';
import QualityAssuranceBlock from '../components/QualityAssuranceBlock';
import AboutBlock from '../components/AboutBlock';
import ServecesBlock from '../components/ServecesBlock';
const Home = () => {
    const servecesRef = useRef(null);
    const moveTo = () => {
        servecesRef.current.scrollIntoView({
            behavior: "smooth",
        });
    }

    return (
        <div className='wrapper'>
            <Header />
            <main className="main">
                <HeroBlock btnOnClick={moveTo} />
                <div className="container">
                    <AdvantageBlock />
                    <CatalogBlock />
                </div>
                <AboutBlock />
                <VideoBlock />
                <ServecesBlock servecesref={servecesRef} />
                <QualityAssuranceBlock />

            </main>
            <Footer />
        </div>
    );
};

export default Home;