import styled from 'styled-components'

export const Conteiner = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    background: ${props => props.back};
`

export const CardConteiner = styled.div`
    margin-top: 150px;
    bottom: -100px;
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 10;
    @media (max-width: 1030px) {
        margin-top: 100px;
    }
`