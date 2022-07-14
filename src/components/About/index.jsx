import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {
    AboutBtn,
    AboutSection,
    AboutWrapper,
    ColumnLeft,
    ColumnRight,
    InnerLeft,
} from './About'
import { aboutData } from '../../data/aboutData'

const About = () => {
    // Animation on scroll
    useEffect(() => {
        Aos.init({ duration: 500 })
    }, [])

    return (
        <AboutSection id='about'>
            <AboutWrapper>
                <ColumnLeft>
                    <InnerLeft data-aos='fade-right'>
                        <h3>{aboutData.heading}</h3>
                        <p>{aboutData.paragraphOne}</p>
                        <p>{aboutData.paragraphTwo}</p>
                        <AboutBtn to='/'>{aboutData.buttonLabel}</AboutBtn>
                    </InnerLeft>
                </ColumnLeft>
                <ColumnRight data-aos='fade-left'>
                    <img src={aboutData.image} alt='' />
                </ColumnRight>
            </AboutWrapper>
        </AboutSection>
    )
}

export default About
