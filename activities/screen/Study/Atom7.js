import React, { Component } from 'react';
// import SimpleList from './SimpleList'
import {View,Text} from 'react-native';
import Mangesh from './LoginView';
import {
    StyleSheet,
    NavigatorIOS
} from 'react-native';



export default class App extends Component<{}> {
    render(){
        return(
            <View>
                <Text>sdf</Text>
            </View>
            /*<NavigatorIOS
                style={styles.container}
                initialRoute={{
                    title :'Login Screen',
                    component: Mangesh,
                }}

            />*/
        );

    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
});