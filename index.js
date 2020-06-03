// Import libraries
import React from 'react';
import {AppRegistry, Container} from 'react-native';
import Header from './src/components/Header'

// Create component
const App = () => {
	return (
		<Header />
	)
}


// Render component to screen
AppRegistry.registerComponent('growpathfront', () => App);