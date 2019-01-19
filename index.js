import React from 'react'
import {AppRegistry, Text, View} from 'react-native'
import Header from './src/components/header';
import Signup from './src/components/signup';
//import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

const App = () => {
    return (
        <View>
            <Header headerText={'Sign Up'}/>
            <Signup/>
        </View>
        
    );
};


AppRegistry.registerComponent('callout123', () => App)