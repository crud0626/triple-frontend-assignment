import React from 'react';
import useCountUp from '../hoc/useCountUp';

const MetricItem = ({count, bold, text}) => {
    const [ countRef ] = useCountUp();

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