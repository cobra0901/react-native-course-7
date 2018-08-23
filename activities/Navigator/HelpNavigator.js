import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import OpenCloseIcon from '../components/category/OpenCloseIcon'
import HelpActivity from '../../activities/screen/Help'
import {icon5} from '../global/imgUrl'
import NavItem from '../../activities/components/category/navItem'

const HelpNavigator = StackNavigator({
    sixth: {
        screen: HelpActivity,
        navigationOptions: ({ navigation }) => ({
            headerTitle: (<NavItem img={icon5} title="Help me" color={'pink'}/>),
            headerLeft : <OpenCloseIcon navigationProps={ navigation }/>,
            headerStyle: {
                backgroundColor: '#763400'
            },
            headerTintColor: '#550541',
        })
    },
});

export default HelpNavigator;
