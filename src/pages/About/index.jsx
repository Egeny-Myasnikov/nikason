import Header from '@components/Header'
import Footer from '@components/Footer'
import Advantage from '@components/Advantage';
import RequestBlock from '@components/RequestBlock';
import HeroBlock from './HeroBlock';
import AboutBlock from './AboutBlock';
import PhilosophyBlock from './PhilosophyBlock';
import MassMediaAboutUsBlock from './MassMediaAboutUsBlock';

const About = () => {
    return (
        <div className='wrapper'>
            <Header />
            <main className="main">
                <HeroBlock />
                <Advantage aboutPage />
                <AboutBlock />
                <PhilosophyBlock />
                <MassMediaAboutUsBlock />
                <RequestBlock />
            </main>
            <Footer />
        </div>
    );
};

export default About;