import styled from "styled-components"

export const FooterSection = styled.footer`
    background-color: ${props => props.theme.veryDarkViolet};
    padding: 56px 0 10px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    img{
        height: auto;
        width: 120px;
        margin-bottom: 47px;
    }

    #about{
        font-size: 10px;
        background-color: #fff;
        width: 100%;
        text-align: center;
        position: absolute;
        bottom: 0;
        left: 0;
        color: ${props => props.theme.veryDarkViolet};

        a{
            font-weight: ${props => props.theme.bold};
        }

        @media only screen and (min-width: 1200px) {
            font-size: 13px;

            a{
                transition: color 0.2s;

                &:hover{
                    color: ${props => props.theme.cyan};
                }
            }
            
        }
    }

    @media only screen and (min-width: 1200px) {
        flex-direction: row;
        padding: 75px calc((100% - ${props => props.theme.desktopWidth})/2) 48px calc((100% - ${props => props.theme.desktopWidth})/2);
        align-items: flex-start;

        #footer-logo{
            transform: translateX(-3px);
            margin-right: 259px;
        }
    }
`

export const LinkGroup = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 31px;
    
    h5{
        color: #fff;
        font-weight: ${props => props.theme.bold};
        font-size: 15.5px;
        margin-bottom: 20px;
    }

    a{
        color: ${props => props.theme.gray};
        font-size: 14.5px;
        line-height: 33px;
    }

    @media only screen and (min-width: 1200px) {
        text-align: left;
        margin-right: 0;
        min-width: 190px;

        h5{
            margin: 0;
        }

        a:hover{
            color: ${props => props.theme.cyan};
        }
    }
`

export const SocialContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 24px;
    margin-top: 10px;

    img{
        width: 24px;
        height: auto;
    }

    @media only screen and (min-width: 1200px) {
        justify-content: left;
        gap: 24px;
        margin-top: 0px;
        transform: translate(-7px, -3px);

        img:hover{
            filter: invert(54%) sepia(41%) saturate(6876%) hue-rotate(164deg) brightness(99%) contrast(101%);
            cursor: pointer;
        }
    }
`