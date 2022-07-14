import { useEffect, useRef, useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {
    Arrow,
    HeroBtn,
    HeroContent,
    HeroImage,
    HeroSection,
    HeroSlide,
    HeroSlider,
    HeroWrapper,
    NextArrow,
    PrevArrow,
    SliderButtons,
} from './Hero'

const Hero = ({ slides }) => {
    // Animation on scroll
    useEffect(() => {
        Aos.init({ duration: 600 })
    }, [])

    const [currentSlide, setCurrentSlide] = useState(0)
    const length = slides.length
    const timeout = useRef(null)

    useEffect(() => {
        const nextSlide = () =>
            setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
        timeout.current = setTimeout(nextSlide, 1500)

        return () => {
            if (timeout.current) clearTimeout(timeout.current)
        }
    }, [currentSlide, length])

    const nextSlide = () => {
        if (timeout.current) clearTimeout(timeout.current)
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
    }
    const prevSlide = () => {
        if (timeout.current) clearTimeout(timeout.current)
        setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1)
    }

    if (!Array.isArray(slides) || length <= 0) return null

    return (
        <HeroSection id='rentals'>
            <HeroWrapper>
                {slides.map((slide, index) => (
                    <HeroSlide key={index}>
                        {index === currentSlide && (
                            <HeroSlider>
                                <HeroImage src={slide.image} alt={slide.alt} />
                                <HeroContent>
                                    <h1 data-aos='fade-down'>{slide.title}</h1>
                                    <p data-aos='fade-down'>{slide.price}</p>
                                    <HeroBtn
                                        to={slide.path}
                                        primary='true'
                                        data-aos='zoom-out'
                                    >
                                        {slide.label}
                                        <Arrow />
                                    </HeroBtn>
                                </HeroContent>
                            </HeroSlider>
                        )}
                    </HeroSlide>
                ))}
                <SliderButtons>
                    <PrevArrow onClick={prevSlide} />
                    <NextArrow onClick={nextSlide} />
                </SliderButtons>
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero
