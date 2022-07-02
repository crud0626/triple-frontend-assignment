import React from 'react';
import useFadeIn from '../hoc/useFadeIn';

const ContentLogo = () => {
    const isShow = useFadeIn();

    return (
        <div className={`ContentLogo ${isShow ? "fade-in" : ""}`}>
            2021년 12월 기준
        </div>
    );
};

export default ContentLogo;