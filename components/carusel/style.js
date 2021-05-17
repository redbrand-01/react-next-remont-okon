import styled from 'styled-components'

export const Conteiner = styled.section`
    width: 100%;
`
export const Arrow = styled.div`
    width: 100px;
    height: 100px;
    background: rgba(0,0,0,0.15);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover{
        background: rgba(255, 255, 255, 0.15);
    }
    @media (max-width: 1024px) {
        width: 50px;
        height: 50px;
    }
`
export const CaruselCount = styled.div`
    width: 100%;
    position: relative;
`
export const CaruselTextCount = styled.div`
    position: absolute;
    top: 0;
    left: 15%;
    height: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 1030px) {
        max-width: 350px;
    }
    @media (max-width: 550px) {
        max-width: 200px;
        left: 15%;
    }
    
`


export const CaruselText = styled.div`
    max-width:  ${props => props.width};
    font-size: ${props => props.size};
    color: ${props => props.color};
    background: ${props => props.back};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
    font-display: swap;
    @media (max-width: 1030px) {
        font-size: ${props => props.mini};
        margin: 5px 5px;
    }
    @media (max-width: 550px) {
        font-size: ${props => props.small};
   
        left: 15%;
    }
`