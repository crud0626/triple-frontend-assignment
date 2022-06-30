import React from 'react';
import { IAwards } from './AwardsContainer';

const AwardItem = ({text, store}: IAwards) => {
    const lastIndex = text.length - 1;

    return (
        <div data-store={`${store}`} className="AwardItem">
            {text.map((item: string, index: number) => {
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