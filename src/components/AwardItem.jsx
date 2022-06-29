import React from 'react';

const AwardItem = ({text, store}) => {
    const lastIndex = text.length - 1;

    return (
        <div className={`AwardItem ${store}`}>
            {text.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        {item}
                        {index !== lastIndex && <br/>}
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default AwardItem;