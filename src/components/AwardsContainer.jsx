import React from 'react';
import useFadeIn from '../hoc/useFadeIn';
import AwardItem from './AwardItem';

const AwardsContainer = () => {
    const isShow = useFadeIn(200);

    return (
        <div className={`AwardsContainer ${isShow ? "" : "fade-in"}`}>
            <AwardItem 
                key={"0"}
                text={["2018 구글 플레이스토어", "올해의 앱 최우수상 수상"]}
                store={"PlayStore"}
            />
            <AwardItem 
                key={"1"}
                text={["2018 애플 앱스토어", "오늘의 여행앱 선정"]}
                store={"AppStore"}
            />
        </div>
    );
};

export default AwardsContainer;