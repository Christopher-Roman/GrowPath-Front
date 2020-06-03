// Import Libraries
import React from 'react';
import { Text, View} from 'react-native';

// Create Component
const Header = () => {
	const { textStyling, viewStyle } = styles;

	return (
		<View style={viewStyle}>
			<Text style={textStyling}>GrowPath</Text>
		</View>
	)
}


const styles = {
	textStyling: {
		fontSize: 22
	},
	viewStyle: {
		backgroundColor: '#6aa84f'
	}
}

// Make component available to other components
export default Header;