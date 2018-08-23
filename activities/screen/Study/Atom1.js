import React,{Component} from 'react';
import {View,Text,AsyncStorage,Button} from 'react-native';
export default class Atom1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            myKey: null
        }
    }
    async getKey() {
        try {
            const value = await AsyncStorage.getItem('@MySuperStore:key');
            this.setState({myKey: value});
        } catch (error) {
            console.log("Error retrieving data" + error);
        }
    }

    render(){

        return(
            <View style={{flexDirection:"column", flex:1}}>
                <Button
                    onPress={this.getKey.bind(this)}
                    title="Get Key"
                    color="#2196f3"
                    accessibilityLabel="Get Key"
                />
                <View style={{flex:1}}>
                    <Text>Stored key is = {this.state.myKey}</Text>
                </View>
            </View>
        );
    }
}
