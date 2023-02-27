import styled, { keyframes } from "styled-components"

export const appear = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`

export const appearLeft = keyframes`
    from{
        transform: translateX(-100px);
        opacity: 0;
    }
    to{
        transform: translateX(0);
        opacity: 1;
    }
`

export const appearRight = keyframes`
    from{
        transform: translateX(100px);
        opacity: 0;
    }
    to{
        transform: translateX(0);
        opacity: 1;
    }
`

export const ShortlyHeader = styled.header`
    margin-top: 39px;
    padding: 0 24px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${props => props.theme.grayishViolet};

    @media only screen and (min-width: 1200px) {
        margin-top: 51px;
        width: ${props => props.theme.desktopWidth};
        padding: 0;
        
        #hamburger, #x{
            display: none;
        }

        img{
            margin-right: 45px;
            margin-left: 3px;
            opacity: 0;
            animation: ${appearLeft} 1s linear forwards;
        }
    }
`

export const Nav = styled.nav`
    position: absolute;
    top: 56px;
    width: calc(100% - 48px);
    height: 383px;
    background-color: ${props => props.theme.darkViolet};
    border-radius: 10px;
    padding: 39px 24px 39px 24px;
    transform: translateX(150%);
    transition: transform 1s;
    z-index: 10;

    ul{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        transition: opacity 2s, transform 1s;
        opacity: 0;
        transform: translateX(100%);

        li{
            width: 100%;
            text-align: center;
            color: #fff;
            font-weight: ${props => props.theme.bold};
            font-size: 18px;
            margin-bottom: 30px;
        }

        &#menu2 li:first-child{
            margin-top: 32px;
        }
    }

    &.show{
        transform: translateX(0);

        ul{
            opacity: 1;
            transform: translateX(0);
        }
    }

    @media only screen and (min-width: 1200px) {
        position: relative;
        top: 0;
        transform: translateX(0);
        display: flex;
        height: fit-content;
        padding: 0;
        background: none;

        ul{
            transform: translateX(0);
            opacity: 1;
            flex-direction: row;
            justify-content: start;

            li{
                margin-bottom: 0;
                margin-top: -2px;
                width: fit-content;
                font-size: 15px;
                text-align: left;
                color: ${props => props.theme.grayishViolet};
                transition: color 0.2s;

                &:hover{
                    color: ${props => props.theme.veryDarkViolet};
                    cursor: pointer;
                }
            }

            &#menu1{
                margin-left: 1px;

                & li{
                    margin-right: 29px;
                    opacity: 0;

                    &:last-child{
                        margin-left: 3px;
                    }

                    &:nth-child(1){
                        animation: ${appear} 0.5s linear forwards;
                        animation-delay: 0.5s;
                    }

                    &:nth-child(2){
                        animation: ${appear} 0.5s linear forwards;
                        animation-delay: 1s;
                        
                    }

                    &:nth-child(3){
                        animation: ${appear} 0.5s linear forwards;
                        animation-delay: 1.5s;
                    }
                }
            }

            &#menu2{
                justify-content: end;

                & li:first-child{
                    margin-top: 0px;
                    opacity: 0;
                    animation: ${appear} 0.5s linear forwards;
                    animation-delay: 2s;
                }

                & li:last-child{
                    color: #fff;
                    opacity: 0;
                    animation: ${appearRight} 1s linear forwards;
                    animation-delay: 1.75s;
                }
            }
        }

        .divider{
            display: none;
        }
    }
`

export const Divider = styled.div`
    height: 1px;
    width: 100%;
    background-color: ${props => props.theme.grayishViolet};
    opacity: 0.25;
    transform: translateY(1px);
`

export const SignUpButton = styled.button`
    width: 100%;
    height: 48px;
    background-color: ${props => props.theme.cyan};
    border-radius: 25px;
    margin-top: -5px;

    @media only screen and (min-width: 1200px) {
        margin-top: 0;
        margin-left: 37px;
        width: 105px;
        height: 41px;
        font-size: 14.2px;
        transition: background-color 0.2s;

        &:hover{
            background-color: ${props => props.theme.cyanHover};
        }
    }
`