import { useLayoutEffect, useState } from "react";

interface IFadeIn {
    (): boolean
}

const useFadeIn: IFadeIn = () => {
    const [isShow, setIsShow] = useState(false);
    
    useLayoutEffect(() => {
        setIsShow(true);
    }, []);

    return isShow;
}

export default useFadeIn;