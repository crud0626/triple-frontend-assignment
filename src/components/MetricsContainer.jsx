import React from 'react';
import useFadeIn from '../hoc/useFadeIn';
import MetricItem from './MetricItem';

const MetricsContainer = () => {
    const isShow = useFadeIn(100);

    return (
        <div className={`MetricsContainer ${isShow ? "" : "fade-in"}`}>
            <MetricItem 
                count={"700"}
                bold={"만 명"}
                text={"의 여행자"}
            />
            <MetricItem 
                count={"100"}
                bold={"만 개"}
                text={"의 여행 리뷰"}
            />
            <MetricItem 
                count={"470"}
                bold={"만 개"}
                text={"의 여행 일정"}
            />
        </div>
    );
}

export default MetricsContainer;