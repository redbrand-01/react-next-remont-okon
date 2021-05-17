import styled from 'styled-components'

export const Conteiner = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    height: 70px;
`
export const Count = styled.nav`
    max-width: 1260px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`
export const Text = styled.p`
    margin: 0;
    font-size: ${props => props.size};
    color: ${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0px 15px;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s;
    font-display: swap;
    font-family: 'Merriweather', serif;
`
export const NavbarPhone = styled.div`
    cursor: pointer;
    position: fixed;
    display: flex;
    align-items: center;
    background: white;
    top: 0;
    left: 0;
    height: 38px;
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
    z-index: ${props => props.open? 101: 50};
`
export const NavbarOpen = styled.nav`
    transition: all 0.3s ease-out;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(${props => props.img}) #333333 repeat-x 0px 0px;
    z-index: ${props => props.open? 100: -100};
    opacity: ${props => props.open? 1: 0};
`

export const TextPhone = styled.p`
    width: 100%;
    margin: 0;
    font-size: ${props => props.size};
    color: ${props => props.color};
    display: flex;
    padding: 10px 20px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease-out;
    border-bottom: 1px solid #444;
    &:hover {
        color: #ffb300;
    }
`
