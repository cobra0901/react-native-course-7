import React from 'react';
import ScrollableTabView, {ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import LatestRecord from './LatestRecord';  //最新收录
import LatestComment from './LatestComment';//最新评论
import HotTopic from './HotTopic';//热门
import Member from './Member';//成员

export default () => {
    return <ScrollableTabView
        initialPage={3}
        tabBarPosition='bottom'
        renderTabBar={() => <ScrollableTabBar backgroundColor='rgba(0, 122, 255, 0.7)' />}
    >
        <LatestRecord tabLabel='ListView1'/>
        <LatestComment tabLabel='ListView2'/>
        <HotTopic tabLabel='ListView3'/>
        <Member tabLabel='ListView4'/>

    </ScrollableTabView>;
}
