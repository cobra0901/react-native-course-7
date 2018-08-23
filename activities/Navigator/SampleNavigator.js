import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import OpenCloseIcon from '../components/category/OpenCloseIcon'
import SampleActivity from '../../activities/screen/Sample'
import {icon2} from '../global/imgUrl'
import NavItem from '../../activities/components/category/navItem'

const SampleNavigator = StackNavigator({
    Second: {
        screen: SampleActivity,
        navigationOptions: ({ navigation }) => ({
            headerTitle: (<NavItem img={icon2} title="Open Source Project" color={'#ff00cc'}/>),
            headerRight : <OpenCloseIcon navigationProps={ navigation }/>,
            headerStyle: {
                backgroundColor: '#123545'
            },
            headerTintColor: '#865',
        })
    },
});

export default SampleNavigator;
