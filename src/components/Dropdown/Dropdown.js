import styled from 'styled-components'
import { Link } from 'react-scroll'
import { FaTimes } from 'react-icons/fa'

export const DropdownContainer = styled.div`
    position: fixed;
    z-index: 999;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.orange};
    display: grid;
    align-items: center;
    transition: 0.3s;
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    font-size: 2rem;
    cursor: pointer;
`

export const CloseIcon = styled(FaTimes)`
    color: #000d1a;
`

export const DropdownWrapper = styled.div``

export const DropdownMenu = styled.div`
    display: grid;
    grid-template-columns: 1;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    margin-bottom: 4rem;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(4, 60px);
    }
`

export const DropdownLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        color: #000d1a;
    }
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
`
