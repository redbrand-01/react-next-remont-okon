import styled from 'styled-components'

export const Conteiner = styled.section`
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #fafafa;
`
export const ConteinerChooseUs = styled.div`
    padding: 10px;
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const Us = styled.div`
    padding: 0px 10px;
    width: 380px;
    height: 120px;
    display: flex;
    @media (max-width: 800px) {
        width: 300px;
    }
`
export const CountIcon = styled.div`
    display: flex;
    justify-content: center;
    width: 100px;
    height: 100%;
    @media (max-width: 800px) {
        width: 80px;
    }
`
export const Icon = styled.div`
    width: 55px;
    height: 55px;
    border: 1px solid #ffb300!important;
    transform: rotate(45deg);
    border-radius: 5px;
    display: flex; 
    justify-content: center;
    align-items: center;
    @media (max-width: 800px) {
        width: 40px;
        height: 40px;
    }
`

export const CountText = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const TitleText = styled.h3`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px;
    margin: 0;
    font-family: oswald;
    font-weight: 600;
    color: #333;
    font-size: 16px;
    text-transform: uppercase;
    white-space: nowrap;
    @media (max-width: 800px) {
        font-size: 14px;
        padding: 5px;
    }
`
export const TextLine = styled.span`
    width: 100%;
    margin-left: 10px;
    height: 1px;
    display: flex;
    align-items: center;
    border-top: 3px solid #ffb300;
    font-display: swap;
`