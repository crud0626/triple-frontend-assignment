import React, { useState } from 'react';
import useFadeIn from '../hoc/useFadeIn';
import AwardItem from './AwardItem';

export interface IAwards {
    text: string[],
    store: string
}

const AwardsContainer = () => {
    const isShow = useFadeIn();
    const [awardList, setAwardList] = useState<IAwards[]>([
        {text: ["2018 구글 플레이스토어", "올해의 앱 최우수상 수상"], store: "playstore"},
        {text: ["2018 애플 앱스토어", "오늘의 여행앱 선정"], store: "appstore"}
    ]);

    return (
        <div className={`AwardsContainer ${isShow ? "fade-in" : ""}`}>
            {
                awardList.map((item, index) => 
                    <AwardItem 
                        key={index}
                        {...item}
                    />
                )
            }
        </div>
    );
};

export default AwardsContainer;