import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import OpenCloseIcon from '../components/category/OpenCloseIcon'
import ImageActivity from '../../activities/screen/Image'
import {icon3} from '../global/imgUrl'
import NavItem from '../../activities/components/category/navItem'

const ImageNavigator = StackNavigator({
    Third: {
        screen: ImageActivity,
        navigationOptions: ({ navigation }) => ({
            headerTitle: (<NavItem img={icon3} title="Image Carousel" color={'blue'}/>),
            headerLeft : <OpenCloseIcon navigationProps={ navigation }/>,
            headerStyle: {
                backgroundColor: '#Fc4300'
            },
            headerTintColor: '#cde321',
        })
    },
});
export default ImageNavigator;
