import iconBrandRecognition from '../../assets/images/icon-brand-recognition.svg'
import iconDetailedRecords from '../../assets/images/icon-detailed-records.svg'
import iconFullyCustomizable from '../../assets/images/icon-fully-customizable.svg'
import { FormEvent, useEffect, useRef, useState } from 'react'
import { FeatureContainer, FeatureSeparator, FeaturesSection, ImgContainer, ShortenedContainer } from './styles';
import CopyToClipboard from 'react-copy-to-clipboard'
import { shorten } from '../../lib/axios';
import { DeleteForever } from '@mui/icons-material';
import { Divider } from '../Header/styles';

interface Shortened{
    link: string,
    shortenedLink: string,
    copied: boolean
}

export function Features(){
    const inputRef = useRef(null);
    const [ inputOnFocus, setInputOnFocus ] = useState(false);
    const [ screenWidth, setScreenWidth ] = useState(innerWidth)

    const [ link, setLink ] = useState('');
    const [shortenedLinks, setShortenedLinks ] = useState<Shortened[]>(checkLocalStorage());

    function checkLocalStorage(){
        if(localStorage.getItem("shortenedLinks") !== null){
            return JSON.parse(localStorage.getItem("shortenedLinks")!).map((shortenedLink: Shortened) => {
                return {...shortenedLink, copied: false}
            })
        }return []
    }

    useEffect(() => {
        localStorage.setItem("shortenedLinks", JSON.stringify(shortenedLinks));
    }, [shortenedLinks]);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setScreenWidth(innerWidth)
        })
    }, [])

    async function formSubmit(event: FormEvent){
        event.preventDefault()
        
        const shortenedLink = await shorten(link)
        
        setShortenedLinks(prevState => [...prevState, {
            link: link,
            shortenedLink: shortenedLink,
            copied: false
        }])

        setLink('');
    }

    function checkURL(url: string){
        const regex = /^(http|https|ftp):\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(:[a-zA-Z0-9]*)?\/?([a-zA-Z0-9\-\._\?\,\'\/\\\+&amp;%\$#\=~])*$/;
        return regex.test(url)
    }

    function informCopied(link: string){
        // iterate over the shortenedLinks array
        setShortenedLinks(current => 
            current.map(shortenedLink => {
                // if the shortenedLink has the same link as the parameter
                if(shortenedLink.link === link){
                    // return a new object with the copied property toggled
                    return {...shortenedLink, copied: true};
                }
                // otherwise toggle false for the remaining objects
                return {...shortenedLink, copied: false}
            })
        )
    }

    function removeLink(link: string){
        setShortenedLinks(shortenedLinks.filter(shortenedLink => shortenedLink.link !== link))
    }

    return(
        <FeaturesSection>
            <form onSubmit={formSubmit}>
                <input 
                    type="text" 
                    name="link" 
                    placeholder="Shorten a link here..."
                    value={link}
                    ref={inputRef}
                    onFocus={() => setInputOnFocus(true)}
                    onBlur={() => setInputOnFocus(false)}
                    onChange={(event) => setLink(event.target.value)}
                />
                
                <span className={ (inputOnFocus && !checkURL(link)) || (!checkURL(link) && link.length > 0) ? "show" : ""}>
                    Please add a link
                </span>
                
                <button 
                    className={ link.length == 0 || (inputOnFocus && !checkURL(link)) || (!checkURL(link) && link.length > 0) ? "disabled" : ""}
                    type={ link.length == 0 || (inputOnFocus && !checkURL(link)) || (!checkURL(link) && link.length > 0) ? "button" : "submit"}
                >
                    Shorten It!
                </button>
            </form>

            { shortenedLinks && shortenedLinks.map((shortenedLink, index) => (
                <ShortenedContainer key={shortenedLink.shortenedLink + '-' + String(index)}>
                    <div className="link">
                        {
                            screenWidth < 1200
                            ?
                                (shortenedLink.link.length <= Math.floor(screenWidth*0.085)
                                ? shortenedLink.link 
                                : shortenedLink.link.slice(0, Math.floor(screenWidth*0.085)) + '...')
                            :
                                (shortenedLink.link.length <= 48 
                                ? shortenedLink.link 
                                : shortenedLink.link.slice(0,48) + '...')
                        }
                    </div>
                        
                    <Divider className="shortenedDivider"/>

                    <div className="shortenedLink">
                        <a href={'https://' + shortenedLink.shortenedLink} target="_blank">{'https://' + shortenedLink.shortenedLink}</a>
                        <DeleteForever color="inherit" className="deleteIcon" onClick={() => removeLink(shortenedLink.link)} />
                    </div>
                    <CopyToClipboard 
                        text={shortenedLink.shortenedLink}
                        onCopy={() => informCopied(shortenedLink.link)}
                    >
                        <button 
                            type="button"
                            className={shortenedLink.copied ? "copied" : ""}
                        >
                            {shortenedLink.copied ? "Copied!" : "Copy"}
                        </button>
                    </CopyToClipboard>
                </ShortenedContainer>
            ))}

            <h2>Advanced Statistics</h2>
            <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            
            <div id="features">
                <FeatureContainer>
                    <ImgContainer>
                        <img src={iconBrandRecognition} alt="Brand Recognition Icon" />
                    </ImgContainer>
                    
                    <h4>Brand Recognition</h4>
                    <p>
                        Boost your brand recognition with each link. Generic links don't mean a thing.
                        Branded links help instil confidence in your content.    
                    </p>
                </FeatureContainer>

                <FeatureSeparator />

                <FeatureContainer>
                    <ImgContainer>
                        <img src={iconDetailedRecords} alt="Detailed Records Icon" />
                    </ImgContainer>
                    
                    <h4>Detailed Records</h4>
                    <p>
                        Gain insights into who is clicking you links.
                        Knowing when and where people engage with your content
                        helps inform better decisions.    
                    </p>
                </FeatureContainer>

                <FeatureSeparator />

                <FeatureContainer>
                    <ImgContainer>
                        <img src={iconFullyCustomizable} alt="Fully Customizable Icon" />
                    </ImgContainer>
                    
                    <h4>Fully Customizable</h4>
                    <p>
                        Improve brand awareness and content discoverability through
                        customizable links, supercharging audience engagement.
                    </p>
                </FeatureContainer>
            </div>
        </FeaturesSection>
    )
}