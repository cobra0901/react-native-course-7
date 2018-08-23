import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import OpenCloseIcon from '../components/category/OpenCloseIcon'
import HomeActivity from '../../activities/screen/Home'
import NavItem from '../../activities/components/category/navItem'
import {icon1} from '../global/imgUrl'

const HomeNavigator = StackNavigator({
    First: {
        screen: HomeActivity,
        navigationOptions: ({ navigation }) => ({
            headerTitle: (<NavItem img={icon1} title="Game react-native booking App" color={'lightgreen'}/>),
            headerLeft : <OpenCloseIcon navigationProps={ navigation }/>,
            headerStyle: {
                backgroundColor: '#663'
            },
            headerTintColor: '#543',
        })
    },
});

export default HomeNavigator;
