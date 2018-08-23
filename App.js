import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';
import SideMenu from './activities/sideMenu/';
import HomeNavigator from './activities/Navigator/HomeNavigator'
import SampleNavigator from './activities/Navigator/SampleNavigator'
import ImageNavigator from './activities/Navigator/ImageNavigator'
import UrlNavigator from './activities/Navigator/UrlNavigator'
import HelpNavigator from './activities/Navigator/HelpNavigator'
import StudyNavigator from './activities/Navigator/StudyNavigator'

export default MyDrawerNavigator = DrawerNavigator({
    Home:   {screen: HomeNavigator },
    Sample: { screen: SampleNavigator },
    Image:  { screen: ImageNavigator },
    Url:    { screen: UrlNavigator },
    Help:   { screen: HelpNavigator },
    Study:  { screen: StudyNavigator },
    },{
     initialRouteName: 'Study',
     contentComponent: SideMenu,
     drawerWidth: 220
});
