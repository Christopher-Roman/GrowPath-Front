import React from 'react';
import { View, Text }  from 'react-native'

const Plant = props => {
	return <View style={styles.viewStyle}>{props.children} </View>;
};

const styles = {
	viewStyle: {
		borderWidth: 3,
		borderColor: 'gainsboro',
		borderBottomWidth: 0,
		shadowColor: 'black',
		shadowOffset: {
			width: 1,
			height: 1
		},
		borderRadius: 15,
		opacity: 0.1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10
	}
}

export default Plant