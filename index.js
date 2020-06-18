// Import libraries
import React from 'react';
import {AppRegistry, Container} from 'react-native';
import Header from './src/components/Header';
import App from './App';

// Create component
const Entry = () => {
	return (
		<App />
	)
}


// Render component to screen
AppRegistry.registerComponent('growpathfront', () => App);