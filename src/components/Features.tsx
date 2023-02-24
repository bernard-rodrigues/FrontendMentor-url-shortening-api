import bgShortenMobile from '../assets/images/bg-shorten-mobile.svg'
import iconBrandRecognition from '../assets/images/icon-brand-recognition.svg'
import iconDetailedRecords from '../assets/images/icon-detailed-records.svg'
import iconFullyCustomizable from '../assets/images/icon-fully-customizable.svg'
import styled from "styled-components"

const FeaturesSection = styled.section`
    background-color: ${props => props.theme.grayTransparent};
    padding: 167px 24px 80px 24px;
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
    margin-bottom: 89px;
    line-height: 28px;
`

const FeatureContainer = styled.div`
    width: 100%;
    height: 270px;
    background-color: #fff;
    position: relative;
    border-radius: 5px;
`

const ImgContainer = styled.div`
    height: 88px;
    width: 88px;
    border-radius: 50%;
    background-color: ${props => props.theme.darkViolet};
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
`
const H4 = styled.h4`
    text-align: center;
    font-weight: ${props => props.theme.bold};
    color: ${props => props.theme.veryDarkBlue};
    font-size: 21.8px;
    padding-top: 77px;
`

const FeatureP = styled.p`
    text-align: center;
    padding: 0 33px;
    margin-top: 16px;
    font-size: 15px;
    color: ${props => props.theme.grayishViolet};
`

const FeatureSeparator = styled.div`
    height: 92px;
    width: 8px;
    background-color: ${props => props.theme.cyan};
    margin-left: 50%;
    transform: translate(-50%);
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
            
            <FeatureContainer>
                <ImgContainer>
                    <img src={iconBrandRecognition} alt="Brand Recognition Icon" />
                </ImgContainer>
                <H4>Brand Recognition</H4>
                <FeatureP>
                    Boost your brand recognition with each link. Generic links don't mean a thing.
                    Branded links help instil confidence in your content.    
                </FeatureP>
            </FeatureContainer>

            <FeatureSeparator />

            <FeatureContainer>
                <ImgContainer>
                    <img src={iconDetailedRecords} alt="Detailed Records Icon" />
                </ImgContainer>
                <H4>Detailed Records</H4>
                <FeatureP>
                    Gain insights into who is clicking you links.
                    Knowing when and where people engage with your content
                    helps inform better decisions.    
                </FeatureP>
            </FeatureContainer>

            <FeatureSeparator />

            <FeatureContainer>
                <ImgContainer>
                    <img src={iconFullyCustomizable} alt="Fully Customizable Icon" />
                </ImgContainer>
                <H4>Fully Customizable</H4>
                <FeatureP>
                    Improve brand awareness and content discoverability through
                    customizable links, supercharging audience engagement.
                </FeatureP>
            </FeatureContainer>
        </FeaturesSection>
    )
}