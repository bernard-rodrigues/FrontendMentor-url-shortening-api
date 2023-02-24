import bgShortenMobile from '../../assets/images/bg-shorten-mobile.svg'
import styled from 'styled-components'

export const FeaturesSection = styled.section`
    background-color: ${props => props.theme.grayTransparent};
    padding: 0px 24px 80px 24px;

    form{
        min-height: 160px;
        width: 100%;
        padding: 24px;
        transform: translateY(-80px);
        background-color: ${props => props.theme.darkViolet};
        background-image: url(${bgShortenMobile});
        background-repeat: no-repeat;
        background-position: top right;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        input{
            width: 100%;
            height: 48px;
            border-radius: 5px;
            padding: 17px;
            font-weight: ${props => props.theme.medium};
            font-size: 15.9px;
            color: ${props => props.theme.veryDarkBlue};

            &:focus{
                outline: ${props => props.theme.red} 3px solid;

                &::placeholder{
                    color: ${props => props.theme.redTransparent};
                }
            }
        }

        span{
            color: ${props => props.theme.red};
            font-style: italic;
            font-size: 11.7px;
            margin-top: 5px;
            margin-bottom: 14px;
            display: none;

            &.show{
                display: inline;
            }
        }

        button{
            width: 100%;
            height: 48px;
            border-radius: 5px;
            background-color: ${props => props.theme.cyan};
            color: #fff;
            font-weight: ${props => props.theme.bold};
            font-size: 18px;
        }
    }

    h3{
        font-size: 26.9px;
        text-align: center;
        font-weight: ${props => props.theme.bold};
        color: ${props => props.theme.veryDarkBlue};
        margin-top: -7px;
    }

    p{
        text-align: center;
        color: ${props => props.theme.grayishViolet};
        font-weight: ${props => props.theme.medium};
        font-size: 16.3px;
        margin-top: 19px;
        margin-bottom: 89px;
        line-height: 28px;
    }
`

export const FeatureContainer = styled.div`
    width: 100%;
    height: 270px;
    background-color: #fff;
    position: relative;
    border-radius: 5px;

    h4{
        text-align: center;
        font-weight: ${props => props.theme.bold};
        color: ${props => props.theme.veryDarkBlue};
        font-size: 21.8px;
        padding-top: 77px;
    }

    p{
        text-align: center;
        padding: 0 33px;
        margin-top: 16px;
        font-size: 15px;
        color: ${props => props.theme.grayishViolet};
    }
`

export const ImgContainer = styled.div`
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

export const FeatureSeparator = styled.div`
    height: 92px;
    width: 8px;
    background-color: ${props => props.theme.cyan};
    margin-left: 50%;
    transform: translate(-50%);
`