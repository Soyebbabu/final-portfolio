import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'HTML-5'} progress={'95%'} width={'95%'} />
                <SkillsSection skill={'CSS-3'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Bootstrap-5'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Javascript'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'React.js'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Node.js'} progress={'60%'} width={'46%'} />
                <SkillsSection skill={'MongoDB'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'Express.js'} progress={'45%'} width={'45%'} />
                <SkillsSection skill={'Next.js'} progress={'30%'} width={'30%'} />
            </div>

            <Tittle title={'Services'} span={'Services'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Web design & Development'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <ServicesSection image={intelligence} title={'Networking'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <ServicesSection image={gamedev} title={'Digital Marketing'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />

                
            </div>

        </div>
    )
}

export default AboutPage;
