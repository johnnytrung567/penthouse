import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { Button } from '../shared/Button'

export const FooterContainer = styled.footer`
    padding: 6rem;
    background-color: #000d1a;
    color: #fff;

    @media screen and (max-width: 768px) {
        padding: 6rem 2rem;
    }
`

export const FooterWrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    /* grid-template-rows: 2; */
    column-gap: 6rem;
    padding-top: 4rem;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding-top: 0;
    }
`

export const TextGroup = styled.div`
    font-size: 4.5rem;
    font-weight: bold;
    margin-bottom: 4rem;

    @media screen and (max-width: 768px) {
        font-size: 2.5rem;
    }
`

export const ContactGroup = styled.div`
    margin-left: auto;
    display: flex;
    gap: 2rem;
    margin-bottom: 6rem;

    @media screen and (max-width: 768px) {
        margin-left: 0;
        flex-direction: column;
    }
`

export const ContactColumn = styled.ul`
    list-style: none;
    li {
        margin-bottom: 1.5rem;
    }

    li:first-child {
        font-weight: 700;
    }
`

export const ContactItem = styled(Link)`
    text-decoration: none;
    color: #fff;
    transition: 0.3s;

    &:hover {
        color: ${({ theme }) => theme.orange};
    }
`

export const SocialGroup = styled.div`
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;
`

export const SocialIcon = styled.a`
    color: ${({ theme }) => theme.orange};
    font-size: 2rem;
    transition: 0.3s;

    &:hover {
        transform: translateY(-2px);
    }
`

export const FooterBtn = styled(Button)`
    margin-left: auto;
    align-self: start;
    max-width: 160px;

    @media screen and (max-width: 768px) {
        margin-left: 0;
    }
`

export const Arrow = styled(IoMdArrowRoundForward)`
    margin-left: 0.5rem;
`
