import styled from 'styled-components'

export const CardConteiner = styled.section`
    width: 100%;
    max-width: 1160px;
    display: flex;
    padding: 10px;
    justify-content: center;
    min-height: 100px;
    @media (max-width: 780px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`
export const CardBox = styled.div`
    width: 32%;
    display: flex;
    min-height: 300px;
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;
    background: white;
    margin: 0px 10px;
    @media (max-width: 780px) {
        width: 45%;
        margin: 10px;
    }
    @media (max-width: 480px) {
        width: 90%;
        margin: 10px;
    }
`
export const ImgCount = styled.div`
    width: 100%;
    position: relative;
    overflow: hidden;

`
export const TextCont = styled.div`
    position: absolute;
    width: 100%;
    background: red;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${props => props.back};
    z-index: 5;
    display: flex;
    font-display: swap;
`