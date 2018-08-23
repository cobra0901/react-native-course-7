import React, { Component } from "react";
import {Text,Image,View} from "react-native";

export default class navItem extends Component {
    render() {
        return (
            <View style={{flex:1,flexDirection:'row'}}>

                <Image
                    style={{width: 50, height: 50, marginHorizontal:5}}
                    source={{uri: this.props.img}}
                />

                <View style={{marginHorizontal:5}}>
                    <Text style={{fontSize:20,color:'#fff'}}>{this.props.title}</Text>
                    <Text style={{color:this.props.color}}>You are General Kunka</Text>
                </View>

            </View>
        );
    }
}
