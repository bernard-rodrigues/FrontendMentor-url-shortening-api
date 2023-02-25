import working from '../../assets/images/illustration-working.svg'
import { Button, PresentationSection } from './styles'

export function Presentation(){
    return (
        <PresentationSection>
            <img src={working} alt="A woman sat at her working table in front of a computer with a plant by her side" />
            <h2>More than just shorter links</h2>
            <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
            <Button id="get-started">Get Started</Button>
        </PresentationSection>
    )
}