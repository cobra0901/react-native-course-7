import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './style';
import {Text, View,Image} from 'react-native';
import {SCREEN_WIDTH} from '../global/dictStyle';
import {icon6} from '../global/imgUrl';
class SideMenu extends Component {

    render() {
        return (
            <View>
                <View style={{alignItems:'center',justifyContent:'center',marginTop:20}}>
                    <Image
                        source={{uri: icon6}}
                        style={{width: 140, height: 140}}
                    />
                </View>
                <View style={styles.home}>
                    <Text onPress={() => {
                        this.props.navigation.navigate('Home');
                    }}>Home</Text>
                </View>
                <View style={styles.sample}>
                    <Text onPress={() => {
                        this.props.navigation.navigate('Sample');
                    }}>Samples</Text>
                </View>
                <View style={styles.image}>
                    <Text onPress={() => {
                        this.props.navigation.navigate('Image');
                    }}>Image</Text>
                </View>
                <View style={styles.url}>
                    <Text onPress={() => {
                        this.props.navigation.navigate('Url');
                    }}>Url</Text>
                </View>
                <View style={styles.help}>
                    <Text onPress={() => {
                        this.props.navigation.navigate('Help');
                    }}>Help</Text>
                </View>
                <View style={styles.study}>
                    <Text onPress={() => {
                        this.props.navigation.navigate('Study');
                    }}>Study</Text>
                </View>
            </View>
        );
    }
}

SideMenu.propTypes = {
    navigation: PropTypes.object
};

export default SideMenu;
