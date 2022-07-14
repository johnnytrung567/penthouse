import styled from 'styled-components'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { Link } from 'react-scroll'

export const HomesSection = styled.section`
    padding: 4rem calc((100vw - 1300px) / 2);
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.secondary};
`
export const Heading = styled.h3`
    font-size: clamp(1.5rem, 6vw, 2rem);
    padding: 3rem 2rem;
    margin-bottom: 1rem;
`

export const HomesWrapper = styled.div`
    padding: 3rem 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 550px;
    gap: 12px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

export const ColumnLeft = styled.div`
    align-self: start;
`

export const ColumnRight = styled.div`
    align-self: end;
`

export const HomesImage = styled.img`
    width: 100%;
    max-height: 400px;
    margin: 0 auto;
    object-fit: cover;
`

export const HomesTitle = styled.p`
    font-size: 1.3rem;
    margin: 0.5rem 0;
`

export const LabelWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const Label = styled(Link)`
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    transition: 0.3s;
    text-decoration: none;
    color: ${({ theme }) => theme.primary};

    &:hover {
        color: ${({ theme }) => theme.orange};
    }
`

export const Arrow = styled(IoMdArrowRoundForward)`
    margin-left: 0.5rem;
`
