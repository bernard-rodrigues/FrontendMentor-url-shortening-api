import styled from 'styled-components'

export const PresentationSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 0 24px;
    overflow-x: hidden;

    img{
        position: absolute;
        left: 24px;
        min-width: 498px;
        height: 344px;
        top: 22px;
    }

    h2{
        font-weight: ${props => props.theme.bold};
        font-size: 40.2px;
        text-align: center;
        margin-top: 399px;
        color: ${props => props.theme.veryDarkBlue};
        line-height: 48px;
    }

    p{
        font-size: ${props => props.theme.fontBase};
        text-align: center;
        color: ${props => props.theme.grayishViolet};
        font-weight: ${props => props.theme.medium};
        margin-top: 12px;
        line-height: 30px;
    }
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