import { ThemeProvider } from 'styled-components'
import { useEffect, useState } from 'react'
import GlobalStyle, { darkTheme, lightTheme } from './globalStyles'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { sliderData } from './data/sliderData'
import Dropdown from './components/Dropdown'
import Info from './components/Info'
import { infoDataOne, infoDataTwo } from './data/infoData'
import Homes from './components/Homes'
import About from './components/About'
import Footer from './components/Footer'

function App() {
    const [isDropdownOpen, setDropdownOpen] = useState(false)
    const [isDarkMode, setDarkMode] = useState(
        localStorage.penthouseTheme === 'dark'
    )

    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen)
    const toggleDarkMode = () => {
        const nextMode = isDarkMode ? 'light' : 'dark'
        setDarkMode(!isDarkMode)
        localStorage.setItem('penthouseTheme', nextMode)
    }

    useEffect(() => {
        window.onbeforeunload = () => window.scrollTo(0, 0)
    }, [])

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <GlobalStyle />
            <Navbar
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
                toggleDropdown={toggleDropdown}
            />
            <Dropdown isOpen={isDropdownOpen} toggle={toggleDropdown} />
            <Hero slides={sliderData} />
            <Info {...infoDataOne} />
            <Homes />
            <About />
            <Info {...infoDataTwo} />
            <Footer />
        </ThemeProvider>
    )
}

export default App
