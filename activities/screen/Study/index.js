import React from 'react';
import Atom1 from './Atom1';
import Atom2 from './Atom2/Atom2';
import Atom3 from './Atom3';
import Atom4 from './Atom4';
import Atom5 from './Atom5';
import Atom6 from './Atom6';
import Atom7 from './Atom7';
import Atom8 from './Atom8';
import Atom9 from './Atom9';
import Atom10 from './Atom10';
import Atom11 from './Atom11';
import Atom12 from './Atom12';
import Atom13 from './Atom13';
import Atom14 from './Atom14';
import Atom15 from './Atom15';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';

export default () => {
    return <ScrollableTabView
        initialPage={3}
        tabBarUnderlineStyle={{backgroundColor:'red' , borderColor : 'red' , borderBottomWidth : 0.1 , borderBottomColor : 'red'}}
        tabBarActiveTextColor="#776"
        tabBarInactiveTextColor="#123"
        tabBarBackgroundColor={'#EEccEE'}
        tabBarTextStyle={{fontWeight : '200'}}
        renderTabBar={() => <ScrollableTabBar />}
    >
     <Atom1 tabLabel='hello'/>
     <Atom2 tabLabel='Weather'/>
     <Atom3 tabLabel='BaseBall'/>
     <Atom4 tabLabel='mobile Screen'/>
     <Atom5 tabLabel='AsyncStorage'/>
     <Atom6 tabLabel='6'/>
     <Atom7 tabLabel='7'/>
     <Atom8 tabLabel='8'/>
     <Atom9 tabLabel='9'/>
     <Atom10 tabLabel='10'/>
     <Atom11 tabLabel='11'/>
     <Atom12 tabLabel='12'/>
     <Atom13 tabLabel='13'/>
     <Atom14 tabLabel='14'/>
     <Atom15 tabLabel='15'/>

    </ScrollableTabView>;
}