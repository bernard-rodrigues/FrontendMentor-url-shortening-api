import styled from 'styled-components'
import working from '../assets/images/illustration-working.svg'
import bgShortenMobile from '../assets/images/bg-shorten-mobile.svg'

const PresentationSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 0 24px;
`

const Img = styled.img`
    position: absolute;
    width: 1200px;
    height: 343px;
    top: 96px;
`

const H2 = styled.h2`
    font-weight: ${props => props.theme.extraBold};
    font-size: 45px;
    text-align: center;
    margin-top: 400px;
    color: ${props => props.theme.veryDarkBlue};
    line-height: 47px;
`

const P = styled.p`
    font-size: 20px;
    text-align: center;
    color: ${props => props.theme.grayishViolet};
    font-weight: ${props => props.theme.medium};
    margin-top: 15px;
    line-height: 29px;
`

const Button = styled.button`
    height: 56px;
    width: 197px;
    border-radius: 30px;
    background-color: ${props => props.theme.cyan};
    color: #fff;
    font-weight: ${props => props.theme.extraBold};
    font-size: 20px;
    margin-top: 33px;
    margin-bottom: 168px;
`

const ShortenForm = styled.form`
    height: 160px;
    width: calc(100% - 48px);
    padding: 25px 24px 22px 24px;
    position: absolute;
    bottom: 0;
    transform: translateY(50%);
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
    font-weight: ${props => props.theme.bold};
    font-size: 17.3px;
`

const ShortenSubmit = styled.button`
    width: 100%;
    height: 49px;
    border-radius: 5px;
    background-color: ${props => props.theme.cyan};
    color: #fff;
    font-weight: ${props => props.theme.extraBold};
    font-size: 19.2px;
`

export function Presentation(){
    return (
        <PresentationSection>
            <Img src={working} alt="A woman sat at her working table in front of a computer with a plant by her side" />
            <H2>More than just shorter links</H2>
            <P>Build your brand's recognition and get detailed insights on how your links are performing.</P>
            <Button>Get Started</Button>
            <ShortenForm>
                <ShortenInput type="text" name="link" placeholder="Shorten a link here..." />
                <ShortenSubmit type="submit">Shorten It!</ShortenSubmit>
            </ShortenForm>
        </PresentationSection>
    )
}