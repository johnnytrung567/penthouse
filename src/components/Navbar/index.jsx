import {
    Logo,
    MenuBars,
    MoonIcon,
    Nav,
    NavBtn,
    NavMenu,
    NavMenuLinks,
    SunIcon,
} from './Navbar'
import { menuData } from '../../data/menuData'
import { Button } from '../shared/Button'
import { useEffect, useState } from 'react'

const Navbar = ({ isDarkMode, toggleDarkMode, toggleDropdown }) => {
    const [isScrollNavbar, setScrollNavbar] = useState(false)

    const changeHeight = () => {
        if (window.scrollY >= 60) setScrollNavbar(true)
        else setScrollNavbar(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', changeHeight)

        return () => window.removeEventListener('scroll', changeHeight)
    }, [])

    return (
        <Nav isScrollNavbar={isScrollNavbar}>
            <Logo to='rentals'>Penthouse</Logo>
            {isDarkMode ? (
                <SunIcon onClick={toggleDarkMode} />
            ) : (
                <MoonIcon onClick={toggleDarkMode} />
            )}
            <MenuBars onClick={toggleDropdown} />
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to='contact' primary='true'>
                    Contact Us
                </Button>
            </NavBtn>
        </Nav>
    )
}
export default Navbar
