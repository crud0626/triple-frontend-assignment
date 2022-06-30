import { useLayoutEffect, useRef } from 'react';

const DURATION = 2000;
const FRAME_PER_SEC = 1000 / 60;
const TOTAL_FRAMES = Math.round(DURATION / FRAME_PER_SEC);

const useCountUp = () => {
    const countRef = useRef();

    useLayoutEffect(() => {
        const targetElem = countRef.current;
    
        const easeOutQuart = x => 1 - Math.pow(1 - x, 4);
    
        const animateCountUp = () => {
            let frame = 0;
            const countTo = parseInt(targetElem.innerText);
    
            const counter = setInterval(() => {
                frame += 1;
    
                const progress = easeOutQuart(frame / TOTAL_FRAMES);
                const currentCount = Math.round(countTo * progress);
    
                if (parseInt(targetElem.innerText) !== currentCount) {
                    targetElem.innerText = currentCount;
                }
    
                if (frame === TOTAL_FRAMES) {
                    clearInterval(counter);
                }
                
            }, FRAME_PER_SEC);
        }
    
        animateCountUp();
    }, []);

    return [countRef];
};

export default useCountUp;