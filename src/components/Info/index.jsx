import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Button } from '../shared/Button'
import { ColumnLeft, ColumnRight, InfoSection, InfoWrapper } from './Info'

const Info = props => {
    const {
        heading,
        paragraphOne,
        paragraphTwo,
        buttonLabel,
        image,
        reverse,
        delay,
    } = props

    // Animation on scroll
    useEffect(() => {
        Aos.init({ duration: 600, delay })
    }, [])

    return (
        <InfoSection>
            <InfoWrapper>
                <ColumnLeft>
                    <h3>{heading}</h3>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                    <Button to='homes' primary='true'>
                        {buttonLabel}
                    </Button>
                </ColumnLeft>
                <ColumnRight data-aos='zoom-out' reverse={reverse}>
                    <img src={image} alt='' />
                </ColumnRight>
            </InfoWrapper>
        </InfoSection>
    )
}

export default Info
