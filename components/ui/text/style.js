import styled from 'styled-components'

export const TextCount = styled.p`
    max-width: ${props => props.width};
    width: 100%;
    padding: ${props => props.padding};
    text-align: ${props => props.textAlign};
    margin: 0;
    font-size: ${props => props.size};
    color: ${props => props.color};
    font-weight: 400;
    transition: 0.5s all ease-in-out;
    font-display: swap;
    @media (max-width: 1030px) {
        font-size: ${props => props.mini};
    }
    @media (max-width: 510px) {
        font-size: ${props => props.small};
    }
`