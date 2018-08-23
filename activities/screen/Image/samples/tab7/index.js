import React, { Component } from 'react';

import { StyleSheet, View, Animated, Image, Text } from 'react-native';
import styles from './style'
import Swiper from 'react-native-swiper';

export default class tab7 extends Component<{}> {


    render() {
        return (
            <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide1}>
                    <Text style={styles.text}>Hello Swiper</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>And simple</Text>
                </View>
            </Swiper>
        );
    }
}

