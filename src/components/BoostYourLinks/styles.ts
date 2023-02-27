import styled, { keyframes } from 'styled-components'
import { Button } from "../Presentation/styles"
import bgBoostMobile from "../../assets/images/bg-boost-mobile.svg"
import bgBoostDesktop from "../../assets/images/bg-boost-desktop.svg"

const appearLeft = keyframes`
    from{
        opacity: 0;
        transform: translate(-100px, -5px);
    }
    to{
        opacity: 1;
        transform: translate(0, -5px);
    }
`

const appearRight = keyframes`
    from{
        opacity: 0;
        transform: translate(100px, 6px);
    }
    to{
        opacity: 1;
        transform: translate(0, 6px);
    }
`

export const BoostContainer = styled.section`
    width: 100%;
    height: 300px;
    background-image: url(${bgBoostMobile});
    background-size: cover;
    background-color: ${props => props.theme.darkViolet};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 11px;

    h2{
        font-weight: ${props => props.theme.bold};
        color: #fff;
        font-size: 26.6px;
        text-align: center;
        opacity: 0;
        
        &.animate{
            animation: ${appearLeft} 1s linear forwards;
        }
    }

    @media only screen and (min-width: 1200px) {
        height: 250px;
        background-image: url(${bgBoostDesktop});
        background-size: cover;
        
        
        h2{
            font-size: 37.8px;
            transform: translateY(-5px);
            
        }

    }
`

export const BoostButton = styled(Button)`
    margin: 0;
    transform: translateY(6px);
    opacity: 0;

    &.animate{
        animation: ${appearRight} 1s linear forwards;
    }
`