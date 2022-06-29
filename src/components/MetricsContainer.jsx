import React, { useRef } from 'react';

const MetricsContainer = () => {
    const containerRef = useRef();

    return (
        <div ref={containerRef} className="MetricsContainer">
            <div className="MetricItem">
                <strong>
                    <span>700</span>
                    만 명
                </strong>
                의 여행자
            </div>
            <div className="MetricItem">
                <strong>
                    <span>100</span>
                    만 개
                </strong>
                의 여행 리뷰
            </div>
            <div className="MetricItem">
                <strong>
                    <span>470</span>
                    만 개
                </strong>
                의 여행 일정
            </div>
        </div>
    );
}

export default MetricsContainer;