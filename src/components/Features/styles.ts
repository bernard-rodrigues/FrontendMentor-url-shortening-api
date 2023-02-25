import bgShortenMobile from '../../assets/images/bg-shorten-mobile.svg'
import bgShortenDesktop from '../../assets/images/bg-shorten-desktop.svg'
import styled from 'styled-components'

export const FeaturesSection = styled.section`
    background-color: ${props => props.theme.grayishVioletTransparent};
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
        margin-bottom: 24px;

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
            margin-bottom: 15px;
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

            &.disabled{
                cursor: not-allowed;
                background-color: ${props => props.theme.gray};
            }
        }
    }

    h3{
        font-size: 26.9px;
        text-align: center;
        font-weight: ${props => props.theme.bold};
        color: ${props => props.theme.veryDarkBlue};
        margin-top: -17px;
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

    @media only screen and (min-width: 1200px) {
        padding: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        form{
            width: ${props => props.theme.desktopWidth};
            height: 168px;
            flex-direction: row;
            align-items: center;
            gap: 24px;
            padding: 52px 64px;
            background-image: url(${bgShortenDesktop});

            input{
                width: 770px;
                height: 100%;
                padding: 32px;
                font-size: 19.9px;
            }

            span{
                position: absolute;
                bottom: 6px;
                font-size: 15.7px;
            }

            button{
                width: 189px;
                height: 100%;
                font-size: 20px;
                transition: background-color 0.2s;

                &:hover{
                    background-color: ${props => props.theme.cyanHover};
                }
                &.disabled:hover{
                    background-color: ${props => props.theme.gray};
                }
            }
        }

        h3{
            font-size: 38.2px;
            margin-top: 15px;
        }

        p{
            width: 28%;
            font-size: 18.2px;
            margin-top: 11px;
            line-height: 32px;
        }

        #features{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 53px;
            margin-bottom: 164px;

            div:first-child{
                transform: translateY(-44px);
            }

            div:last-child{
                transform: translateY(44px);
            }
        }
    }
`

export const ShortenedContainer = styled.div`
    width: 100%;
    height: 156px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transform: translateY(-80px);

    .link{
        padding: 0 16px;
        height: 48px;
        display: flex;
        align-items: center;
        color: ${props => props.theme.veryDarkBlue};
    }

    .shortenedDivider{
        transform: translateY(-7px);
    }

    .shortenedLink{
        padding: 0 16px;
        width: 100%;
        display: flex;
        justify-content: space-between;

        a{
            color: ${props => props.theme.cyan};
        }
    }

    button{
        background-color: ${props => props.theme.cyan};
        color: #fff;
        font-weight: ${props => props.theme.bold};
        height: 40px;
        border-radius: 5px;
        width: calc(100% - 32px);
        margin: 4px 16px 18px 16px;
        transition: background-color 0.2s;

        &:hover{
            background-color: ${props => props.theme.cyanHover};
        }

        &.copied, .copied:hover{
            background-color: ${props => props.theme.darkViolet};
        }
    }

    @media only screen and (min-width: 1200px) {
        flex-direction: row;
        height: 74px;
        align-items: center;
        padding: 0 24px 0 17px;
        margin-bottom: 22px;
        width: ${props => props.theme.desktopWidth};

        .link{
            font-size: 20px;
            min-width: 600px;
        }

        .shortenedLink{
            justify-content: flex-end;
            align-items: center;
            padding: 0 19px;

            a{
                font-size: 20px;
            }

            .deleteIcon{
                margin-left: 10px;
                transition: color 0.2s;

                &:hover{
                    color: ${props => props.theme.red};
                    cursor: pointer;
                }
            }
        }

        .shortenedDivider{
            display: none;
        }

        button{
            min-width: 104px;
            max-width: 104px;
            margin: 0;
        }
    }
`

export const FeatureContainer = styled.div`
    width: 100%;
    height: 270px;
    background-color: #fff;
    position: relative;
    border-radius: 5px;
    padding-top: 77px;

    h4{
        text-align: center;
        font-weight: ${props => props.theme.bold};
        color: ${props => props.theme.veryDarkBlue};
        font-size: 21.8px;
    }

    p{
        text-align: center;
        padding: 0 33px;
        margin-top: 16px;
        font-size: 15px;
        color: ${props => props.theme.grayishViolet};
    }

    @media only screen and (min-width: 1200px) {
        height: 269px;
        width: 351px;

        h4{
            text-align: left;
            padding: 0 32px;
            width: 100%;
        }

        p{
            text-align: left;
            width: 100%;
            margin-top: 14px;
            line-height: 26px;
        }
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

    @media only screen and (min-width: 1200px) {
        left: 32px;
        transform: translate(0, -50%);

    }
`

export const FeatureSeparator = styled.div`
    height: 92px;
    width: 8px;
    background-color: ${props => props.theme.cyan};
    margin-left: 50%;
    transform: translateX(-50%);

    @media only screen and (min-width: 1200px) {
        width: 30px;
        height: 8px;
        margin-left: 0;
        transform: translateX(0);
    }
`