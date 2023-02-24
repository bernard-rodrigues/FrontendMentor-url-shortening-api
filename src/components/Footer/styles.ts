import styled from "styled-components"

export const FooterSection = styled.footer`
    background-color: ${props => props.theme.veryDarkViolet};
    padding: 44px 0 57px 0;
`
export const FooterTitle = styled.h2`
    color: #fff;
    font-size: 32.5px;
    font-weight: ${props => props.theme.bold};
    text-align: center;
    margin-bottom: 43px;
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
`

export const SocialContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 22.7px;
    margin-top: 41px;
`