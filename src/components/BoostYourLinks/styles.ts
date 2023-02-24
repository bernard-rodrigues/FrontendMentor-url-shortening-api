import styled from 'styled-components'
import { Button } from "../Presentation/styles"
import bgBoostMobile from "../../assets/images/bg-boost-mobile.svg"

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
`

export const BoostButton = styled(Button)`
    margin: 0;
    transform: translateY(6px);
`