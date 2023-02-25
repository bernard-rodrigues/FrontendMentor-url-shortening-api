import styled from "styled-components"

export const FooterSection = styled.footer`
    background-color: ${props => props.theme.veryDarkViolet};
    padding: 56px 0 57px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        height: auto;
        width: 120px;
        margin-bottom: 47px;
    }

    @media only screen and (min-width: 600px) {
        flex-direction: row;
        padding: 75px calc((100% - ${props => props.theme.desktopWidth})/2) 58px calc((100% - ${props => props.theme.desktopWidth})/2);
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

    @media only screen and (min-width: 600px) {
        text-align: left;
        margin-right: 0;
        min-width: 190px;

        h5{
            margin: 0;
        }
    }
`

export const SocialContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 22.7px;
    margin-top: 41px;

    @media only screen and (min-width: 600px) {
        justify-content: left;
        gap: 24px;
        margin-top: 0px;
        transform: translate(-7px, -3px);
    }
`