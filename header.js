import React from 'react'
import {Text, View} from 'react-native'

const Header = (props) => {
    const {textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    ) 
}

const styles = {
    textStyle: {
        fontSize: 20,
        elevation: 2,
        color: 'white'
    },
    viewStyle: {
        backgroundColor:'#000066',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60
    }

}

export default Header; 