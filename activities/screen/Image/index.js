import React from 'react';
import {View} from 'react-native';
import {TabNavigator} from 'react-navigation';
import Tab1Screen from './samples/tab1';
import Tab2Screen from './samples/tab2';
import Tab3Screen from './samples/tab3';
import Tab4Screen from './samples/tab4';
import Tab5Screen from './samples/tab5';
import Tab6Screen from './samples/tab6';
import Tab7Screen from './samples/tab7';
import Tab8Screen from './samples/tab8';
import Tab9Screen from './samples/tab9';
import Tab10Screen from './samples/tab10';
import NavTabBar from './navbar';

export default class Images extends React.Component {

    render(){

        return(

            <View style={{flexDirection:"column", flex:1}}>
                <View style={{flex:1}}>
                    <Navigator/>
                </View>
            </View>
        );
    }
}

export const Navigator = TabNavigator(
    {
        Tab1: {screen: Tab1Screen},
        Tab2: {screen: Tab2Screen},
        Tab3: {screen: Tab3Screen},
        Tab4: {screen: Tab4Screen},
        Tab5: {screen: Tab5Screen},
        Tab6: {screen: Tab6Screen},
        Tab7: {screen: Tab7Screen},
        Tab8: {screen: Tab8Screen},
        Tab9: {screen: Tab9Screen},
        Tab10:{screen:Tab10Screen},
    },
    {
        initialRouteName: 'Tab1',
        tabBarComponent: NavTabBar,
        tabBarPosition: 'top'
    }
);