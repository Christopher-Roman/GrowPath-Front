// Import Libraries
import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

// Create Component
const Header = ({title}) => {

	return (
		<View style={styles.header}>
			<Text style={styles.text}>{title}</Text>
		</View>
	)
}


const styles = StyleSheet.create({
	header: {
		backgroundColor: '#6aa84f',
		height: 60,
		padding: 15
	},
	text: {
		backgroundColor: '#6aa84f',
		fontSize: 23,
		textAlign: 'center'
	}
})

// Make component available to other components
export default Header;