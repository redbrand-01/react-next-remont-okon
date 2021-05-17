import styled from 'styled-components'

export const Conteiner = styled.section`
    max-width: 1260px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 720px) {
        flex-direction: column;
    }
`
export const Count = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 10px;
    max-width: 400px;
    margin-bottom: 20px;
    margin-top: 20px;
`
export const Text = styled.p`
    color: ${props => props.color};
    font-size: ${props => props.size};
    margin: 0;
    text-indent: ${props => props.indent};
    display: flex;
    align-items: center;
    font-display: swap;
    @media (max-width: 720px) {
        font-size: ${props => props.small};
    }
`
export const ContactsConteiner = styled.div`
    display: flex;
    min-height: 30px;
    padding: 5px;
    margin-bottom: 20px;
`