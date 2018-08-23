import React,{Component} from 'react';
import {View,Text} from 'react-native';

export default class Atom8 extends Component {

    render(){

        return(

            <View style={{flexDirection:"column", flex:1}}>
                <View style={{flex:1}}>
                    <Text>Hello! How are you?</Text>
                </View>
            </View>
        );
    }
}
