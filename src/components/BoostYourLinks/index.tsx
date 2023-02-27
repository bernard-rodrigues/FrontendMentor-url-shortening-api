import { BoostContainer, BoostButton } from  './styles';
import { useEffect, useRef, useState } from 'react';

export function BoostYourLinks(){
    const boostContainerRef = useRef<HTMLElement | null>(null)
    
    const [ reachedBoostContainer, setReachedBoostContainer ] = useState(false)

    function onScroll(){
        if(!boostContainerRef.current){
            return
        }
        const offset = 200
        const top = boostContainerRef.current.getBoundingClientRect().top

        if(top + offset >= 0 && top + offset <= window.innerHeight){
            setReachedBoostContainer(true);
            window.removeEventListener('scroll', onScroll);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return(
        <BoostContainer ref={boostContainerRef}>
            <h2 className={ reachedBoostContainer ? "animate" : ""}>Boost your links today</h2>
            <BoostButton className={ reachedBoostContainer ? "animate" : ""}>Get Started</BoostButton>
        </BoostContainer>
    )
}