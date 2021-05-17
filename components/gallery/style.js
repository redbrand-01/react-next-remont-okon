import styled from 'styled-components'

export const Conteiner = styled.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`
export const ImgConteiner = styled.div`
    width: ${props => props.width};
    display: flex;
    position: relative;
`

export const ImgBar = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    transition: 0.5s;
    background: ${props => props.back};
`