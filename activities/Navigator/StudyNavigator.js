import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import OpenCloseIcon from '../components/category/OpenCloseIcon'
import StudyActivity from '../../activities/screen/Study'

const StudyNavigator = StackNavigator({
    seventh: {
        screen: StudyActivity,
        navigationOptions: ({ navigation }) => ({
            title: 'Let us learn',
            headerLeft : <OpenCloseIcon navigationProps={ navigation }/>,
            headerStyle: {
                backgroundColor: '#891200'
            },
            headerTintColor: '#fff',
        })
    },
});


export default StudyNavigator;
