import facebook from "../../assets/images/icon-facebook.svg"
import twitter from "../../assets/images/icon-twitter.svg"
import pinterest from "../../assets/images/icon-pinterest.svg"
import instagram from "../../assets/images/icon-instagram.svg"

import { FooterSection, FooterTitle, LinkGroup, SocialContainer } from "./styles";

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