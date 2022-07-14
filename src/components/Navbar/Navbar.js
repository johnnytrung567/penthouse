import styled, { css } from 'styled-components'
import { Link } from 'react-scroll'
import { BsSunFill, BsFillMoonFill } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'

export const Nav = styled.nav`
    height: 60px;
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    transition: 0.3s;
    background-color: ${({ theme, isScrollNavbar }) =>
        isScrollNavbar ? theme.orange : 'transparent'};
`

const NavLink = css`
    color: ${({ theme }) => theme.secondary};
    display: felx;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`

export const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;
    text-transform: uppercase;
`

export const MenuBars = styled(FaBars)`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        margin-left: auto;
        color: ${({ theme }) => theme.secondary};
        font-size: 24px;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    margin-right: -56px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavMenuLinks = styled(Link)`
    ${NavLink}
`

export const NavBtn = styled.div`
    margin-left: auto;
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const SunIcon = styled(BsSunFill)`
    margin-left: 24px;
    color: ${({ theme }) => theme.secondary};
    font-size: 20px;
    cursor: pointer;
`

export const MoonIcon = styled(BsFillMoonFill)`
    margin-left: 24px;
    color: ${({ theme }) => theme.secondary};
    font-size: 20px;
    cursor: pointer;
`
