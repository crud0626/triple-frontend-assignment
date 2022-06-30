import { useLayoutEffect, useState } from "react";

const useFadeIn = (n) => {
    const [show, setShow] = useState(false);
    const delay = 700 + (n * 100);

    useLayoutEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, delay);
    }, [delay]);

    return show;
}

export default useFadeIn;