import React, { useRef } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import HeroBlock from './HeroBlock';
import Advantage from '@components/Advantage';
import CatalogBlock from './CatalogBlock';
import AboutBlock from './AboutBlock';
import VideoBlock from './VideoBlock';
import ServecesBlock from './ServecesBlock';
import QualityAssuranceBlock from './QualityAssuranceBlock';
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
                <Advantage title='NIKASON BRAND это' homePage />
                <div className="container">
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