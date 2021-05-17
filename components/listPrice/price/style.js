import styled from 'styled-components'

export const Conteiner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1000px;
    min-height: 50px;
`
export const Back = styled.div`
    padding: 10px;
    display: flex;
    width: 98%;
    height: 100%;
    transition: all 0.3s ease-out;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    background: ${props => props.back};
    border-bottom: ${props => props.length} ;
    &:hover {
        background: #ffb300;
        width: 100%;
    }
`

export const ConteinerText = styled.div`
    display: flex;
    max-width: 99%;
    align-items: center;
    width: ${props => props.width};
    height: 100%;
`