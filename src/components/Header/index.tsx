import logo from '../../assets/images/logo.svg'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { Divider, Nav, ShortlyHeader, SignUpButton } from './styles';

export function Header(){
    const [ navIsOpen, setNavIsOpen ] = useState(false)

    function toggleNavIsOpen(){
        setNavIsOpen(currentState => !currentState)
    }
    
    return(
        <ShortlyHeader>
            <img src={logo} alt="Shortly logo" />
            
            { navIsOpen 
            ? <CloseIcon id="x" fontSize="large" color="inherit" onClick={toggleNavIsOpen}/> 
            : <MenuIcon id="hamburger" fontSize="large" color="inherit" onClick={toggleNavIsOpen}/>
            }
            
            <Nav className={navIsOpen ? "show" : ""}>
                <ul id="menu1">
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Resources</li>
                </ul>
                
                <Divider className="divider"/>
                
                <ul id="menu2">
                    <li>Login</li>
                    <li><SignUpButton>SignUp</SignUpButton></li>

                </ul>
            </Nav>
        </ShortlyHeader>
    )
}