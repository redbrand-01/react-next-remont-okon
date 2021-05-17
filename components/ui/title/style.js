import styled from 'styled-components'

export const TitleConteiner = styled.h2`
    margin: 0;
    margin-top: 50px;
    font-size: 30px;
    color: black;
    font-weight: 400;
    padding: 10px 20px ;
    text-align: center;
    position: relative;
    max-width: 500px;
    @media (max-width: 510px) {
        font-size: 20px;
        margin-top: 30px;
        max-width: 300px;
    }
`
export const LineLeft = styled.p`
    position: absolute;
    left: -70px;
    top: 0;
    z-index: 5;
    width: 70px;
    border-top: 3px solid #ffb300;
    @media (max-width: 510px) {
        width: 25px;
        left: -25px;
    }
`

export const LineRight = styled.p`
    position: absolute;
    right: -70px;
    top: 0;
    z-index: 5;
    width: 70px;
    border-top: 3px solid #ffb300;
    @media (max-width: 510px) {
        width: 25px;
        right: -25px;
    }
`
export const CountIcon = styled.p`
    position: absolute;
    top: -50px;
    left: 0;
    right: 0;
    width: inherit;
    z-index: 5;
    @media (max-width: 510px) {
        top: -30px;
    }
`