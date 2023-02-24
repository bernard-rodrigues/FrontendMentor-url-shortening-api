import styled from 'styled-components'
import working from '../assets/images/illustration-working.svg'

const PresentationSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 0 24px;
    overflow-x: hidden;
`

const Img = styled.img`
    position: absolute;
    left: 24px;
    min-width: 498px;
    height: 344px;
    top: 22px;
`

const H2 = styled.h2`
    font-weight: ${props => props.theme.bold};
    font-size: 40.2px;
    text-align: center;
    margin-top: 399px;
    color: ${props => props.theme.veryDarkBlue};
    line-height: 48px;
`

const P = styled.p`
    font-size: ${props => props.theme.fontBase};
    text-align: center;
    color: ${props => props.theme.grayishViolet};
    font-weight: ${props => props.theme.medium};
    margin-top: 12px;
    line-height: 30px;
`

export const Button = styled.button`
    height: 56px;
    width: 197px;
    border-radius: 30px;
    background-color: ${props => props.theme.cyan};
    font-weight: ${props => props.theme.bold};
    color: #fff;
    font-size: 20px;
    margin-top: 30px;
    margin-bottom: 168px;
`

export function Presentation(){
    return (
        <PresentationSection>
            <Img src={working} alt="A woman sat at her working table in front of a computer with a plant by her side" />
            <H2>More than just shorter links</H2>
            <P>Build your brand's recognition and get detailed insights on how your links are performing.</P>
            <Button>Get Started</Button>
        </PresentationSection>
    )
}