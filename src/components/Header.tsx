import logo from '../assets/images/logo.svg'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const ShortlyHeader = styled.header`
    margin-top: 39px;
    padding: 0 24px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${props => props.theme.grayishViolet};
`

const Nav = styled.nav`
    position: absolute;
    top: 56px;
    width: calc(100% - 48px);
    height: 383px;
    background-color: ${props => props.theme.darkViolet};
    border-radius: 10px;
    padding: 40px 24px 39px 24px;
    transform: translateX(150%);
    transition: transform 1s;
    z-index: 10;

    ul{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        transition: opacity 3s, transform 1s;
        opacity: 0;
        transform: translateX(100%);

        li{
            width: 100%;
            text-align: center;
            color: #fff;
            font-weight: ${props => props.theme.extraBold};
            font-size: 19px;
        }
    }

    &.show{
        transform: translateX(0);

        ul{
            opacity: 1;
            transform: translateX(0);
        }
    }
`

const Divider = styled.div`
    height: 1px;
    width: 100%;
    background-color: ${props => props.theme.grayishViolet};
    opacity: 0.25;
    transform: translateY(1px);
`

const SignUpButton = styled.button`
    width: 100%;
    height: 48px;
    background-color: ${props => props.theme.cyan};
    border-radius: 25px;
    margin-bottom: 1px;
`

export function Header(){
    const [ navIsOpen, setNavIsOpen ] = useState(false)

    function toggleNavIsOpen(){
        setNavIsOpen(currentState => !currentState)
    }
    
    return(
        <ShortlyHeader>
            <img src={logo} alt="Shortly logo" />
            <MenuIcon fontSize='large' color='inherit' onClick={toggleNavIsOpen}/>
            <Nav className={navIsOpen ? "show" : ""}>
                <ul>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Resources</li>

                    <li><Divider /></li>

                    <li>Login</li>
                    <li><SignUpButton>SignUp</SignUpButton></li>
                </ul>
            </Nav>
        </ShortlyHeader>
    )
}