import styled from 'styled-components'

export const LogoConteiner = styled.div`
    display: flex;
    padding: 10px;
    cursor: pointer;
`
export const TextConteiner = styled.h1`
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Text = styled.p`
    margin: 0;
    font-size: ${props => props.size};
    color: ${props => props.color};
    font-family: 'PT Sans Narrow', sans-serif;
    font-display: swap;
    @media (max-width: 1030px) {
        font-size: ${props => props.small};
    }
`