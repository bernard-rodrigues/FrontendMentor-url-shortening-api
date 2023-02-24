import facebook from "../assets/images/icon-facebook.svg"
import twitter from "../assets/images/icon-twitter.svg"
import pinterest from "../assets/images/icon-pinterest.svg"
import instagram from "../assets/images/icon-instagram.svg"

import styled from "styled-components"

const FooterSection = styled.footer`
    background-color: ${props => props.theme.veryDarkViolet};
    padding: 44px 0 57px 0;
`
const FooterTitle = styled.h2`
    color: #fff;
    font-size: 32.5px;
    font-weight: ${props => props.theme.bold};
    text-align: center;
    margin-bottom: 43px;
`

const LinkGroup = styled.div`
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

const SocialContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 22.7px;
    margin-top: 41px;
`

export function Footer(){
    return(
        <FooterSection>
            <FooterTitle>Shortly</FooterTitle>
            
            <LinkGroup>
                <h5>Features</h5>
                <a href="#">Link Shortening</a>
                <a href="#">Branded Links</a>
                <a href="#">Analytics</a>
            </LinkGroup>

            <LinkGroup>
                <h5>Resources</h5>
                <a href="#">Blog</a>
                <a href="#">Developers</a>
                <a href="#">Support</a>
            </LinkGroup>

            <LinkGroup>
                <h5>Company</h5>
                <a href="#">About</a>
                <a href="#">Our Team</a>
                <a href="#">Careers</a>
                <a href="#">Contact</a>
            </LinkGroup>

            <SocialContainer>
                <img src={facebook} alt="Facebook logo" />
                <img src={twitter} alt="Twitter logo" />
                <img src={pinterest} alt="Pinterest logo" />
                <img src={instagram} alt="Instagram logo" />
            </SocialContainer>
        </FooterSection>
    )
}