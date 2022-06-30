import { useLayoutEffect, useRef } from 'react';

const useCountUp = () => {
    const countRef = useRef();

    useLayoutEffect(() => {
        const targetElem = countRef.current;

        const duration = 2000;
        const framePerSec = 1000 / 60;
        const totalFrames = Math.round(duration / framePerSec);
    
        const easeOutQuart = x => {
            return 1 - Math.pow(1 - x, 4);
        };
    
        const animateCountUp = () => {
            let frame = 0;
            const countTo = parseInt(targetElem.innerText);
    
            const counter = setInterval(() => {
                frame += 1;
    
                const progress = easeOutQuart(frame / totalFrames);
                const currentCount = Math.round(countTo * progress);
    
                if (parseInt(targetElem.innerText) !== currentCount) {
                    targetElem.innerText = currentCount;
                }
    
                if (frame === totalFrames) {
                    clearInterval(counter);
                }
            }, framePerSec);
        }
    
        animateCountUp();
    }, []);

    return [countRef];
};

export default useCountUp;