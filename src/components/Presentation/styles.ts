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
        top: 22px;
        left: 24px;
        min-width: 498px;
        height: 344px;
    }

    h1{
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

    @media only screen and (min-width: 1200px) {
        align-items: flex-start;
        width: ${props => props.theme.desktopWidth};
        padding: 0;
        overflow-x: visible;
        margin-left: calc((100% - ${props => props.theme.desktopWidth})/2);

        h1{
            text-align: left;
            font-size: 80px;
            line-height: 90px;
            margin-top: 145px;
            width: 55%;
        }

        img{
            top: 78px;
            left: 667px;
            width: 730px;
            height: 480px;
        }

        p{
            margin-top: -1px;
            text-align: left;
            width: 55%;
            font-size: 22px;
            line-height: 35.5px;
        }

        #get-started{
            margin-top: 37px;
        }
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
    transition: background-color 0.2s;

    &:hover{
        background-color: ${props => props.theme.cyanHover};
    }
`