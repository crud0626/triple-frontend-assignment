import React from 'react';
import useCountUp from '../hoc/useCountUp';
import { IMetric } from './MetricsContainer';

const MetricItem = ({count, bold, text}: IMetric) => {
    const countRef = useCountUp();

    return (
        <div className="MetricItem">
            <strong>
                <span ref={countRef}>{count}</span>
                {bold}
            </strong>
            {text}
        </div>
    );
};

export default MetricItem;