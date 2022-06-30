import { useLayoutEffect, useRef } from 'react';

const DURATION = 2000;

const useCountUp = () => {
    const countRef = useRef<HTMLSpanElement>(null);

    useLayoutEffect(() => {
        if(countRef.current) {
            const framePerSec = 1000 / 60;
            const totalFrames = Math.round(DURATION / framePerSec);
            const targetElem: HTMLSpanElement = countRef.current;

            const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);
        
            const startCountUp = () => {
                let frame = 0;

                const countTo = parseInt(targetElem.innerText);
        
                const counter = setInterval(() => {
                    frame += 1;
        
                    const progress = easeOutQuart(frame / totalFrames);
                    const currentCount = Math.round(countTo * progress);
        
                    if (parseInt(targetElem.innerText) !== currentCount) {
                        targetElem.innerText = currentCount.toString();
                    }
        
                    if (frame === totalFrames) {
                        clearInterval(counter);
                    }
                    
                }, framePerSec);
            }

            startCountUp();
        }
    }, []);

    return countRef;
};

export default useCountUp;