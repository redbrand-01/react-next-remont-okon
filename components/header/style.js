import styled from 'styled-components'

export const Conteiner = styled.section`
    width: 100%;
    background: #222222;
    border-bottom: solid 1px #444444;
    display: flex;
    justify-content: center;
`
export const Count = styled.div`
    max-width: 1280px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

export const SocialConteiner = styled.nav`
    display: flex;
    margin-right: 40px;
`
export const SocialIcon = styled.a`
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 1px solid #444444;
    width: 40px;
    height: 40px;
    cursor: pointer;

    &:last-child {
        border-right: 1px solid #444444;
    }
`
export const EmailConteiner = styled.div`
    padding-right: 10px;
    padding-left: 10px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`
export const EmailText = styled.p`
    margin: 0;
    color: white;
    font-size: 14px;
`

export const Ahref = styled.a`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
`
