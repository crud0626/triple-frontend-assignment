import { useLayoutEffect, useState } from "react";

interface IFadeIn {
    (order: number): boolean
}

const useFadeIn: IFadeIn = order => {
    const [show, setShow] = useState(false);
    
    useLayoutEffect(() => {
        const delay = 700 + (order * 100);
        setTimeout(() => {
            setShow(true);
        }, delay);
    }, [order]);

    return show;
}

export default useFadeIn;