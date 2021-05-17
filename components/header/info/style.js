import styled from 'styled-components'

export const ConteinerInfo = styled.section`
    width: 100%;
    min-height: 100px;
    overflow: hidden;
    background: url(${props => props.img}) #333333 repeat-x 0px 0px;
    display: flex;
    justify-content: center;
`

export const Count = styled.div`
    max-width: 1280px;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10px;
    @media (max-width: 510px) {
        flex-direction: column;
        align-items: flex-end
    }
`

export const CallTimeCounteiner = styled.div`
    display: flex;
    align-items: flex-end;
    @media (max-width: 1030px) {
        padding: 0px;
        padding-bottom: 10px;
        flex-direction: column;
    }
`
export const CallConteiner = styled.div`
    height: 60%;

    padding-left: 20px;
    @media (max-width: 1030px) {
        min-width: 230px;
        padding-left: 0px;
    }

`
export const Text = styled.p`
    margin: 0;
    font-size: ${props => props.size};
    color: ${props => props.color};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 50%;
    font-family: oswald;
    font-display: swap;
    @media (max-width: 1030px) {
        font-size: ${props => props.small};
    }
    @media (max-width: 510px) {
        justify-content: flex-end;
    }
`
export const TimeWorkConteiner = styled.div`
    padding: 5px;
    border-right: 1px solid white;
    display: flex;
    align-items: flex-end;
    @media (max-width: 1030px) {
        padding-bottom: 10px;
        border-right: 0px solid white;
        border-bottom: 1px solid white;
    }
`
export const TimeConteiner = styled.div`
    width: 100%;
    height: 100%;
    padding-right: 20px;
    @media (max-width: 1030px) {
        padding-right: 0px;
    }
`