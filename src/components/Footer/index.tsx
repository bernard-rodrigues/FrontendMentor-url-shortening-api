import facebook from "../../assets/images/icon-facebook.svg"
import twitter from "../../assets/images/icon-twitter.svg"
import pinterest from "../../assets/images/icon-pinterest.svg"
import instagram from "../../assets/images/icon-instagram.svg"
import logoWhite from "../../assets/images/logo-white.svg"

import { FooterSection, LinkGroup, SocialContainer } from "./styles";

export function Footer(){
    return(
        <FooterSection>
            <img 
                id="footer-logo"
                src={logoWhite} 
                alt="Shortly logo, white version, in contrast with the dark background" 
            />
            
            <LinkGroup>
                <h4>Features</h4>
                <a href="#">Link Shortening</a>
                <a href="#">Branded Links</a>
                <a href="#">Analytics</a>
            </LinkGroup>

            <LinkGroup>
                <h4>Resources</h4>
                <a href="#">Blog</a>
                <a href="#">Developers</a>
                <a href="#">Support</a>
            </LinkGroup>

            <LinkGroup>
                <h4>Company</h4>
                <a href="#">About</a>
                <a href="#">Our Team</a>
                <a href="#">Careers</a>
                <a href="#">Contact</a>
            </LinkGroup>

            <SocialContainer>
                <a href="#">
                    <img src={facebook} alt="Facebook logo" />
                </a>

                <a href="#">
                    <img src={twitter} alt="Twitter logo" />
                </a>

                <a href="#">
                    <img src={pinterest} alt="Pinterest logo" />
                </a>

                <a href="#">
                    <img src={instagram} alt="Instagram logo" />
                </a>
            </SocialContainer>

            <div id="about">
                Challenge by <a href="https://frontendmentor.io/challenges" target="_blank">Frontend Mentor</a>.
                Solution by <a href="https://www.frontendmentor.io/profile/bernard-rodrigues" target="_blank">Bernard Rodrigues</a>.
            </div>
        </FooterSection>
    )
}