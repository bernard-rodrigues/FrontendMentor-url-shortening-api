import styled from 'styled-components'
import { Button } from "../Presentation/styles"
import bgBoostMobile from "../../assets/images/bg-boost-mobile.svg"
import bgBoostDesktop from "../../assets/images/bg-boost-desktop.svg"

export const BoostContainer = styled.section`
    width: 100%;
    height: 300px;
    background-image: url(${bgBoostMobile});
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
    }

    @media only screen and (min-width: 600px) {
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
`