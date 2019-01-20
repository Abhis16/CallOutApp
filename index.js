import React from 'react'
import {AppRegistry, Text, View} from 'react-native'
import Dash from './src/components/screens/dash'
//import {StackNavigator } from 'react-navigation'
import Header from './src/components/common/header';
//import Signup from './src/components/screens/signup';
//import Signin from './src/components/screens/signin';

const App = () => {
    return (
        <View>
            <Header headerText = {"User Dash"}/>
            <Dash />
        </View>
        
    );
};

AppRegistry.registerComponent('callout123', () => App)
