import styled from 'styled-components'

export const Conteiner = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
`

export const ImgConteiner = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    height: 200px;
    overflow: hidden;
    @media (max-width: 1030px) {
        height: 150px;
    }
`

export const LeftBackgroung = styled.div`
    position: absolute;
    background-color: rgba(255,179,0,0.9);
    top: 0;
    left: -15%;
    bottom: 0;
    width: 35%;
    height: 100%;
    z-index: 10;
    transform: skew(20deg);
`
export const RightBackgroung = styled.div`
    position: absolute;
    background-color: rgba(255,179,0,0.9);
    top: 0;
    right: -15%;
    bottom: 0;
    width: 35%;
    height: 100%;
    z-index: 10;
    transform: skew(-20deg);
`

export const TextCont = styled.div`
    display: flex;
    position: absolute;
    top: 40%;
    left: 15%;
    bottom: 0;
    height: 50px;
    z-index: 15;
    background: #333;
    padding: 5px;
    @media (max-width: 1030px) {
        height: 40px;
        left: 5%;
    }
`
export const TextPosition = styled.div`
    padding: 10px;
    height: 100%;
    background: ${props => props.back};
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    @media (max-width: 1030px) {
        padding: 5px;
    }
`
