import bgShortenMobile from '../assets/images/bg-shorten-mobile.svg'
import styled from "styled-components"

const FeaturesSection = styled.section`
    background-color: ${props => props.theme.grayTransparent};
    padding: 167px 24px;
    position: relative;
`

const ShortenForm = styled.form`
    height: 160px;
    width: calc(100% - 48px);
    padding: 25px 24px 22px 24px;
    position: absolute;
    top: 0;
    transform: translateY(-50%);
    background-color: ${props => props.theme.darkViolet};
    background-image: url(${bgShortenMobile});
    background-repeat: no-repeat;
    background-position: top right;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const ShortenInput = styled.input`
    width: 100%;
    height: 48px;
    border-radius: 5px;
    padding: 17px;
    font-weight: ${props => props.theme.medium};
    font-size: 15.9px;
`

const ShortenSubmit = styled.button`
    width: 100%;
    height: 49px;
    border-radius: 5px;
    background-color: ${props => props.theme.cyan};
    color: #fff;
    font-weight: ${props => props.theme.bold};
    font-size: 18px;
`

const H3 = styled.h3`
    font-size: 26.9px;
    text-align: center;
    font-weight: ${props => props.theme.bold};
    color: ${props => props.theme.veryDarkBlue};

`

const P = styled.p`
    text-align: center;
    color: ${props => props.theme.grayishViolet};
    font-weight: ${props => props.theme.medium};
    font-size: 16.3px;
    margin-top: 19px;
    line-height: 28px;
`

export function Features(){
    return(
        <FeaturesSection>
            <ShortenForm>
                <ShortenInput type="text" name="link" placeholder="Shorten a link here..." />
                <ShortenSubmit type="submit">Shorten It!</ShortenSubmit>
            </ShortenForm>
            <H3>Advanced Statistics</H3>
            <P>Track how your links are performing across the web with our advanced statistics dashboard.</P>
        </FeaturesSection>
    )
}