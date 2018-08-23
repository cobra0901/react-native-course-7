import React, { Component } from 'react';
import { Image,TouchableOpacity, View, StyleSheet, TouchableWithoutFeedback } from 'react-native'

import * as Animatable from 'react-native-animatable'; // 1.2.4

export default class ExampleView extends Component {

    constructor(){
        super();
        this.state = {
            fontSize:''
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <TouchableWithoutFeedback onPress={() => this.view.bounce(1200)}>
                    <Animatable.View ref={(c) => this.view = c}>
                        <Image style={{height: 300}} source={{ uri: "https://placebear.com/300/300"}} />
                    </Animatable.View>
                </TouchableWithoutFeedback>

                <Animatable.Text animation="slideInDown" iterationCount="infinite" direction="alternate">Up and down you go</Animatable.Text>
                <Animatable.Text animation="pulse" iterationCount={25} direction="alternate">❤️</Animatable.Text>

                <TouchableOpacity onPress={() => this.setState({fontSize: (this.state.fontSize || 10) + 5 })}>
                    <Animatable.Text transition="fontSize" style={{fontSize: this.state.fontSize || 10}}>Size me up, Scotty</Animatable.Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 60
    }});
