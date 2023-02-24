import iconBrandRecognition from '../../assets/images/icon-brand-recognition.svg'
import iconDetailedRecords from '../../assets/images/icon-detailed-records.svg'
import iconFullyCustomizable from '../../assets/images/icon-fully-customizable.svg'
import React, { useRef, useState } from 'react'
import { FeatureContainer, FeatureSeparator, FeaturesSection, ImgContainer } from './styles';

export function Features(){
    const inputRef = useRef(null);
    const [ inputOnFocus, setInputOnFocus ] = useState(false);

    const [ link, setLink ] = useState('');

    function formSubmit(e: React.FormEvent){
        e.preventDefault()
    }

    function checkURL(url: string){
        const regex = /^(http|https|ftp):\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(:[a-zA-Z0-9]*)?\/?([a-zA-Z0-9\-\._\?\,\'\/\\\+&amp;%\$#\=~])*$/;
        return regex.test(url)
    }

    return(
        <FeaturesSection>
            <form>
                <input 
                    type="text" 
                    name="link" 
                    placeholder="Shorten a link here..."
                    value={link}
                    ref={inputRef}
                    onFocus={() => setInputOnFocus(true)}
                    onBlur={() => setInputOnFocus(false)}
                    onChange={(event) => setLink(event.target.value)}
                    onSubmit={formSubmit}
                />
                
                <span className={ inputOnFocus && !checkURL(link) ? "show" : ""}>Please add a link</span>
                
                <button type="submit">Shorten It!</button>
            </form>
            <h3>Advanced Statistics</h3>
            <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            
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
        </FeaturesSection>
    )
}