import styled from "styled-components"

const FeaturesSection = styled.section`
    background-color: ${props => props.theme.grayTransparent};
    padding: 163px 24px;
`

const H3 = styled.h3`
    font-size: 30.7px;
    text-align: center;
    font-weight: ${props => props.theme.extraBold};
    color: ${props => props.theme.veryDarkBlue};
`

const P = styled.p`
    text-align: center;
`

export function Features(){
    return(
        <FeaturesSection>
            <H3>Advanced Statistics</H3>
            <P>Track how your links are performing across the web with our advanced statistics dashboard.</P>
        </FeaturesSection>
    )
}