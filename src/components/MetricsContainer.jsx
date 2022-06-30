import React, { useState } from 'react';
import useFadeIn from '../hoc/useFadeIn';
import MetricItem from './MetricItem';

const MetricsContainer = () => {
    const [info, setInfo] = useState([
        {count: "700", bold: "만 명", text: "의 여행자"},
        {count: "100", bold: "만 개", text: "의 여행 리뷰"},
        {count: "470", bold: "만 개", text: "의 여행 일정"}
    ]);

    const isShow = useFadeIn(1);

    return (
        <div className={`MetricsContainer ${isShow ? "" : "fade-in"}`}>
            {
                info.map((item, index) =>
                    <MetricItem 
                        key={index}
                        {...item}
                    />)
            }
        </div>
    );
}

export default MetricsContainer;