import { useLayoutEffect, useState } from "react";

const useFadeIn = (n) => {
    const [show, setShow] = useState(false);
    const delay = 700 + n;

    useLayoutEffect(() => {
        setTimeout(() => {
            setShow(true);
        }, delay);
    }, [delay]);

    return show;
}

export default useFadeIn;