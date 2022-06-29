import React from 'react';

const MetricItem = ({count, bold, text}) => {
    return (
        <div className="MetricItem">
            <strong>
                <span>{count}</span>
                {bold}
            </strong>
            {text}
        </div>
    );
};

export default MetricItem;