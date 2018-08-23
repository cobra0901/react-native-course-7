import React, {Component} from "react";
import {View,TouchableOpacity,Image} from "react-native";

export default class OpenCloseIcon extends Component {

    toggleDrawer = () => {
        this.props.navigationProps.toggleDrawer();
    };

    render() {
        return (
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
                    <Image
                        source={{uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png'}}
                        style={{width: 25, height: 25, marginHorizontal: 5}}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}
