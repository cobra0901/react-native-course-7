import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
	const { inputStyle, labelStyle, constainerStyle} = styles;
	return (
		<View style={constainerStyle}>
			<Text style={labelStyle} >{ label }</Text>
			<TextInput
				secureTextEntry={secureTextEntry}
				placeholder={placeholder}
				autoCorrect={false}
				style={inputStyle}
				value={value}
				onChangeText={onChangeText}
			
			
			/>
		</View>
		)
};

const styles = StyleSheet.create({
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 2
	},
	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1
	},
	constainerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
})

export { Input };