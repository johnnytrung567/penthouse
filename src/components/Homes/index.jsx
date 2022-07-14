import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {
    Arrow,
    ColumnLeft,
    ColumnRight,
    Heading,
    HomesImage,
    HomesSection,
    HomesTitle,
    HomesWrapper,
    Label,
    LabelWrapper,
} from './Homes'
import { homesDataOne, homesDataTwo } from '../../data/homesData'

const Homes = () => {
    // Animation on scroll
    useEffect(() => {
        Aos.init({ duration: 500 })
    }, [])

    return (
        <HomesSection id='homes'>
            <Heading data-aos='fade-right'>View our newest Homes</Heading>
            <HomesWrapper>
                <ColumnLeft>
                    <HomesImage
                        data-aos='zoom-in'
                        src={homesDataOne.image}
                        alt=''
                    />
                    <HomesTitle>{homesDataOne.title}</HomesTitle>
                    <LabelWrapper>
                        <Label to='homes'>
                            {homesDataOne.label}
                            <Arrow />
                        </Label>
                    </LabelWrapper>
                </ColumnLeft>
                <ColumnRight data-aos='zoom-in'>
                    <HomesImage src={homesDataTwo.image} alt='' />
                    <HomesTitle>{homesDataTwo.title}</HomesTitle>
                    <Label to='homes'>
                        {homesDataTwo.label}
                        <Arrow />
                    </Label>
                </ColumnRight>
            </HomesWrapper>
        </HomesSection>
    )
}

export default Homes
