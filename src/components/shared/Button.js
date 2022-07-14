import { Link } from 'react-scroll'
import styled from 'styled-components'

export const Button = styled(Link)`
    background: ${({ theme, primary }) => (primary ? '#000d1a' : theme.orange)};
    white-space: nowrap;
    outline: none;
    border: none;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ big }) => (big ? '16px 40px' : '14px 24px')};
    color: ${({ theme, primary }) => (primary ? '#fff' : '#000d1a')};
    font-size: ${({ big }) => (big ? '20px' : '14px')};
    border-radius: ${({ rounded }) => (rounded ? '100rem' : '0')};

    &:hover {
        transform: translateY(-2px);
    }
`
