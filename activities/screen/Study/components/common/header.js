// Import libraries for making a component
import React, {Component} from 'react';
import {
	Text,
	StyleSheet,
	View
} from 'react-native';

// Make a component 
export default class Header extends Component {
	render(){
		return(
			<View style = {styles.viewStyle}>
				<Text style = {styles.textStyle}>{this.props.headerText}</Text>
			</View>
			)
	}
}

const styles = StyleSheet.create({
	viewStyle: {
		backgroundColor: '#f8f8f8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: {with: 0, height: 2},
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'	

	},
	textStyle: {
		fontSize: 20
	},
});

// Make the component available to other parts of the app
