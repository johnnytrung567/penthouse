import styled from 'styled-components'
import { Button } from '../shared/Button'

export const AboutSection = styled.section`
    padding: 4rem 0;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.secondary};
`

export const AboutWrapper = styled.div`
    padding: 6rem 0;
    background-color: #000d1a;
    display: grid;
    grid-template-columns: 800px 1fr;
    grid-template-rows: 600px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

export const ColumnLeft = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        order: 2;
    }
`

export const InnerLeft = styled.div`
    background-color: ${({ theme }) => theme.secondary};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 4rem 6rem;

    h3 {
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }

    p {
        margin-bottom: 2rem;
    }

    @media screen and (max-width: 768px) {
        padding: 4rem 2rem;
    }
`

export const ColumnRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        @media screen and (max-width: 768px) {
            width: 90%;
            height: 90%;
        }
    }
`

export const AboutBtn = styled(Button)`
    padding-left: 3rem;
    padding-right: 3rem;
`
