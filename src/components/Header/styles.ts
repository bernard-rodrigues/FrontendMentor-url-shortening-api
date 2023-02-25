import styled from "styled-components"

export const ShortlyHeader = styled.header`
    margin-top: 39px;
    padding: 0 24px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${props => props.theme.grayishViolet};

    @media only screen and (min-width: 600px) {
        margin-top: 55px;
        width: 1110px;

        #hamburger, #x{
            display: none;
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

    @media only screen and (min-width: 600px) {
        position: relative;
        top: 0;
        width: 100%;
        height: 0px;
        background: none;
        border-radius: none;
        padding: 0;
        transform: translateX(0);
        transition: none;
        z-index: 0;
        display: flex;
        align-items: center;

        .divider{
            display: none;
        }

        ul{
            height: 100%;
            flex-direction: row;
            transition: none;
            opacity: 1;
            transform: translateX(0);
            margin-left: 2px;

            li{
                height: 100%;
                color: ${props => props.theme.grayishViolet};
                font-weight: ${props => props.theme.bold};
                font-size: 15px;
            }

            &#menu2{
                & li:first-child{
                    margin-top: 0px;
                }

                & li:last-child{
                    color: #fff;
                }
            }
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
`