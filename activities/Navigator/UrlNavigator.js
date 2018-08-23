import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import OpenCloseIcon from '../components/category/OpenCloseIcon'
import UrlActivity from '../../activities/screen/Url'
import {icon4} from '../global/imgUrl'
import NavItem from '../../activities/components/category/navItem'

const UrlNavigator = StackNavigator({
    Fourth: {
        screen: UrlActivity,
        navigationOptions: ({ navigation }) => ({
            headerTitle: (<NavItem img={icon4} title="Best Url" color={'grey'}/>),
            headerLeft : <OpenCloseIcon navigationProps={ navigation }/>,
            headerStyle: {
                backgroundColor: '#12cc00'
            },
            headerTintColor: '#443541',
        })
    },
});

export default UrlNavigator;
